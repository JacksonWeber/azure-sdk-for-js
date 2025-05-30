/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the details of a Virtual Hub Bgp Connection.
 *
 * @summary Retrieves the details of a Virtual Hub Bgp Connection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-07-01/examples/VirtualHubBgpConnectionGet.json
 */
async function virtualHubVirtualHubRouteTableV2Get(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "hub1";
  const connectionName = "conn1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubBgpConnection.get(
    resourceGroupName,
    virtualHubName,
    connectionName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await virtualHubVirtualHubRouteTableV2Get();
}

main().catch(console.error);
