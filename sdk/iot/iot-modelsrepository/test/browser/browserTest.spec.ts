// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ModelsRepositoryClient } from "../../src/index.js";
import { describe, it, expect } from "vitest";

describe("resolver -  browser", () => {
  describe("single resolution (no pseudo-parsing)", () => {
    it("integration works in browser", async () => {
      const dtmi: string = "dtmi:azure:DeviceManagement:DeviceInformation;1";
      const endpoint = "https://devicemodels.azure.com";
      const client = new ModelsRepositoryClient({ repositoryLocation: endpoint });
      const actualOutput: { [x: string]: any } = await client.getModels(dtmi, {
        dependencyResolution: "tryFromExpanded",
      });
      expect(actualOutput["dtmi:azure:DeviceManagement:DeviceInformation;1"]).to.not.equal(
        undefined,
      );
      expect(actualOutput["dtmi:azure:DeviceManagement:DeviceInformation;1"]["@id"]).to.equal(
        "dtmi:azure:DeviceManagement:DeviceInformation;1",
      );
    });
  });
});
