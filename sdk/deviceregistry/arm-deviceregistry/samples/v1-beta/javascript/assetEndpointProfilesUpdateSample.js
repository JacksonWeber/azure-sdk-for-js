/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DeviceRegistryManagementClient } = require("@azure/arm-deviceregistry");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update a AssetEndpointProfile
 *
 * @summary Update a AssetEndpointProfile
 * x-ms-original-file: specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/preview/2023-11-01-preview/examples/Update_AssetEndpointProfile.json
 */
async function patchAnAssetEndpointProfile() {
  const subscriptionId =
    process.env["DEVICEREGISTRY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["DEVICEREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const assetEndpointProfileName = "my-assetendpointprofile";
  const properties = {
    properties: { targetAddress: "https://www.example.com/myTargetAddress" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const result = await client.assetEndpointProfiles.beginUpdateAndWait(
    resourceGroupName,
    assetEndpointProfileName,
    properties,
  );
  console.log(result);
}

async function main() {
  patchAnAssetEndpointProfile();
}

main().catch(console.error);
