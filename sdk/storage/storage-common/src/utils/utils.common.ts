// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { AbortSignalLike } from "@azure/abort-controller";
import type { TokenCredential } from "@azure/core-auth";
import type { HttpHeaders } from "@azure/core-rest-pipeline";
import { createHttpHeaders } from "@azure/core-rest-pipeline";
import { isNodeLike } from "@azure/core-util";

import {
  DevelopmentConnectionString,
  HeaderConstants,
  PathStylePorts,
  URLConstants,
} from "./constants.js";

/**
 * Represents authentication information in Authorization, ProxyAuthorization,
 * WWW-Authenticate, and Proxy-Authenticate header values.
 */
interface HttpAuthorization {
  /**
   * The scheme to use for authorization.
   */
  scheme: string;

  /**
   * the credentials containing the authentication information of the user agent for the resource being requested.
   */
  value: string;
}

import type { HttpHeadersLike, WebResourceLike } from "@azure/core-http-compat";

/**
 * Reserved URL characters must be properly escaped for Storage services like Blob or File.
 *
 * ## URL encode and escape strategy for JS SDKs
 *
 * When customers pass a URL string into XxxClient classes constructor, the URL string may already be URL encoded or not.
 * But before sending to Azure Storage server, the URL must be encoded. However, it's hard for a SDK to guess whether the URL
 * string has been encoded or not. We have 2 potential strategies, and chose strategy two for the XxxClient constructors.
 *
 * ### Strategy One: Assume the customer URL string is not encoded, and always encode URL string in SDK.
 *
 * This is what legacy V2 SDK does, simple and works for most of the cases.
 * - When customer URL string is "http://account.blob.core.windows.net/con/b:",
 *   SDK will encode it to "http://account.blob.core.windows.net/con/b%3A" and send to server. A blob named "b:" will be created.
 * - When customer URL string is "http://account.blob.core.windows.net/con/b%3A",
 *   SDK will encode it to "http://account.blob.core.windows.net/con/b%253A" and send to server. A blob named "b%3A" will be created.
 *
 * But this strategy will make it not possible to create a blob with "?" in it's name. Because when customer URL string is
 * "http://account.blob.core.windows.net/con/blob?name", the "?name" will be treated as URL paramter instead of blob name.
 * If customer URL string is "http://account.blob.core.windows.net/con/blob%3Fname", a blob named "blob%3Fname" will be created.
 * V2 SDK doesn't have this issue because it doesn't allow customer pass in a full URL, it accepts a separate blob name and encodeURIComponent for it.
 * We cannot accept a SDK cannot create a blob name with "?". So we implement strategy two:
 *
 * ### Strategy Two: SDK doesn't assume the URL has been encoded or not. It will just escape the special characters.
 *
 * This is what V10 Blob Go SDK does. It accepts a URL type in Go, and call url.EscapedPath() to escape the special chars unescaped.
 * - When customer URL string is "http://account.blob.core.windows.net/con/b:",
 *   SDK will escape ":" like "http://account.blob.core.windows.net/con/b%3A" and send to server. A blob named "b:" will be created.
 * - When customer URL string is "http://account.blob.core.windows.net/con/b%3A",
 *   There is no special characters, so send "http://account.blob.core.windows.net/con/b%3A" to server. A blob named "b:" will be created.
 * - When customer URL string is "http://account.blob.core.windows.net/con/b%253A",
 *   There is no special characters, so send "http://account.blob.core.windows.net/con/b%253A" to server. A blob named "b%3A" will be created.
 *
 * This strategy gives us flexibility to create with any special characters. But "%" will be treated as a special characters, if the URL string
 * is not encoded, there shouldn't a "%" in the URL string, otherwise the URL is not a valid URL.
 * If customer needs to create a blob with "%" in it's blob name, use "%25" instead of "%". Just like above 3rd sample.
 * And following URL strings are invalid:
 * - "http://account.blob.core.windows.net/con/b%"
 * - "http://account.blob.core.windows.net/con/b%2"
 * - "http://account.blob.core.windows.net/con/b%G"
 *
 * Another special character is "?", use "%2F" to represent a blob name with "?" in a URL string.
 *
 * ### Strategy for containerName, blobName or other specific XXXName parameters in methods such as `containerClient.getBlobClient(blobName)`
 *
 * We will apply strategy one, and call encodeURIComponent for these parameters like blobName. Because what customers passes in is a plain name instead of a URL.
 *
 * @see https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata
 * @see https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-shares--directories--files--and-metadata
 *
 * @param url -
 */
