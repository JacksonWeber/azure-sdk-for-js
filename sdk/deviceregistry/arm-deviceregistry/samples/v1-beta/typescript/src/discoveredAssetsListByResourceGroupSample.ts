// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryManagementClient } from "@azure/arm-deviceregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list DiscoveredAsset resources by resource group
 *
 * @summary list DiscoveredAsset resources by resource group
 * x-ms-original-file: 2024-09-01-preview/List_DiscoveredAssets_ResourceGroup.json
 */
async function listDiscoveredAssetsResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.discoveredAssets.listByResourceGroup("myResourceGroup")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  listDiscoveredAssetsResourceGroup();
}

main().catch(console.error);
