// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ApplicationGatewaysGetSslPredefinedPolicyParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets Ssl predefined policy with the specified policy name.
 *
 * @summary Gets Ssl predefined policy with the specified policy name.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ApplicationGatewayAvailableSslOptionsPredefinedPolicyGet.json
 */
async function getAvailableSslPredefinedPolicyByName(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const predefinedPolicyName = "AppGwSslPolicy20150501";
  const options: ApplicationGatewaysGetSslPredefinedPolicyParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies/{predefinedPolicyName}",
      subscriptionId,
      predefinedPolicyName,
    )
    .get(options);
  console.log(result);
}

getAvailableSslPredefinedPolicyByName().catch(console.error);