export function escapeURLPath(url: string): string {
  const urlParsed = new URL(url);

  let path = urlParsed.pathname;
  path = path || "/";

  path = escape(path);
  urlParsed.pathname = path;

  return urlParsed.toString();
}

export interface ConnectionString {
  kind: "AccountConnString" | "SASConnString";
  url: string;
  accountName: string;
  accountKey?: any;
  accountSas?: string;
  proxyUri?: string; // Development Connection String may contain proxyUri
}

function getProxyUriFromDevConnString(connectionString: string): string {
  // Development Connection String
  // https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string#connect-to-the-emulator-account-using-the-well-known-account-name-and-key
  let proxyUri = "";
  if (connectionString.search("DevelopmentStorageProxyUri=") !== -1) {
    // CONNECTION_STRING=UseDevelopmentStorage=true;DevelopmentStorageProxyUri=http://myProxyUri
    const matchCredentials = connectionString.split(";");
    for (const element of matchCredentials) {
      if (element.trim().startsWith("DevelopmentStorageProxyUri=")) {
        proxyUri = element.trim().match("DevelopmentStorageProxyUri=(.*)")![1];
      }
    }
  }
  return proxyUri;
}

export function getValueInConnString(
  connectionString: string,
  argument:
    | "BlobEndpoint"
    | "AccountName"
    | "AccountKey"
    | "DefaultEndpointsProtocol"
    | "EndpointSuffix"
    | "SharedAccessSignature",
): string {
  const elements = connectionString.split(";");
  for (const element of elements) {
    if (element.trim().startsWith(argument)) {
      return element.trim().match(argument + "=(.*)")![1];
    }
  }
  return "";
}

/**
 * Extracts the parts of an Azure Storage account connection string.
 *
 * @param connectionString - Connection string.
 * @returns String key value pairs of the storage account's url and credentials.
 */
export function extractConnectionStringParts(connectionString: string): ConnectionString {
  let proxyUri = "";

  if (connectionString.startsWith("UseDevelopmentStorage=true")) {
    // Development connection string
    proxyUri = getProxyUriFromDevConnString(connectionString);
    connectionString = DevelopmentConnectionString;
  }

  // Matching BlobEndpoint in the Account connection string
  let blobEndpoint = getValueInConnString(connectionString, "BlobEndpoint");
  // Slicing off '/' at the end if exists
  // (The methods that use `extractConnectionStringParts` expect the url to not have `/` at the end)
  blobEndpoint = blobEndpoint.endsWith("/") ? blobEndpoint.slice(0, -1) : blobEndpoint;

  if (
    connectionString.search("DefaultEndpointsProtocol=") !== -1 &&
    connectionString.search("AccountKey=") !== -1
  ) {
    // Account connection string

    let defaultEndpointsProtocol = "";
    let accountName = "";
    let accountKey = Buffer.from("accountKey", "base64");
    let endpointSuffix = "";

    // Get account name and key
    accountName = getValueInConnString(connectionString, "AccountName");
    accountKey = Buffer.from(getValueInConnString(connectionString, "AccountKey"), "base64");

    if (!blobEndpoint) {
      // BlobEndpoint is not present in the Account connection string
      // Can be obtained from `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`

      defaultEndpointsProtocol = getValueInConnString(connectionString, "DefaultEndpointsProtocol");
      const protocol = defaultEndpointsProtocol!.toLowerCase();
      if (protocol !== "https" && protocol !== "http") {
        throw new Error(
          "Invalid DefaultEndpointsProtocol in the provided Connection String. Expecting 'https' or 'http'",
        );
      }

      endpointSuffix = getValueInConnString(connectionString, "EndpointSuffix");
      if (!endpointSuffix) {
        throw new Error("Invalid EndpointSuffix in the provided Connection String");
      }
      blobEndpoint = `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`;
    }

    if (!accountName) {
      throw new Error("Invalid AccountName in the provided Connection String");
    } else if (accountKey.length === 0) {
      throw new Error("Invalid AccountKey in the provided Connection String");
    }

    return {
      kind: "AccountConnString",
      url: blobEndpoint,
      accountName,
      accountKey,
      proxyUri,
    };
  } else {
    // SAS connection string

    let accountSas = getValueInConnString(connectionString, "SharedAccessSignature");
    let accountName = getValueInConnString(connectionString, "AccountName");
    // if accountName is empty, try to read it from BlobEndpoint
    if (!accountName) {
      accountName = getAccountNameFromUrl(blobEndpoint);
    }
    if (!blobEndpoint) {
      throw new Error("Invalid BlobEndpoint in the provided SAS Connection String");
    } else if (!accountSas) {
      throw new Error("Invalid SharedAccessSignature in the provided SAS Connection String");
    }

    // client constructors assume accountSas does *not* start with ?
    if (accountSas.startsWith("?")) {
      accountSas = accountSas.substring(1);
    }

    return { kind: "SASConnString", url: blobEndpoint, accountName, accountSas };
  }
}

