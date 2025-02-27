/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ClientGroupMember,
  ClientGroupsListMembersOptionalParams,
  ClientGroupsGetOptionalParams,
  ClientGroupsGetResponse,
  ClientGroupsGetMembersCountOptionalParams,
  ClientGroupsGetMembersCountResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClientGroups. */
export interface ClientGroups {
  /**
   * Returns the members of the client group during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param clientGroupName Client Group resource name.
   * @param options The options parameters.
   */
  listMembers(
    resourceGroupName: string,
    workspaceName: string,
    clientGroupName: string,
    options?: ClientGroupsListMembersOptionalParams
  ): PagedAsyncIterableIterator<ClientGroupMember>;
  /**
   * Retrieves the specified client group
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param clientGroupName Client Group resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    clientGroupName: string,
    options?: ClientGroupsGetOptionalParams
  ): Promise<ClientGroupsGetResponse>;
  /**
   * Returns the approximate number of members in the client group.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param clientGroupName Client Group resource name.
   * @param options The options parameters.
   */
  getMembersCount(
    resourceGroupName: string,
    workspaceName: string,
    clientGroupName: string,
    options?: ClientGroupsGetMembersCountOptionalParams
  ): Promise<ClientGroupsGetMembersCountResponse>;
}
