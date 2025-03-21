/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  QuotaRequestDetails,
  QuotaRequestStatusListOptionalParams,
  QuotaRequestStatusGetOptionalParams,
  QuotaRequestStatusGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a QuotaRequestStatus. */
export interface QuotaRequestStatus {
  /**
   * For the specified Azure region (location), subscription, and resource provider, get the history of
   * the quota requests for the past year. To select specific quota requests, use the oData filter.
   * @param subscriptionId Azure subscription ID.
   * @param providerId Azure resource provider ID.
   * @param location Azure region.
   * @param options The options parameters.
   */
  list(
    subscriptionId: string,
    providerId: string,
    location: string,
    options?: QuotaRequestStatusListOptionalParams
  ): PagedAsyncIterableIterator<QuotaRequestDetails>;
  /**
   * For the specified Azure region (location), get the details and status of the quota request by the
   * quota request ID for the resources of the resource provider. The PUT request for the quota (service
   * limit) returns a response with the requestId parameter.
   * @param subscriptionId Azure subscription ID.
   * @param providerId Azure resource provider ID.
   * @param location Azure region.
   * @param id Quota Request ID.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    providerId: string,
    location: string,
    id: string,
    options?: QuotaRequestStatusGetOptionalParams
  ): Promise<QuotaRequestStatusGetResponse>;
}
