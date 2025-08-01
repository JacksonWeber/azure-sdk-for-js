/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RequestRateByIntervalInput,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 *
 * @summary Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/logAnalyticExamples/LogAnalytics_RequestRateByInterval.json
 */
async function exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "westus";
  const parameters: RequestRateByIntervalInput = {
    blobContainerSasUri: "https://somesasuri",
    fromTime: new Date("2018-01-21T01:54:06.862601Z"),
    groupByResourceName: true,
    intervalLength: "FiveMins",
    toTime: new Date("2018-01-23T01:54:06.862601Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.logAnalytics.beginExportRequestRateByIntervalAndWait(
      location,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals();
}

main().catch(console.error);
