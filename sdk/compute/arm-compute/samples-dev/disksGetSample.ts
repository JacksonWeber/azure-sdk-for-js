/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets information about a disk.
 *
 * @summary Gets information about a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2025-01-02/examples/diskExamples/Disk_Get.json
 */
async function getInformationAboutAManagedDisk(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myManagedDisk";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.get(resourceGroupName, diskName);
  console.log(result);
}

async function main(): Promise<void> {
  await getInformationAboutAManagedDisk();
}

main().catch(console.error);
