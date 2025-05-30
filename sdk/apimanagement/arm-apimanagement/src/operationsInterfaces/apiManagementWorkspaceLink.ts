/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ApiManagementWorkspaceLinkGetOptionalParams,
  ApiManagementWorkspaceLinkGetResponse,
} from "../models/index.js";

/** Interface representing a ApiManagementWorkspaceLink. */
export interface ApiManagementWorkspaceLink {
  /**
   * Gets an API Management WorkspaceLink resource description.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: ApiManagementWorkspaceLinkGetOptionalParams,
  ): Promise<ApiManagementWorkspaceLinkGetResponse>;
}