/**
 * Internal escape method implemented Strategy Two mentioned in escapeURL() description.
 *
 * @param text -
 */
function escape(text: string): string {
  return encodeURIComponent(text)
    .replace(/%2F/g, "/") // Don't escape for "/"
    .replace(/'/g, "%27") // Escape for "'"
    .replace(/\+/g, "%20")
    .replace(/%25/g, "%"); // Revert encoded "%"
}

/**
 * Append a string to URL path. Will remove duplicated "/" in front of the string
 * when URL path ends with a "/".
 *
 * @param url - Source URL string
 * @param name - String to be appended to URL
 * @returns An updated URL string
 */
export function appendToURLPath(url: string, name: string): string {
  const urlParsed = new URL(url);

  let path = urlParsed.pathname;
  path = path ? (path.endsWith("/") ? `${path}${name}` : `${path}/${name}`) : name;
  urlParsed.pathname = path;

  return urlParsed.toString();
}

/**
 * Set URL parameter name and value. If name exists in URL parameters, old value
 * will be replaced by name key. If not provide value, the parameter will be deleted.
 *
 * @param url - Source URL string
 * @param name - Parameter name
 * @param value - Parameter value
 * @returns An updated URL string
 */
export function setURLParameter(url: string, name: string, value?: string): string {
  const urlParsed = new URL(url);
  const encodedName = encodeURIComponent(name);
  const encodedValue = value ? encodeURIComponent(value) : undefined;
  // mutating searchParams will change the encoding, so we have to do this ourselves
  const searchString = urlParsed.search === "" ? "?" : urlParsed.search;

  const searchPieces: string[] = [];

  for (const pair of searchString.slice(1).split("&")) {
    if (pair) {
      const [key] = pair.split("=", 2);
      if (key !== encodedName) {
        searchPieces.push(pair);
      }
    }
  }
  if (encodedValue) {
    searchPieces.push(`${encodedName}=${encodedValue}`);
  }

  urlParsed.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";

  return urlParsed.toString();
}

/**
 * Get URL parameter by name.
 *
 * @param url -
 * @param name -
 */
export function getURLParameter(url: string, name: string): string | string[] | undefined {
  const urlParsed = new URL(url);
  return urlParsed.searchParams.get(name) ?? undefined;
}

/**
 * Set URL host.
 *
 * @param url - Source URL string
 * @param host - New host string
 * @returns An updated URL string
 */
export function setURLHost(url: string, host: string): string {
  const urlParsed = new URL(url);
  urlParsed.hostname = host;
  return urlParsed.toString();
}

/**
 * Get URL path from an URL string.
 *
 * @param url - Source URL string
 */
export function getURLPath(url: string): string | undefined {
  try {
    const urlParsed = new URL(url);
    return urlParsed.pathname;
  } catch (e) {
    return undefined;
  }
}

/**
 * Get URL scheme from an URL string.
 *
 * @param url - Source URL string
 */
export function getURLScheme(url: string): string | undefined {
  try {
    const urlParsed = new URL(url);
    return urlParsed.protocol.endsWith(":") ? urlParsed.protocol.slice(0, -1) : urlParsed.protocol;
  } catch (e) {
    return undefined;
  }
}

/**
 * Get URL path and query from an URL string.
 *
 * @param url - Source URL string
 */
export function getURLPathAndQuery(url: string): string | undefined {
  const urlParsed = new URL(url);
  const pathString = urlParsed.pathname;
  if (!pathString) {
    throw new RangeError("Invalid url without valid path.");
  }

  let queryString = urlParsed.search || "";
  queryString = queryString.trim();
  if (queryString !== "") {
    queryString = queryString.startsWith("?") ? queryString : `?${queryString}`; // Ensure query string start with '?'
  }

  return `${pathString}${queryString}`;
}

/**
 * Get URL query key value pairs from an URL string.
 *
 * @param url -
 */
export function getURLQueries(url: string): { [key: string]: string } {
  let queryString = new URL(url).search;
  if (!queryString) {
    return {};
  }

  queryString = queryString.trim();
  queryString = queryString.startsWith("?") ? queryString.substring(1) : queryString;

  let querySubStrings: string[] = queryString.split("&");
  querySubStrings = querySubStrings.filter((value: string) => {
    const indexOfEqual = value.indexOf("=");
    const lastIndexOfEqual = value.lastIndexOf("=");
    return (
      indexOfEqual > 0 && indexOfEqual === lastIndexOfEqual && lastIndexOfEqual < value.length - 1
    );
  });

  const queries: { [key: string]: string } = {};
  for (const querySubString of querySubStrings) {
    const splitResults = querySubString.split("=");
    const key: string = splitResults[0];
    const value: string = splitResults[1];
    queries[key] = value;
  }

  return queries;
}

/**
 * Append a string to URL query.
 *
 * @param url - Source URL string.
 * @param queryParts - String to be appended to the URL query.
 * @returns An updated URL string.
 */
export function appendToURLQuery(url: string, queryParts: string): string {
  const urlParsed = new URL(url);

  let query = urlParsed.search;
  if (query) {
    query += "&" + queryParts;
  } else {
    query = queryParts;
  }

  urlParsed.search = query;
  return urlParsed.toString();
}

/**
 * Rounds a date off to seconds.
 *
 * @param date -
 * @param withMilliseconds - If true, YYYY-MM-DDThh:mm:ss.fffffffZ will be returned;
 *                                          If false, YYYY-MM-DDThh:mm:ssZ will be returned.
 * @returns Date string in ISO8061 format, with or without 7 milliseconds component
 */
export function truncatedISO8061Date(date: Date, withMilliseconds: boolean = true): string {
  // Date.toISOString() will return like "2018-10-29T06:34:36.139Z"
  const dateString = date.toISOString();

  return withMilliseconds
    ? dateString.substring(0, dateString.length - 1) + "0000" + "Z"
    : dateString.substring(0, dateString.length - 5) + "Z";
}

/**
 * Base64 encode.
 *
 * @param content -
 */
export function base64encode(content: string): string {
  return !isNodeLike ? btoa(content) : Buffer.from(content).toString("base64");
}

/**
 * Base64 decode.
 *
 * @param encodedString -
 */
export function base64decode(encodedString: string): string {
  return !isNodeLike ? atob(encodedString) : Buffer.from(encodedString, "base64").toString();
}

/**
 * Generate a 64 bytes base64 block ID string.
 *
 * @param blockIndex -
 */
export function generateBlockID(blockIDPrefix: string, blockIndex: number): string {
  // To generate a 64 bytes base64 string, source string should be 48
  const maxSourceStringLength = 48;

  // A blob can have a maximum of 100,000 uncommitted blocks at any given time
  const maxBlockIndexLength = 6;

  const maxAllowedBlockIDPrefixLength = maxSourceStringLength - maxBlockIndexLength;

  if (blockIDPrefix.length > maxAllowedBlockIDPrefixLength) {
    blockIDPrefix = blockIDPrefix.slice(0, maxAllowedBlockIDPrefixLength);
  }
  const res =
    blockIDPrefix +
    padStart(blockIndex.toString(), maxSourceStringLength - blockIDPrefix.length, "0");
  return base64encode(res);
}

/**
 * Delay specified time interval.
 *
 * @param timeInMs -
 * @param aborter -
 * @param abortError -
 */
export async function delay(
  timeInMs: number,
  aborter?: AbortSignalLike,
  abortError?: Error,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    /* eslint-disable-next-line prefer-const */
    let timeout: any;

    const abortHandler = () => {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
      reject(abortError);
    };

    const resolveHandler = () => {
      if (aborter !== undefined) {
        aborter.removeEventListener("abort", abortHandler);
      }
      resolve();
    };

    timeout = setTimeout(resolveHandler, timeInMs);

    if (aborter !== undefined) {
      aborter.addEventListener("abort", abortHandler);
    }
  });
}

