/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IoTFirmwareDefenseClient } from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all of firmwares inside a workspace.
 *
 * @summary Lists all of firmwares inside a workspace.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Firmwares_ListByWorkspace_MaximumSet_Gen.json
 */
async function firmwaresListByWorkspaceMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] ||
    "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firmwares.listByWorkspace(
    resourceGroupName,
    workspaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all of firmwares inside a workspace.
 *
 * @summary Lists all of firmwares inside a workspace.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Firmwares_ListByWorkspace_MinimumSet_Gen.json
 */
async function firmwaresListByWorkspaceMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] ||
    "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firmwares.listByWorkspace(
    resourceGroupName,
    workspaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  firmwaresListByWorkspaceMaximumSetGen();
  firmwaresListByWorkspaceMinimumSetGen();
}

main().catch(console.error);
