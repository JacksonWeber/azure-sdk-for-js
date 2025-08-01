/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  RestorePointsGetOptionalParams,
  RestorePointsGetResponse,
  RestorePoint,
  RestorePointsCreateOptionalParams,
  RestorePointsCreateResponse,
  RestorePointsDeleteOptionalParams,
} from "../models/index.js";

/** Interface representing a RestorePoints. */
export interface RestorePoints {
  /**
   * The operation to get the restore point.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsGetOptionalParams,
  ): Promise<RestorePointsGetResponse>;
  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<RestorePointsCreateResponse>,
      RestorePointsCreateResponse
    >
  >;
  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams,
  ): Promise<RestorePointsCreateResponse>;
  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams,
  ): Promise<void>;
}
