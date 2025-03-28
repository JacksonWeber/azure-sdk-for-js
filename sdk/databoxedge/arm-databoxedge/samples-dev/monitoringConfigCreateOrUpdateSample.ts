/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { MonitoringMetricConfiguration } from "@azure/arm-databoxedge";
import { DataBoxEdgeManagementClient } from "@azure/arm-databoxedge";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new metric configuration or updates an existing one for a role.
 *
 * @summary Creates a new metric configuration or updates an existing one for a role.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2021-06-01/examples/PutMonitoringConfig.json
 */
async function putMonitoringConfig(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const roleName = "testrole";
  const resourceGroupName = "GroupForEdgeAutomation";
  const monitoringMetricConfiguration: MonitoringMetricConfiguration = {
    metricConfigurations: [
      {
        counterSets: [{ counters: [{ name: "test" }] }],
        mdmAccount: "test",
        metricNameSpace: "test",
        resourceId: "test",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.monitoringConfig.beginCreateOrUpdateAndWait(
    deviceName,
    roleName,
    resourceGroupName,
    monitoringMetricConfiguration,
  );
  console.log(result);
}

putMonitoringConfig().catch(console.error);
