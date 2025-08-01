@minLength(6)
@maxLength(23)
@description('The base resource name.')
param baseName string = resourceGroup().name

@description('The location of the resource. By default, this is the same as the resource group.')
param location string = resourceGroup().location

@description('The client OID to grant access to test resources.')
param testApplicationOid string

@description('The client ID to grant access to test resources.')
param testApplicationId string

@description('The tenant ID to grant access to test resources.')
param tenantId string

@minLength(5)
@maxLength(50)
@description('Provide a globally unique name of the Azure Container Registry')
param acrName string = 'acr${uniqueString(resourceGroup().id)}'

@description('The latest AKS version available in the region.')
param latestAksVersion string

@description('The SSH public key to use for the Linux VMs.')
param sshPubKey string

@description('The admin user name for the Linux VMs.')
param adminUserName string = 'azureuser'

@description('The user type - ServicePrincipal in CI, User locally')
param principalUserType string = 'User'

@description('Whether to deploy resources for Managed Identity. When set to false, this file deploys nothing.')
param deployMIResources bool = false

module managedIdentityModule 'test-resources-managed-identity.bicep' = if (deployMIResources) {
  name: 'managedIdentityModule'
  params: {
    baseName: baseName
    location: location
    testApplicationOid: testApplicationOid
    testApplicationId: testApplicationId
    tenantId: tenantId
    acrName: acrName
    latestAksVersion: latestAksVersion
    sshPubKey: sshPubKey
    adminUserName: adminUserName
    principalUserType: principalUserType
  }
}

output IDENTITY_WEBAPP_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityWebAppName : ''
output IDENTITY_WEBAPP_PLAN string = deployMIResources ? managedIdentityModule.outputs.IdentityWebAppPlan : ''
output IDENTITY_USER_DEFINED_IDENTITY string = deployMIResources ? managedIdentityModule.outputs.IdentityUserDefinedIdentity : ''
output IDENTITY_USER_DEFINED_CLIENT_ID string = deployMIResources ? managedIdentityModule.outputs.IdentityUserDefinedClientId : ''
output IDENTITY_USER_DEFINED_IDENTITY_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityUserDefinedIdentityName : ''
output IDENTITY_STORAGE_NAME_1 string = deployMIResources ? managedIdentityModule.outputs.IdentityStorageName1 : ''
output IDENTITY_STORAGE_NAME_USER_ASSIGNED string = deployMIResources ? managedIdentityModule.outputs.IdentityStorageNameUserAssigned : ''
output IDENTITY_STORAGE_ID_1 string = deployMIResources ? managedIdentityModule.outputs.IdentityStorageId1 : ''
output IDENTITY_STORAGE_ID_USER_ASSIGNED string = deployMIResources ? managedIdentityModule.outputs.IdentityStorageIdUserAssigned : ''
output IDENTITY_CONTAINER_INSTANCE_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityContainerInstanceName : ''
output IDENTITY_FUNCTION_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityFunctionName : ''
output IDENTITY_AKS_CLUSTER_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityAksClusterName : ''
output IDENTITY_AKS_POD_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityAksPodName : ''
output IDENTITY_ACR_NAME string = deployMIResources ? managedIdentityModule.outputs.IdentityAcrName : ''
output IDENTITY_ACR_LOGIN_SERVER string = deployMIResources ? managedIdentityModule.outputs.IdentityAcrLoginServer : ''
output IDENTITY_TENANT_ID string = deployMIResources ? managedIdentityModule.outputs.IdentityTenantID : ''
output IDENTITY_CLIENT_ID string = deployMIResources ? managedIdentityModule.outputs.IdentityClientID : ''
output IDENTITY_FUNCTIONS_CUSTOMHANDLER_PORT string = deployMIResources ? managedIdentityModule.outputs.IdentityFunctionsCustomHandlerPort : ''
output IDENTITY_USER_DEFINED_OBJECT_ID string = deployMIResources ? managedIdentityModule.outputs.IdentityUserDefinedObjectId : ''