/**
 * String.prototype.padStart()
 *
 * @param currentString -
 * @param targetLength -
 * @param padString -
 */
export function padStart(
  currentString: string,
  targetLength: number,
  padString: string = " ",
): string {
  // @ts-expect-error: TS doesn't know this code needs to run downlevel sometimes
  if (String.prototype.padStart) {
    return currentString.padStart(targetLength, padString);
  }

  padString = padString || " ";
  if (currentString.length > targetLength) {
    return currentString;
  } else {
    targetLength = targetLength - currentString.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + currentString;
  }
}

export function sanitizeURL(url: string): string {
  let safeURL: string = url;
  if (getURLParameter(safeURL, URLConstants.Parameters.SIGNATURE)) {
    safeURL = setURLParameter(safeURL, URLConstants.Parameters.SIGNATURE, "*****");
  }

  return safeURL;
}

export function sanitizeHeaders(originalHeader: HttpHeaders): HttpHeaders {
  const headers: HttpHeaders = createHttpHeaders();
  for (const [name, value] of originalHeader) {
    if (name.toLowerCase() === HeaderConstants.AUTHORIZATION.toLowerCase()) {
      headers.set(name, "*****");
    } else if (name.toLowerCase() === HeaderConstants.X_MS_COPY_SOURCE) {
      headers.set(name, sanitizeURL(value));
    } else {
      headers.set(name, value);
    }
  }

  return headers;
}
/**
 * If two strings are equal when compared case insensitive.
 *
 * @param str1 -
 * @param str2 -
 */
