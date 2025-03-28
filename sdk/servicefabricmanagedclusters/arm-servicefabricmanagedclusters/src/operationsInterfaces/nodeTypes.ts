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
  NodeType,
  NodeTypesListByManagedClustersOptionalParams,
  NodeTypeActionParameters,
  NodeTypesRestartOptionalParams,
  NodeTypesReimageOptionalParams,
  NodeTypesDeleteNodeOptionalParams,
  NodeTypesGetOptionalParams,
  NodeTypesGetResponse,
  NodeTypesCreateOrUpdateOptionalParams,
  NodeTypesCreateOrUpdateResponse,
  NodeTypeUpdateParameters,
  NodeTypesUpdateOptionalParams,
  NodeTypesUpdateResponse,
  NodeTypesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NodeTypes. */
export interface NodeTypes {
  /**
   * Gets all Node types of the specified managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  listByManagedClusters(
    resourceGroupName: string,
    clusterName: string,
    options?: NodeTypesListByManagedClustersOptionalParams,
  ): PagedAsyncIterableIterator<NodeType>;
  /**
   * Restarts one or more nodes on the node type. It will disable the fabric nodes, trigger a restart on
   * the VMs and activate the nodes back again.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for restart action.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesRestartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Restarts one or more nodes on the node type. It will disable the fabric nodes, trigger a restart on
   * the VMs and activate the nodes back again.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for restart action.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesRestartOptionalParams,
  ): Promise<void>;
  /**
   * Reimages one or more nodes on the node type. It will disable the fabric nodes, trigger a reimage on
   * the VMs and activate the nodes back again.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for reimage action.
   * @param options The options parameters.
   */
  beginReimage(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesReimageOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Reimages one or more nodes on the node type. It will disable the fabric nodes, trigger a reimage on
   * the VMs and activate the nodes back again.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for reimage action.
   * @param options The options parameters.
   */
  beginReimageAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesReimageOptionalParams,
  ): Promise<void>;
  /**
   * Deletes one or more nodes on the node type. It will disable the fabric nodes, trigger a delete on
   * the VMs and removes the state from the cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for delete action.
   * @param options The options parameters.
   */
  beginDeleteNode(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesDeleteNodeOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes one or more nodes on the node type. It will disable the fabric nodes, trigger a delete on
   * the VMs and removes the state from the cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters parameters for delete action.
   * @param options The options parameters.
   */
  beginDeleteNodeAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeActionParameters,
    options?: NodeTypesDeleteNodeOptionalParams,
  ): Promise<void>;
  /**
   * Get a Service Fabric node type of a given managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    options?: NodeTypesGetOptionalParams,
  ): Promise<NodeTypesGetResponse>;
  /**
   * Create or update a Service Fabric node type of a given managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters The node type resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeType,
    options?: NodeTypesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NodeTypesCreateOrUpdateResponse>,
      NodeTypesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Service Fabric node type of a given managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters The node type resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeType,
    options?: NodeTypesCreateOrUpdateOptionalParams,
  ): Promise<NodeTypesCreateOrUpdateResponse>;
  /**
   * Update the configuration of a node type of a given managed cluster, only updating tags.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters The parameters to update the node type configuration.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeUpdateParameters,
    options?: NodeTypesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NodeTypesUpdateResponse>,
      NodeTypesUpdateResponse
    >
  >;
  /**
   * Update the configuration of a node type of a given managed cluster, only updating tags.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param parameters The parameters to update the node type configuration.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    parameters: NodeTypeUpdateParameters,
    options?: NodeTypesUpdateOptionalParams,
  ): Promise<NodeTypesUpdateResponse>;
  /**
   * Delete a Service Fabric node type of a given managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    options?: NodeTypesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Service Fabric node type of a given managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param nodeTypeName The name of the node type.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    nodeTypeName: string,
    options?: NodeTypesDeleteOptionalParams,
  ): Promise<void>;
}
