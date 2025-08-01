/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GalleryImageVersionUpdate,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a gallery image version.
 *
 * @summary Update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Update_RestoreSoftDeleted.json
 */
async function restoreASoftDeletedGalleryImageVersion(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersionUpdate = {
    restore: true,
    storageProfile: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a gallery image version.
 *
 * @summary Update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Update.json
 */
async function updateASimpleGalleryImageVersionManagedImageAsSource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersionUpdate = {
    publishingProfile: {
      targetRegions: [
        { name: "West US", regionalReplicaCount: 1 },
        {
          name: "East US",
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a gallery image version.
 *
 * @summary Update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Update_WithoutSourceId.json
 */
async function updateASimpleGalleryImageVersionWithoutSourceId(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersionUpdate = {
    publishingProfile: {
      targetRegions: [
        { name: "West US", regionalReplicaCount: 1 },
        {
          name: "East US",
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    storageProfile: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await restoreASoftDeletedGalleryImageVersion();
  await updateASimpleGalleryImageVersionManagedImageAsSource();
  await updateASimpleGalleryImageVersionWithoutSourceId();
}

main().catch(console.error);
