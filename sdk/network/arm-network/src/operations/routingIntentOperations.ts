/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { RoutingIntentOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  RoutingIntent,
  RoutingIntentListNextOptionalParams,
  RoutingIntentListOptionalParams,
  RoutingIntentListResponse,
  RoutingIntentCreateOrUpdateOptionalParams,
  RoutingIntentCreateOrUpdateResponse,
  RoutingIntentGetOptionalParams,
  RoutingIntentGetResponse,
  RoutingIntentDeleteOptionalParams,
  RoutingIntentListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoutingIntentOperations operations. */
export class RoutingIntentOperationsImpl implements RoutingIntentOperations {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class RoutingIntentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the details of all RoutingIntent child resources of the VirtualHub.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    virtualHubName: string,
    options?: RoutingIntentListOptionalParams,
  ): PagedAsyncIterableIterator<RoutingIntent> {
    const iter = this.listPagingAll(resourceGroupName, virtualHubName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          virtualHubName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    virtualHubName: string,
    options?: RoutingIntentListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RoutingIntent[]> {
    let result: RoutingIntentListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, virtualHubName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        virtualHubName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    virtualHubName: string,
    options?: RoutingIntentListOptionalParams,
  ): AsyncIterableIterator<RoutingIntent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      virtualHubName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates a RoutingIntent resource if it doesn't exist else updates the existing RoutingIntent.
   * @param resourceGroupName The resource group name of the RoutingIntent.
   * @param virtualHubName The name of the VirtualHub.
   * @param routingIntentName The name of the per VirtualHub singleton Routing Intent resource.
   * @param routingIntentParameters Parameters supplied to create or update RoutingIntent.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    virtualHubName: string,
    routingIntentName: string,
    routingIntentParameters: RoutingIntent,
    options?: RoutingIntentCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<RoutingIntentCreateOrUpdateResponse>,
      RoutingIntentCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<RoutingIntentCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        virtualHubName,
        routingIntentName,
        routingIntentParameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      RoutingIntentCreateOrUpdateResponse,
      OperationState<RoutingIntentCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a RoutingIntent resource if it doesn't exist else updates the existing RoutingIntent.
   * @param resourceGroupName The resource group name of the RoutingIntent.
   * @param virtualHubName The name of the VirtualHub.
   * @param routingIntentName The name of the per VirtualHub singleton Routing Intent resource.
   * @param routingIntentParameters Parameters supplied to create or update RoutingIntent.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    virtualHubName: string,
    routingIntentName: string,
    routingIntentParameters: RoutingIntent,
    options?: RoutingIntentCreateOrUpdateOptionalParams,
  ): Promise<RoutingIntentCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      virtualHubName,
      routingIntentName,
      routingIntentParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the details of a RoutingIntent.
   * @param resourceGroupName The resource group name of the RoutingIntent.
   * @param virtualHubName The name of the VirtualHub.
   * @param routingIntentName The name of the RoutingIntent.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualHubName: string,
    routingIntentName: string,
    options?: RoutingIntentGetOptionalParams,
  ): Promise<RoutingIntentGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualHubName, routingIntentName, options },
      getOperationSpec,
    );
  }

  /**
   * Deletes a RoutingIntent.
   * @param resourceGroupName The resource group name of the RoutingIntent.
   * @param virtualHubName The name of the VirtualHub.
   * @param routingIntentName The name of the RoutingIntent.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    virtualHubName: string,
    routingIntentName: string,
    options?: RoutingIntentDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, virtualHubName, routingIntentName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a RoutingIntent.
   * @param resourceGroupName The resource group name of the RoutingIntent.
   * @param virtualHubName The name of the VirtualHub.
   * @param routingIntentName The name of the RoutingIntent.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    virtualHubName: string,
    routingIntentName: string,
    options?: RoutingIntentDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      virtualHubName,
      routingIntentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the details of all RoutingIntent child resources of the VirtualHub.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    virtualHubName: string,
    options?: RoutingIntentListOptionalParams,
  ): Promise<RoutingIntentListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualHubName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    virtualHubName: string,
    nextLink: string,
    options?: RoutingIntentListNextOptionalParams,
  ): Promise<RoutingIntentListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualHubName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/routingIntent/{routingIntentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingIntent,
    },
    201: {
      bodyMapper: Mappers.RoutingIntent,
    },
    202: {
      bodyMapper: Mappers.RoutingIntent,
    },
    204: {
      bodyMapper: Mappers.RoutingIntent,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.routingIntentParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualHubName,
    Parameters.routingIntentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/routingIntent/{routingIntentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingIntent,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualHubName,
    Parameters.routingIntentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/routingIntent/{routingIntentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualHubName,
    Parameters.routingIntentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/routingIntent",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListRoutingIntentResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualHubName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListRoutingIntentResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualHubName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
