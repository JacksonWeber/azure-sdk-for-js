/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { TopLevelDomains } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { WebSiteManagementClient } from "../webSiteManagementClient.js";
import {
  TopLevelDomain,
  TopLevelDomainsListNextOptionalParams,
  TopLevelDomainsListOptionalParams,
  TopLevelDomainsListResponse,
  TldLegalAgreement,
  TopLevelDomainAgreementOption,
  TopLevelDomainsListAgreementsNextOptionalParams,
  TopLevelDomainsListAgreementsOptionalParams,
  TopLevelDomainsListAgreementsResponse,
  TopLevelDomainsGetOptionalParams,
  TopLevelDomainsGetResponse,
  TopLevelDomainsListNextResponse,
  TopLevelDomainsListAgreementsNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing TopLevelDomains operations. */
export class TopLevelDomainsImpl implements TopLevelDomains {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class TopLevelDomains class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for Get all top-level domains supported for registration.
   * @param options The options parameters.
   */
  public list(
    options?: TopLevelDomainsListOptionalParams,
  ): PagedAsyncIterableIterator<TopLevelDomain> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: TopLevelDomainsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TopLevelDomain[]> {
    let result: TopLevelDomainsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: TopLevelDomainsListOptionalParams,
  ): AsyncIterableIterator<TopLevelDomain> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param options The options parameters.
   */
  public listAgreements(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams,
  ): PagedAsyncIterableIterator<TldLegalAgreement> {
    const iter = this.listAgreementsPagingAll(name, agreementOption, options);
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
        return this.listAgreementsPagingPage(
          name,
          agreementOption,
          options,
          settings,
        );
      },
    };
  }

  private async *listAgreementsPagingPage(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TldLegalAgreement[]> {
    let result: TopLevelDomainsListAgreementsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAgreements(name, agreementOption, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAgreementsNext(
        name,
        agreementOption,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAgreementsPagingAll(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams,
  ): AsyncIterableIterator<TldLegalAgreement> {
    for await (const page of this.listAgreementsPagingPage(
      name,
      agreementOption,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all top-level domains supported for registration.
   * @param options The options parameters.
   */
  private _list(
    options?: TopLevelDomainsListOptionalParams,
  ): Promise<TopLevelDomainsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for Get details of a top-level domain.
   * @param name Name of the top-level domain.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: TopLevelDomainsGetOptionalParams,
  ): Promise<TopLevelDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getOperationSpec,
    );
  }

  /**
   * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param options The options parameters.
   */
  private _listAgreements(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams,
  ): Promise<TopLevelDomainsListAgreementsResponse> {
    return this.client.sendOperationRequest(
      { name, agreementOption, options },
      listAgreementsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TopLevelDomainsListNextOptionalParams,
  ): Promise<TopLevelDomainsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListAgreementsNext
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param nextLink The nextLink from the previous successful call to the ListAgreements method.
   * @param options The options parameters.
   */
  private _listAgreementsNext(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    nextLink: string,
    options?: TopLevelDomainsListAgreementsNextOptionalParams,
  ): Promise<TopLevelDomainsListAgreementsNextResponse> {
    return this.client.sendOperationRequest(
      { name, agreementOption, nextLink, options },
      listAgreementsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomainCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomain,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAgreementsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}/listAgreements",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TldLegalAgreementCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.agreementOption,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.name],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomainCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAgreementsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TldLegalAgreementCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.name,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
