/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { QuotaRequestStatus } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureReservationAPI } from "../azureReservationAPI.js";
import {
  QuotaRequestDetails,
  QuotaRequestStatusListNextOptionalParams,
  QuotaRequestStatusListOptionalParams,
  QuotaRequestStatusListResponse,
  QuotaRequestStatusGetOptionalParams,
  QuotaRequestStatusGetResponse,
  QuotaRequestStatusListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing QuotaRequestStatus operations. */
export class QuotaRequestStatusImpl implements QuotaRequestStatus {
  private readonly client: AzureReservationAPI;

  /**
   * Initialize a new instance of the class QuotaRequestStatus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureReservationAPI) {
    this.client = client;
  }

  /**
   * For the specified Azure region (location), subscription, and resource provider, get the history of
   * the quota requests for the past year. To select specific quota requests, use the oData filter.
   * @param subscriptionId Azure subscription ID.
   * @param providerId Azure resource provider ID.
   * @param location Azure region.
   * @param options The options parameters.
   */
  public list(
    subscriptionId: string,
    providerId: string,
    location: string,
    options?: QuotaRequestStatusListOptionalParams
  ): PagedAsyncIterableIterator<QuotaRequestDetails> {
    const iter = this.listPagingAll(
      subscriptionId,
      providerId,
      location,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          subscriptionId,
          providerId,
          location,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    subscriptionId: string,
    providerId: string,
    location: string,
    options?: QuotaRequestStatusListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<QuotaRequestDetails[]> {
    let result: QuotaRequestStatusListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(subscriptionId, providerId, location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        subscriptionId,
        providerId,
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    subscriptionId: string,
    providerId: string,
    location: string,
    options?: QuotaRequestStatusListOptionalParams
  ): AsyncIterableIterator<QuotaRequestDetails> {
    for await (const page of this.listPagingPage(
      subscriptionId,
      providerId,
      location,
      options
    )) {
      yield* page;
    }
  }

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
  ): Promise<QuotaRequestStatusGetResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, providerId, location, id, options },
      getOperationSpec
    );
  }

  /**
   * For the specified Azure region (location), subscription, and resource provider, get the history of
   * the quota requests for the past year. To select specific quota requests, use the oData filter.
   * @param subscriptionId Azure subscription ID.
   * @param providerId Azure resource provider ID.
   * @param location Azure region.
   * @param options The options parameters.
   */
  private _list(
    subscriptionId: string,
    providerId: string,
    location: string,
    options?: QuotaRequestStatusListOptionalParams
  ): Promise<QuotaRequestStatusListResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, providerId, location, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param subscriptionId Azure subscription ID.
   * @param providerId Azure resource provider ID.
   * @param location Azure region.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    subscriptionId: string,
    providerId: string,
    location: string,
    nextLink: string,
    options?: QuotaRequestStatusListNextOptionalParams
  ): Promise<QuotaRequestStatusListNextResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, providerId, location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetails
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location1,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion1,
    Parameters.top,
    Parameters.skiptoken1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
