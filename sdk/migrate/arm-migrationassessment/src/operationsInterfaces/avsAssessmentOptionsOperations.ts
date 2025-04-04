/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AvsAssessmentOptions,
  AvsAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  AvsAssessmentOptionsOperationsGetOptionalParams,
  AvsAssessmentOptionsOperationsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AvsAssessmentOptionsOperations. */
export interface AvsAssessmentOptionsOperations {
  /**
   * List AvsAssessmentOptions resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: AvsAssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  ): PagedAsyncIterableIterator<AvsAssessmentOptions>;
  /**
   * Get a AvsAssessmentOptions
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param avsAssessmentOptionsName AVS Assessment options ARM name. Accepted value is 'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    avsAssessmentOptionsName: string,
    options?: AvsAssessmentOptionsOperationsGetOptionalParams,
  ): Promise<AvsAssessmentOptionsOperationsGetResponse>;
}
