/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to The skus action returns the list of SKUs that DMS (classic) supports.
 *
 * @summary The skus action returns the list of SKUs that DMS (classic) supports.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2025-03-15-preview/examples/ResourceSkus_ListSkus.json
 */
async function listSkus() {
  const subscriptionId = process.env["DATAMIGRATION_SUBSCRIPTION_ID"] || "subid";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.resourceSkus.listSkus()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listSkus();
}

main().catch(console.error);
