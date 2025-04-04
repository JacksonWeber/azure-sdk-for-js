// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { Recorder } from "@azure-tools/test-recorder";
import type {
  DocumentTranslationClient,
  GetTranslationStatus200Response,
  TranslationStatusOutput,
} from "../../../src/index.js";
import { isUnexpected, getLongRunningPoller } from "../../../src/index.js";
import { createDocumentTranslationClient, startRecorder } from "../utils/recordedClient.js";
import {
  createBatchRequest,
  createSourceInput,
  createTargetInput,
  getTranslationOperationID,
  sleep,
} from "../utils/testHelper.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";
import { getContainers, isLiveMode } from "../../utils/injectables.js";

export const testPollingOptions = {
  intervalInMs: isLiveMode() ? undefined : 0,
};

// TODO: Re-record test
describe("TranslationFilter tests", { skip: true }, () => {
  let recorder: Recorder;
  let client: DocumentTranslationClient;
  const containers = getContainers();

  beforeEach(async (ctx) => {
    recorder = await startRecorder(ctx);
    client = await createDocumentTranslationClient({ recorder });
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("Translation Statuses Filter By Status", async () => {
    createTranslationJobs(
      containers["source-container11"].url,
      [containers["target-container18"].url],
      "Succeeded",
    );
    const cancelledIds = createTranslationJobs(
      containers["source-container10"].url,
      [containers["target-container19"].url],
      "Cancelled",
    );

    // list translations with filter
    const cancelledStatusList = ["Cancelled", "Cancelling"];
    const testStartTime = recorder.variable("testStartTime", new Date().toISOString());

    const queryParameters = {
      statuses: cancelledStatusList,
      createdDateTimeUtcStart: testStartTime,
    };

    // get Translation Status
    const response = await client.path("/document/batches").get({
      queryParameters,
    });

    if (isUnexpected(response)) {
      throw "get translation status job error:" + response.body;
    }
    const responseBody = response.body;
    for (const translationStatus of responseBody.value) {
      assert.isTrue(cancelledStatusList.includes(translationStatus.status));
      assert.isTrue((await cancelledIds).includes(translationStatus.id));
    }
  });

  // TODO: Re-record test
  it.skip("Translation Statuses Filter By Id", async () => {
    const allIds = createTranslationJobs(
      containers["source-container11"].url,
      [containers["target-container19"].url, containers["target-container20"].url],
      "Succeeded",
    );
    const targetIds = [];
    targetIds.push((await allIds)[0]);

    // get Translation Status
    const queryParameters = {
      ids: targetIds,
    };
    const response = await client.path("/document/batches").get({
      queryParameters,
    });

    if (isUnexpected(response)) {
      throw "get translation status job error:" + response.body;
    }

    const responseBody = response.body;
    for (const translationStatus of responseBody.value) {
      assert.isTrue(targetIds.includes(translationStatus.id));
    }
  });

  // TODO: Re-record test
  it.skip("Translation Statuses Filter By Created After", async () => {
    const testStartTime = recorder.variable("testStartTime", new Date().toISOString());
    const targetIds = createTranslationJobs(
      containers["source-container11"].url,
      [containers["target-container21"].url],
      "Succeeded",
    );

    // get Translation Status
    const queryParams = {
      createdDateTimeUtcStart: testStartTime,
    };
    const response = await client.path("/document/batches").get({
      queryParameters: queryParams,
    });
    if (isUnexpected(response)) {
      throw "get translation status job error:" + response.body;
    }
    const responseBody = response.body;
    for (const translationStatus of responseBody.value) {
      assert.isTrue((await targetIds).includes(translationStatus.id));
      assert.isTrue(new Date(translationStatus.createdDateTimeUtc).toISOString() > testStartTime);
    }
  });

  // TODO: Re-record test
  it.skip("Translation Statuses Filter By Created Before", async () => {
    const targetIds = createTranslationJobs(
      containers["source-container11"].url,
      [containers["target-container22"].url],
      "Succeeded",
    );
    for (let i = 0; i < (await targetIds).length; i++) {
      console.log(`targetIds[${i}]:`, (await targetIds)[i]);
    }

    const endDateTime = recorder.variable("endDateTime", new Date().toISOString());
    createTranslationJobs(
      containers["source-container11"].url,
      [containers["target-container23"].url],
      "Succeeded",
    );

    // getting only translations from the last hour
    const testDateTime = new Date();
    testDateTime.setHours(testDateTime.getHours() - 1);
    const startDateTime = recorder.variable("startDateTime", testDateTime.toISOString());

    // get Translation Status
    const queryParams = {
      createdDateTimeUtcStart: startDateTime,
      createdDateTimeUtcEnd: endDateTime,
    };
    const response = await client.path("/document/batches").get({
      queryParameters: queryParams,
    });
    if (isUnexpected(response)) {
      throw "get translation status job error:" + response.body;
    }

    const responseBody = response.body;
    let idExists = false;
    for (const translationStatus of responseBody.value) {
      if ((await targetIds).includes(translationStatus.id)) {
        idExists = true;
      }
      assert.isTrue(new Date(translationStatus.createdDateTimeUtc).toISOString() < endDateTime);
    }
    assert.isTrue(idExists);
  });

  // TODO: Re-record test
  it.skip("Translation Statuses Filter By Created On", async () => {
    createTranslationJobs(
      containers["source-container11"].url,
      [
        containers["target-container24"].url,
        containers["target-container25"].url,
        containers["target-container26"].url,
      ],
      "Succeeded",
    );

    // Add filter
    const startDateTime = recorder.variable("startDateTime", new Date().toISOString());
    const orderByList = ["createdDateTimeUtc asc"];
    const queryParams = {
      createdDateTimeUtcStart: startDateTime,
      orderby: orderByList,
    };

    const response = await client.path("/document/batches").get({
      queryParameters: queryParams,
    });
    if (isUnexpected(response)) {
      throw "get translation status job error:" + response.body;
    }
    let timestamp = new Date(-8640000000000000); // Minimum valid Date value in JavaScript

    const responseBody = response.body;
    for (const translationStatus of responseBody.value) {
      assert.isTrue(new Date(translationStatus.createdDateTimeUtc) > timestamp);
      timestamp = new Date(translationStatus.createdDateTimeUtc);
    }
  });

  async function createTranslationJobs(
    sourceContainerUrl: string,
    targetContainerUrls: string[],
    jobTerminalStatus: string,
  ): Promise<string[]> {
    // create source container
    const sourceInput = createSourceInput(sourceContainerUrl);

    // create a translation job
    const translationIds = [];
    for (const targetContainerUrl of targetContainerUrls) {
      const targetInput = createTargetInput(targetContainerUrl, "fr");
      const batchRequest = createBatchRequest(sourceInput, [targetInput]);

      // Start translation
      const batchRequests = { inputs: [batchRequest] };
      const response = await client.path("/document/batches").post({
        body: batchRequests,
      });
      if (isUnexpected(response)) {
        throw "start translation job error:" + response.body;
      }

      const operationLocationUrl = (await response).headers["operation-location"];
      const operationId = getTranslationOperationID(operationLocationUrl);
      translationIds.push(operationId);

      if (jobTerminalStatus.includes("succeeded")) {
        // Wait until the operation completes
        const poller = getLongRunningPoller(client, response, testPollingOptions);
        const result = await (await poller).pollUntilDone();
        assert.equal(result.status, "200");
      } else if (jobTerminalStatus.includes("cancelled")) {
        await client.path("/document/batches/{id}", operationId).delete();
      }
    }

    // ensure that cancel status has propagated before returning
    if (jobTerminalStatus.includes("cancelled")) {
      waitForJobCancellation(translationIds);
    }
    return translationIds;
  }

  async function waitForJobCancellation(translationIds: string[]): Promise<void> {
    const retryCount = 10;

    for (const translationId of translationIds) {
      let translationStatus = null;
      let retriesLeft = retryCount;
      do {
        try {
          await sleep(10000);
          retriesLeft--;
          translationStatus = (await client
            .path("/document/batches/{id}", translationId)
            .get()) as GetTranslationStatus200Response;
        } catch (error) {
          console.error("Error during translation status retrieval:", error);
        }
      } while (
        translationStatus &&
        (translationStatus.body as TranslationStatusOutput).summary.cancelled > 0 &&
        retriesLeft > 0
      );
    }
    return;
  }
});
