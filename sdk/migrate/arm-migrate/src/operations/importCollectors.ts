/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ImportCollectors } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMigrateV2 } from "../azureMigrateV2.js";
import {
  ImportCollector,
  ImportCollectorsListByProjectOptionalParams,
  ImportCollectorsListByProjectResponse,
  ImportCollectorsGetOptionalParams,
  ImportCollectorsGetResponse,
  ImportCollectorsCreateOptionalParams,
  ImportCollectorsCreateResponse,
  ImportCollectorsDeleteOptionalParams,
  ImportCollectorsDeleteResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ImportCollectors operations. */
export class ImportCollectorsImpl implements ImportCollectors {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class ImportCollectors class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Get a list of Import collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: ImportCollectorsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<ImportCollector> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: ImportCollectorsListByProjectOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<ImportCollector[]> {
    let result: ImportCollectorsListByProjectResponse;
    result = await this._listByProject(resourceGroupName, projectName, options);
    yield result.value || [];
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: ImportCollectorsListByProjectOptionalParams
  ): AsyncIterableIterator<ImportCollector> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of Import collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: ImportCollectorsListByProjectOptionalParams
  ): Promise<ImportCollectorsListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Get a Import collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param importCollectorName Unique name of a Import collector within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    options?: ImportCollectorsGetOptionalParams
  ): Promise<ImportCollectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, importCollectorName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update Import collector
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param importCollectorName Unique name of a Import collector within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    options?: ImportCollectorsCreateOptionalParams
  ): Promise<ImportCollectorsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, importCollectorName, options },
      createOperationSpec
    );
  }

  /**
   * Delete a Import collector from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param importCollectorName Unique name of a Import collector within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    options?: ImportCollectorsDeleteOptionalParams
  ): Promise<ImportCollectorsDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, importCollectorName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportCollectorList,
      headersMapper: Mappers.ImportCollectorsListByProjectHeaders
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
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportCollector,
      headersMapper: Mappers.ImportCollectorsGetHeaders
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
    Parameters.projectName,
    Parameters.importCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ImportCollector,
      headersMapper: Mappers.ImportCollectorsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.ImportCollector,
      headersMapper: Mappers.ImportCollectorsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.collectorBody3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.importCollectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ImportCollectorsDeleteHeaders
    },
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
    Parameters.projectName,
    Parameters.importCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
