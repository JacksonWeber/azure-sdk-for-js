// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { DscpConfigurationGetParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a DSCP Configuration.
 *
 * @summary Gets a DSCP Configuration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/DscpConfigurationGet.json
 */
async function getDscpConfiguration(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const dscpConfigurationName = "mydscpConfig";
  const options: DscpConfigurationGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dscpConfigurations/{dscpConfigurationName}",
      subscriptionId,
      resourceGroupName,
      dscpConfigurationName,
    )
    .get(options);
  console.log(result);
}

getDscpConfiguration().catch(console.error);
