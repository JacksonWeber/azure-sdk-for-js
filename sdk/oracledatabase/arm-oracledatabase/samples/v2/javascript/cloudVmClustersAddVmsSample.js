// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { OracleDatabaseManagementClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to add VMs to the VM Cluster
 *
 * @summary add VMs to the VM Cluster
 * x-ms-original-file: 2025-03-01/vmClusters_addVms.json
 */
async function cloudVmClustersAddVms() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.cloudVmClusters.addVms("rg000", "cluster1", {
    dbServers: ["ocid1..aaaa", "ocid1..aaaaaa"],
  });
  console.log(result);
}

async function main() {
  await cloudVmClustersAddVms();
}

main().catch(console.error);
