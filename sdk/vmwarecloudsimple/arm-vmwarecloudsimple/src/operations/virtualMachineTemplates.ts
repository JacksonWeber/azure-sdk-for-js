/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VirtualMachineTemplates } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { VMwareCloudSimple } from "../vMwareCloudSimple.js";
import {
  VirtualMachineTemplate,
  VirtualMachineTemplatesListNextOptionalParams,
  VirtualMachineTemplatesListOptionalParams,
  VirtualMachineTemplatesListResponse,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesGetResponse,
  VirtualMachineTemplatesListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineTemplates operations. */
export class VirtualMachineTemplatesImpl implements VirtualMachineTemplates {
  private readonly client: VMwareCloudSimple;

  /**
   * Initialize a new instance of the class VirtualMachineTemplates class.
   * @param client Reference to the service client
   */
  constructor(client: VMwareCloudSimple) {
    this.client = client;
  }

  /**
   * Returns list of virtual machine templates in region for private cloud
   * @param pcName The private cloud name
   * @param regionId The region Id (westus, eastus)
   * @param resourcePoolName Resource pool used to derive vSphere cluster which contains VM templates
   * @param options The options parameters.
   */
  public list(
    pcName: string,
    regionId: string,
    resourcePoolName: string,
    options?: VirtualMachineTemplatesListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineTemplate> {
    const iter = this.listPagingAll(
      pcName,
      regionId,
      resourcePoolName,
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
          pcName,
          regionId,
          resourcePoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    pcName: string,
    regionId: string,
    resourcePoolName: string,
    options?: VirtualMachineTemplatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VirtualMachineTemplate[]> {
    let result: VirtualMachineTemplatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(pcName, regionId, resourcePoolName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        pcName,
        regionId,
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
    pcName: string,
    regionId: string,
    resourcePoolName: string,
    options?: VirtualMachineTemplatesListOptionalParams
  ): AsyncIterableIterator<VirtualMachineTemplate> {
    for await (const page of this.listPagingPage(
      pcName,
      regionId,
      resourcePoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of virtual machine templates in region for private cloud
   * @param pcName The private cloud name
   * @param regionId The region Id (westus, eastus)
   * @param resourcePoolName Resource pool used to derive vSphere cluster which contains VM templates
   * @param options The options parameters.
   */
  private _list(
    pcName: string,
    regionId: string,
    resourcePoolName: string,
    options?: VirtualMachineTemplatesListOptionalParams
  ): Promise<VirtualMachineTemplatesListResponse> {
    return this.client.sendOperationRequest(
      { pcName, regionId, resourcePoolName, options },
      listOperationSpec
    );
  }

  /**
   * Returns virtual machine templates by its name
   * @param regionId The region Id (westus, eastus)
   * @param pcName The private cloud name
   * @param virtualMachineTemplateName virtual machine template id (vsphereId)
   * @param options The options parameters.
   */
  get(
    regionId: string,
    pcName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams
  ): Promise<VirtualMachineTemplatesGetResponse> {
    return this.client.sendOperationRequest(
      { regionId, pcName, virtualMachineTemplateName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param pcName The private cloud name
   * @param regionId The region Id (westus, eastus)
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    pcName: string,
    regionId: string,
    nextLink: string,
    options?: VirtualMachineTemplatesListNextOptionalParams
  ): Promise<VirtualMachineTemplatesListNextResponse> {
    return this.client.sendOperationRequest(
      { pcName, regionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplateListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.resourcePoolName1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId,
    Parameters.pcName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates/{virtualMachineTemplateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId,
    Parameters.pcName,
    Parameters.virtualMachineTemplateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplateListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId,
    Parameters.nextLink,
    Parameters.pcName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
