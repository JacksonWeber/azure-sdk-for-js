/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Cutover online migration operation for the database.
 *
 * @summary Cutover online migration operation for the database.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/SqlVmCutoverDatabaseMigration.json
 */
const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

async function cutoverOnlineMigrationOperationForTheDatabase() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineName = "testvm";
  const targetDbName = "db1";
  const parameters = {
    migrationOperationId: "4124fe90-d1b6-4b50-b4d9-46d02381f59a",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.databaseMigrationsSqlVm.beginCutoverAndWait(
    resourceGroupName,
    sqlVirtualMachineName,
    targetDbName,
    parameters,
  );
  console.log(result);
}

cutoverOnlineMigrationOperationForTheDatabase().catch(console.error);
