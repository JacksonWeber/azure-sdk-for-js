/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationDefinition,
  ApplicationDefinitionsListByResourceGroupOptionalParams,
  ApplicationDefinitionsListBySubscriptionOptionalParams,
  ApplicationDefinitionsGetOptionalParams,
  ApplicationDefinitionsGetResponse,
  ApplicationDefinitionsDeleteOptionalParams,
  ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ApplicationDefinitionsCreateOrUpdateResponse,
  ApplicationDefinitionPatchable,
  ApplicationDefinitionsUpdateOptionalParams,
  ApplicationDefinitionsUpdateResponse,
  ApplicationDefinitionsGetByIdOptionalParams,
  ApplicationDefinitionsGetByIdResponse,
  ApplicationDefinitionsDeleteByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdResponse,
  ApplicationDefinitionsUpdateByIdOptionalParams,
  ApplicationDefinitionsUpdateByIdResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationDefinitions. */
export interface ApplicationDefinitions {
  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApplicationDefinition>;
  /**
   * Lists all the application definitions within a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ApplicationDefinitionsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ApplicationDefinition>;
  /**
   * Gets the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsGetOptionalParams
  ): Promise<ApplicationDefinitionsGetResponse>;
  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates or updates a managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams
  ): Promise<ApplicationDefinitionsCreateOrUpdateResponse>;
  /**
   * Updates the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the update a managed application definition.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinitionPatchable,
    options?: ApplicationDefinitionsUpdateOptionalParams
  ): Promise<ApplicationDefinitionsUpdateResponse>;
  /**
   * Gets the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  getById(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsGetByIdOptionalParams
  ): Promise<ApplicationDefinitionsGetByIdResponse>;
  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  deleteById(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams
  ): Promise<void>;
  /**
   * Creates or updates a managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  createOrUpdateById(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams
  ): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse>;
  /**
   * Updates the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the update a managed application definition.
   * @param options The options parameters.
   */
  updateById(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinitionPatchable,
    options?: ApplicationDefinitionsUpdateByIdOptionalParams
  ): Promise<ApplicationDefinitionsUpdateByIdResponse>;
}
