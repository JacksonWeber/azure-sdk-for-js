// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to query entities in a table
 *
 * @summary queries entities in a table
 */

import { odata, TableClient } from "@azure/data-tables";

// Load the .env file if it exists
import "dotenv/config";
const tablesUrl = process.env["TABLES_URL"] || "";
const sasToken = process.env["SAS_TOKEN"] || "";

async function listEntities(): Promise<void> {
  console.log("== List entities Sample ==");

  // Note that this sample assumes that a table with tableName exists
  const tableName = `queryEntitiesTable`;
  console.log(tableName);

  // See authenticationMethods sample for other options of creating a new client
  const client = new TableClient(`${tablesUrl}${sasToken}`, tableName);
  // Create the table
  await client.createTable();

  const partitionKey = "Stationery";
  const marker: Entity = {
    partitionKey,
    rowKey: "1",
    name: "Markers",
    price: 5.0,
    quantity: 34
  };

  const planner: Entity = {
    partitionKey,
    rowKey: "2",
    name: "Planner",
    price: 7.0,
    quantity: 34
  };

  // create entities for marker and planner
  await client.createEntity(marker);
  await client.createEntity(planner);

  // List all entities with PartitionKey "Stationery"
  const listResults = client.listEntities<Entity>({
    queryOptions: { filter: odata`PartitionKey eq ${partitionKey}` }
  });

  for await (const product of listResults) {
    console.log(`${product.name}: ${product.price}`);
  }

  // List all entities with a price less than 6.0
  const priceListResults = client.listEntities({
    queryOptions: { filter: odata`price le 6` }
  });

  console.log("-- Products with a price less or equals to 6.00");
  for await (const product of priceListResults) {
    console.log(`${product.name}: ${product.price}`);
  }
}

// Sample of how to retreive the top N entities for a query
async function listTopNEntities(): Promise<void> {
  // This is the max number of items
  const topN = 1;
  const partitionKey = "Stationery";

  // Note that this sample assumes that a table with tableName exists
  const tableName = `queryEntitiesTable`;

  // See authenticationMethods sample for other options of creating a new client
  const client = new TableClient(`${tablesUrl}${sasToken}`, tableName);

  // List all entities with PartitionKey "Stationery"
  const listResults = client.listEntities<Entity>({
    queryOptions: {
      filter: odata`PartitionKey eq ${partitionKey}`
    }
  });

  let topEntities = [];
  const iterator = listResults.byPage({ maxPageSize: topN });

  for await (const page of iterator) {
    // Take the first page as the topEntires result
    topEntities = page;
    // We break to only get the first page
    // this only sends a single request to the service
    break;
  }

  console.log(`Top entities: ${topEntities.length}`);
  // Top entities: 1

  // Delete the table to cleanup
  await client.deleteTable();
}

interface Entity {
  partitionKey: string;
  rowKey: string;
  name: string;
  price: number;
  quantity: number;
}

export async function main(): Promise<void> {
  await listEntities();
  await listTopNEntities();
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
