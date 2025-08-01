# Azure Confidential Ledger REST client library for JavaScript

Azure Confidential Ledger provides a service for logging to an immutable, tamper-proof ledger. As part of the [Azure Confidential Computing][azure_confidential_computing]
portfolio, Azure Confidential Ledger runs in SGX enclaves. It is built on Microsoft Research's [Confidential Consortium Framework][ccf].

**Please rely heavily on the [service's documentation][confidential_ledger_docs] and our [Rest client docs][rest_client] to use this library**

Key links:

- [Source code][source_code]
- [Package (NPM)][confidentialledger_npm]
- [API reference documentation][ref_docs]
- [Product documentation][confidential_ledger_docs]

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)

### Prerequisites

- An [Azure subscription][azure_sub].
- A running instance of Azure Confidential Ledger.
- A registered user in the Confidential Ledger, typically assigned during [ARM][azure_resource_manager] resource creation, with `Administrator` privileges.

### Install the `@azure-rest/confidential-ledger` package

Install the Azure Condifential Ledger REST client library for JavaScript with `npm`:

```bash
npm install @azure-rest/confidential-ledger
```

### Creating and Authenticate the client

#### Using Azure Active Directory

This document demonstrates using [DefaultAzureCredential][default_azure_credential] to authenticate to the Confidential Ledger via Azure Active Directory. You can find the environment variables in the Azure Portal. However, `ConfidentialLedger` accepts any [@azure/identity][azure_identity_credentials] credential.

`DefaultAzureCredential` will automatically handle most Azure SDK client scenarios. To get started, set the values of client ID, tenant ID, and client secret of the AAD application as environment variables: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

Then, `DefaultAzureCredential` will be able to authenticate the `ConfidentialLedger` client.

Creating the client also requires your Confidential Ledger's URL and id, which you can get from the Azure CLI or the Azure Portal.

Because Confidential Ledgers use self-signed certificates securely generated and stored in an enclave, the signing certificate for each Confidential Ledger must first be retrieved from the Confidential Ledger Identity Service.

```ts snippet:ReadmeSampleCreateClient_Node
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
```

#### Using a client certificate

As an alternative to Azure Active Directory, clients may choose to authenticate with a client certificate in mutual TLS instead of via an Azure Active Directory token. For this kind of authentication, the client needs to be passed a `CertificateCredential` which is composed of a certificate and private key, both in PEM format.

```ts snippet:ReadmeSampleCreateClient_Certificate
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";

// Get the signing certificate from the Confidential Ledger Identity Service
const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);

// both cert (certificate key) and key (private key) are in PEM format
const cert = "<PUBLIC_CERTIFICATE>";
const key = "<PRIVATE_KEY>";

// Create the Confidential Ledger Client
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  {
    tlsOptions: {
      cert,
      key,
    },
  },
);
```

## Key concepts

### Ledger entries and transactions

Every write to Azure Confidential Ledger generates an immutable ledger entry in the service. Writes, also referred to as transactions, are uniquely identified by transaction ids that increment with each write. Once written, ledger entries may be retrieved at any time.

#### Tags
It is possible to further organize data within a collection as part of the latest preview version dated `2024-12-09-preview` or newer.

Specify the `tags` parameter as part of the create entry operation. Multiple tags can be specified using commas. There is a limit of five tags per transaction.

### Receipts

State changes to the Confidential Ledger are saved in a data structure called a Merkle tree. To cryptographically verify that writes were correctly saved, a Merkle proof, or receipt, can be retrieved for any transaction id.

### Collections

While most use cases will involve one ledger, we provide the collection feature in case semantically or logically different groups of data need to be stored in the same Confidential Ledger.

Ledger entries are retrieved by their collection identifier. The Confidential Ledger will always assume a constant, service-determined collection id for entries submitted without a collection specified.

### Users

Users are managed directly with the Confidential Ledger instead of through Azure. Users may be AAD-based, identified by their AAD object id, or certificate-based, identified by their PEM certificate fingerprint.

### Confidential computing

[Azure Confidential Computing][azure_confidential_computing] allows you to isolate and protect your data while it is being processed in the cloud. Azure Confidential Ledger runs on Azure Confidential Computing virtual machines, thus providing stronger data protection with encryption of data in use.

