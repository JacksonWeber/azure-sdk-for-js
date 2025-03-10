/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AuthorizationRule,
  DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleResponse,
  DisasterRecoveryConfigsListKeysOptionalParams,
  DisasterRecoveryConfigsListKeysResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DisasterRecoveryConfigs. */
export interface DisasterRecoveryConfigs {
  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationRule>;
  /**
   * Gets an AuthorizationRule for a Namespace by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams
  ): Promise<DisasterRecoveryConfigsGetAuthorizationRuleResponse>;
  /**
   * Gets the primary and secondary connection strings for the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsListKeysOptionalParams
  ): Promise<DisasterRecoveryConfigsListKeysResponse>;
}
