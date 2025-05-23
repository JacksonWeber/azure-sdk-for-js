/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { TuningConfiguration } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { PostgreSQLManagementFlexibleServerClient } from "../postgreSQLManagementFlexibleServerClient.js";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import type {
  SessionResource,
  TuningOptionEnum,
  TuningConfigurationListSessionsNextOptionalParams,
  TuningConfigurationListSessionsOptionalParams,
  TuningConfigurationListSessionsResponse,
  SessionDetailsResource,
  TuningConfigurationListSessionDetailsNextOptionalParams,
  TuningConfigurationListSessionDetailsOptionalParams,
  TuningConfigurationListSessionDetailsResponse,
  TuningConfigurationEnableOptionalParams,
  TuningConfigurationEnableResponse,
  TuningConfigurationDisableOptionalParams,
  TuningConfigurationDisableResponse,
  ConfigTuningRequestParameter,
  TuningConfigurationStartSessionOptionalParams,
  TuningConfigurationStartSessionResponse,
  TuningConfigurationStopSessionOptionalParams,
  TuningConfigurationStopSessionResponse,
  TuningConfigurationListSessionsNextResponse,
  TuningConfigurationListSessionDetailsNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing TuningConfiguration operations. */
export class TuningConfigurationImpl implements TuningConfiguration {
  private readonly client: PostgreSQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class TuningConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Gets up the config tuning session status.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  public listSessions(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationListSessionsOptionalParams,
  ): PagedAsyncIterableIterator<SessionResource> {
    const iter = this.listSessionsPagingAll(resourceGroupName, serverName, tuningOption, options);
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
        return this.listSessionsPagingPage(
          resourceGroupName,
          serverName,
          tuningOption,
          options,
          settings,
        );
      },
    };
  }

  private async *listSessionsPagingPage(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationListSessionsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionResource[]> {
    let result: TuningConfigurationListSessionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listSessions(resourceGroupName, serverName, tuningOption, options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listSessionsNext(
        resourceGroupName,
        serverName,
        tuningOption,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listSessionsPagingAll(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationListSessionsOptionalParams,
  ): AsyncIterableIterator<SessionResource> {
    for await (const page of this.listSessionsPagingPage(
      resourceGroupName,
      serverName,
      tuningOption,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets the session details of a config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param sessionId Guid of the objectId for the session.
   * @param options The options parameters.
   */
  public listSessionDetails(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    sessionId: string,
    options?: TuningConfigurationListSessionDetailsOptionalParams,
  ): PagedAsyncIterableIterator<SessionDetailsResource> {
    const iter = this.listSessionDetailsPagingAll(
      resourceGroupName,
      serverName,
      tuningOption,
      sessionId,
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
        return this.listSessionDetailsPagingPage(
          resourceGroupName,
          serverName,
          tuningOption,
          sessionId,
          options,
          settings,
        );
      },
    };
  }

  private async *listSessionDetailsPagingPage(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    sessionId: string,
    options?: TuningConfigurationListSessionDetailsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionDetailsResource[]> {
    let result: TuningConfigurationListSessionDetailsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listSessionDetails(
        resourceGroupName,
        serverName,
        tuningOption,
        sessionId,
        options,
      );
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listSessionDetailsNext(
        resourceGroupName,
        serverName,
        tuningOption,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listSessionDetailsPagingAll(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    sessionId: string,
    options?: TuningConfigurationListSessionDetailsOptionalParams,
  ): AsyncIterableIterator<SessionDetailsResource> {
    for await (const page of this.listSessionDetailsPagingPage(
      resourceGroupName,
      serverName,
      tuningOption,
      sessionId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Enables the config tuning.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginEnable(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationEnableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TuningConfigurationEnableResponse>,
      TuningConfigurationEnableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TuningConfigurationEnableResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
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
      args: { resourceGroupName, serverName, tuningOption, options },
      spec: enableOperationSpec,
    });
    const poller = await createHttpPoller<
      TuningConfigurationEnableResponse,
      OperationState<TuningConfigurationEnableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables the config tuning.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginEnableAndWait(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationEnableOptionalParams,
  ): Promise<TuningConfigurationEnableResponse> {
    const poller = await this.beginEnable(resourceGroupName, serverName, tuningOption, options);
    return poller.pollUntilDone();
  }

  /**
   * Disables the config tuning.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginDisable(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationDisableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TuningConfigurationDisableResponse>,
      TuningConfigurationDisableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TuningConfigurationDisableResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
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
      args: { resourceGroupName, serverName, tuningOption, options },
      spec: disableOperationSpec,
    });
    const poller = await createHttpPoller<
      TuningConfigurationDisableResponse,
      OperationState<TuningConfigurationDisableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disables the config tuning.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginDisableAndWait(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationDisableOptionalParams,
  ): Promise<TuningConfigurationDisableResponse> {
    const poller = await this.beginDisable(resourceGroupName, serverName, tuningOption, options);
    return poller.pollUntilDone();
  }

  /**
   * Starts up the config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param configTuningRequest The parameters for tuning request.
   * @param options The options parameters.
   */
  async beginStartSession(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    configTuningRequest: ConfigTuningRequestParameter,
    options?: TuningConfigurationStartSessionOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TuningConfigurationStartSessionResponse>,
      TuningConfigurationStartSessionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TuningConfigurationStartSessionResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
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
      args: {
        resourceGroupName,
        serverName,
        tuningOption,
        configTuningRequest,
        options,
      },
      spec: startSessionOperationSpec,
    });
    const poller = await createHttpPoller<
      TuningConfigurationStartSessionResponse,
      OperationState<TuningConfigurationStartSessionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Starts up the config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param configTuningRequest The parameters for tuning request.
   * @param options The options parameters.
   */
  async beginStartSessionAndWait(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    configTuningRequest: ConfigTuningRequestParameter,
    options?: TuningConfigurationStartSessionOptionalParams,
  ): Promise<TuningConfigurationStartSessionResponse> {
    const poller = await this.beginStartSession(
      resourceGroupName,
      serverName,
      tuningOption,
      configTuningRequest,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Stops the config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginStopSession(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationStopSessionOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TuningConfigurationStopSessionResponse>,
      TuningConfigurationStopSessionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TuningConfigurationStopSessionResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
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
      args: { resourceGroupName, serverName, tuningOption, options },
      spec: stopSessionOperationSpec,
    });
    const poller = await createHttpPoller<
      TuningConfigurationStopSessionResponse,
      OperationState<TuningConfigurationStopSessionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Stops the config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  async beginStopSessionAndWait(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationStopSessionOptionalParams,
  ): Promise<TuningConfigurationStopSessionResponse> {
    const poller = await this.beginStopSession(
      resourceGroupName,
      serverName,
      tuningOption,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets up the config tuning session status.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  private _listSessions(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningConfigurationListSessionsOptionalParams,
  ): Promise<TuningConfigurationListSessionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, tuningOption, options },
      listSessionsOperationSpec,
    );
  }

  /**
   * Gets the session details of a config tuning session.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param sessionId Guid of the objectId for the session.
   * @param options The options parameters.
   */
  private _listSessionDetails(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    sessionId: string,
    options?: TuningConfigurationListSessionDetailsOptionalParams,
  ): Promise<TuningConfigurationListSessionDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, tuningOption, sessionId, options },
      listSessionDetailsOperationSpec,
    );
  }

  /**
   * ListSessionsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param nextLink The nextLink from the previous successful call to the ListSessions method.
   * @param options The options parameters.
   */
  private _listSessionsNext(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    nextLink: string,
    options?: TuningConfigurationListSessionsNextOptionalParams,
  ): Promise<TuningConfigurationListSessionsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, tuningOption, nextLink, options },
      listSessionsNextOperationSpec,
    );
  }

  /**
   * ListSessionDetailsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param nextLink The nextLink from the previous successful call to the ListSessionDetails method.
   * @param options The options parameters.
   */
  private _listSessionDetailsNext(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    nextLink: string,
    options?: TuningConfigurationListSessionDetailsNextOptionalParams,
  ): Promise<TuningConfigurationListSessionDetailsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, tuningOption, nextLink, options },
      listSessionDetailsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const enableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/enable",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.TuningConfigurationEnableHeaders,
    },
    201: {
      headersMapper: Mappers.TuningConfigurationEnableHeaders,
    },
    202: {
      headersMapper: Mappers.TuningConfigurationEnableHeaders,
    },
    204: {
      headersMapper: Mappers.TuningConfigurationEnableHeaders,
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
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const disableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/disable",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.TuningConfigurationDisableHeaders,
    },
    201: {
      headersMapper: Mappers.TuningConfigurationDisableHeaders,
    },
    202: {
      headersMapper: Mappers.TuningConfigurationDisableHeaders,
    },
    204: {
      headersMapper: Mappers.TuningConfigurationDisableHeaders,
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
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const startSessionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/startSession",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.TuningConfigurationStartSessionHeaders,
    },
    201: {
      headersMapper: Mappers.TuningConfigurationStartSessionHeaders,
    },
    202: {
      headersMapper: Mappers.TuningConfigurationStartSessionHeaders,
    },
    204: {
      headersMapper: Mappers.TuningConfigurationStartSessionHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.configTuningRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const stopSessionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/stopSession",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.TuningConfigurationStopSessionHeaders,
    },
    201: {
      headersMapper: Mappers.TuningConfigurationStopSessionHeaders,
    },
    202: {
      headersMapper: Mappers.TuningConfigurationStopSessionHeaders,
    },
    204: {
      headersMapper: Mappers.TuningConfigurationStopSessionHeaders,
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
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSessionsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/sessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsListResult,
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
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSessionDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/sessionDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionDetailsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.sessionId],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSessionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSessionDetailsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionDetailsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.tuningOption,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
