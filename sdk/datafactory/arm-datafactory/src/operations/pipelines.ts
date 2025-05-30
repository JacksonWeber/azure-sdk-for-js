/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Pipelines } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataFactoryManagementClient } from "../dataFactoryManagementClient.js";
import {
  PipelineResource,
  PipelinesListByFactoryNextOptionalParams,
  PipelinesListByFactoryOptionalParams,
  PipelinesListByFactoryResponse,
  PipelinesCreateOrUpdateOptionalParams,
  PipelinesCreateOrUpdateResponse,
  PipelinesGetOptionalParams,
  PipelinesGetResponse,
  PipelinesDeleteOptionalParams,
  PipelinesCreateRunOptionalParams,
  PipelinesCreateRunResponse,
  PipelinesListByFactoryNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Pipelines operations. */
export class PipelinesImpl implements Pipelines {
  private readonly client: DataFactoryManagementClient;

  /**
   * Initialize a new instance of the class Pipelines class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryManagementClient) {
    this.client = client;
  }

  /**
   * Lists pipelines.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: PipelinesListByFactoryOptionalParams,
  ): PagedAsyncIterableIterator<PipelineResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
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
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: PipelinesListByFactoryOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PipelineResource[]> {
    let result: PipelinesListByFactoryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByFactory(
        resourceGroupName,
        factoryName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: PipelinesListByFactoryOptionalParams,
  ): AsyncIterableIterator<PipelineResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists pipelines.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: PipelinesListByFactoryOptionalParams,
  ): Promise<PipelinesListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec,
    );
  }

  /**
   * Creates or updates a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param pipeline Pipeline resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    pipeline: PipelineResource,
    options?: PipelinesCreateOrUpdateOptionalParams,
  ): Promise<PipelinesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, pipelineName, pipeline, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Gets a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesGetOptionalParams,
  ): Promise<PipelinesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, pipelineName, options },
      getOperationSpec,
    );
  }

  /**
   * Deletes a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, pipelineName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Creates a run of a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  createRun(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesCreateRunOptionalParams,
  ): Promise<PipelinesCreateRunResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, pipelineName, options },
      createRunOperationSpec,
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: PipelinesListByFactoryNextOptionalParams,
  ): Promise<PipelinesListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.pipeline,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.pipelineName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineResource,
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.pipelineName,
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.pipelineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createRunOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}/createRun",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateRunResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.referencePipelineRunId,
    Parameters.isRecovery,
    Parameters.startActivityName,
    Parameters.startFromFailure,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.pipelineName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
