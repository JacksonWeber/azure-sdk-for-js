// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient, { paginate } from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets information about all public IP addresses on a virtual machine scale set level.
 *
 * @summary Gets information about all public IP addresses on a virtual machine scale set level.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VmssPublicIpListAll.json
 */
async function listVmssPublicIP(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "vmss-tester";
  const virtualMachineScaleSetName = "vmss1";
  const options: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesParameters = {
    queryParameters: { "api-version": "2018-10-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/publicipaddresses",
      subscriptionId,
      resourceGroupName,
      virtualMachineScaleSetName,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

listVmssPublicIP().catch(console.error);
