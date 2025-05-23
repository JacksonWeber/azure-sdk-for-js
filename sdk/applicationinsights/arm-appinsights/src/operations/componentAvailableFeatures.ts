/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ComponentAvailableFeatures } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient.js";
import {
  ComponentAvailableFeaturesGetOptionalParams,
  ComponentAvailableFeaturesGetResponse,
} from "../models/index.js";

/** Class containing ComponentAvailableFeatures operations. */
export class ComponentAvailableFeaturesImpl
  implements ComponentAvailableFeatures
{
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class ComponentAvailableFeatures class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Returns all available features of the application insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ComponentAvailableFeaturesGetOptionalParams,
  ): Promise<ComponentAvailableFeaturesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/getavailablebillingfeatures",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAvailableFeatures,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
