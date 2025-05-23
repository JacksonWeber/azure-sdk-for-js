/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TemplateSpec,
  TemplateSpecsListBySubscriptionOptionalParams,
  TemplateSpecsListByResourceGroupOptionalParams,
  TemplateSpecsCreateOrUpdateOptionalParams,
  TemplateSpecsCreateOrUpdateResponse,
  TemplateSpecsUpdateOptionalParams,
  TemplateSpecsUpdateResponse,
  TemplateSpecsGetOptionalParams,
  TemplateSpecsGetResponse,
  TemplateSpecsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TemplateSpecs. */
export interface TemplateSpecs {
  /**
   * Lists all the Template Specs within the specified subscriptions.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: TemplateSpecsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<TemplateSpec>;
  /**
   * Lists all the Template Specs within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: TemplateSpecsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<TemplateSpec>;
  /**
   * Creates or updates a Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpec Template Spec supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpec: TemplateSpec,
    options?: TemplateSpecsCreateOrUpdateOptionalParams
  ): Promise<TemplateSpecsCreateOrUpdateResponse>;
  /**
   * Updates Template Spec tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecsUpdateOptionalParams
  ): Promise<TemplateSpecsUpdateResponse>;
  /**
   * Gets a Template Spec with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecsGetOptionalParams
  ): Promise<TemplateSpecsGetResponse>;
  /**
   * Deletes a Template Spec by name. When operation completes, status code 200 returned without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecsDeleteOptionalParams
  ): Promise<void>;
}
