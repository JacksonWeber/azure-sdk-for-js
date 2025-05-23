---
page_type: sample
languages:
  - javascript
products:
  - entra
  - entra-id
urlFragment: identity-javascript
---

# Azure Identity client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for Azure Identity in some common scenarios.

| **File Name**                                                 | **Description**                                                                                                     |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [azureDeveloperCliCredential.js][azuredeveloperclicredential] | Authenticates using Azure Developer CLI Credential                                                                  |
| [clientSecretCredential.js][clientsecretcredential]           | Authenticates with an app registration’s client ID and secret.                                                      |
| [defaultAzureCredential.js][defaultazurecredential]           | Tries several authentication methods using a single credential, which is the simplest way to use `@azure/identity`. |
| [environmentCredential.js][environmentcredential]             | Authenticates as an app registration automatically using environment variables.                                     |
| [workloadIdentityCredential.js][workloadidentitycredential]   | Authenticates using Workload Identity Credential                                                                    |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Microsoft Entra App Registration][createinstance_azureactivedirectoryappregistration]
- [Azure Key Vault][createinstance_azurekeyvault]

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node azureDeveloperCliCredential.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env AZURE_TENANT_ID="<azure tenant id>" node azureDeveloperCliCredential.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[azuredeveloperclicredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/v3/javascript/azureDeveloperCliCredential.js
[clientsecretcredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/v3/javascript/clientSecretCredential.js
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/v3/javascript/defaultAzureCredential.js
[environmentcredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/v3/javascript/environmentCredential.js
[workloadidentitycredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/v3/javascript/workloadIdentityCredential.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/identity
[freesub]: https://azure.microsoft.com/free/
[createinstance_azureactivedirectoryappregistration]: https://learn.microsoft.com/entra/identity-platform/quickstart-register-app
[createinstance_azurekeyvault]: https://learn.microsoft.com/azure/key-vault/quick-create-portal
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity/README.md
