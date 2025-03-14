/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AccountFilters } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMediaServices } from "../azureMediaServices.js";
import {
  AccountFilter,
  AccountFiltersListNextOptionalParams,
  AccountFiltersListOptionalParams,
  AccountFiltersListResponse,
  AccountFiltersGetOptionalParams,
  AccountFiltersGetResponse,
  AccountFiltersCreateOrUpdateOptionalParams,
  AccountFiltersCreateOrUpdateResponse,
  AccountFiltersDeleteOptionalParams,
  AccountFiltersUpdateOptionalParams,
  AccountFiltersUpdateResponse,
  AccountFiltersListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccountFilters operations. */
export class AccountFiltersImpl implements AccountFilters {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class AccountFilters class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * List Account Filters in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: AccountFiltersListOptionalParams
  ): PagedAsyncIterableIterator<AccountFilter> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
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
          resourceGroupName,
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: AccountFiltersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccountFilter[]> {
    let result: AccountFiltersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, accountName, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: AccountFiltersListOptionalParams
  ): AsyncIterableIterator<AccountFilter> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Account Filters in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: AccountFiltersListOptionalParams
  ): Promise<AccountFiltersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Get the details of an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    options?: AccountFiltersGetOptionalParams
  ): Promise<AccountFiltersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, filterName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    parameters: AccountFilter,
    options?: AccountFiltersCreateOrUpdateOptionalParams
  ): Promise<AccountFiltersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, filterName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    options?: AccountFiltersDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, filterName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates an existing Account Filter in the Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param filterName The Account Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    filterName: string,
    parameters: AccountFilter,
    options?: AccountFiltersUpdateOptionalParams
  ): Promise<AccountFiltersUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, filterName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: AccountFiltersListNextOptionalParams
  ): Promise<AccountFiltersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountFilterCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountFilter
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.filterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccountFilter
    },
    201: {
      bodyMapper: Mappers.AccountFilter
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.filterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.filterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccountFilter
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.filterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountFilterCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
