// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { parseKeyVaultCertificateIdentifier } from "../../src/identifier.js";
import { describe, it, assert } from "vitest";

describe("Key Vault Certificates Identifier", () => {
  it("It should work with a URI of a certificate before it gets a version", async () => {
    const uri = "https://keyvault-name.vault.azure.net/certificates/certificate-name/pending";
    const identifier = parseKeyVaultCertificateIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/certificates/certificate-name/pending",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      name: "certificate-name",
      version: "pending",
    });
  });

  it("It should work with a URI of a certificate with a specific version", async () => {
    const uri = "https://keyvault-name.vault.azure.net/certificates/certificate-name/version";
    const identifier = parseKeyVaultCertificateIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/certificates/certificate-name/version",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      name: "certificate-name",
      version: "version",
    });
  });

  it("It should work with a deleted certificate recovery ID", async () => {
    const uri = "https://keyvault-name.vault.azure.net/deletedcertificates/deleted-certificate";
    const identifier = parseKeyVaultCertificateIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/deletedcertificates/deleted-certificate",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      name: "deleted-certificate",
      version: undefined,
    });
  });
});
