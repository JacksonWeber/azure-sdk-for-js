/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ResourcePatch, ResourcePoolsUpdateOptionalParams } from "@azure/arm-connectedvmware";
import { AzureArcVMwareManagementServiceAPI } from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to API to update certain properties of the resourcePool resource.
 *
 * @summary API to update certain properties of the resourcePool resource.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/UpdateResourcePool.json
 */
async function updateResourcePool(): Promise<void> {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] || "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const resourcePoolName = "HRPool";
  const body: ResourcePatch = { tags: { tag1: "value1", tag2: "value2" } };
  const options: ResourcePoolsUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.resourcePools.update(resourceGroupName, resourcePoolName, options);
  console.log(result);
}

async function main(): Promise<void> {
  await updateResourcePool();
}

main().catch(console.error);
