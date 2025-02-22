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
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Gets all private endpoint connections on a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>,
      PrivateEndpointConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<void>;
}
