/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameAvailabilityRequest,
  NameAvailabilityCheckLocalOptionalParams,
  NameAvailabilityCheckLocalResponse
} from "../models/index.js";

/** Interface representing a NameAvailability. */
export interface NameAvailability {
  /**
   * Check whether the resource name is available in the given region.
   * @param location The location in which uniqueness will be verified.
   * @param body The check availability request body.
   * @param options The options parameters.
   */
  checkLocal(
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: NameAvailabilityCheckLocalOptionalParams
  ): Promise<NameAvailabilityCheckLocalResponse>;
}
