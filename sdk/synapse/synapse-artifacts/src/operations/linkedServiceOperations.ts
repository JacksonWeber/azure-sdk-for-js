/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { LinkedServiceOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ArtifactsClient } from "../artifactsClient.js";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import type {
  LinkedServiceResource,
  LinkedServiceGetLinkedServicesByWorkspaceNextOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceResponse,
  LinkedServiceCreateOrUpdateLinkedServiceOptionalParams,
  LinkedServiceCreateOrUpdateLinkedServiceResponse,
  LinkedServiceGetLinkedServiceOptionalParams,
  LinkedServiceGetLinkedServiceResponse,
  LinkedServiceDeleteLinkedServiceOptionalParams,
  ArtifactRenameRequest,
  LinkedServiceRenameLinkedServiceOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceNextResponse,
} from "../models/index.js";
import type { RawHttpHeaders } from "@azure/core-rest-pipeline";

// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getLinkedServicesByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource,
    },
    201: {
      bodyMapper: Mappers.LinkedServiceResource,
    },
    202: {
      bodyMapper: Mappers.LinkedServiceResource,
    },
    204: {
      bodyMapper: Mappers.LinkedServiceResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.linkedService,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept, Parameters.contentType, Parameters.ifMatch],
  mediaType: "json",
  serializer,
};
const getLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource,
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const deleteLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept],
  serializer,
};
const renameLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getLinkedServicesByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};

/** Class containing LinkedServiceOperations operations. */
export class LinkedServiceOperationsImpl implements LinkedServiceOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class LinkedServiceOperations class.
   * @param client - Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists linked services.
   * @param options - The options parameters.
   */
  public listLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<LinkedServiceResource> {
    const iter = this.getLinkedServicesByWorkspacePagingAll(options);
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
        return this.getLinkedServicesByWorkspacePagingPage(options, settings);
      },
    };
  }

  private async *getLinkedServicesByWorkspacePagingPage(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LinkedServiceResource[]> {
    let result: LinkedServiceGetLinkedServicesByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getLinkedServicesByWorkspace(options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getLinkedServicesByWorkspaceNext(continuationToken, options);
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getLinkedServicesByWorkspacePagingAll(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
  ): AsyncIterableIterator<LinkedServiceResource> {
    for await (const page of this.getLinkedServicesByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists linked services.
   * @param options - The options parameters.
   */
  private async _getLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
  ): Promise<LinkedServiceGetLinkedServicesByWorkspaceResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._getLinkedServicesByWorkspace",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { updatedOptions },
          getLinkedServicesByWorkspaceOperationSpec,
        ) as Promise<LinkedServiceGetLinkedServicesByWorkspaceResponse>;
      },
    );
  }

  /**
   * Creates or updates a linked service.
   * @param linkedServiceName - The linked service name.
   * @param linkedService - Linked service resource definition.
   * @param options - The options parameters.
   */
  async beginCreateOrUpdateLinkedService(
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServiceCreateOrUpdateLinkedServiceOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LinkedServiceCreateOrUpdateLinkedServiceResponse>,
      LinkedServiceCreateOrUpdateLinkedServiceResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LinkedServiceCreateOrUpdateLinkedServiceResponse> => {
      return tracingClient.withSpan(
        "ArtifactsClient.beginCreateOrUpdateLinkedService",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(
            args,
            spec,
          ) as Promise<LinkedServiceCreateOrUpdateLinkedServiceResponse>;
        },
      );
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<{
      flatResponse: LinkedServiceResource;
      rawResponse: {
        statusCode: number;
        body: any;
        headers: RawHttpHeaders;
      };
    }> => {
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
      args: { linkedServiceName, linkedService, options },
      spec: createOrUpdateLinkedServiceOperationSpec,
    });
    const poller = await createHttpPoller<
      LinkedServiceCreateOrUpdateLinkedServiceResponse,
      OperationState<LinkedServiceCreateOrUpdateLinkedServiceResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a linked service.
   * @param linkedServiceName - The linked service name.
   * @param linkedService - Linked service resource definition.
   * @param options - The options parameters.
   */
  async beginCreateOrUpdateLinkedServiceAndWait(
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServiceCreateOrUpdateLinkedServiceOptionalParams,
  ): Promise<LinkedServiceCreateOrUpdateLinkedServiceResponse> {
    const poller = await this.beginCreateOrUpdateLinkedService(
      linkedServiceName,
      linkedService,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a linked service.
   * @param linkedServiceName - The linked service name.
   * @param options - The options parameters.
   */
  async getLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceGetLinkedServiceOptionalParams,
  ): Promise<LinkedServiceGetLinkedServiceResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.getLinkedService",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkedServiceName, updatedOptions },
          getLinkedServiceOperationSpec,
        ) as Promise<LinkedServiceGetLinkedServiceResponse>;
      },
    );
  }

  /**
   * Deletes a linked service.
   * @param linkedServiceName - The linked service name.
   * @param options - The options parameters.
   */
  async beginDeleteLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return tracingClient.withSpan(
        "ArtifactsClient.beginDeleteLinkedService",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<void>;
        },
      );
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<{
      flatResponse: void;
      rawResponse: {
        statusCode: number;
        body: any;
        headers: RawHttpHeaders;
      };
    }> => {
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
      args: { linkedServiceName, options },
      spec: deleteLinkedServiceOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a linked service.
   * @param linkedServiceName - The linked service name.
   * @param options - The options parameters.
   */
  async beginDeleteLinkedServiceAndWait(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDeleteLinkedService(linkedServiceName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a linked service.
   * @param linkedServiceName - The linked service name.
   * @param request - proposed new name.
   * @param options - The options parameters.
   */
  async beginRenameLinkedService(
    linkedServiceName: string,
    request: ArtifactRenameRequest,
    options?: LinkedServiceRenameLinkedServiceOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return tracingClient.withSpan(
        "ArtifactsClient.beginRenameLinkedService",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<void>;
        },
      );
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<{
      flatResponse: void;
      rawResponse: {
        statusCode: number;
        body: any;
        headers: RawHttpHeaders;
      };
    }> => {
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
      args: { linkedServiceName, request, options },
      spec: renameLinkedServiceOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Renames a linked service.
   * @param linkedServiceName - The linked service name.
   * @param request - proposed new name.
   * @param options - The options parameters.
   */
  async beginRenameLinkedServiceAndWait(
    linkedServiceName: string,
    request: ArtifactRenameRequest,
    options?: LinkedServiceRenameLinkedServiceOptionalParams,
  ): Promise<void> {
    const poller = await this.beginRenameLinkedService(linkedServiceName, request, options);
    return poller.pollUntilDone();
  }

  /**
   * GetLinkedServicesByWorkspaceNext
   * @param nextLink - The nextLink from the previous successful call to the GetLinkedServicesByWorkspace
   *                 method.
   * @param options - The options parameters.
   */
  private async _getLinkedServicesByWorkspaceNext(
    nextLink: string,
    options?: LinkedServiceGetLinkedServicesByWorkspaceNextOptionalParams,
  ): Promise<LinkedServiceGetLinkedServicesByWorkspaceNextResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._getLinkedServicesByWorkspaceNext",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { nextLink, updatedOptions },
          getLinkedServicesByWorkspaceNextOperationSpec,
        ) as Promise<LinkedServiceGetLinkedServicesByWorkspaceNextResponse>;
      },
    );
  }
}
