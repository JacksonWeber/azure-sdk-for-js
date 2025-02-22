/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { NetworkFunctions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridNetworkManagementClient } from "../hybridNetworkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  NetworkFunction,
  NetworkFunctionsListBySubscriptionNextOptionalParams,
  NetworkFunctionsListBySubscriptionOptionalParams,
  NetworkFunctionsListBySubscriptionResponse,
  NetworkFunctionsListByResourceGroupNextOptionalParams,
  NetworkFunctionsListByResourceGroupOptionalParams,
  NetworkFunctionsListByResourceGroupResponse,
  NetworkFunctionsDeleteOptionalParams,
  NetworkFunctionsGetOptionalParams,
  NetworkFunctionsGetResponse,
  NetworkFunctionsCreateOrUpdateOptionalParams,
  NetworkFunctionsCreateOrUpdateResponse,
  TagsObject,
  NetworkFunctionsUpdateTagsOptionalParams,
  NetworkFunctionsUpdateTagsResponse,
  ExecuteRequestParameters,
  NetworkFunctionsExecuteRequestOptionalParams,
  NetworkFunctionsListBySubscriptionNextResponse,
  NetworkFunctionsListByResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkFunctions operations. */
export class NetworkFunctionsImpl implements NetworkFunctions {
  private readonly client: HybridNetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkFunctions class.
   * @param client Reference to the service client
   */
  constructor(client: HybridNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the network functions in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: NetworkFunctionsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkFunction> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: NetworkFunctionsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkFunction[]> {
    let result: NetworkFunctionsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: NetworkFunctionsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<NetworkFunction> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the network function resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkFunction> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkFunction[]> {
    let result: NetworkFunctionsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<NetworkFunction> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFunctionName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkFunctionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsGetOptionalParams
  ): Promise<NetworkFunctionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkFunctionName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName Resource name for the network function resource.
   * @param parameters Parameters supplied in the body to the create or update network function
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: NetworkFunction,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFunctionsCreateOrUpdateResponse>,
      NetworkFunctionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkFunctionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFunctionName, parameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkFunctionsCreateOrUpdateResponse,
      OperationState<NetworkFunctionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName Resource name for the network function resource.
   * @param parameters Parameters supplied in the body to the create or update network function
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: NetworkFunction,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams
  ): Promise<NetworkFunctionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      networkFunctionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the tags for the network function resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName Resource name for the network function resource.
   * @param parameters Parameters supplied to the update network function tags operation.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: TagsObject,
    options?: NetworkFunctionsUpdateTagsOptionalParams
  ): Promise<NetworkFunctionsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkFunctionName, parameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * Lists all the network functions in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: NetworkFunctionsListBySubscriptionOptionalParams
  ): Promise<NetworkFunctionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all the network function resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams
  ): Promise<NetworkFunctionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Execute a request to services on a containerized network function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param parameters Payload for execute request post call.
   * @param options The options parameters.
   */
  async beginExecuteRequest(
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: ExecuteRequestParameters,
    options?: NetworkFunctionsExecuteRequestOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkFunctionName, parameters, options },
      spec: executeRequestOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a request to services on a containerized network function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param parameters Payload for execute request post call.
   * @param options The options parameters.
   */
  async beginExecuteRequestAndWait(
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: ExecuteRequestParameters,
    options?: NetworkFunctionsExecuteRequestOptionalParams
  ): Promise<void> {
    const poller = await this.beginExecuteRequest(
      resourceGroupName,
      networkFunctionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: NetworkFunctionsListBySubscriptionNextOptionalParams
  ): Promise<NetworkFunctionsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: NetworkFunctionsListByResourceGroupNextOptionalParams
  ): Promise<NetworkFunctionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkFunctionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunction
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkFunctionName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunction
    },
    201: {
      bodyMapper: Mappers.NetworkFunction
    },
    202: {
      bodyMapper: Mappers.NetworkFunction
    },
    204: {
      bodyMapper: Mappers.NetworkFunction
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkFunctionName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunction
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkFunctionName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/networkFunctions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const executeRequestOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/executeRequest",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkFunctionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkFunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
