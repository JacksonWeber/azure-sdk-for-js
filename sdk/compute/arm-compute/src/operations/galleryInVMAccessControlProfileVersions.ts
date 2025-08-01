/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { GalleryInVMAccessControlProfileVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ComputeManagementClient } from "../computeManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  GalleryInVMAccessControlProfileVersion,
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileNextOptionalParams,
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileResponse,
  GalleryInVMAccessControlProfileVersionsGetOptionalParams,
  GalleryInVMAccessControlProfileVersionsGetResponse,
  GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse,
  GalleryInVMAccessControlProfileVersionUpdate,
  GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsUpdateResponse,
  GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  GalleryInVMAccessControlProfileVersionsDeleteResponse,
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing GalleryInVMAccessControlProfileVersions operations. */
export class GalleryInVMAccessControlProfileVersionsImpl
  implements GalleryInVMAccessControlProfileVersions
{
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class GalleryInVMAccessControlProfileVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List gallery inVMAccessControlProfile versions in a gallery inVMAccessControlProfile
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param options The options parameters.
   */
  public listByGalleryInVMAccessControlProfile(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  ): PagedAsyncIterableIterator<GalleryInVMAccessControlProfileVersion> {
    const iter = this.listByGalleryInVMAccessControlProfilePagingAll(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
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
        return this.listByGalleryInVMAccessControlProfilePagingPage(
          resourceGroupName,
          galleryName,
          inVMAccessControlProfileName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByGalleryInVMAccessControlProfilePagingPage(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<GalleryInVMAccessControlProfileVersion[]> {
    let result: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByGalleryInVMAccessControlProfile(
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByGalleryInVMAccessControlProfileNext(
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByGalleryInVMAccessControlProfilePagingAll(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  ): AsyncIterableIterator<GalleryInVMAccessControlProfileVersion> {
    for await (const page of this.listByGalleryInVMAccessControlProfilePagingPage(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List gallery inVMAccessControlProfile versions in a gallery inVMAccessControlProfile
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param options The options parameters.
   */
  private _listByGalleryInVMAccessControlProfile(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, inVMAccessControlProfileName, options },
      listByGalleryInVMAccessControlProfileOperationSpec,
    );
  }

  /**
   * Retrieves information about a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsGetOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create or update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the create or update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersion,
    options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse>,
      GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        galleryInVMAccessControlProfileVersion,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse,
      OperationState<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the create or update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersion,
    options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
      inVMAccessControlProfileVersionName,
      galleryInVMAccessControlProfileVersion,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersionUpdate,
    options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsUpdateResponse>,
      GalleryInVMAccessControlProfileVersionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GalleryInVMAccessControlProfileVersionsUpdateResponse> => {
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
      args: {
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        galleryInVMAccessControlProfileVersion,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      GalleryInVMAccessControlProfileVersionsUpdateResponse,
      OperationState<GalleryInVMAccessControlProfileVersionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersionUpdate,
    options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
      inVMAccessControlProfileVersionName,
      galleryInVMAccessControlProfileVersion,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsDeleteResponse>,
      GalleryInVMAccessControlProfileVersionsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GalleryInVMAccessControlProfileVersionsDeleteResponse> => {
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
      args: {
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      GalleryInVMAccessControlProfileVersionsDeleteResponse,
      OperationState<GalleryInVMAccessControlProfileVersionsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
      inVMAccessControlProfileVersionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByGalleryInVMAccessControlProfileNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param galleryName The name of the Shared Image Gallery.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile to be
   *                                     retrieved.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByGalleryInVMAccessControlProfile method.
   * @param options The options parameters.
   */
  private _listByGalleryInVMAccessControlProfileNext(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    nextLink: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileNextOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        nextLink,
        options,
      },
      listByGalleryInVMAccessControlProfileNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByGalleryInVMAccessControlProfileOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{inVMAccessControlProfileName}/versions",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.GalleryInVMAccessControlProfileVersionList,
      },
      default: {
        bodyMapper: Mappers.CloudError,
      },
    },
    queryParameters: [Parameters.apiVersion3],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.galleryName,
      Parameters.inVMAccessControlProfileName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{inVMAccessControlProfileName}/versions/{inVMAccessControlProfileVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.inVMAccessControlProfileName,
    Parameters.inVMAccessControlProfileVersionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{inVMAccessControlProfileName}/versions/{inVMAccessControlProfileVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
    },
    201: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
    },
    202: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
    },
    204: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.galleryInVMAccessControlProfileVersion,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.inVMAccessControlProfileName,
    Parameters.inVMAccessControlProfileVersionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{inVMAccessControlProfileName}/versions/{inVMAccessControlProfileVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.GalleryInVMAccessControlProfileVersion,
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.galleryInVMAccessControlProfileVersion1,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.inVMAccessControlProfileName,
    Parameters.inVMAccessControlProfileVersionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{inVMAccessControlProfileName}/versions/{inVMAccessControlProfileVersionName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsDeleteHeaders,
    },
    201: {
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsDeleteHeaders,
    },
    202: {
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsDeleteHeaders,
    },
    204: {
      headersMapper:
        Mappers.GalleryInVMAccessControlProfileVersionsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.inVMAccessControlProfileName,
    Parameters.inVMAccessControlProfileVersionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByGalleryInVMAccessControlProfileNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.GalleryInVMAccessControlProfileVersionList,
      },
      default: {
        bodyMapper: Mappers.CloudError,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.nextLink,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.galleryName,
      Parameters.inVMAccessControlProfileName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
