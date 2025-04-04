/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NetAppResource } from "../operationsInterfaces/index.js";
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
  CheckNameResourceTypes,
  NetAppResourceCheckNameAvailabilityOptionalParams,
  NetAppResourceCheckNameAvailabilityResponse,
  NetAppResourceCheckFilePathAvailabilityOptionalParams,
  NetAppResourceCheckFilePathAvailabilityResponse,
  CheckQuotaNameResourceTypes,
  NetAppResourceCheckQuotaAvailabilityOptionalParams,
  NetAppResourceCheckQuotaAvailabilityResponse,
  NetAppResourceQueryRegionInfoOptionalParams,
  NetAppResourceQueryRegionInfoResponse,
  NetAppResourceQueryNetworkSiblingSetOptionalParams,
  NetAppResourceQueryNetworkSiblingSetResponse,
  NetworkFeatures,
  NetAppResourceUpdateNetworkSiblingSetOptionalParams,
  NetAppResourceUpdateNetworkSiblingSetResponse,
} from "../models/index.js";

/** Class containing NetAppResource operations. */
export class NetAppResourceImpl implements NetAppResource {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class NetAppResource class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * Check if a resource name is available.
   * @param location The name of the Azure region.
   * @param name Resource name to verify.
   * @param typeParam Resource type used for verification.
   * @param resourceGroup Resource group name.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    name: string,
    typeParam: CheckNameResourceTypes,
    resourceGroup: string,
    options?: NetAppResourceCheckNameAvailabilityOptionalParams,
  ): Promise<NetAppResourceCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, name, typeParam, resourceGroup, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Check if a file path is available.
   * @param location The name of the Azure region.
   * @param name File path to verify.
   * @param subnetId The Azure Resource URI for a delegated subnet. Must have the delegation
   *                 Microsoft.NetApp/volumes
   * @param options The options parameters.
   */
  checkFilePathAvailability(
    location: string,
    name: string,
    subnetId: string,
    options?: NetAppResourceCheckFilePathAvailabilityOptionalParams,
  ): Promise<NetAppResourceCheckFilePathAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, name, subnetId, options },
      checkFilePathAvailabilityOperationSpec,
    );
  }

  /**
   * Check if a quota is available.
   * @param location The name of the Azure region.
   * @param name Name of the resource to verify.
   * @param typeParam Resource type used for verification.
   * @param resourceGroup Resource group name.
   * @param options The options parameters.
   */
  checkQuotaAvailability(
    location: string,
    name: string,
    typeParam: CheckQuotaNameResourceTypes,
    resourceGroup: string,
    options?: NetAppResourceCheckQuotaAvailabilityOptionalParams,
  ): Promise<NetAppResourceCheckQuotaAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, name, typeParam, resourceGroup, options },
      checkQuotaAvailabilityOperationSpec,
    );
  }

  /**
   * Provides storage to network proximity and logical zone mapping information.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  queryRegionInfo(
    location: string,
    options?: NetAppResourceQueryRegionInfoOptionalParams,
  ): Promise<NetAppResourceQueryRegionInfoResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      queryRegionInfoOperationSpec,
    );
  }

  /**
   * Get details of the specified network sibling set.
   * @param location The name of the Azure region.
   * @param networkSiblingSetId Network Sibling Set ID for a group of volumes sharing networking
   *                            resources in a subnet.
   * @param subnetId The Azure Resource URI for a delegated subnet. Must have the delegation
   *                 Microsoft.NetApp/volumes. Example
   *                 /subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/{mySubnet}
   * @param options The options parameters.
   */
  queryNetworkSiblingSet(
    location: string,
    networkSiblingSetId: string,
    subnetId: string,
    options?: NetAppResourceQueryNetworkSiblingSetOptionalParams,
  ): Promise<NetAppResourceQueryNetworkSiblingSetResponse> {
    return this.client.sendOperationRequest(
      { location, networkSiblingSetId, subnetId, options },
      queryNetworkSiblingSetOperationSpec,
    );
  }

  /**
   * Update the network features of the specified network sibling set.
   * @param location The name of the Azure region.
   * @param networkSiblingSetId Network Sibling Set ID for a group of volumes sharing networking
   *                            resources in a subnet.
   * @param subnetId The Azure Resource URI for a delegated subnet. Must have the delegation
   *                 Microsoft.NetApp/volumes. Example
   *                 /subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/{mySubnet}
   * @param networkSiblingSetStateId Network sibling set state Id identifying the current state of the
   *                                 sibling set.
   * @param networkFeatures Network features available to the volume.
   * @param options The options parameters.
   */
  async beginUpdateNetworkSiblingSet(
    location: string,
    networkSiblingSetId: string,
    subnetId: string,
    networkSiblingSetStateId: string,
    networkFeatures: NetworkFeatures,
    options?: NetAppResourceUpdateNetworkSiblingSetOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetAppResourceUpdateNetworkSiblingSetResponse>,
      NetAppResourceUpdateNetworkSiblingSetResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NetAppResourceUpdateNetworkSiblingSetResponse> => {
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
        location,
        networkSiblingSetId,
        subnetId,
        networkSiblingSetStateId,
        networkFeatures,
        options,
      },
      spec: updateNetworkSiblingSetOperationSpec,
    });
    const poller = await createHttpPoller<
      NetAppResourceUpdateNetworkSiblingSetResponse,
      OperationState<NetAppResourceUpdateNetworkSiblingSetResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the network features of the specified network sibling set.
   * @param location The name of the Azure region.
   * @param networkSiblingSetId Network Sibling Set ID for a group of volumes sharing networking
   *                            resources in a subnet.
   * @param subnetId The Azure Resource URI for a delegated subnet. Must have the delegation
   *                 Microsoft.NetApp/volumes. Example
   *                 /subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/{mySubnet}
   * @param networkSiblingSetStateId Network sibling set state Id identifying the current state of the
   *                                 sibling set.
   * @param networkFeatures Network features available to the volume.
   * @param options The options parameters.
   */
  async beginUpdateNetworkSiblingSetAndWait(
    location: string,
    networkSiblingSetId: string,
    subnetId: string,
    networkSiblingSetStateId: string,
    networkFeatures: NetworkFeatures,
    options?: NetAppResourceUpdateNetworkSiblingSetOptionalParams,
  ): Promise<NetAppResourceUpdateNetworkSiblingSetResponse> {
    const poller = await this.beginUpdateNetworkSiblingSet(
      location,
      networkSiblingSetId,
      subnetId,
      networkSiblingSetStateId,
      networkFeatures,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckAvailabilityResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      name: ["name"],
      typeParam: ["typeParam"],
      resourceGroup: ["resourceGroup"],
    },
    mapper: { ...Mappers.ResourceNameAvailabilityRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const checkFilePathAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkFilePathAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckAvailabilityResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      name: ["name"],
      subnetId: ["subnetId"],
      availabilityZone: ["options", "availabilityZone"],
    },
    mapper: { ...Mappers.FilePathAvailabilityRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const checkQuotaAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkQuotaAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckAvailabilityResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      name: ["name"],
      typeParam: ["typeParam"],
      resourceGroup: ["resourceGroup"],
    },
    mapper: { ...Mappers.QuotaAvailabilityRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const queryRegionInfoOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/regionInfo",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegionInfo,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const queryNetworkSiblingSetOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/queryNetworkSiblingSet",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSiblingSet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      networkSiblingSetId: ["networkSiblingSetId"],
      subnetId: ["subnetId"],
    },
    mapper: { ...Mappers.QueryNetworkSiblingSetRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateNetworkSiblingSetOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/updateNetworkSiblingSet",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSiblingSet,
    },
    201: {
      bodyMapper: Mappers.NetworkSiblingSet,
    },
    202: {
      bodyMapper: Mappers.NetworkSiblingSet,
    },
    204: {
      bodyMapper: Mappers.NetworkSiblingSet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: {
    parameterPath: {
      networkSiblingSetId: ["networkSiblingSetId"],
      subnetId: ["subnetId"],
      networkSiblingSetStateId: ["networkSiblingSetStateId"],
      networkFeatures: ["networkFeatures"],
    },
    mapper: { ...Mappers.UpdateNetworkSiblingSetRequest, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
