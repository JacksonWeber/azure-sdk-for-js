/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get whois information for a single domain name
 *
 * @summary Get whois information for a single domain name
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/enrichment/GetWhoisByDomainName.json
 */
async function getWhoisInformationForASingleDomainName(): Promise<void> {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] || "bd794837-4d29-4647-9105-6339bfdb4e6a";
  const resourceGroupName = process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const domain = "microsoft.com";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.domainWhois.get(resourceGroupName, domain);
  console.log(result);
}

async function main(): Promise<void> {
  await getWhoisInformationForASingleDomainName();
}

main().catch(console.error);
