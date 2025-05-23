/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Datastore,
  DatastoresCreateOrUpdateOptionalParams,
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update datastore.
 *
 * @summary Create or update datastore.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Datastore/AzureDataLakeGen1WServicePrincipal/createOrUpdate.json
 */
async function createOrUpdateDatastoreAzureDataLakeGen1WOrServicePrincipal(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const skipValidation = false;
  const body: Datastore = {
    properties: {
      description: "string",
      credentials: {
        authorityUrl: "string",
        clientId: "00000000-1111-2222-3333-444444444444",
        credentialsType: "ServicePrincipal",
        resourceUrl: "string",
        secrets: { clientSecret: "string", secretsType: "ServicePrincipal" },
        tenantId: "00000000-1111-2222-3333-444444444444",
      },
      datastoreType: "AzureDataLakeGen1",
      properties: {},
      storeName: "string",
      tags: { string: "string" },
    },
  };
  const options: DatastoresCreateOrUpdateOptionalParams = { skipValidation };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.datastores.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update datastore.
 *
 * @summary Create or update datastore.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Datastore/AzureDataLakeGen2WServicePrincipal/createOrUpdate.json
 */
async function createOrUpdateDatastoreAzureDataLakeGen2WOrServicePrincipal(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const skipValidation = false;
  const body: Datastore = {
    properties: {
      description: "string",
      accountName: "string",
      credentials: {
        authorityUrl: "string",
        clientId: "00000000-1111-2222-3333-444444444444",
        credentialsType: "ServicePrincipal",
        resourceUrl: "string",
        secrets: { clientSecret: "string", secretsType: "ServicePrincipal" },
        tenantId: "00000000-1111-2222-3333-444444444444",
      },
      datastoreType: "AzureDataLakeGen2",
      endpoint: "string",
      filesystem: "string",
      properties: {},
      tags: { string: "string" },
      protocol: "string",
    },
  };
  const options: DatastoresCreateOrUpdateOptionalParams = { skipValidation };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.datastores.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update datastore.
 *
 * @summary Create or update datastore.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Datastore/AzureFileWAccountKey/createOrUpdate.json
 */
async function createOrUpdateDatastoreAzureFileStoreWOrAccountKey(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const skipValidation = false;
  const body: Datastore = {
    properties: {
      description: "string",
      accountName: "string",
      credentials: {
        credentialsType: "AccountKey",
        secrets: { key: "string", secretsType: "AccountKey" },
      },
      datastoreType: "AzureFile",
      endpoint: "string",
      fileShareName: "string",
      properties: {},
      tags: { string: "string" },
      protocol: "string",
    },
  };
  const options: DatastoresCreateOrUpdateOptionalParams = { skipValidation };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.datastores.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update datastore.
 *
 * @summary Create or update datastore.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Datastore/AzureBlobWAccountKey/createOrUpdate.json
 */
async function createOrUpdateDatastoreAzureBlobWOrAccountKey(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const skipValidation = false;
  const body: Datastore = {
    properties: {
      description: "string",
      accountName: "string",
      containerName: "string",
      credentials: {
        credentialsType: "AccountKey",
        secrets: { key: "string", secretsType: "AccountKey" },
      },
      datastoreType: "AzureBlob",
      endpoint: "core.windows.net",
      properties: {},
      tags: { string: "string" },
      protocol: "https",
    },
  };
  const options: DatastoresCreateOrUpdateOptionalParams = { skipValidation };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.datastores.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateDatastoreAzureDataLakeGen1WOrServicePrincipal();
  createOrUpdateDatastoreAzureDataLakeGen2WOrServicePrincipal();
  createOrUpdateDatastoreAzureFileStoreWOrAccountKey();
  createOrUpdateDatastoreAzureBlobWOrAccountKey();
}

main().catch(console.error);
