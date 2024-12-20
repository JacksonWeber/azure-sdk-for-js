// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { constructAuthenticationEndpointFromDomain } from "../src/util/authenticationEndpoint.js";
import { describe, it, assert } from "vitest";

describe("authenticationEndpoint", () => {
  it("construct with invalid argument", () => {
    assert.throws(
      () => constructAuthenticationEndpointFromDomain(undefined!),
      "Argument cannot be null or empty: 'accountDomain'.",
    );
    assert.throws(
      () => constructAuthenticationEndpointFromDomain(null!),
      "Argument cannot be null or empty: 'accountDomain'.",
    );
    assert.throws(
      () => constructAuthenticationEndpointFromDomain(""),
      "Argument cannot be null or empty: 'accountDomain'.",
    );
  });

  it("construct with domain value", () => {
    const domain: string = "mixedreality.azure.com";

    const endpointUrl = constructAuthenticationEndpointFromDomain(domain);

    assert.equal(endpointUrl, "https://sts.mixedreality.azure.com");
  });
});
