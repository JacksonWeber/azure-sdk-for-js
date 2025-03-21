/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { QumuloStorage } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete a FileSystemResource
 *
 * @summary Delete a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_Delete_MaximumSet_Gen.json
 */
async function fileSystemsDeleteMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "ulseeqylxb";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "nauwwbfoqehgbhdsmkewoboyxeqg";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginDeleteAndWait(
    resourceGroupName,
    fileSystemName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a FileSystemResource
 *
 * @summary Delete a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_Delete_MinimumSet_Gen.json
 */
async function fileSystemsDeleteMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "ulseeqylxb";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "nauwwbfoqehgbhdsmkewoboyxeqg";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginDeleteAndWait(
    resourceGroupName,
    fileSystemName
  );
  console.log(result);
}

async function main(): Promise<void> {
  fileSystemsDeleteMaximumSetGen();
  fileSystemsDeleteMinimumSetGen();
}

main().catch(console.error);
