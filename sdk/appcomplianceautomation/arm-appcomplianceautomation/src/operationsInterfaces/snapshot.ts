/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SnapshotResource,
  SnapshotListOptionalParams,
  SnapshotGetOptionalParams,
  SnapshotGetResponse,
  SnapshotDownloadRequest,
  SnapshotDownloadOptionalParams,
  SnapshotDownloadResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Snapshot. */
export interface Snapshot {
  /**
   * Get the AppComplianceAutomation snapshot list.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  list(
    reportName: string,
    options?: SnapshotListOptionalParams,
  ): PagedAsyncIterableIterator<SnapshotResource>;
  /**
   * Get the AppComplianceAutomation snapshot and its properties.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param options The options parameters.
   */
  get(
    reportName: string,
    snapshotName: string,
    options?: SnapshotGetOptionalParams,
  ): Promise<SnapshotGetResponse>;
  /**
   * Download compliance needs from snapshot, like: Compliance Report, Resource List.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param body Parameters for the query operation
   * @param options The options parameters.
   */
  beginDownload(
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SnapshotDownloadResponse>,
      SnapshotDownloadResponse
    >
  >;
  /**
   * Download compliance needs from snapshot, like: Compliance Report, Resource List.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param body Parameters for the query operation
   * @param options The options parameters.
   */
  beginDownloadAndWait(
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams,
  ): Promise<SnapshotDownloadResponse>;
}