### Confidential Consortium Framework

Azure Confidential Ledger is built on Microsoft Research's open-source [Confidential Consortium Framework (CCF)][ccf]. Under CCF, applications are managed by a consortium of members with the ability to submit proposals to modify and govern application operation. In Azure Confidential Ledger, Microsoft Azure owns a member identity, allowing it to perform governance actions like replacing unhealthy nodes in the Confidential Ledger, or upgrading the enclave code.

## Examples

This section contains code snippets for the following samples:

- [Post Ledger Entry](#post-ledger-entry "Post Ledger Entry")
- [Post Ledger Entry With CollectionId](#post-ledger-entry-with-collectionid "Post Ledger Entry With CollectionId")]
- [Post Ledger Entry With CollectionId and Tags](#post-ledger-entry-with-collectionid-and-tags "Post Ledger Entry With CollectionId and Tags")]
- [Get a Ledger Entry By Transaction Id](#get-a-ledger-entry "Get a Ledger Entry By Transaction Id")
- [Get a Ledger Entry By Transaction Id With CollectionId](#get-a-ledger-entry-with-collectionid "Get a Ledger Entry By Transaction Id With CollectionId")
- [Get a Ledger Entry By Transaction Id With CollectionId and Tag](#get-a-ledger-entry-with-collectionid-and-tag "Get a Ledger Entry By Transaction Id With CollectionId and Tag")
- [Get All Ledger Entries](#get-all-ledger-entries "Get All Ledger Entries")
- [Get All Ledger Entries With CollectionId](#get-all-ledger-entries-with-collectionid "Get All Ledger Entries With CollectionId")
- [Get All Ledger Entries With CollectionId and Tag](#get-all-ledger-entries-with-collectionid-and-tag "Get All Ledger Entries With CollectionId and Tag")
- [Get All Collections](#get-all-collections "Get All Collections")
- [Get Transactions for a Collection](#transactions-for-collection "Get Transactions for a Collection")
- [List Enclave Quotes](#list-enclave-quotes "List Enclave Quotes")

### Post Ledger Entry

```ts snippet:ReadmeSamplePostLedgerEntry
import ConfidentialLedger, {
  getLedgerIdentity,
  LedgerEntry,
  CreateLedgerEntryParameters,
} from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

const entry: LedgerEntry = {
  contents: "<content>",
};
const ledgerEntry: CreateLedgerEntryParameters = {
  contentType: "application/json",
  body: entry,
};
const result = await client.path("/app/transactions").post(ledgerEntry);
```

### Post Ledger Entry With CollectionId

```ts snippet:ReadmeSamplePostLedgerEntryWithCollectionId
import ConfidentialLedger, {
  getLedgerIdentity,
  LedgerEntry,
  CreateLedgerEntryParameters,
} from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
// Type assertion is used to allow collectionId
const entry: LedgerEntry = {
  contents: "<content>",
};
const ledgerEntry: CreateLedgerEntryParameters = {
  queryParameters: {
    collectionId: "my collection",
  },
  contentType: "application/json",
  body: entry,
};
const result = await client.path("/app/transactions").post(ledgerEntry);
```

### Post Ledger Entry With CollectionId and Tags 
```ts snippet:ReadmeSamplePostLedgerEntryWithCollectionIdAndTags
import ConfidentialLedger, {
  getLedgerIdentity,
  LedgerEntry,
  CreateLedgerEntryParameters,
} from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
// Type assertion is used to allow collectionId and tags
const entry: LedgerEntry = {
  contents: "<content>",
};
const ledgerEntry: CreateLedgerEntryParameters = {
  queryParameters: {
    tags: "tag1,tag2",
  },
  contentType: "application/json",
  body: entry,
};
const result = await client.path("/app/transactions").post(ledgerEntry);
```

### Get a Ledger Entry By Transaction Id

```ts snippet:ReadmeSampleGetLedgerEntry
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

const transactionId = "<TRANSACTION_ID>";
const status = await client.path("/app/transactions/{transactionId}/status", transactionId).get();
```

### Get a Ledger Entry By Transaction Id With CollectionId

```ts snippet:ReadmeSampleGetLedgerEntryWithCollectionIdSample
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
const transactionId = "<TRANSACTION_ID>";
const getLedgerEntryParams = {
  queryParameters: { collectionId: "my-collection" },
};
const result = await client
  .path("/app/transactions/{transactionId}", transactionId)
  .get(getLedgerEntryParams);
```

### Get a Ledger Entry By Transaction Id With CollectionId and Tag

```ts snippet:ReadmeSampleGetLedgerEntryWithCollectionIdAndTagSample
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
const transactionId = "<TRANSACTION_ID>";
const getLedgerEntryParams = {
  queryParameters: { collectionId: "my-collection", tag: "tag1" },
};
const result = await client
  .path("/app/transactions/{transactionId}", transactionId)
  .get(getLedgerEntryParams);
```

### Get All Ledger Entries

```ts snippet:ReadmeSampleGetAllLedgerEntries
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

const ledgerEntries = await client.path("/app/transactions");
```

### Get All Ledger Entries With CollectionId

```ts snippet:ReadmeSampleGetAllLedgerEntriesWithCollectionIdSample
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
const getLedgerEntriesParams = {
  queryParameters: { collectionId: "my-collection" },
};
const ledgerEntries = await client.path("/app/transactions").get(getLedgerEntriesParams);
```

### Get All Ledger Entries With CollectionId and Tag

```ts snippet:ReadmeSampleGetAllLedgerEntriesWithCollectionIdAndTagSample
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();
const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);
const getLedgerEntriesParams = {
  queryParameters: { collectionId: "my-collection", tag: "tag1" },
};
const ledgerEntries = await client.path("/app/transactions").get(getLedgerEntriesParams);
```

### Get All Collections

```ts snippet:ReadmeSampleGetAllCollections
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

const result = await client.path("/app/collections").get();
```

### Get Transactions for a Collection

```ts snippet:ReadmeSampleGetTransactionsForCollection
import ConfidentialLedger, { getLedgerIdentity } from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

const getLedgerEntriesParams = { queryParameters: { collectionId: "my collection" } };
const ledgerEntries = await client.path("/app/transactions").get(getLedgerEntriesParams);
```

### List Enclave Quotes

```ts snippet:ReadmeSampleListEnclaveQuotes
import ConfidentialLedger, {
  getLedgerIdentity,
  isUnexpected,
} from "@azure-rest/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";

const { ledgerIdentityCertificate } = await getLedgerIdentity(
  "test-ledger-name",
  "https://identity.confidential-ledger.core.azure.com",
);
const credential = new DefaultAzureCredential();

const client = ConfidentialLedger(
  "https://test-ledger-name.confidential-ledger.azure.com",
  ledgerIdentityCertificate,
  credential,
);

// Get enclave quotes
const enclaveQuotes = await client.path("/app/enclaveQuotes").get();

// Check for non-success response
if (isUnexpected(enclaveQuotes)) {
  throw enclaveQuotes;
}

// Log all the enclave quotes' nodeId
Object.keys(enclaveQuotes.body.enclaveQuotes).forEach((key) => {
  console.log(enclaveQuotes.body.enclaveQuotes[key].nodeId);
});
```

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:SetLogLevel
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).

## Next steps

Please take a look at the [samples](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/confidentialledger/confidential-ledger-rest/samples) directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/main/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)



<!-- LINKS -->

[ccf]: https://github.com/Microsoft/CCF
[azure_confidential_computing]: https://azure.microsoft.com/solutions/confidential-compute
[confidential_ledger_docs]: https://aka.ms/confidentialledger-servicedocs
[rest_client]: https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md
[source_code]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/confidentialledger/confidential-ledger-rest
[confidentialledger_npm]: https://www.npmjs.com/package/@azure-rest/confidential-ledger
[ref_docs]: https://azure.github.io/azure-sdk-for-js
[azure_sub]: https://azure.microsoft.com/free/
[azure_identity_credentials]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials
[default_azure_credential]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential
[azure_resource_manager]: https://learn.microsoft.com/azure/azure-resource-manager/management/overview