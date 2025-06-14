// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { PipelinePolicy } from "../pipeline.js";
import { throttlingRetryStrategy } from "../retryStrategies/throttlingRetryStrategy.js";
import { retryPolicy } from "./retryPolicy.js";
import { DEFAULT_RETRY_POLICY_COUNT } from "../constants.js";

/**
 * Name of the {@link throttlingRetryPolicy}
 */
export const throttlingRetryPolicyName = "throttlingRetryPolicy";

/**
 * Options that control how to retry failed requests.
 */
export interface ThrottlingRetryPolicyOptions {
  /**
   * The maximum number of retry attempts. Defaults to 3.
   */
  maxRetries?: number;
}

/**
 * A policy that retries when the server sends a 429 response with a Retry-After header.
 *
 * To learn more, please refer to
 * https://learn.microsoft.com/azure/azure-resource-manager/resource-manager-request-limits,
 * https://learn.microsoft.com/azure/azure-subscription-service-limits and
 * https://learn.microsoft.com/azure/virtual-machines/troubleshooting/troubleshooting-throttling-errors
 *
 * @param options - Options that configure retry logic.
 */
export function throttlingRetryPolicy(options: ThrottlingRetryPolicyOptions = {}): PipelinePolicy {
  return {
    name: throttlingRetryPolicyName,
    sendRequest: retryPolicy([throttlingRetryStrategy()], {
      maxRetries: options.maxRetries ?? DEFAULT_RETRY_POLICY_COUNT,
    }).sendRequest,
  };
}
