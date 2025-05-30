/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PoolOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { BatchManagementClient } from "../batchManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Pool,
  PoolListByBatchAccountNextOptionalParams,
  PoolListByBatchAccountOptionalParams,
  PoolListByBatchAccountResponse,
  PoolCreateOptionalParams,
  PoolCreateResponse,
  PoolUpdateOptionalParams,
  PoolUpdateResponse,
  PoolDeleteOptionalParams,
  PoolGetOptionalParams,
  PoolGetResponse,
  PoolDisableAutoScaleOptionalParams,
  PoolDisableAutoScaleResponse,
  PoolStopResizeOptionalParams,
  PoolStopResizeResponse,
  PoolListByBatchAccountNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PoolOperations operations. */
export class PoolOperationsImpl implements PoolOperations {
  private readonly client: BatchManagementClient;

  /**
   * Initialize a new instance of the class PoolOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BatchManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the pools in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  public listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PoolListByBatchAccountOptionalParams,
  ): PagedAsyncIterableIterator<Pool> {
    const iter = this.listByBatchAccountPagingAll(
      resourceGroupName,
      accountName,
      options,
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
        return this.listByBatchAccountPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBatchAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PoolListByBatchAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Pool[]> {
    let result: PoolListByBatchAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBatchAccount(
        resourceGroupName,
        accountName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBatchAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBatchAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PoolListByBatchAccountOptionalParams,
  ): AsyncIterableIterator<Pool> {
    for await (const page of this.listByBatchAccountPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the pools in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  private _listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PoolListByBatchAccountOptionalParams,
  ): Promise<PoolListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByBatchAccountOperationSpec,
    );
  }

  /**
   * Creates a new pool inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Additional parameters for pool creation.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    parameters: Pool,
    options?: PoolCreateOptionalParams,
  ): Promise<PoolCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, parameters, options },
      createOperationSpec,
    );
  }

  /**
   * Updates the properties of an existing pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Pool properties that should be updated. Properties that are supplied will be
   *                   updated, any property not supplied will be unchanged.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    parameters: Pool,
    options?: PoolUpdateOptionalParams,
  ): Promise<PoolUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: PoolDeleteOptionalParams,
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
      args: { resourceGroupName, accountName, poolName, options },
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
   * Deletes the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: PoolDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      poolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: PoolGetOptionalParams,
  ): Promise<PoolGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, options },
      getOperationSpec,
    );
  }

  /**
   * Disables automatic scaling for a pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The options parameters.
   */
  disableAutoScale(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: PoolDisableAutoScaleOptionalParams,
  ): Promise<PoolDisableAutoScaleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, options },
      disableAutoScaleOperationSpec,
    );
  }

  /**
   * This does not restore the pool to its previous state before the resize operation: it only stops any
   * further changes being made, and the pool maintains its current state. After stopping, the pool
   * stabilizes at the number of nodes it was at when the stop operation was done. During the stop
   * operation, the pool allocation state changes first to stopping and then to steady. A resize
   * operation need not be an explicit resize pool request; this API can also be used to halt the initial
   * sizing of the pool when it is created.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The options parameters.
   */
  stopResize(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: PoolStopResizeOptionalParams,
  ): Promise<PoolStopResizeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, options },
      stopResizeOperationSpec,
    );
  }

  /**
   * ListByBatchAccountNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param nextLink The nextLink from the previous successful call to the ListByBatchAccount method.
   * @param options The options parameters.
   */
  private _listByBatchAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: PoolListByBatchAccountNextOptionalParams,
  ): Promise<PoolListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByBatchAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBatchAccountOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListPoolsResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxresults,
    Parameters.filter,
    Parameters.select,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolCreateHeaders,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
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
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolGetHeaders,
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
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const disableAutoScaleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/disableAutoScale",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolDisableAutoScaleHeaders,
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
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const stopResizeOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/stopResize",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolStopResizeHeaders,
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
    Parameters.accountName1,
    Parameters.poolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBatchAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListPoolsResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
