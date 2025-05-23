/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkResourcesListByStorageAccountOptionalParams,
  PrivateLinkResourcesListByStorageAccountResponse
} from "../models/index.js";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources that need to be created for a storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  listByStorageAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByStorageAccountOptionalParams
  ): Promise<PrivateLinkResourcesListByStorageAccountResponse>;
}
