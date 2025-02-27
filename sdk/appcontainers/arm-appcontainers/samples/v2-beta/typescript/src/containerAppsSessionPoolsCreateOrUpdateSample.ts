/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SessionPool, ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a session pool with the given properties.
 *
 * @summary Create or update a session pool with the given properties.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/SessionPools_CreateOrUpdate.json
 */
async function createOrUpdateSessionPool() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const sessionPoolName = "testsessionpool";
  const sessionPoolEnvelope: SessionPool = {
    containerType: "CustomContainer",
    customContainerTemplate: {
      containers: [
        {
          name: "testinitcontainer",
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          image: "repo/testcontainer:v4",
          resources: { cpu: 0.25, memory: "0.5Gi" },
        },
      ],
      ingress: { targetPort: 80 },
    },
    dynamicPoolConfiguration: {
      cooldownPeriodInSeconds: 600,
      executionType: "Timed",
    },
    environmentId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube",
    location: "East US",
    poolManagementType: "Dynamic",
    scaleConfiguration: {
      maxConcurrentSessions: 500,
      readySessionInstances: 100,
    },
    sessionNetworkConfiguration: { status: "EgressEnabled" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result =
    await client.containerAppsSessionPools.beginCreateOrUpdateAndWait(
      resourceGroupName,
      sessionPoolName,
      sessionPoolEnvelope,
    );
  console.log(result);
}

async function main() {
  createOrUpdateSessionPool();
}

main().catch(console.error);
