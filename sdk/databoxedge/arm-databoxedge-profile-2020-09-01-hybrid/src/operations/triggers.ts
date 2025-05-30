/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Triggers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataBoxEdgeManagementClient } from "../dataBoxEdgeManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  TriggerUnion,
  TriggersListByDataBoxEdgeDeviceNextOptionalParams,
  TriggersListByDataBoxEdgeDeviceOptionalParams,
  TriggersListByDataBoxEdgeDeviceResponse,
  TriggersGetOptionalParams,
  TriggersGetResponse,
  TriggersCreateOrUpdateOptionalParams,
  TriggersCreateOrUpdateResponse,
  TriggersDeleteOptionalParams,
  TriggersListByDataBoxEdgeDeviceNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Triggers operations. */
export class TriggersImpl implements Triggers {
  private readonly client: DataBoxEdgeManagementClient;

  /**
   * Initialize a new instance of the class Triggers class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxEdgeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the triggers configured in the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: TriggersListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<TriggerUnion> {
    const iter = this.listByDataBoxEdgeDevicePagingAll(
      deviceName,
      resourceGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByDataBoxEdgeDevicePagingPage(
          deviceName,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDataBoxEdgeDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    options?: TriggersListByDataBoxEdgeDeviceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<TriggerUnion[]> {
    let result: TriggersListByDataBoxEdgeDeviceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataBoxEdgeDevice(
        deviceName,
        resourceGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataBoxEdgeDeviceNext(
        deviceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataBoxEdgeDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    options?: TriggersListByDataBoxEdgeDeviceOptionalParams
  ): AsyncIterableIterator<TriggerUnion> {
    for await (const page of this.listByDataBoxEdgeDevicePagingPage(
      deviceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the triggers configured in the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: TriggersListByDataBoxEdgeDeviceOptionalParams
  ): Promise<TriggersListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, options },
      listByDataBoxEdgeDeviceOperationSpec
    );
  }

  /**
   * Get a specific trigger by name.
   * @param deviceName The device name.
   * @param name The trigger name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: TriggersGetOptionalParams
  ): Promise<TriggersGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, name, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a trigger.
   * @param deviceName Creates or updates a trigger
   * @param name The trigger name.
   * @param resourceGroupName The resource group name.
   * @param trigger The trigger.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    trigger: TriggerUnion,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggersCreateOrUpdateResponse>,
      TriggersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, name, resourceGroupName, trigger, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a trigger.
   * @param deviceName Creates or updates a trigger
   * @param name The trigger name.
   * @param resourceGroupName The resource group name.
   * @param trigger The trigger.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    trigger: TriggerUnion,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<TriggersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      name,
      resourceGroupName,
      trigger,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the trigger on the gateway device.
   * @param deviceName The device name.
   * @param name The trigger name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, name, resourceGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the trigger on the gateway device.
   * @param deviceName The device name.
   * @param name The trigger name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      name,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDataBoxEdgeDeviceNext
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByDataBoxEdgeDevice
   *                 method.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDeviceNext(
    deviceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: TriggersListByDataBoxEdgeDeviceNextOptionalParams
  ): Promise<TriggersListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, nextLink, options },
      listByDataBoxEdgeDeviceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDataBoxEdgeDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Trigger
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Trigger
    },
    201: {
      bodyMapper: Mappers.Trigger
    },
    202: {
      bodyMapper: Mappers.Trigger
    },
    204: {
      bodyMapper: Mappers.Trigger
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.trigger,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDataBoxEdgeDeviceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
