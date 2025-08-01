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
  DiskRestorePoint,
  DiskRestorePointListByRestorePointOptionalParams,
  DiskRestorePointGetOptionalParams,
  DiskRestorePointGetResponse,
  GrantAccessData,
  DiskRestorePointGrantAccessOptionalParams,
  DiskRestorePointGrantAccessResponse,
  DiskRestorePointRevokeAccessOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiskRestorePointOperations. */
export interface DiskRestorePointOperations {
  /**
   * Lists diskRestorePoints under a vmRestorePoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param options The options parameters.
   */
  listByRestorePoint(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams,
  ): PagedAsyncIterableIterator<DiskRestorePoint>;
  /**
   * Get disk restorePoint resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the DiskRestorePoint
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointGetOptionalParams,
  ): Promise<DiskRestorePointGetResponse>;
  /**
   * Grants access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the DiskRestorePoint
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  beginGrantAccess(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    grantAccessData: GrantAccessData,
    options?: DiskRestorePointGrantAccessOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DiskRestorePointGrantAccessResponse>,
      DiskRestorePointGrantAccessResponse
    >
  >;
  /**
   * Grants access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the DiskRestorePoint
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  beginGrantAccessAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    grantAccessData: GrantAccessData,
    options?: DiskRestorePointGrantAccessOptionalParams,
  ): Promise<DiskRestorePointGrantAccessResponse>;
  /**
   * Revokes access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the DiskRestorePoint
   * @param options The options parameters.
   */
  beginRevokeAccess(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointRevokeAccessOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Revokes access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the DiskRestorePoint
   * @param options The options parameters.
   */
  beginRevokeAccessAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointRevokeAccessOptionalParams,
  ): Promise<void>;
}
