/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { BackupVaults } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetAppManagementClient } from "../netAppManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  BackupVault,
  BackupVaultsListByNetAppAccountNextOptionalParams,
  BackupVaultsListByNetAppAccountOptionalParams,
  BackupVaultsListByNetAppAccountResponse,
  BackupVaultsGetOptionalParams,
  BackupVaultsGetResponse,
  BackupVaultsCreateOrUpdateOptionalParams,
  BackupVaultsCreateOrUpdateResponse,
  BackupVaultPatch,
  BackupVaultsUpdateOptionalParams,
  BackupVaultsUpdateResponse,
  BackupVaultsDeleteOptionalParams,
  BackupVaultsDeleteResponse,
  BackupVaultsListByNetAppAccountNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupVaults operations. */
export class BackupVaultsImpl implements BackupVaults {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class BackupVaults class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * List and describe all Backup Vaults in the NetApp account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  public listByNetAppAccount(
    resourceGroupName: string,
    accountName: string,
    options?: BackupVaultsListByNetAppAccountOptionalParams,
  ): PagedAsyncIterableIterator<BackupVault> {
    const iter = this.listByNetAppAccountPagingAll(
      resourceGroupName,
      accountName,
      options,
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
        return this.listByNetAppAccountPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByNetAppAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: BackupVaultsListByNetAppAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BackupVault[]> {
    let result: BackupVaultsListByNetAppAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNetAppAccount(
        resourceGroupName,
        accountName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNetAppAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNetAppAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: BackupVaultsListByNetAppAccountOptionalParams,
  ): AsyncIterableIterator<BackupVault> {
    for await (const page of this.listByNetAppAccountPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List and describe all Backup Vaults in the NetApp account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  private _listByNetAppAccount(
    resourceGroupName: string,
    accountName: string,
    options?: BackupVaultsListByNetAppAccountOptionalParams,
  ): Promise<BackupVaultsListByNetAppAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByNetAppAccountOperationSpec,
    );
  }

  /**
   * Get the Backup Vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    options?: BackupVaultsGetOptionalParams,
  ): Promise<BackupVaultsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, backupVaultName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update the specified Backup Vault in the NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param body BackupVault object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    body: BackupVault,
    options?: BackupVaultsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsCreateOrUpdateResponse>,
      BackupVaultsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BackupVaultsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, backupVaultName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BackupVaultsCreateOrUpdateResponse,
      OperationState<BackupVaultsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the specified Backup Vault in the NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param body BackupVault object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    body: BackupVault,
    options?: BackupVaultsCreateOrUpdateOptionalParams,
  ): Promise<BackupVaultsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      backupVaultName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch the specified NetApp Backup Vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param body Backup Vault object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    body: BackupVaultPatch,
    options?: BackupVaultsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsUpdateResponse>,
      BackupVaultsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BackupVaultsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, backupVaultName, body, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      BackupVaultsUpdateResponse,
      OperationState<BackupVaultsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch the specified NetApp Backup Vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param body Backup Vault object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    body: BackupVaultPatch,
    options?: BackupVaultsUpdateOptionalParams,
  ): Promise<BackupVaultsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      backupVaultName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the specified Backup Vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    options?: BackupVaultsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsDeleteResponse>,
      BackupVaultsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BackupVaultsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, backupVaultName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      BackupVaultsDeleteResponse,
      OperationState<BackupVaultsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the specified Backup Vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    options?: BackupVaultsDeleteOptionalParams,
  ): Promise<BackupVaultsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      backupVaultName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByNetAppAccountNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param nextLink The nextLink from the previous successful call to the ListByNetAppAccount method.
   * @param options The options parameters.
   */
  private _listByNetAppAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: BackupVaultsListByNetAppAccountNextOptionalParams,
  ): Promise<BackupVaultsListByNetAppAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByNetAppAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNetAppAccountOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultsList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVault,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupVaultName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVault,
    },
    201: {
      bodyMapper: Mappers.BackupVault,
    },
    202: {
      bodyMapper: Mappers.BackupVault,
    },
    204: {
      bodyMapper: Mappers.BackupVault,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body36,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupVaultName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVault,
    },
    201: {
      bodyMapper: Mappers.BackupVault,
    },
    202: {
      bodyMapper: Mappers.BackupVault,
    },
    204: {
      bodyMapper: Mappers.BackupVault,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body37,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupVaultName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.BackupVaultsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.BackupVaultsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.BackupVaultsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.BackupVaultsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupVaultName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByNetAppAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultsList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
