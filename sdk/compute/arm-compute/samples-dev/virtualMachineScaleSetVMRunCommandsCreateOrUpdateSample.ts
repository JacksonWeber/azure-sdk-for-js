/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VirtualMachineRunCommand,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to create or update the VMSS VM run command.
 *
 * @summary The operation to create or update the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/runCommandExamples/VirtualMachineScaleSetVMRunCommand_CreateOrUpdate.json
 */
async function createVirtualMachineScaleSetVMRunCommand(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const runCommand: VirtualMachineRunCommand = {
    asyncExecution: false,
    errorBlobManagedIdentity: {},
    errorBlobUri:
      "https://mystorageaccount.blob.core.windows.net/mycontainer/MyScriptError.txt",
    location: "West US",
    outputBlobManagedIdentity: {
      clientId: "22d35efb-0c99-4041-8c5b-6d24db33a69a",
    },
    outputBlobUri:
      "https://mystorageaccount.blob.core.windows.net/myscriptoutputcontainer/MyScriptoutput.txt",
    parameters: [
      { name: "param1", value: "value1" },
      { name: "param2", value: "value2" },
    ],
    runAsPassword: "<runAsPassword>",
    runAsUser: "user1",
    source: {
      scriptUri:
        "https://mystorageaccount.blob.core.windows.net/scriptcontainer/MyScript.ps1",
      scriptUriManagedIdentity: {
        objectId: "4231e4d2-33e4-4e23-96b2-17888afa6072",
      },
    },
    timeoutInSeconds: 3600,
    treatFailureAsDeploymentFailure: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.virtualMachineScaleSetVMRunCommands.beginCreateOrUpdateAndWait(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      runCommandName,
      runCommand,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createVirtualMachineScaleSetVMRunCommand();
}

main().catch(console.error);
