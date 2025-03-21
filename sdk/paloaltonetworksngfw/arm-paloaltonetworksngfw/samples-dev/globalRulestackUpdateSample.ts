/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { GlobalRulestackResourceUpdate } from "@azure/arm-paloaltonetworksngfw";
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a GlobalRulestackResource
 *
 * @summary Update a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_Update_MaximumSet_Gen.json
 */
async function globalRulestackUpdateMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const properties: GlobalRulestackResourceUpdate = {
    identity: {
      type: "None",
      userAssignedIdentities: {
        key16: { clientId: "aaaa", principalId: "aaaaaaaaaaaaaaa" },
      },
    },
    location: "eastus",
    properties: {
      description: "global rulestacks",
      associatedSubscriptions: ["2bf4a339-294d-4c25-b0b2-ef649e9f5c27"],
      defaultMode: "IPS",
      minAppIdVersion: "8.5.3",
      panEtag: "2bf4a339-294d-4c25-b0b2-ef649e9f5c12",
      panLocation: "eastus",
      scope: "GLOBAL",
      securityServices: {
        antiSpywareProfile: "default",
        antiVirusProfile: "default",
        dnsSubscription: "default",
        fileBlockingProfile: "default",
        outboundTrustCertificate: "default",
        outboundUnTrustCertificate: "default",
        urlFilteringProfile: "default",
        vulnerabilityProfile: "default",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.update(globalRulestackName, properties);
  console.log(result);
}

/**
 * This sample demonstrates how to Update a GlobalRulestackResource
 *
 * @summary Update a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_Update_MinimumSet_Gen.json
 */
async function globalRulestackUpdateMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const properties: GlobalRulestackResourceUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.update(globalRulestackName, properties);
  console.log(result);
}

async function main(): Promise<void> {
  await globalRulestackUpdateMaximumSetGen();
  await globalRulestackUpdateMinimumSetGen();
}

main().catch(console.error);
