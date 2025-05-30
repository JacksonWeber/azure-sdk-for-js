/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Updates the specific named value.
 *
 * @summary Updates the specific named value.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2024-05-01/examples/ApiManagementUpdateNamedValue.json
 */
async function apiManagementUpdateNamedValue() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop2";
  const ifMatch = "*";
  const parameters = {
    displayName: "prop3name",
    secret: false,
    tags: ["foo", "bar2"],
    value: "propValue",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    namedValueId,
    ifMatch,
    parameters,
  );
  console.log(result);
}

async function main() {
  await apiManagementUpdateNamedValue();
}

main().catch(console.error);
