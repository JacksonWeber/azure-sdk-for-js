/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GrantAccessData, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Grants access to a diskRestorePoint.
 *
 * @summary Grants access to a diskRestorePoint.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2025-01-02/examples/diskRestorePointExamples/DiskRestorePoint_BeginGetAccess.json
 */
async function grantsAccessToADiskRestorePoint(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const restorePointCollectionName = "rpc";
  const vmRestorePointName = "vmrp";
  const diskRestorePointName =
    "TestDisk45ceb03433006d1baee0_b70cd924-3362-4a80-93c2-9415eaa12745";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300,
    fileFormat: "VHDX",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.diskRestorePointOperations.beginGrantAccessAndWait(
      resourceGroupName,
      restorePointCollectionName,
      vmRestorePointName,
      diskRestorePointName,
      grantAccessData,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await grantsAccessToADiskRestorePoint();
}

main().catch(console.error);
