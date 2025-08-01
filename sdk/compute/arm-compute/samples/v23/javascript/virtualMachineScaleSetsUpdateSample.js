/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Update a VM scale set.
 *
 * @summary Update a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Update_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetUpdateMaximumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaa";
  const parameters = {
    additionalCapabilities: { hibernationEnabled: true, ultraSSDEnabled: true },
    automaticRepairsPolicy: { enabled: true, gracePeriod: "PT30M" },
    doNotRunExtensionsOnOverprovisionedVMs: true,
    identity: {
      type: "SystemAssigned",
      userAssignedIdentities: { key3951: {} },
    },
    overprovision: true,
    plan: {
      name: "windows2016",
      product: "windows-data-science-vm",
      promotionCode: "aaaaaaaaaa",
      publisher: "microsoft-ads",
    },
    proximityPlacementGroup: {
      id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
    },
    scaleInPolicy: { forceDeletion: true, rules: ["OldestVM"] },
    singlePlacementGroup: true,
    sku: { name: "DSv3-Type1", capacity: 7, tier: "aaa" },
    tags: { key246: "aaaaaaaaaaaaaaaaaaaaaaaa" },
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        disableAutomaticRollback: true,
        enableAutomaticOSUpgrade: true,
        osRollingUpgradeDeferral: true,
      },
      mode: "Manual",
      rollingUpgradePolicy: {
        enableCrossZoneUpgrade: true,
        maxBatchInstancePercent: 49,
        maxSurge: true,
        maxUnhealthyInstancePercent: 81,
        maxUnhealthyUpgradedInstancePercent: 98,
        pauseTimeBetweenBatches: "aaaaaaaaaaaaaaa",
        prioritizeUnhealthyInstances: true,
        rollbackFailedInstancesOnPolicyBreach: true,
      },
    },
    virtualMachineProfile: {
      billingProfile: { maxPrice: -1 },
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true,
          storageUri: "http://{existing-storage-account-name}.blob.core.windows.net",
        },
      },
      extensionProfile: {
        extensionsTimeBudget: "PT1H20M",
        extensions: [
          {
            name: "{extension-name}",
            typePropertiesType: "{extension-Type}",
            autoUpgradeMinorVersion: true,
            enableAutomaticUpgrade: true,
            forceUpdateTag: "aaaaaaaaa",
            protectedSettings: {},
            provisionAfterExtensions: ["aa"],
            publisher: "{extension-Publisher}",
            settings: {},
            suppressFailures: true,
            typeHandlerVersion: "{handler-version}",
          },
        ],
      },
      licenseType: "aaaaaaaaaaaa",
      networkProfile: {
        healthProbe: {
          id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/disk123",
        },
        networkApiVersion: "2020-11-01",
        networkInterfaceConfigurations: [
          {
            name: "aaaaaaaa",
            deleteOption: "Delete",
            dnsSettings: { dnsServers: [] },
            enableAcceleratedNetworking: true,
            enableFpga: true,
            enableIPForwarding: true,
            ipConfigurations: [
              {
                name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                applicationGatewayBackendAddressPools: [
                  {
                    id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
                  },
                ],
                applicationSecurityGroups: [
                  {
                    id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
                  },
                ],
                loadBalancerBackendAddressPools: [
                  {
                    id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
                  },
                ],
                loadBalancerInboundNatPools: [
                  {
                    id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
                  },
                ],
                primary: true,
                privateIPAddressVersion: "IPv4",
                publicIPAddressConfiguration: {
                  name: "a",
                  deleteOption: "Delete",
                  dnsSettings: { domainNameLabel: "aaaaaaaaaaaaaaaaaa" },
                  idleTimeoutInMinutes: 3,
                },
                subnet: {
                  id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/disk123",
                },
              },
            ],
            networkSecurityGroup: {
              id: "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot",
            },
            primary: true,
          },
        ],
      },
      osProfile: {
        customData: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
        linuxConfiguration: {
          disablePasswordAuthentication: true,
          patchSettings: {
            assessmentMode: "ImageDefault",
            patchMode: "ImageDefault",
          },
          provisionVMAgent: true,
          ssh: {
            publicKeys: [
              {
                path: "/home/{your-username}/.ssh/authorized_keys",
                keyData:
                  "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCeClRAk2ipUs/l5voIsDC5q9RI+YSRd1Bvd/O+axgY4WiBzG+4FwJWZm/mLLe5DoOdHQwmU2FrKXZSW4w2sYE70KeWnrFViCOX5MTVvJgPE8ClugNl8RWth/tU849DvM9sT7vFgfVSHcAS2yDRyDlueii+8nF2ym8XWAPltFVCyLHRsyBp5YPqK8JFYIa1eybKsY3hEAxRCA+/7bq8et+Gj3coOsuRmrehav7rE6N12Pb80I6ofa6SM5XNYq4Xk0iYNx7R3kdz0Jj9XgZYWjAHjJmT0gTRoOnt6upOuxK7xI/ykWrllgpXrCPu3Ymz+c+ujaqcxDopnAl2lmf69/J1",
              },
            ],
          },
        },
        secrets: [
          {
            sourceVault: {
              id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
            },
            vaultCertificates: [
              {
                certificateStore: "aaaaaaaaaaaaaaaaaaaaaaaaa",
                certificateUrl: "aaaaaaa",
              },
            ],
          },
        ],
        windowsConfiguration: {
          additionalUnattendContent: [
            {
              componentName: "Microsoft-Windows-Shell-Setup",
              content: "aaaaaaaaaaaaaaaaaaaa",
              passName: "OobeSystem",
              settingName: "AutoLogon",
            },
          ],
          enableAutomaticUpdates: true,
          patchSettings: {
            assessmentMode: "ImageDefault",
            automaticByPlatformSettings: { rebootSetting: "Never" },
            enableHotpatching: true,
            patchMode: "AutomaticByPlatform",
          },
          provisionVMAgent: true,
          timeZone: "aaaaaaaaaaaaaaaa",
          winRM: {
            listeners: [{ certificateUrl: "aaaaaaaaaaaaaaaaaaaaaa", protocol: "Http" }],
          },
        },
      },
      scheduledEventsProfile: {
        terminateNotificationProfile: {
          enable: true,
          notBeforeTimeout: "PT10M",
        },
      },
      securityProfile: {
        encryptionAtHost: true,
        securityType: "TrustedLaunch",
        uefiSettings: { secureBootEnabled: true, vTpmEnabled: true },
      },
      storageProfile: {
        dataDisks: [
          {
            name: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            caching: "None",
            createOption: "Empty",
            diskIopsReadWrite: 28,
            diskMBpsReadWrite: 15,
            diskSizeGB: 1023,
            lun: 26,
            managedDisk: {
              diskEncryptionSet: { id: "aaaaaaaaaaaa" },
              storageAccountType: "Standard_LRS",
            },
            writeAcceleratorEnabled: true,
          },
        ],
        imageReference: {
          id: "aaaaaaaaaaaaaaaaaaa",
          offer: "WindowsServer",
          publisher: "MicrosoftWindowsServer",
          sharedGalleryImageId: "aaaaaa",
          sku: "2016-Datacenter",
          version: "latest",
        },
        osDisk: {
          caching: "ReadWrite",
          diffDiskSettings: { option: "Local", placement: "CacheDisk" },
          diskSizeGB: 6,
          image: {
            uri: "http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk.vhd",
          },
          managedDisk: {
            diskEncryptionSet: { id: "aaaaaaaaaaaa" },
            storageAccountType: "Standard_LRS",
          },
          vhdContainers: ["aa"],
          writeAcceleratorEnabled: true,
        },
      },
      userData: "aaaaaaaaaaaaa",
    },
    zones: ["1", "2", "3"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a VM scale set.
 *
 * @summary Update a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Update_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetUpdateMinimumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaa";
  const parameters = {};
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await virtualMachineScaleSetUpdateMaximumSetGen();
  await virtualMachineScaleSetUpdateMinimumSetGen();
}

main().catch(console.error);
