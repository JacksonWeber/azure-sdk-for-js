/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Accounts } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMapsManagementClient } from "../azureMapsManagementClient.js";
import {
  MapsAccount,
  AccountsListByResourceGroupNextOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsListByResourceGroupResponse,
  AccountsListBySubscriptionNextOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsListBySubscriptionResponse,
  AccountsCreateOrUpdateOptionalParams,
  AccountsCreateOrUpdateResponse,
  MapsAccountUpdateParameters,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsDeleteOptionalParams,
  AccountsGetOptionalParams,
  AccountsGetResponse,
  AccountSasParameters,
  AccountsListSasOptionalParams,
  AccountsListSasResponse,
  AccountsListKeysOptionalParams,
  AccountsListKeysResponse,
  MapsKeySpecification,
  AccountsRegenerateKeysOptionalParams,
  AccountsRegenerateKeysResponse,
  AccountsListByResourceGroupNextResponse,
  AccountsListBySubscriptionNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Accounts operations. */
export class AccountsImpl implements Accounts {
  private readonly client: AzureMapsManagementClient;

  /**
   * Initialize a new instance of the class Accounts class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMapsManagementClient) {
    this.client = client;
  }

  /**
   * Get all Maps Accounts in a Resource Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<MapsAccount> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<MapsAccount[]> {
    let result: AccountsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<MapsAccount> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all Maps Accounts in a Subscription
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<MapsAccount> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AccountsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<MapsAccount[]> {
    let result: AccountsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AccountsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<MapsAccount> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST
   * APIs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param mapsAccount The new or updated parameters for the Maps Account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    mapsAccount: MapsAccount,
    options?: AccountsCreateOrUpdateOptionalParams
  ): Promise<AccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, mapsAccount, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku,
   * Tags, Properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountUpdateParameters The updated parameters for the Maps Account.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    mapsAccountUpdateParameters: MapsAccountUpdateParameters,
    options?: AccountsUpdateOptionalParams
  ): Promise<AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, mapsAccountUpdateParameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a Maps Account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get a Maps Account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetOptionalParams
  ): Promise<AccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getOperationSpec
    );
  }

  /**
   * Get all Maps Accounts in a Resource Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): Promise<AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get all Maps Accounts in a Subscription
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams
  ): Promise<AccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Create and list an account shared access signature token. Use this SAS token for authentication to
   * Azure Maps REST APIs through various Azure Maps SDKs. As prerequisite to create a SAS Token.
   *
   * Prerequisites:
   * 1. Create or have an existing User Assigned Managed Identity in the same Azure region as the
   * account.
   * 2. Create or update an Azure Map account with the same Azure region as the User Assigned Managed
   * Identity is placed.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountSasParameters The updated parameters for the Maps Account.
   * @param options The options parameters.
   */
  listSas(
    resourceGroupName: string,
    accountName: string,
    mapsAccountSasParameters: AccountSasParameters,
    options?: AccountsListSasOptionalParams
  ): Promise<AccountsListSasResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, mapsAccountSasParameters, options },
      listSasOperationSpec
    );
  }

  /**
   * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the
   * Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key
   * regeneration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListKeysOptionalParams
  ): Promise<AccountsListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop
   * working immediately.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param keySpecification Which key to regenerate:  primary or secondary.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    accountName: string,
    keySpecification: MapsKeySpecification,
    options?: AccountsRegenerateKeysOptionalParams
  ): Promise<AccountsRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keySpecification, options },
      regenerateKeysOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AccountsListByResourceGroupNextOptionalParams
  ): Promise<AccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AccountsListBySubscriptionNextOptionalParams
  ): Promise<AccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
    },
    201: {
      bodyMapper: Mappers.MapsAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.mapsAccount,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.mapsAccountUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
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
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maps/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listSasOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listSas",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccountSasToken
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.mapsAccountSasParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccountKeys
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
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccountKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.keySpecification,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
