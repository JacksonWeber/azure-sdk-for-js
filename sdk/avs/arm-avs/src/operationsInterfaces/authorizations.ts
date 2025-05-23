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
  ExpressRouteAuthorization,
  AuthorizationsListOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsGetResponse,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsCreateOrUpdateResponse,
  AuthorizationsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Authorizations. */
export interface Authorizations {
  /**
   * List ExpressRouteAuthorization resources by PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: AuthorizationsListOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRouteAuthorization>;
  /**
   * Get a ExpressRouteAuthorization
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param authorizationName Name of the ExpressRoute Circuit Authorization
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsGetOptionalParams,
  ): Promise<AuthorizationsGetResponse>;
  /**
   * Create a ExpressRouteAuthorization
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param authorizationName Name of the ExpressRoute Circuit Authorization
   * @param authorization Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    authorization: ExpressRouteAuthorization,
    options?: AuthorizationsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AuthorizationsCreateOrUpdateResponse>,
      AuthorizationsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a ExpressRouteAuthorization
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param authorizationName Name of the ExpressRoute Circuit Authorization
   * @param authorization Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    authorization: ExpressRouteAuthorization,
    options?: AuthorizationsCreateOrUpdateOptionalParams,
  ): Promise<AuthorizationsCreateOrUpdateResponse>;
  /**
   * Delete a ExpressRouteAuthorization
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param authorizationName Name of the ExpressRoute Circuit Authorization
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a ExpressRouteAuthorization
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param authorizationName Name of the ExpressRoute Circuit Authorization
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ): Promise<void>;
}
