// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Buffer } from "node:buffer";
import fs from "node:fs";
import path from "node:path";
import { Duplex } from "node:stream";
import * as zlib from "zlib";
import { isLiveMode, Recorder } from "@azure-tools/test-recorder";
import type {
  ShareClient,
  ShareDirectoryClient,
  StorageSharedKeyCredential,
} from "../../src/index.js";
import {
  FileSASPermissions,
  generateFileSASQueryParameters,
  getFileServiceAccountAudience,
  newPipeline,
  ShareFileClient,
} from "../../src/index.js";
import { readStreamToLocalFileWithLogs } from "../../test/utils/testutils.node.js";
import {
  bodyToString,
  configureStorageClient,
  createRandomLocalFile,
  getAccountName,
  getBlobServiceClient,
  getBSU,
  getTokenCredential,
  getUniqueName,
  recorderEnvSetup,
  SimpleTokenCredential,
  uriSanitizers,
} from "../utils/index.js";
import { isNodeLike } from "@azure/core-util";
import { createTestCredential } from "@azure-tools/test-credential";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

describe("FileClient Node.js only", () => {
  let shareName: string;
  let shareClient: ShareClient;
  let dirName: string;
  let dirClient: ShareDirectoryClient;
  let fileName: string;
  let fileClient: ShareFileClient;
  const content = "Hello World";
  const timeoutForLargeFileUploadingTest = 20 * 60 * 1000;

  let recorder: Recorder;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderEnvSetup);
    const serviceClient = getBSU(recorder);
    await recorder.addSanitizers(
      {
        removeHeaderSanitizer: {
          headersForRemoval: [
            "x-ms-file-rename-source",
            "x-ms-copy-source",
            "x-ms-copy-source-authorization",
          ],
        },
        uriSanitizers,
      },
      ["record", "playback"],
    );
    shareName = recorder.variable("share", getUniqueName("share"));
    shareClient = serviceClient.getShareClient(shareName);
    await shareClient.create();

    dirName = recorder.variable("dir", getUniqueName("dir"));
    dirClient = shareClient.getDirectoryClient(dirName);
    await dirClient.create();

    fileName = recorder.variable("file", getUniqueName("file"));
    fileClient = dirClient.getFileClient(fileName);
  });

  afterEach(async () => {
    if (shareClient) {
      await shareClient.delete();
    }
    await recorder.stop();
  });

  it("Default audience should work", async () => {
    await fileClient.create(1024);
    const fileClientWithOAuthToken = new ShareFileClient(fileClient.url, createTestCredential(), {
      fileRequestIntent: "backup",
    });
    configureStorageClient(recorder, fileClientWithOAuthToken);

    const exist = await fileClientWithOAuthToken.exists();
    assert.equal(exist, true);
  });

  it("Customized audience should work", async () => {
    await fileClient.create(1024);
    const fileClientWithOAuthToken = new ShareFileClient(fileClient.url, createTestCredential(), {
      audience: getFileServiceAccountAudience(getAccountName()),
      fileRequestIntent: "backup",
    });
    configureStorageClient(recorder, fileClientWithOAuthToken);
    const exist = await fileClientWithOAuthToken.exists();
    assert.equal(exist, true);
  });

  it("Bad audience should work", async () => {
    await fileClient.create(1024);
    const token = await createTestCredential().getToken(
      "https://badaudience.file.core.windows.net/.default",
    );
    const fileClientWithSimpleOAuthToken = new ShareFileClient(
      fileClient.url,
      new SimpleTokenCredential(token!.token, new Date(token!.expiresOnTimestamp)),
      {
        fileRequestIntent: "backup",
      },
    );

    configureStorageClient(recorder, fileClientWithSimpleOAuthToken);
    try {
      await fileClientWithSimpleOAuthToken.exists();
      assert.fail("Should fail with 401");
    } catch (err) {
      assert.strictEqual((err as any).statusCode, 401);
    }

    const fileClientWithOAuthToken = new ShareFileClient(fileClient.url, createTestCredential(), {
      audience: "https://badaudience.file.core.windows.net/.default",
      fileRequestIntent: "backup",
    });
    configureStorageClient(recorder, fileClientWithOAuthToken);
    const exist = await fileClientWithOAuthToken.exists();
    assert.equal(exist, true);
  });

  it(
    "uploadData - large Buffer as data",
    { timeout: timeoutForLargeFileUploadingTest },
    async (ctx) => {
      if (isNodeLike && !isLiveMode()) {
        ctx.skip();
      }
      await fileClient.create(257 * 1024 * 1024 * 1024);
      const tempFolderPath = "temp";
      if (!fs.existsSync(tempFolderPath)) {
        fs.mkdirSync(tempFolderPath);
      }
      const tempFileLarge = await createRandomLocalFile(tempFolderPath, 257, 1024 * 1024);
      await fileClient.uploadData(fs.readFileSync(tempFileLarge));

      const downloadResponse = await fileClient.download();
      const downloadedFile = path.join(
        tempFolderPath,
        recorder.variable("downloadfile.", getUniqueName("downloadfile.")),
      );
      await readStreamToLocalFileWithLogs(downloadResponse.readableStreamBody!, downloadedFile);

      const downloadedData = await fs.readFileSync(downloadedFile);
      const uploadedData = await fs.readFileSync(tempFileLarge);

      fs.unlinkSync(downloadedFile);
      assert.ok(downloadedData.equals(uploadedData));
    },
  );

  it("upload with buffer and default parameters", async () => {
    const body: string = recorder.variable("randomstring", getUniqueName("randomstring"));
    const bodyBuffer = Buffer.from(body);

    await fileClient.create(body.length);
    await fileClient.uploadRange(bodyBuffer, 0, body.length);
    const result = await fileClient.download(0);
    assert.deepStrictEqual(await bodyToString(result, body.length), body);
  });

  it("uploadData with empty buffer", async () => {
    await fileClient.uploadData(Buffer.alloc(0));
    const response = await fileClient.download();
    assert.deepStrictEqual(await bodyToString(response), "");
  });

  it("upload with Node.js stream", async () => {
    const body: string = recorder.variable("randomstring", getUniqueName("randomstring"));

    await fileClient.create(body.length);
    await fileClient.uploadRange(
      () => {
        const duplexStream = new Duplex();
        duplexStream.push(body);
        duplexStream.push(null);
        return duplexStream;
      },
      0,
      body.length,
    );
    const result = await fileClient.download(0);
    assert.deepStrictEqual(await bodyToString(result, body.length), body);
  });

  it("upload with Chinese string body and default parameters", async () => {
    const body: string = recorder.variable("randomstring你好", getUniqueName("randomstring你好"));
    const bodyLength = Buffer.byteLength(body);

    await fileClient.create(bodyLength);
    await fileClient.uploadRange(body, 0, bodyLength);
    const result = await fileClient.download(0);
    assert.deepStrictEqual(await bodyToString(result, bodyLength), body);
  });

  it("can be created with a url and a credential", async () => {
    await fileClient.create(content.length);
    const metadata = {
      a: "a",
      b: "b",
    };
    await fileClient.setMetadata(metadata);

    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const newClient = new ShareFileClient(fileClient.url, credential);
    configureStorageClient(recorder, newClient);

    const result = await newClient.getProperties();

    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
  });

  it("can be created with a url and a credential and an option bag", async () => {
    await fileClient.create(content.length);
    const metadata = {
      a: "a",
      b: "b",
    };
    await fileClient.setMetadata(metadata);

    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const newClient = new ShareFileClient(fileClient.url, credential, {
      retryOptions: {
        maxTries: 5,
      },
    });
    configureStorageClient(recorder, newClient);

    const result = await newClient.getProperties();

    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
  });

  it("can be created with a url and a pipeline", async () => {
    await fileClient.create(content.length);
    const metadata = {
      a: "a",
      b: "b",
    };
    await fileClient.setMetadata(metadata);

    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const pipeline = newPipeline(credential);
    const newClient = new ShareFileClient(fileClient.url, pipeline);
    configureStorageClient(recorder, newClient);

    const result = await newClient.getProperties();

    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
  });

  it("uploadRangeFromURL", async () => {
    await fileClient.create(1024);

    const fileContent = "a".repeat(512) + "b".repeat(512);
    await fileClient.uploadRange(fileContent, 0, fileContent.length);

    // Get a SAS for fileURL
    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const expiresOn = new Date(recorder.variable("now", new Date().toISOString()));
    expiresOn.setDate(expiresOn.getDate() + 1);
    const sas = generateFileSASQueryParameters(
      {
        expiresOn,
        shareName,
        filePath: `${dirName}/${fileName}`,
        permissions: FileSASPermissions.parse("r"),
      },
      credential,
    );

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const fileURL2 = dirClient.getFileClient(fileName2);

    await fileURL2.create(1024);

    await fileURL2.uploadRangeFromURL(`${fileClient.url}?${sas}`, 0, 0, 512);
    await fileURL2.uploadRangeFromURL(`${fileClient.url}?${sas}`, 512, 512, 512);

    const range1 = await fileURL2.download(0, 512);
    const range2 = await fileURL2.download(512, 512);

    assert.equal(await bodyToString(range1, 512), "a".repeat(512));
    assert.equal(await bodyToString(range2, 512), "b".repeat(512));
  });

  it("uploadRangeFromURL - destination OAuth", async function (ctx) {
    // Pipeline config doesn't support well for file OAuth, disable live test for now.
    // Should add this back after pipeline config is enabled.
    if (isLiveMode()) {
      ctx.skip();
    }
    await fileClient.create(1024);

    const fileContent = "a".repeat(512) + "b".repeat(512);
    await fileClient.uploadRange(fileContent, 0, fileContent.length);

    // Get a SAS for fileURL
    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const expiresOn = new Date(recorder.variable("now", new Date().toISOString()));
    expiresOn.setDate(expiresOn.getDate() + 1);
    const sas = generateFileSASQueryParameters(
      {
        expiresOn,
        shareName,
        filePath: `${dirName}/${fileName}`,
        permissions: FileSASPermissions.parse("r"),
      },
      credential,
    );

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const fileURL2 = dirClient.getFileClient(fileName2);
    const fileClientWithOAuthToken = new ShareFileClient(fileURL2.url, createTestCredential(), {
      fileRequestIntent: "backup",
    });

    configureStorageClient(recorder, fileClientWithOAuthToken);
    await fileClientWithOAuthToken.create(1024);

    await fileClientWithOAuthToken.uploadRangeFromURL(`${fileClient.url}?${sas}`, 0, 0, 512);
    await fileClientWithOAuthToken.uploadRangeFromURL(`${fileClient.url}?${sas}`, 512, 512, 512);

    const range1 = await fileURL2.download(0, 512);
    const range2 = await fileURL2.download(512, 512);

    assert.equal(await bodyToString(range1, 512), "a".repeat(512));
    assert.equal(await bodyToString(range2, 512), "b".repeat(512));
  });

  it("uploadRangeFromURL with fileLastWriteOn", async () => {
    await fileClient.create(1024);

    const fileContent = "a".repeat(512) + "b".repeat(512);
    await fileClient.uploadRange(fileContent, 0, fileContent.length);

    // Get a SAS for fileURL
    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const expiresOn = new Date(recorder.variable("now", new Date().toISOString()));
    expiresOn.setDate(expiresOn.getDate() + 1);
    const sas = generateFileSASQueryParameters(
      {
        expiresOn,
        shareName,
        filePath: `${dirName}/${fileName}`,
        permissions: FileSASPermissions.parse("r"),
      },
      credential,
    );

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const fileURL2 = dirClient.getFileClient(fileName2);

    const createResult = await fileURL2.create(1024);
    const uploadRangeResult = await fileURL2.uploadRangeFromURL(
      `${fileClient.url}?${sas}`,
      0,
      0,
      512,
      {
        fileLastWrittenMode: "Preserve",
      },
    );
    assert.deepStrictEqual(
      createResult.fileLastWriteOn,
      uploadRangeResult.fileLastWriteTime,
      "File last write time should be expected.",
    );

    await fileURL2.uploadRangeFromURL(`${fileClient.url}?${sas}`, 512, 512, 512, {
      fileLastWrittenMode: "Now",
    });

    const range1 = await fileURL2.download(0, 512);
    const range2 = await fileURL2.download(512, 512);

    assert.equal(await bodyToString(range1, 512), "a".repeat(512));
    assert.equal(await bodyToString(range2, 512), "b".repeat(512));
  });

  it("uploadRangeFromURL - source bearer token", async () => {
    const blobServiceClient = getBlobServiceClient(recorder);
    const containerClient = blobServiceClient.getContainerClient(
      recorder.variable("container", getUniqueName("container")),
    );
    await containerClient.create();
    const blockBlob = containerClient.getBlockBlobClient(
      recorder.variable("blockBlob", getUniqueName("blockBlob")),
    );

    const blobContent = "a".repeat(512) + "b".repeat(512);

    await blockBlob.upload(blobContent, blobContent.length);

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const tokenCredential = getTokenCredential();
    const accessToken = await tokenCredential.getToken(["https://storage.azure.com/.default"]);
    const fileURL2 = dirClient.getFileClient(fileName2);

    await fileURL2.create(1024);

    await fileURL2.uploadRangeFromURL(blockBlob.url, 0, 0, 512, {
      sourceAuthorization: {
        scheme: "Bearer",
        value: accessToken!.token,
      },
    });

    await fileURL2.uploadRangeFromURL(blockBlob.url, 512, 512, 512, {
      sourceAuthorization: {
        scheme: "Bearer",
        value: accessToken!.token,
      },
    });

    const range1 = await fileURL2.download(0, 512);
    const range2 = await fileURL2.download(512, 512);

    assert.equal(await bodyToString(range1, 512), "a".repeat(512));
    assert.equal(await bodyToString(range2, 512), "b".repeat(512));
  });

  it("uploadRangeFromURL - should fail with copy source error message", async function () {
    await fileClient.create(1024);

    const fileContent = "a".repeat(512) + "b".repeat(512);
    await fileClient.uploadRange(fileContent, 0, fileContent.length);

    // Get a SAS for fileURL
    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const expiresOn = new Date(recorder.variable("now", new Date().toISOString()));
    expiresOn.setDate(expiresOn.getDate() - 1);
    const sas = generateFileSASQueryParameters(
      {
        expiresOn,
        shareName,
        filePath: `${dirName}/${fileName}`,
        permissions: FileSASPermissions.parse("r"),
      },
      credential,
    );

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const fileURL2 = dirClient.getFileClient(fileName2);

    await fileURL2.create(1024);

    try {
      await fileURL2.uploadRangeFromURL(`${fileClient.url}?${sas}`, 0, 0, 512);
    } catch (err) {
      assert.deepEqual((err as any).details.errorCode, "CannotVerifyCopySource");
      assert.deepEqual((err as any).details.copySourceStatusCode, 403);
      assert.deepEqual((err as any).details.copySourceErrorCode, "AuthenticationFailed");
      assert.deepEqual(
        (err as any).details.copySourceErrorMessage,
        "Server failed to authenticate the request. Make sure the value of Authorization header is formed correctly including the signature.",
      );
    }
  });

  it("startCopyFromURL - should fail with copy source error message", async function () {
    await fileClient.create(1024);

    // Get a SAS for fileURL
    const credential = fileClient["credential"] as StorageSharedKeyCredential;
    const expiresOn = new Date(recorder.variable("now", new Date().toISOString()));
    expiresOn.setDate(expiresOn.getDate() - 1);
    const sas = generateFileSASQueryParameters(
      {
        expiresOn,
        shareName,
        filePath: `${dirName}/${fileName}`,
        permissions: FileSASPermissions.parse("r"),
      },
      credential,
    );

    const fileName2 = recorder.variable("file2", getUniqueName("file2"));
    const fileURL2 = dirClient.getFileClient(fileName2);

    await fileURL2.create(1024);

    try {
      await fileURL2.startCopyFromURL(`${fileClient.url}?${sas}`);
    } catch (err) {
      assert.deepEqual((err as any).details.errorCode, "CannotVerifyCopySource");
      assert.deepEqual((err as any).details.copySourceStatusCode, 403);
      assert.deepEqual((err as any).details.copySourceErrorCode, "AuthenticationFailed");
      assert.deepEqual(
        (err as any).details.copySourceErrorMessage,
        "Server failed to authenticate the request. Make sure the value of Authorization header is formed correctly including the signature.",
      );
    }
  });

  it("should not decompress during downloading", async (ctx) => {
    // recorder doesn't save binary payload correctly
    if (!isLiveMode()) {
      ctx.skip();
    }
    const body: string = "hello world body string!";
    const deflated = zlib.deflateSync(body);

    await fileClient.uploadData(deflated, {
      fileHttpHeaders: {
        fileContentEncoding: "deflate",
        fileContentType: "text/plain",
      },
    });

    const downloaded = await fileClient.downloadToBuffer();
    assert.deepStrictEqual(downloaded, deflated);
  });
});
