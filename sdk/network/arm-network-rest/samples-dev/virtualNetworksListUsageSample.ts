// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { VirtualNetworksListUsageParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient, { paginate } from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists usage stats.
 *
 * @summary Lists usage stats.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualNetworkListUsage.json
 */
async function vnetGetUsage(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const virtualNetworkName = "vnetName";
  const options: VirtualNetworksListUsageParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/usages",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

vnetGetUsage().catch(console.error);
