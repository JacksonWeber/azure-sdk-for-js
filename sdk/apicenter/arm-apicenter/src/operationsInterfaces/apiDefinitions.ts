/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApiDefinition,
  ApiDefinitionsListOptionalParams,
  ApiDefinitionsGetOptionalParams,
  ApiDefinitionsGetResponse,
  ApiDefinitionsCreateOrUpdateOptionalParams,
  ApiDefinitionsCreateOrUpdateResponse,
  ApiDefinitionsDeleteOptionalParams,
  ApiDefinitionsHeadOptionalParams,
  ApiDefinitionsHeadResponse,
  ApiDefinitionsExportSpecificationOptionalParams,
  ApiDefinitionsExportSpecificationResponse,
  ApiSpecImportRequest,
  ApiDefinitionsImportSpecificationOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiDefinitions. */
export interface ApiDefinitions {
  /**
   * Returns a collection of API definitions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    options?: ApiDefinitionsListOptionalParams,
  ): PagedAsyncIterableIterator<ApiDefinition>;
  /**
   * Returns details of the API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsGetOptionalParams,
  ): Promise<ApiDefinitionsGetResponse>;
  /**
   * Creates new or updates existing API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    resource: ApiDefinition,
    options?: ApiDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<ApiDefinitionsCreateOrUpdateResponse>;
  /**
   * Deletes specified API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Checks if specified API definition exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsHeadOptionalParams,
  ): Promise<ApiDefinitionsHeadResponse>;
  /**
   * Exports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  beginExportSpecification(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsExportSpecificationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiDefinitionsExportSpecificationResponse>,
      ApiDefinitionsExportSpecificationResponse
    >
  >;
  /**
   * Exports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  beginExportSpecificationAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsExportSpecificationOptionalParams,
  ): Promise<ApiDefinitionsExportSpecificationResponse>;
  /**
   * Imports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginImportSpecification(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    body: ApiSpecImportRequest,
    options?: ApiDefinitionsImportSpecificationOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Imports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginImportSpecificationAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    body: ApiSpecImportRequest,
    options?: ApiDefinitionsImportSpecificationOptionalParams,
  ): Promise<void>;
}
