// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AccountSASPermissions } from "./AccountSASPermissions.js";
import { AccountSASResourceTypes } from "./AccountSASResourceTypes.js";
import { AccountSASServices } from "./AccountSASServices.js";
import type { StorageSharedKeyCredential } from "@azure/storage-common";
import type { SasIPRange } from "./SasIPRange.js";
import { ipRangeToString } from "./SasIPRange.js";
import type { SASProtocol } from "./SASQueryParameters.js";
import { SASQueryParameters } from "./SASQueryParameters.js";
import { SERVICE_VERSION } from "./utils/constants.js";
import { truncatedISO8061Date } from "./utils/utils.common.js";

/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 *
 * AccountSASSignatureValues is used to generate a Shared Access Signature (SAS) for an Azure Storage account. Once
 * all the values here are set appropriately, call generateSASQueryParameters() to obtain a representation of the SAS
 * which can actually be applied to queue urls. Note: that both this class and {@link SASQueryParameters} exist because
 * the former is mutable and a logical representation while the latter is immutable and used to generate actual REST
 * requests.
 *
 * @see https://learn.microsoft.com/azure/storage/common/storage-dotnet-shared-access-signature-part-1
 * for more conceptual information on SAS
 *
 * @see https://learn.microsoft.com/rest/api/storageservices/constructing-an-account-sas
 * for descriptions of the parameters, including which are required
 */
export interface AccountSASSignatureValues {
  /**
   * If not provided, this defaults to the service version targeted by this version of the library.
   */
  version?: string;

  /**
   * Optional. SAS protocols allowed.
   */
  protocol?: SASProtocol;

  /**
   * Optional. When the SAS will take effect.
   */
  startsOn?: Date;

  /**
   * The time after which the SAS will no longer work.
   */
  expiresOn: Date;

  /**
   * Specifies which operations the SAS user may perform. Please refer to {@link AccountSASPermissions} for help
   * constructing the permissions string.
   */
  permissions: AccountSASPermissions;

  /**
   * Optional. IP range allowed.
   */
  ipRange?: SasIPRange;

  /**
   * The values that indicate the services accessible with this SAS. Please refer to {@link AccountSASServices} to
   * construct this value.
   */
  services: string;

  /**
   * The values that indicate the resource types accessible with this SAS. Please refer
   * to {@link AccountSASResourceTypes} to construct this value.
   */
  resourceTypes: string;
}

/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 *
 * Generates a {@link SASQueryParameters} object which contains all SAS query parameters needed to make an actual
 * REST request.
 *
 * @see https://learn.microsoft.com/rest/api/storageservices/constructing-an-account-sas
 *
 * @param accountSASSignatureValues - SAS Signature values of the account
 * @param sharedKeyCredential - Shared key credential.
 */
export function generateAccountSASQueryParameters(
  accountSASSignatureValues: AccountSASSignatureValues,
  sharedKeyCredential: StorageSharedKeyCredential,
): SASQueryParameters {
  return generateAccountSASQueryParametersInternal(accountSASSignatureValues, sharedKeyCredential)
    .sasQueryParameters;
}

export function generateAccountSASQueryParametersInternal(
  accountSASSignatureValues: AccountSASSignatureValues,
  sharedKeyCredential: StorageSharedKeyCredential,
): { sasQueryParameters: SASQueryParameters; stringToSign: string } {
  const version = accountSASSignatureValues.version
    ? accountSASSignatureValues.version
    : SERVICE_VERSION;

  const parsedPermissions = AccountSASPermissions.parse(
    accountSASSignatureValues.permissions.toString(),
  ).toString();
  const parsedServices = AccountSASServices.parse(accountSASSignatureValues.services).toString();
  const parsedResourceTypes = AccountSASResourceTypes.parse(
    accountSASSignatureValues.resourceTypes,
  ).toString();

  let stringToSign: string;

  if (version >= "2020-12-06") {
    stringToSign = [
      sharedKeyCredential.accountName,
      parsedPermissions,
      parsedServices,
      parsedResourceTypes,
      accountSASSignatureValues.startsOn
        ? truncatedISO8061Date(accountSASSignatureValues.startsOn, false)
        : "",
      truncatedISO8061Date(accountSASSignatureValues.expiresOn, false),
      accountSASSignatureValues.ipRange ? ipRangeToString(accountSASSignatureValues.ipRange) : "",
      accountSASSignatureValues.protocol ? accountSASSignatureValues.protocol : "",
      version,
      "", // Reserved for encryption scope
      "", // Account SAS requires an additional newline character
    ].join("\n");
  } else {
    stringToSign = [
      sharedKeyCredential.accountName,
      parsedPermissions,
      parsedServices,
      parsedResourceTypes,
      accountSASSignatureValues.startsOn
        ? truncatedISO8061Date(accountSASSignatureValues.startsOn, false)
        : "",
      truncatedISO8061Date(accountSASSignatureValues.expiresOn, false),
      accountSASSignatureValues.ipRange ? ipRangeToString(accountSASSignatureValues.ipRange) : "",
      accountSASSignatureValues.protocol ? accountSASSignatureValues.protocol : "",
      version,
      "", // Account SAS requires an additional newline character
    ].join("\n");
  }

  const signature: string = sharedKeyCredential.computeHMACSHA256(stringToSign);

  return {
    sasQueryParameters: new SASQueryParameters(
      version,
      signature,
      parsedPermissions,
      parsedServices,
      parsedResourceTypes,
      accountSASSignatureValues.protocol,
      accountSASSignatureValues.startsOn,
      accountSASSignatureValues.expiresOn,
      accountSASSignatureValues.ipRange,
    ),
    stringToSign: stringToSign,
  };
}
