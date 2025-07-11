/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExtensionPublisher,
  ExtensionPublisherListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExtensionPublisherOperations. */
export interface ExtensionPublisherOperations {
  /**
   * Gets all Extension publishers based on the location
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: ExtensionPublisherListOptionalParams,
  ): PagedAsyncIterableIterator<ExtensionPublisher>;
}
