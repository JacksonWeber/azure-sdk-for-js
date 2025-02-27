/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccountResource, AccountsListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Accounts. */
export interface Accounts {
  /**
   * List all the existing accounts
   * @param userEmail User Email.
   * @param location Location for NewRelic.
   * @param options The options parameters.
   */
  list(
    userEmail: string,
    location: string,
    options?: AccountsListOptionalParams,
  ): PagedAsyncIterableIterator<AccountResource>;
}
