/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PageBlob } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageClient } from "../storageClient.js";
import {
  PageBlobCreateOptionalParams,
  PageBlobCreateResponse,
  PageBlobUploadPagesOptionalParams,
  PageBlobUploadPagesResponse,
  PageBlobClearPagesOptionalParams,
  PageBlobClearPagesResponse,
  PageBlobUploadPagesFromURLOptionalParams,
  PageBlobUploadPagesFromURLResponse,
  PageBlobGetPageRangesOptionalParams,
  PageBlobGetPageRangesResponse,
  PageBlobGetPageRangesDiffOptionalParams,
  PageBlobGetPageRangesDiffResponse,
  PageBlobResizeOptionalParams,
  PageBlobResizeResponse,
  SequenceNumberActionType,
  PageBlobUpdateSequenceNumberOptionalParams,
  PageBlobUpdateSequenceNumberResponse,
  PageBlobCopyIncrementalOptionalParams,
  PageBlobCopyIncrementalResponse,
} from "../models/index.js";

/** Class containing PageBlob operations. */
export class PageBlobImpl implements PageBlob {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class PageBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * The Create operation creates a new page blob.
   * @param contentLength The length of the request.
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB. The
   *                          page blob size must be aligned to a 512-byte boundary.
   * @param options The options parameters.
   */
  create(
    contentLength: number,
    blobContentLength: number,
    options?: PageBlobCreateOptionalParams,
  ): Promise<PageBlobCreateResponse> {
    return this.client.sendOperationRequest(
      { contentLength, blobContentLength, options },
      createOperationSpec,
    );
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  uploadPages(
    contentLength: number,
    body: coreRestPipeline.RequestBodyType,
    options?: PageBlobUploadPagesOptionalParams,
  ): Promise<PageBlobUploadPagesResponse> {
    return this.client.sendOperationRequest(
      { contentLength, body, options },
      uploadPagesOperationSpec,
    );
  }

  /**
   * The Clear Pages operation clears a set of pages from a page blob
   * @param contentLength The length of the request.
   * @param options The options parameters.
   */
  clearPages(
    contentLength: number,
    options?: PageBlobClearPagesOptionalParams,
  ): Promise<PageBlobClearPagesResponse> {
    return this.client.sendOperationRequest(
      { contentLength, options },
      clearPagesOperationSpec,
    );
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob where the contents are read from a
   * URL
   * @param sourceUrl Specify a URL to the copy source.
   * @param sourceRange Bytes of source data in the specified range. The length of this range should
   *                    match the ContentLength header and x-ms-range/Range destination range header.
   * @param contentLength The length of the request.
   * @param range The range of bytes to which the source range would be written. The range should be 512
   *              aligned and range-end is required.
   * @param options The options parameters.
   */
  uploadPagesFromURL(
    sourceUrl: string,
    sourceRange: string,
    contentLength: number,
    range: string,
    options?: PageBlobUploadPagesFromURLOptionalParams,
  ): Promise<PageBlobUploadPagesFromURLResponse> {
    return this.client.sendOperationRequest(
      { sourceUrl, sourceRange, contentLength, range, options },
      uploadPagesFromURLOperationSpec,
    );
  }

  /**
   * The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot of a
   * page blob
   * @param options The options parameters.
   */
  getPageRanges(
    options?: PageBlobGetPageRangesOptionalParams,
  ): Promise<PageBlobGetPageRangesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPageRangesOperationSpec,
    );
  }

  /**
   * The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob that were
   * changed between target blob and previous snapshot.
   * @param options The options parameters.
   */
  getPageRangesDiff(
    options?: PageBlobGetPageRangesDiffOptionalParams,
  ): Promise<PageBlobGetPageRangesDiffResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPageRangesDiffOperationSpec,
    );
  }

  /**
   * Resize the Blob
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB. The
   *                          page blob size must be aligned to a 512-byte boundary.
   * @param options The options parameters.
   */
  resize(
    blobContentLength: number,
    options?: PageBlobResizeOptionalParams,
  ): Promise<PageBlobResizeResponse> {
    return this.client.sendOperationRequest(
      { blobContentLength, options },
      resizeOperationSpec,
    );
  }

  /**
   * Update the sequence number of the blob
   * @param sequenceNumberAction Required if the x-ms-blob-sequence-number header is set for the request.
   *                             This property applies to page blobs only. This property indicates how the service should modify the
   *                             blob's sequence number
   * @param options The options parameters.
   */
  updateSequenceNumber(
    sequenceNumberAction: SequenceNumberActionType,
    options?: PageBlobUpdateSequenceNumberOptionalParams,
  ): Promise<PageBlobUpdateSequenceNumberResponse> {
    return this.client.sendOperationRequest(
      { sequenceNumberAction, options },
      updateSequenceNumberOperationSpec,
    );
  }

  /**
   * The Copy Incremental operation copies a snapshot of the source page blob to a destination page blob.
   * The snapshot is copied such that only the differential changes between the previously copied
   * snapshot are transferred to the destination. The copied snapshots are complete copies of the
   * original snapshot and can be read or copied from as usual. This API is supported since REST version
   * 2016-05-31.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  copyIncremental(
    copySource: string,
    options?: PageBlobCopyIncrementalOptionalParams,
  ): Promise<PageBlobCopyIncrementalResponse> {
    return this.client.sendOperationRequest(
      { copySource, options },
      copyIncrementalOperationSpec,
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobCreateHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobCreateExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.blobCacheControl,
    Parameters.blobContentType,
    Parameters.blobContentMD5,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentDisposition,
    Parameters.immutabilityPolicyExpiry,
    Parameters.immutabilityPolicyMode,
    Parameters.encryptionScope,
    Parameters.tier,
    Parameters.blobTagsString,
    Parameters.legalHold1,
    Parameters.blobType,
    Parameters.blobContentLength,
    Parameters.blobSequenceNumber,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const uploadPagesOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesExceptionHeaders,
    },
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp19],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.range,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.contentType1,
    Parameters.accept2,
    Parameters.pageWrite,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer,
};
const clearPagesOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobClearPagesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobClearPagesExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp19],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.range,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.pageWrite1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const uploadPagesFromURLOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesFromURLHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesFromURLExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp19],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.sourceContentMD5,
    Parameters.copySourceAuthorization,
    Parameters.fileRequestIntent,
    Parameters.pageWrite,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.sourceUrl,
    Parameters.sourceRange,
    Parameters.sourceContentCrc64,
    Parameters.range1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const getPageRangesOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobGetPageRangesExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.snapshot,
    Parameters.comp20,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.range,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const getPageRangesDiffOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesDiffHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobGetPageRangesDiffExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.snapshot,
    Parameters.comp20,
    Parameters.prevsnapshot,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.range,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.prevSnapshotUrl,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const resizeOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PageBlobResizeHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobResizeExceptionHeaders,
    },
  },
  queryParameters: [Parameters.comp, Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.blobContentLength,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const updateSequenceNumberOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PageBlobUpdateSequenceNumberHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUpdateSequenceNumberExceptionHeaders,
    },
  },
  queryParameters: [Parameters.comp, Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.blobSequenceNumber,
    Parameters.sequenceNumberAction,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const copyIncrementalOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.PageBlobCopyIncrementalHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobCopyIncrementalExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp21],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.copySource,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
