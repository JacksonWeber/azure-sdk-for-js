/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  InvoicesDownloadByBillingAccountOptionalParams,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download an invoice document. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @summary Gets a URL to download an invoice document. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/invoicesDownloadByBillingAccount.json
 */
async function invoicesDownloadByBillingAccount() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const invoiceName = "G123456789";
  const documentName = "12345678";
  const options: InvoicesDownloadByBillingAccountOptionalParams = {
    documentName,
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.invoices.beginDownloadByBillingAccountAndWait(
    billingAccountName,
    invoiceName,
    options,
  );
  console.log(result);
}

async function main() {
  invoicesDownloadByBillingAccount();
}

main().catch(console.error);
