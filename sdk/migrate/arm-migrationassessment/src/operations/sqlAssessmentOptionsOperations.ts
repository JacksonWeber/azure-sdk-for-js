/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { SqlAssessmentOptionsOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMigrateAssessmentService } from "../azureMigrateAssessmentService.js";
import {
  SqlAssessmentOptions,
  SqlAssessmentOptionsOperationsListByAssessmentProjectNextOptionalParams,
  SqlAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  SqlAssessmentOptionsOperationsListByAssessmentProjectResponse,
  SqlAssessmentOptionsOperationsGetOptionalParams,
  SqlAssessmentOptionsOperationsGetResponse,
  SqlAssessmentOptionsOperationsListByAssessmentProjectNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlAssessmentOptionsOperations operations. */
export class SqlAssessmentOptionsOperationsImpl
  implements SqlAssessmentOptionsOperations
{
  private readonly client: AzureMigrateAssessmentService;

  /**
   * Initialize a new instance of the class SqlAssessmentOptionsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateAssessmentService) {
    this.client = client;
  }

  /**
   * List SqlAssessmentOptions resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  public listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: SqlAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  ): PagedAsyncIterableIterator<SqlAssessmentOptions> {
    const iter = this.listByAssessmentProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByAssessmentProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAssessmentProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: SqlAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SqlAssessmentOptions[]> {
    let result: SqlAssessmentOptionsOperationsListByAssessmentProjectResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAssessmentProject(
        resourceGroupName,
        projectName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAssessmentProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAssessmentProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: SqlAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  ): AsyncIterableIterator<SqlAssessmentOptions> {
    for await (const page of this.listByAssessmentProjectPagingPage(
      resourceGroupName,
      projectName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List SqlAssessmentOptions resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  private _listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: SqlAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  ): Promise<SqlAssessmentOptionsOperationsListByAssessmentProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByAssessmentProjectOperationSpec,
    );
  }

  /**
   * Get a SqlAssessmentOptions
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param assessmentOptionsName Sql assessment options ARM name. Accepted values is 'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    assessmentOptionsName: string,
    options?: SqlAssessmentOptionsOperationsGetOptionalParams,
  ): Promise<SqlAssessmentOptionsOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, assessmentOptionsName, options },
      getOperationSpec,
    );
  }

  /**
   * ListByAssessmentProjectNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param nextLink The nextLink from the previous successful call to the ListByAssessmentProject
   *                 method.
   * @param options The options parameters.
   */
  private _listByAssessmentProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: SqlAssessmentOptionsOperationsListByAssessmentProjectNextOptionalParams,
  ): Promise<SqlAssessmentOptionsOperationsListByAssessmentProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByAssessmentProjectNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAssessmentProjectOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlAssessmentOptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlAssessmentOptionsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlAssessmentOptions/{assessmentOptionsName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlAssessmentOptions,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.assessmentOptionsName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByAssessmentProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlAssessmentOptionsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
