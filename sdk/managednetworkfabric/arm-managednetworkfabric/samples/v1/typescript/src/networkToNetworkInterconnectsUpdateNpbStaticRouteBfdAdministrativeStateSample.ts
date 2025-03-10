/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  UpdateAdministrativeState,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the NPB Static Route BFD Administrative State.
 *
 * @summary Updates the NPB Static Route BFD Administrative State.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkToNetworkInterconnects_updateNpbStaticRouteBfdAdministrativeState_MaximumSet_Gen.json
 */
async function networkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkFabricName = "example-fabric";
  const networkToNetworkInterconnectName = "example-nni";
  const body: UpdateAdministrativeState = {
    resourceIds: [""],
    state: "Enable"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.networkToNetworkInterconnects.beginUpdateNpbStaticRouteBfdAdministrativeStateAndWait(
    resourceGroupName,
    networkFabricName,
    networkToNetworkInterconnectName,
    body
  );
  console.log(result);
}

async function main(): Promise<void> {
  networkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateMaximumSetGen();
}

main().catch(console.error);
