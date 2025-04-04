/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Generates the specified map.
 *
 * @summary Generates the specified map.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Maps/SMMapsGenerateMachineGroupDependencyPost.json
 */
import { MachineGroupMapRequest, ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";

async function smMapsGenerateMachineGroupDependencyPost(): Promise<void> {
  const subscriptionId = "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const request: MachineGroupMapRequest = {
    endTime: new Date("2018-01-08T20:01:06.325Z"),
    filterProcesses: false,
    kind: "map:machine-group-dependency",
    machineGroupId:
      "/subscriptions/63BE4E24-FDF0-4E9C-9342-6A5D5A359722/resourceGroups/rg-sm/providers/Microsoft.OperationalInsights/workspaces/D6F79F14-E563-469B-84B5-9286D2803B2F/machineGroups/b90f6d8f-a9b9-4ac6-abeb-abd8fe10a6dc",
    startTime: new Date("2018-01-08T20:00:51.325Z")
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.maps.generate(
    resourceGroupName,
    workspaceName,
    request
  );
  console.log(result);
}

smMapsGenerateMachineGroupDependencyPost().catch(console.error);
