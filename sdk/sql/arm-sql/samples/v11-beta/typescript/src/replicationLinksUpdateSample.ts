/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ReplicationLinkUpdate, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the replication link type.
 *
 * @summary Updates the replication link type.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/ReplicationLinkUpdate.json
 */
async function updateReplicationLink(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const serverName = "sourcesvr";
  const databaseName = "gamma-db";
  const linkId = "00000000-1111-2222-3333-666666666666";
  const parameters: ReplicationLinkUpdate = { linkType: "STANDBY" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.replicationLinks.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    linkId,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateReplicationLink();
}

main().catch(console.error);
