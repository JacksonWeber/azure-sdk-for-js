/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { SqlPools } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SynapseManagementClient } from "../synapseManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  SqlPool,
  SqlPoolsListByWorkspaceNextOptionalParams,
  SqlPoolsListByWorkspaceOptionalParams,
  SqlPoolsListByWorkspaceResponse,
  SqlPoolsGetOptionalParams,
  SqlPoolsGetResponse,
  SqlPoolPatchInfo,
  SqlPoolsUpdateOptionalParams,
  SqlPoolsUpdateResponse,
  SqlPoolsCreateOptionalParams,
  SqlPoolsCreateResponse,
  SqlPoolsDeleteOptionalParams,
  SqlPoolsDeleteResponse,
  SqlPoolsPauseOptionalParams,
  SqlPoolsPauseResponse,
  SqlPoolsResumeOptionalParams,
  SqlPoolsResumeResponse,
  ResourceMoveDefinition,
  SqlPoolsRenameOptionalParams,
  SqlPoolsListByWorkspaceNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlPools operations. */
export class SqlPoolsImpl implements SqlPools {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPools class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * List all SQL pools
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: SqlPoolsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<SqlPool> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: SqlPoolsListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SqlPool[]> {
    let result: SqlPoolsListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: SqlPoolsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<SqlPool> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get SQL pool properties
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsGetOptionalParams
  ): Promise<SqlPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Apply a partial update to a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPoolPatchInfo,
    options?: SqlPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsUpdateResponse>,
      SqlPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolsUpdateResponse> => {
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
      { resourceGroupName, workspaceName, sqlPoolName, sqlPoolInfo, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Apply a partial update to a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPoolPatchInfo,
    options?: SqlPoolsUpdateOptionalParams
  ): Promise<SqlPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      sqlPoolInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Create a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPool,
    options?: SqlPoolsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsCreateResponse>,
      SqlPoolsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolsCreateResponse> => {
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
      { resourceGroupName, workspaceName, sqlPoolName, sqlPoolInfo, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    sqlPoolInfo: SqlPool,
    options?: SqlPoolsCreateOptionalParams
  ): Promise<SqlPoolsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      sqlPoolInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsDeleteResponse>,
      SqlPoolsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolsDeleteResponse> => {
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
      { resourceGroupName, workspaceName, sqlPoolName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsDeleteOptionalParams
  ): Promise<SqlPoolsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all SQL pools
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: SqlPoolsListByWorkspaceOptionalParams
  ): Promise<SqlPoolsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Pause a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginPause(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsPauseOptionalParams
  ): Promise<
    PollerLike<PollOperationState<SqlPoolsPauseResponse>, SqlPoolsPauseResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolsPauseResponse> => {
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
      { resourceGroupName, workspaceName, sqlPoolName, options },
      pauseOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Pause a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginPauseAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsPauseOptionalParams
  ): Promise<SqlPoolsPauseResponse> {
    const poller = await this.beginPause(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Resume a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginResume(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsResumeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlPoolsResumeResponse>,
      SqlPoolsResumeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolsResumeResponse> => {
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
      { resourceGroupName, workspaceName, sqlPoolName, options },
      resumeOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Resume a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  async beginResumeAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolsResumeOptionalParams
  ): Promise<SqlPoolsResumeResponse> {
    const poller = await this.beginResume(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Rename a SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The resource move definition for renaming this Sql pool.
   * @param options The options parameters.
   */
  rename(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: ResourceMoveDefinition,
    options?: SqlPoolsRenameOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, parameters, options },
      renameOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: SqlPoolsListByWorkspaceNextOptionalParams
  ): Promise<SqlPoolsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.sqlPoolInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    404: {
      isError: true
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.sqlPoolInfo1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const pauseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/pause",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resumeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/resume",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const renameOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/move",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
