/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ConfluentManagementClient } from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all operations provided by Microsoft.Confluent.
 *
 * @summary List all operations provided by Microsoft.Confluent.
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2024-02-13/examples/OrganizationOperations_List.json
 */
async function organizationOperationsList() {
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.organizationOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  organizationOperationsList();
}

main().catch(console.error);
