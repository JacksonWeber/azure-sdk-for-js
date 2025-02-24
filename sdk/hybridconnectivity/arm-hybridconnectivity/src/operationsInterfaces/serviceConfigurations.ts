/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ServiceConfigurationResource,
  ServiceConfigurationsListByEndpointResourceOptionalParams,
  ServiceConfigurationsGetOptionalParams,
  ServiceConfigurationsGetResponse,
  ServiceConfigurationsCreateOrupdateOptionalParams,
  ServiceConfigurationsCreateOrupdateResponse,
  ServiceConfigurationResourcePatch,
  ServiceConfigurationsUpdateOptionalParams,
  ServiceConfigurationsUpdateResponse,
  ServiceConfigurationsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceConfigurations. */
export interface ServiceConfigurations {
  /**
   * API to enumerate registered services in service configurations under a Endpoint Resource
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param options The options parameters.
   */
  listByEndpointResource(
    resourceUri: string,
    endpointName: string,
    options?: ServiceConfigurationsListByEndpointResourceOptionalParams
  ): PagedAsyncIterableIterator<ServiceConfigurationResource>;
  /**
   * Gets the details about the service to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param serviceConfigurationName The service name.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    options?: ServiceConfigurationsGetOptionalParams
  ): Promise<ServiceConfigurationsGetResponse>;
  /**
   * Create or update a service in serviceConfiguration for the endpoint resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param serviceConfigurationName The service name.
   * @param serviceConfigurationResource Service details
   * @param options The options parameters.
   */
  createOrupdate(
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    serviceConfigurationResource: ServiceConfigurationResource,
    options?: ServiceConfigurationsCreateOrupdateOptionalParams
  ): Promise<ServiceConfigurationsCreateOrupdateResponse>;
  /**
   * Update the service details in the service configurations of the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param serviceConfigurationName The service name.
   * @param serviceConfigurationResource Service details
   * @param options The options parameters.
   */
  update(
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    serviceConfigurationResource: ServiceConfigurationResourcePatch,
    options?: ServiceConfigurationsUpdateOptionalParams
  ): Promise<ServiceConfigurationsUpdateResponse>;
  /**
   * Deletes the service details to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param serviceConfigurationName The service name.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    options?: ServiceConfigurationsDeleteOptionalParams
  ): Promise<void>;
}
