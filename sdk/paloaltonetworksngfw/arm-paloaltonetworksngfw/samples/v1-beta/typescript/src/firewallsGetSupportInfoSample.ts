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
  FirewallsGetSupportInfoOptionalParams,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to support info for firewall.
 *
 * @summary support info for firewall.
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/Firewalls_getSupportInfo_MaximumSet_Gen.json
 */
async function firewallsGetSupportInfoMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const firewallName = "firewall1";
  const email = "user1@domain.com";
  const options: FirewallsGetSupportInfoOptionalParams = { email };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.firewalls.getSupportInfo(
    resourceGroupName,
    firewallName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to support info for firewall.
 *
 * @summary support info for firewall.
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/Firewalls_getSupportInfo_MinimumSet_Gen.json
 */
async function firewallsGetSupportInfoMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const firewallName = "firewall1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.firewalls.getSupportInfo(
    resourceGroupName,
    firewallName
  );
  console.log(result);
}

async function main() {
  firewallsGetSupportInfoMaximumSetGen();
  firewallsGetSupportInfoMinimumSetGen();
}

main().catch(console.error);