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
  Cluster,
  ClustersListBySubscriptionOptionalParams,
  ClustersListByResourceGroupOptionalParams,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersCreateOptionalParams,
  ClustersCreateResponse,
  ClusterPatch,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  UploadCertificateRequest,
  ClustersUploadCertificateOptionalParams,
  ClustersCreateIdentityOptionalParams,
  ClustersCreateIdentityResponse,
  SoftwareAssuranceChangeRequest,
  ClustersExtendSoftwareAssuranceBenefitOptionalParams,
  ClustersExtendSoftwareAssuranceBenefitResponse,
  LogCollectionRequest,
  ClustersTriggerLogCollectionOptionalParams,
  ClustersTriggerLogCollectionResponse,
  RemoteSupportRequest,
  ClustersConfigureRemoteSupportOptionalParams,
  ClustersConfigureRemoteSupportResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * List all HCI clusters in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ClustersListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * List all HCI clusters in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Get HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ): Promise<ClustersGetResponse>;
  /**
   * Create an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster Details of the HCI cluster.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOptionalParams,
  ): Promise<ClustersCreateResponse>;
  /**
   * Update an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster Details of the HCI cluster.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    cluster: ClusterPatch,
    options?: ClustersUpdateOptionalParams,
  ): Promise<ClustersUpdateResponse>;
  /**
   * Delete an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an HCI cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Upload certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param uploadCertificateRequest Upload certificate request.
   * @param options The options parameters.
   */
  beginUploadCertificate(
    resourceGroupName: string,
    clusterName: string,
    uploadCertificateRequest: UploadCertificateRequest,
    options?: ClustersUploadCertificateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Upload certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param uploadCertificateRequest Upload certificate request.
   * @param options The options parameters.
   */
  beginUploadCertificateAndWait(
    resourceGroupName: string,
    clusterName: string,
    uploadCertificateRequest: UploadCertificateRequest,
    options?: ClustersUploadCertificateOptionalParams,
  ): Promise<void>;
  /**
   * Create cluster identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginCreateIdentity(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersCreateIdentityOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersCreateIdentityResponse>,
      ClustersCreateIdentityResponse
    >
  >;
  /**
   * Create cluster identity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginCreateIdentityAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersCreateIdentityOptionalParams,
  ): Promise<ClustersCreateIdentityResponse>;
  /**
   * Extends Software Assurance Benefit to a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param softwareAssuranceChangeRequest Software Assurance Change Request Payload
   * @param options The options parameters.
   */
  beginExtendSoftwareAssuranceBenefit(
    resourceGroupName: string,
    clusterName: string,
    softwareAssuranceChangeRequest: SoftwareAssuranceChangeRequest,
    options?: ClustersExtendSoftwareAssuranceBenefitOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersExtendSoftwareAssuranceBenefitResponse>,
      ClustersExtendSoftwareAssuranceBenefitResponse
    >
  >;
  /**
   * Extends Software Assurance Benefit to a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param softwareAssuranceChangeRequest Software Assurance Change Request Payload
   * @param options The options parameters.
   */
  beginExtendSoftwareAssuranceBenefitAndWait(
    resourceGroupName: string,
    clusterName: string,
    softwareAssuranceChangeRequest: SoftwareAssuranceChangeRequest,
    options?: ClustersExtendSoftwareAssuranceBenefitOptionalParams,
  ): Promise<ClustersExtendSoftwareAssuranceBenefitResponse>;
  /**
   * Trigger Log Collection on a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param logCollectionRequest Trigger Log Collection Request Payload
   * @param options The options parameters.
   */
  beginTriggerLogCollection(
    resourceGroupName: string,
    clusterName: string,
    logCollectionRequest: LogCollectionRequest,
    options?: ClustersTriggerLogCollectionOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersTriggerLogCollectionResponse>,
      ClustersTriggerLogCollectionResponse
    >
  >;
  /**
   * Trigger Log Collection on a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param logCollectionRequest Trigger Log Collection Request Payload
   * @param options The options parameters.
   */
  beginTriggerLogCollectionAndWait(
    resourceGroupName: string,
    clusterName: string,
    logCollectionRequest: LogCollectionRequest,
    options?: ClustersTriggerLogCollectionOptionalParams,
  ): Promise<ClustersTriggerLogCollectionResponse>;
  /**
   * Configure RemoteSupport on a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param remoteSupportRequest Configure Remote Support Request Payload
   * @param options The options parameters.
   */
  beginConfigureRemoteSupport(
    resourceGroupName: string,
    clusterName: string,
    remoteSupportRequest: RemoteSupportRequest,
    options?: ClustersConfigureRemoteSupportOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersConfigureRemoteSupportResponse>,
      ClustersConfigureRemoteSupportResponse
    >
  >;
  /**
   * Configure RemoteSupport on a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param remoteSupportRequest Configure Remote Support Request Payload
   * @param options The options parameters.
   */
  beginConfigureRemoteSupportAndWait(
    resourceGroupName: string,
    clusterName: string,
    remoteSupportRequest: RemoteSupportRequest,
    options?: ClustersConfigureRemoteSupportOptionalParams,
  ): Promise<ClustersConfigureRemoteSupportResponse>;
}
