/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Describes the list of Azure Arc PrivateLinkScope resources. */
export interface KubernetesConfigurationPrivateLinkScopeListResult {
  /** List of Azure Arc PrivateLinkScope definitions. */
  value: KubernetesConfigurationPrivateLinkScope[];
  /** The URI to get the next set of Azure Arc PrivateLinkScope definitions if too many PrivateLinkScopes where returned in the result set. */
  nextLink?: string;
}

/** Properties that define a Azure Arc PrivateLinkScope resource. */
export interface KubernetesConfigurationPrivateLinkScopeProperties {
  /** Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. */
  publicNetworkAccess?: PublicNetworkAccessType;
  /**
   * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Managed Cluster ARM ID for the private link scope  (Required) */
  clusterResourceId: string;
  /**
   * The Guid id of the private link scope.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateLinkScopeId?: string;
  /**
   * The collection of associated Private Endpoint Connections.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkScope instance. */
export interface TagsResource {
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** A list of private link resources */
export interface PrivateLinkResourceListResult {
  /** Array of private link resources */
  value?: PrivateLinkResource[];
}

/** List of private endpoint connection associated with the specified storage account */
export interface PrivateEndpointConnectionListResult {
  /** Array of private endpoint connections */
  value?: PrivateEndpointConnection[];
}

/** The Private Endpoint Connection resource. */
export interface PrivateEndpointConnection extends Resource {
  /** The resource of private end point. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** A private link resource */
export interface PrivateLinkResource extends Resource {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource Private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** An Azure Arc PrivateLinkScope definition. */
export interface KubernetesConfigurationPrivateLinkScope
  extends TrackedResource {
  /** Properties that define a Azure Arc PrivateLinkScope resource. */
  properties?: KubernetesConfigurationPrivateLinkScopeProperties;
}

/** Known values of {@link PublicNetworkAccessType} that the service accepts. */
export enum KnownPublicNetworkAccessType {
  /** Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints. */
  Enabled = "Enabled",
  /** Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link. */
  Disabled = "Disabled",
}

/**
 * Defines values for PublicNetworkAccessType. \
 * {@link KnownPublicNetworkAccessType} can be used interchangeably with PublicNetworkAccessType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints. \
 * **Disabled**: Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link.
 */
export type PublicNetworkAccessType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Creating** \
 * **Updating** \
 * **Deleting**
 */
export type ProvisioningState = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected",
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Optional parameters. */
export interface PrivateLinkScopesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateLinkScopesListResponse =
  KubernetesConfigurationPrivateLinkScopeListResult;

/** Optional parameters. */
export interface PrivateLinkScopesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type PrivateLinkScopesListByResourceGroupResponse =
  KubernetesConfigurationPrivateLinkScopeListResult;

/** Optional parameters. */
export interface PrivateLinkScopesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrivateLinkScopesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkScopesGetResponse =
  KubernetesConfigurationPrivateLinkScope;

/** Optional parameters. */
export interface PrivateLinkScopesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type PrivateLinkScopesCreateOrUpdateResponse =
  KubernetesConfigurationPrivateLinkScope;

/** Optional parameters. */
export interface PrivateLinkScopesUpdateTagsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateTags operation. */
export type PrivateLinkScopesUpdateTagsResponse =
  KubernetesConfigurationPrivateLinkScope;

/** Optional parameters. */
export interface PrivateLinkScopesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type PrivateLinkScopesListNextResponse =
  KubernetesConfigurationPrivateLinkScopeListResult;

/** Optional parameters. */
export interface PrivateLinkScopesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type PrivateLinkScopesListByResourceGroupNextResponse =
  KubernetesConfigurationPrivateLinkScopeListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesListByPrivateLinkScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByPrivateLinkScope operation. */
export type PrivateLinkResourcesListByPrivateLinkScopeResponse =
  PrivateLinkResourceListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse =
  PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByPrivateLinkScope operation. */
export type PrivateEndpointConnectionsListByPrivateLinkScopeResponse =
  PrivateEndpointConnectionListResult;

/** Optional parameters. */
export interface PrivateLinkScopesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
