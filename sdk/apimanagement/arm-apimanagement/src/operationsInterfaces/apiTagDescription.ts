/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TagDescriptionContract,
  ApiTagDescriptionListByServiceOptionalParams,
  ApiTagDescriptionGetEntityTagOptionalParams,
  ApiTagDescriptionGetEntityTagResponse,
  ApiTagDescriptionGetOptionalParams,
  ApiTagDescriptionGetResponse,
  TagDescriptionCreateParameters,
  ApiTagDescriptionCreateOrUpdateOptionalParams,
  ApiTagDescriptionCreateOrUpdateResponse,
  ApiTagDescriptionDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiTagDescription. */
export interface ApiTagDescription {
  /**
   * Lists all Tags descriptions in scope of API. Model similar to swagger - tagDescription is defined on
   * API level but tag may be assigned to the Operations
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiTagDescriptionListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<TagDescriptionContract>;
  /**
   * Gets the entity state version of the tag specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag
   *                         association. Based on API and Tag names.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    tagDescriptionId: string,
    options?: ApiTagDescriptionGetEntityTagOptionalParams,
  ): Promise<ApiTagDescriptionGetEntityTagResponse>;
  /**
   * Get Tag description in scope of API
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag
   *                         association. Based on API and Tag names.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    tagDescriptionId: string,
    options?: ApiTagDescriptionGetOptionalParams,
  ): Promise<ApiTagDescriptionGetResponse>;
  /**
   * Create/Update tag description in scope of the Api.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag
   *                         association. Based on API and Tag names.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    tagDescriptionId: string,
    parameters: TagDescriptionCreateParameters,
    options?: ApiTagDescriptionCreateOrUpdateOptionalParams,
  ): Promise<ApiTagDescriptionCreateOrUpdateResponse>;
  /**
   * Delete tag description for the Api.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag
   *                         association. Based on API and Tag names.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    tagDescriptionId: string,
    ifMatch: string,
    options?: ApiTagDescriptionDeleteOptionalParams,
  ): Promise<void>;
}
