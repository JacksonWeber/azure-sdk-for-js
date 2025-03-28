/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ViewResourceFormat,
  ViewsListByHubOptionalParams,
  ViewsCreateOrUpdateOptionalParams,
  ViewsCreateOrUpdateResponse,
  ViewsGetOptionalParams,
  ViewsGetResponse,
  ViewsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Views. */
export interface Views {
  /**
   * Gets all available views for given user in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param userId The user ID. Use * to retrieve hub level views.
   * @param options The options parameters.
   */
  listByHub(
    resourceGroupName: string,
    hubName: string,
    userId: string,
    options?: ViewsListByHubOptionalParams
  ): PagedAsyncIterableIterator<ViewResourceFormat>;
  /**
   * Creates a view or updates an existing view in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param viewName The name of the view.
   * @param parameters Parameters supplied to the CreateOrUpdate View operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hubName: string,
    viewName: string,
    parameters: ViewResourceFormat,
    options?: ViewsCreateOrUpdateOptionalParams
  ): Promise<ViewsCreateOrUpdateResponse>;
  /**
   * Gets a view in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param viewName The name of the view.
   * @param userId The user ID. Use * to retrieve hub level view.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    viewName: string,
    userId: string,
    options?: ViewsGetOptionalParams
  ): Promise<ViewsGetResponse>;
  /**
   * Deletes a view in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param viewName The name of the view.
   * @param userId The user ID. Use * to retrieve hub level view.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hubName: string,
    viewName: string,
    userId: string,
    options?: ViewsDeleteOptionalParams
  ): Promise<void>;
}
