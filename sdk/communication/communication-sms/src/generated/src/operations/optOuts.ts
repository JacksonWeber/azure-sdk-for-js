/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import { OptOuts } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SmsApiClient } from "../smsApiClient.js";
import {
  OptOutRequest,
  OptOutsAddOptionalParams,
  OptOutsAddResponse,
  OptOutsRemoveOptionalParams,
  OptOutsRemoveResponse,
  OptOutsCheckOptionalParams,
  OptOutsCheckResponse,
} from "../models/index.js";

/** Class containing OptOuts operations. */
export class OptOutsImpl implements OptOuts {
  private readonly client: SmsApiClient;

  /**
   * Initialize a new instance of the class OptOuts class.
   * @param client Reference to the service client
   */
  constructor(client: SmsApiClient) {
    this.client = client;
  }

  /**
   * Add phone numbers to the optouts list which shall stop receiving messages from a sender number.
   * @param body An opt out request.
   * @param options The options parameters.
   */
  async add(
    body: OptOutRequest,
    options?: OptOutsAddOptionalParams,
  ): Promise<OptOutsAddResponse> {
    return tracingClient.withSpan(
      "SmsApiClient.add",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { body, options },
          addOperationSpec,
        ) as Promise<OptOutsAddResponse>;
      },
    );
  }

  /**
   * Remove phone numbers from the optouts list.
   * @param body An opt out request.
   * @param options The options parameters.
   */
  async remove(
    body: OptOutRequest,
    options?: OptOutsRemoveOptionalParams,
  ): Promise<OptOutsRemoveResponse> {
    return tracingClient.withSpan(
      "SmsApiClient.remove",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { body, options },
          removeOperationSpec,
        ) as Promise<OptOutsRemoveResponse>;
      },
    );
  }

  /**
   * Check the opt out status for a recipient phone number with a sender phone number.
   * @param body An opt out request.
   * @param options The options parameters.
   */
  async check(
    body: OptOutRequest,
    options?: OptOutsCheckOptionalParams,
  ): Promise<OptOutsCheckResponse> {
    return tracingClient.withSpan(
      "SmsApiClient.check",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { body, options },
          checkOperationSpec,
        ) as Promise<OptOutsCheckResponse>;
      },
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const addOperationSpec: coreClient.OperationSpec = {
  path: "/sms/optouts:add",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OptOutResponse,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const removeOperationSpec: coreClient.OperationSpec = {
  path: "/sms/optouts:remove",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OptOutResponse,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const checkOperationSpec: coreClient.OperationSpec = {
  path: "/sms/optouts:check",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OptOutResponse,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
