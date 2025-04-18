/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ClusterVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ServiceFabricManagementClient } from "../serviceFabricManagementClient.js";
import {
  ClusterVersionsGetOptionalParams,
  ClusterVersionsGetResponse,
  ClusterVersionsEnvironment,
  ClusterVersionsGetByEnvironmentOptionalParams,
  ClusterVersionsGetByEnvironmentResponse,
  ClusterVersionsListOptionalParams,
  ClusterVersionsListResponse,
  ClusterVersionsListByEnvironmentOptionalParams,
  ClusterVersionsListByEnvironmentResponse
} from "../models/index.js";

/** Class containing ClusterVersions operations. */
export class ClusterVersionsImpl implements ClusterVersions {
  private readonly client: ServiceFabricManagementClient;

  /**
   * Initialize a new instance of the class ClusterVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceFabricManagementClient) {
    this.client = client;
  }

  /**
   * Gets information about an available Service Fabric cluster code version.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param clusterVersion The cluster code version.
   * @param options The options parameters.
   */
  get(
    location: string,
    clusterVersion: string,
    options?: ClusterVersionsGetOptionalParams
  ): Promise<ClusterVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { location, clusterVersion, options },
      getOperationSpec
    );
  }

  /**
   * Gets information about an available Service Fabric cluster code version by environment.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param environment The operating system of the cluster. The default means all.
   * @param clusterVersion The cluster code version.
   * @param options The options parameters.
   */
  getByEnvironment(
    location: string,
    environment: ClusterVersionsEnvironment,
    clusterVersion: string,
    options?: ClusterVersionsGetByEnvironmentOptionalParams
  ): Promise<ClusterVersionsGetByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { location, environment, clusterVersion, options },
      getByEnvironmentOperationSpec
    );
  }

  /**
   * Gets all available code versions for Service Fabric cluster resources by location.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: ClusterVersionsListOptionalParams
  ): Promise<ClusterVersionsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * Gets all available code versions for Service Fabric cluster resources by environment.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param environment The operating system of the cluster. The default means all.
   * @param options The options parameters.
   */
  listByEnvironment(
    location: string,
    environment: ClusterVersionsEnvironment,
    options?: ClusterVersionsListByEnvironmentOptionalParams
  ): Promise<ClusterVersionsListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { location, environment, options },
      listByEnvironmentOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions/{clusterVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterCodeVersionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.clusterVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions/{clusterVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterCodeVersionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.clusterVersion,
    Parameters.environment
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterCodeVersionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterCodeVersionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.environment
  ],
  headerParameters: [Parameters.accept],
  serializer
};
