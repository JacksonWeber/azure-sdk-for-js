/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CreateDataLakeAnalyticsAccountParameters } from "@azure/arm-datalake-analytics";
import { DataLakeAnalyticsAccountManagementClient } from "@azure/arm-datalake-analytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.
 *
 * @summary Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Create.json
 */
async function createsTheSpecifiedDataLakeAnalyticsAccountThisSuppliesTheUserWithComputationServicesForDataLakeAnalyticsWorkloads(): Promise<void> {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const parameters: CreateDataLakeAnalyticsAccountParameters = {
    computePolicies: [
      {
        name: "test_policy",
        maxDegreeOfParallelismPerJob: 1,
        minPriorityPerJob: 1,
        objectId: "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345",
        objectType: "User",
      },
    ],
    dataLakeStoreAccounts: [{ name: "test_adls", suffix: "test_suffix" }],
    defaultDataLakeStoreAccount: "test_adls",
    firewallAllowAzureIps: "Enabled",
    firewallRules: [{ name: "test_rule", endIpAddress: "2.2.2.2", startIpAddress: "1.1.1.1" }],
    firewallState: "Enabled",
    location: "eastus2",
    maxDegreeOfParallelism: 30,
    maxDegreeOfParallelismPerJob: 1,
    maxJobCount: 3,
    minPriorityPerJob: 1,
    newTier: "Consumption",
    queryStoreRetention: 30,
    storageAccounts: [
      {
        name: "test_storage",
        accessKey: "34adfa4f-cedf-4dc0-ba29-b6d1a69ab346",
        suffix: "test_suffix",
      },
    ],
    tags: { testKey: "test_value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(credential, subscriptionId);
  const result = await client.accounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

createsTheSpecifiedDataLakeAnalyticsAccountThisSuppliesTheUserWithComputationServicesForDataLakeAnalyticsWorkloads().catch(
  console.error,
);
