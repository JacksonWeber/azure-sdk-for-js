/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkflowEnvelope,
  LogicAppsListWorkflowsOptionalParams,
  LogicAppsGetOptionalParams,
  LogicAppsGetResponse,
  LogicApp,
  LogicAppsCreateOrUpdateOptionalParams,
  LogicAppsCreateOrUpdateResponse,
  LogicAppsDeleteOptionalParams,
  LogicAppsGetWorkflowOptionalParams,
  LogicAppsGetWorkflowResponse,
  LogicAppsDeployWorkflowArtifactsOptionalParams,
  LogicAppsListWorkflowsConnectionsOptionalParams,
  LogicAppsListWorkflowsConnectionsResponse,
  LogicAppsProxyMethod,
  LogicAppsInvokeOptionalParams,
  LogicAppsInvokeResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LogicApps. */
export interface LogicApps {
  /**
   * List the workflows for a logic app.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param options The options parameters.
   */
  listWorkflows(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    options?: LogicAppsListWorkflowsOptionalParams,
  ): PagedAsyncIterableIterator<WorkflowEnvelope>;
  /**
   * Gets a logic app extension resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    options?: LogicAppsGetOptionalParams,
  ): Promise<LogicAppsGetResponse>;
  /**
   * Create or update a Logic App extension resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param resource Logic app resource properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    resource: LogicApp,
    options?: LogicAppsCreateOrUpdateOptionalParams,
  ): Promise<LogicAppsCreateOrUpdateResponse>;
  /**
   * Deletes a Logic App extension resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    options?: LogicAppsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get workflow information by its name
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param workflowName Workflow name.
   * @param options The options parameters.
   */
  getWorkflow(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    workflowName: string,
    options?: LogicAppsGetWorkflowOptionalParams,
  ): Promise<LogicAppsGetWorkflowResponse>;
  /**
   * Creates or updates the artifacts for the logic app
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param options The options parameters.
   */
  deployWorkflowArtifacts(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    options?: LogicAppsDeployWorkflowArtifactsOptionalParams,
  ): Promise<void>;
  /**
   * Gets logic app's connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the Logic App, the extension resource.
   * @param options The options parameters.
   */
  listWorkflowsConnections(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    options?: LogicAppsListWorkflowsConnectionsOptionalParams,
  ): Promise<LogicAppsListWorkflowsConnectionsResponse>;
  /**
   * Proxies a the API call to the logic app backed by the container app.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param logicAppName Name of the LogicApp App, the extension resource.
   * @param xMsLogicAppsProxyPath The proxy path for the API call
   * @param xMsLogicAppsProxyMethod The proxy method for the API call
   * @param options The options parameters.
   */
  invoke(
    resourceGroupName: string,
    containerAppName: string,
    logicAppName: string,
    xMsLogicAppsProxyPath: string,
    xMsLogicAppsProxyMethod: LogicAppsProxyMethod,
    options?: LogicAppsInvokeOptionalParams,
  ): Promise<LogicAppsInvokeResponse>;
}
