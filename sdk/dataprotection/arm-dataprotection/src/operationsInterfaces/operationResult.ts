/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationResultGetOptionalParams,
  OperationResultGetResponse,
} from "../models/index.js";

/** Interface representing a OperationResult. */
export interface OperationResult {
  /**
   * Gets the operation result for a resource
   * @param operationId
   * @param location
   * @param options The options parameters.
   */
  get(
    operationId: string,
    location: string,
    options?: OperationResultGetOptionalParams,
  ): Promise<OperationResultGetResponse>;
}