export function iEqual(str1: string, str2: string): boolean {
  return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}

/**
 * Extracts account name from the url
 * @param url - url to extract the account name from
 * @returns with the account name
 */
export function getAccountNameFromUrl(url: string): string {
  const parsedUrl = new URL(url);
  let accountName;
  try {
    if (parsedUrl.hostname.split(".")[1] === "blob") {
      // `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`;
      accountName = parsedUrl.hostname.split(".")[0];
    } else if (isIpEndpointStyle(parsedUrl)) {
      // IPv4/IPv6 address hosts... Example - http://192.0.0.10:10001/devstoreaccount1/
      // Single word domain without a [dot] in the endpoint... Example - http://localhost:10001/devstoreaccount1/
      // .getPath() -> /devstoreaccount1/
      accountName = parsedUrl.pathname.split("/")[1];
    } else {
      // Custom domain case: "https://customdomain.com/containername/blob".
      accountName = "";
    }
    return accountName;
  } catch (error: any) {
    throw new Error("Unable to extract accountName with provided information.");
  }
}

export function isIpEndpointStyle(parsedUrl: URL): boolean {
  const host = parsedUrl.host;

  // Case 1: Ipv6, use a broad regex to find out candidates whose host contains two ':'.
  // Case 2: localhost(:port) or host.docker.internal, use broad regex to match port part.
  // Case 3: Ipv4, use broad regex which just check if host contains Ipv4.
  // For valid host please refer to https://man7.org/linux/man-pages/man7/hostname.7.html.
  return (
    /^.*:.*:.*$|^(localhost|host.docker.internal)(:[0-9]+)?$|^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){3}(:[0-9]+)?$/.test(
      host,
    ) ||
    (Boolean(parsedUrl.port) && PathStylePorts.includes(parsedUrl.port))
  );
}

/**
 * Attach a TokenCredential to an object.
 *
 * @param thing -
 * @param credential -
 */
export function attachCredential<T>(thing: T, credential: TokenCredential): T {
  (thing as any).credential = credential;
  return thing;
}

export function httpAuthorizationToString(
  httpAuthorization?: HttpAuthorization,
): string | undefined {
  return httpAuthorization ? httpAuthorization.scheme + " " + httpAuthorization.value : undefined;
}

/**
 * Escape the blobName but keep path separator ('/').
 */
export function EscapePath(blobName: string): string {
  const split = blobName.split("/");
  for (let i = 0; i < split.length; i++) {
    split[i] = encodeURIComponent(split[i]);
  }
  return split.join("/");
}

/**
 * A representation of an HTTP response that
 * includes a reference to the request that
 * originated it.
 */
export interface HttpResponse {
  /**
   * The headers from the response.
   */
  headers: HttpHeadersLike;
  /**
   * The original request that resulted in this response.
   */
  request: WebResourceLike;
  /**
   * The HTTP status code returned from the service.
   */
  status: number;
}

/**
 * An object with a _response property that has
 * headers already parsed into a typed object.
 */
export interface ResponseWithHeaders<Headers> {
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: Headers;
  };
}

/**
 * An object with a _response property that has body
 * and headers already parsed into known types.
 */
export interface ResponseWithBody<Headers, Body> {
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: Headers;
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;
    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Body;
  };
}

/**
 * An object with a simple _response property.
 */
export interface ResponseLike {
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse;
}

/**
 * A type that represents an operation result with a known _response property.
 */
export type WithResponse<T, Headers = undefined, Body = undefined> = T &
  (Body extends object
    ? ResponseWithBody<Headers, Body>
    : Headers extends object
      ? ResponseWithHeaders<Headers>
      : ResponseLike);

/**
 * A typesafe helper for ensuring that a given response object has
 * the original _response attached.
 * @param response - A response object from calling a client operation
 * @returns The same object, but with known _response property
 */
export function assertResponse<T extends object, Headers = undefined, Body = undefined>(
  response: T,
): WithResponse<T, Headers, Body> {
  if (`_response` in response) {
    return response as WithResponse<T, Headers, Body>;
  }

  throw new TypeError(`Unexpected response object ${response}`);
}
