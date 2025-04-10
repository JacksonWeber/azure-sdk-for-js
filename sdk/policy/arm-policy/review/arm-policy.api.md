## API Report File for "@azure/arm-policy"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import type { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export type AssignmentType = string;

// @public
export interface CloudError {
    error?: ErrorResponse;
}

// @public
export type CreatedByType = string;

// @public
export type EnforcementMode = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: any;
    readonly type?: string;
}

// @public
export interface ErrorResponse {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorResponse[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export interface Identity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ResourceIdentityType;
    userAssignedIdentities?: {
        [propertyName: string]: UserAssignedIdentitiesValue;
    };
}

// @public
export enum KnownAssignmentType {
    Custom = "Custom",
    NotSpecified = "NotSpecified",
    System = "System",
    SystemHidden = "SystemHidden"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownEnforcementMode {
    Default = "Default",
    DoNotEnforce = "DoNotEnforce"
}

// @public
export enum KnownOverrideKind {
    DefinitionVersion = "definitionVersion",
    PolicyEffect = "policyEffect"
}

// @public
export enum KnownParameterType {
    Array = "Array",
    Boolean = "Boolean",
    DateTime = "DateTime",
    Float = "Float",
    Integer = "Integer",
    Object = "Object",
    String = "String"
}

// @public
export enum KnownPolicyType {
    BuiltIn = "BuiltIn",
    Custom = "Custom",
    NotSpecified = "NotSpecified",
    Static = "Static"
}

// @public
export enum KnownSelectorKind {
    PolicyDefinitionReferenceId = "policyDefinitionReferenceId",
    ResourceLocation = "resourceLocation",
    ResourceType = "resourceType",
    ResourceWithoutLocation = "resourceWithoutLocation"
}

// @public
export interface NonComplianceMessage {
    message: string;
    policyDefinitionReferenceId?: string;
}

// @public
export interface Override {
    kind?: OverrideKind;
    selectors?: Selector[];
    value?: string;
}

// @public
export type OverrideKind = string;

// @public
export interface ParameterDefinitionsValue {
    allowedValues?: any[];
    defaultValue?: any;
    metadata?: ParameterDefinitionsValueMetadata;
    schema?: any;
    type?: ParameterType;
}

// @public
export interface ParameterDefinitionsValueMetadata {
    [property: string]: any;
    assignPermissions?: boolean;
    description?: string;
    displayName?: string;
    strongType?: string;
}

// @public
export type ParameterType = string;

// @public
export interface ParameterValuesValue {
    value?: any;
}

// @public
export interface PolicyAssignment {
    assignmentType?: AssignmentType;
    definitionVersion?: string;
    description?: string;
    displayName?: string;
    readonly effectiveDefinitionVersion?: string;
    enforcementMode?: EnforcementMode;
    readonly id?: string;
    identity?: Identity;
    readonly latestDefinitionVersion?: string;
    location?: string;
    metadata?: any;
    readonly name?: string;
    nonComplianceMessages?: NonComplianceMessage[];
    notScopes?: string[];
    overrides?: Override[];
    parameters?: {
        [propertyName: string]: ParameterValuesValue;
    };
    policyDefinitionId?: string;
    resourceSelectors?: ResourceSelector[];
    readonly scope?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface PolicyAssignmentListResult {
    nextLink?: string;
    value?: PolicyAssignment[];
}

// @public
export interface PolicyAssignments {
    create(scope: string, policyAssignmentName: string, parameters: PolicyAssignment, options?: PolicyAssignmentsCreateOptionalParams): Promise<PolicyAssignmentsCreateResponse>;
    createById(policyAssignmentId: string, parameters: PolicyAssignment, options?: PolicyAssignmentsCreateByIdOptionalParams): Promise<PolicyAssignmentsCreateByIdResponse>;
    delete(scope: string, policyAssignmentName: string, options?: PolicyAssignmentsDeleteOptionalParams): Promise<PolicyAssignmentsDeleteResponse>;
    deleteById(policyAssignmentId: string, options?: PolicyAssignmentsDeleteByIdOptionalParams): Promise<PolicyAssignmentsDeleteByIdResponse>;
    get(scope: string, policyAssignmentName: string, options?: PolicyAssignmentsGetOptionalParams): Promise<PolicyAssignmentsGetResponse>;
    getById(policyAssignmentId: string, options?: PolicyAssignmentsGetByIdOptionalParams): Promise<PolicyAssignmentsGetByIdResponse>;
    list(options?: PolicyAssignmentsListOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    listForManagementGroup(managementGroupId: string, options?: PolicyAssignmentsListForManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: PolicyAssignmentsListForResourceOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    listForResourceGroup(resourceGroupName: string, options?: PolicyAssignmentsListForResourceGroupOptionalParams): PagedAsyncIterableIterator<PolicyAssignment>;
    update(scope: string, policyAssignmentName: string, parameters: PolicyAssignmentUpdate, options?: PolicyAssignmentsUpdateOptionalParams): Promise<PolicyAssignmentsUpdateResponse>;
    updateById(policyAssignmentId: string, parameters: PolicyAssignmentUpdate, options?: PolicyAssignmentsUpdateByIdOptionalParams): Promise<PolicyAssignmentsUpdateByIdResponse>;
}

// @public
export interface PolicyAssignmentsCreateByIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsCreateByIdResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsCreateResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsDeleteByIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsDeleteByIdResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsDeleteResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsGetByIdOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicyAssignmentsGetByIdResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsGetOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicyAssignmentsGetResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsListForManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsListForManagementGroupNextResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListForManagementGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicyAssignmentsListForManagementGroupResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListForResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsListForResourceGroupNextResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListForResourceGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicyAssignmentsListForResourceGroupResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListForResourceNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsListForResourceNextResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListForResourceOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicyAssignmentsListForResourceResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsListNextResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsListOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicyAssignmentsListResponse = PolicyAssignmentListResult;

// @public
export interface PolicyAssignmentsUpdateByIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsUpdateByIdResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyAssignmentsUpdateResponse = PolicyAssignment;

// @public
export interface PolicyAssignmentUpdate {
    identity?: Identity;
    location?: string;
    overrides?: Override[];
    resourceSelectors?: ResourceSelector[];
}

// @public (undocumented)
export class PolicyClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: PolicyClientOptionalParams);
    constructor(credentials: coreAuth.TokenCredential, options?: PolicyClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    policyAssignments: PolicyAssignments;
    // (undocumented)
    policyDefinitions: PolicyDefinitions;
    // (undocumented)
    policyDefinitionVersions: PolicyDefinitionVersions;
    // (undocumented)
    policySetDefinitions: PolicySetDefinitions;
    // (undocumented)
    policySetDefinitionVersions: PolicySetDefinitionVersions;
    // (undocumented)
    subscriptionId?: string;
}

// @public
export interface PolicyClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface PolicyDefinition {
    description?: string;
    displayName?: string;
    readonly id?: string;
    metadata?: any;
    mode?: string;
    readonly name?: string;
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
    policyRule?: any;
    policyType?: PolicyType;
    readonly systemData?: SystemData;
    readonly type?: string;
    version?: string;
    versions?: string[];
}

// @public
export interface PolicyDefinitionGroup {
    additionalMetadataId?: string;
    category?: string;
    description?: string;
    displayName?: string;
    name: string;
}

// @public
export interface PolicyDefinitionListResult {
    nextLink?: string;
    value?: PolicyDefinition[];
}

// @public
export interface PolicyDefinitionReference {
    definitionVersion?: string;
    readonly effectiveDefinitionVersion?: string;
    groupNames?: string[];
    readonly latestDefinitionVersion?: string;
    parameters?: {
        [propertyName: string]: ParameterValuesValue;
    };
    policyDefinitionId: string;
    policyDefinitionReferenceId?: string;
}

// @public
export interface PolicyDefinitions {
    createOrUpdate(policyDefinitionName: string, parameters: PolicyDefinition, options?: PolicyDefinitionsCreateOrUpdateOptionalParams): Promise<PolicyDefinitionsCreateOrUpdateResponse>;
    createOrUpdateAtManagementGroup(managementGroupId: string, policyDefinitionName: string, parameters: PolicyDefinition, options?: PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
    delete(policyDefinitionName: string, options?: PolicyDefinitionsDeleteOptionalParams): Promise<void>;
    deleteAtManagementGroup(managementGroupId: string, policyDefinitionName: string, options?: PolicyDefinitionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    get(policyDefinitionName: string, options?: PolicyDefinitionsGetOptionalParams): Promise<PolicyDefinitionsGetResponse>;
    getAtManagementGroup(managementGroupId: string, policyDefinitionName: string, options?: PolicyDefinitionsGetAtManagementGroupOptionalParams): Promise<PolicyDefinitionsGetAtManagementGroupResponse>;
    getBuiltIn(policyDefinitionName: string, options?: PolicyDefinitionsGetBuiltInOptionalParams): Promise<PolicyDefinitionsGetBuiltInResponse>;
    list(options?: PolicyDefinitionsListOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
    listBuiltIn(options?: PolicyDefinitionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
    listByManagementGroup(managementGroupId: string, options?: PolicyDefinitionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicyDefinition>;
}

// @public
export interface PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse = PolicyDefinition;

// @public
export interface PolicyDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsCreateOrUpdateResponse = PolicyDefinition;

// @public
export interface PolicyDefinitionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicyDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicyDefinitionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsGetAtManagementGroupResponse = PolicyDefinition;

// @public
export interface PolicyDefinitionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsGetBuiltInResponse = PolicyDefinition;

// @public
export interface PolicyDefinitionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsGetResponse = PolicyDefinition;

// @public
export interface PolicyDefinitionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsListBuiltInNextResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionsListBuiltInOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    top?: number;
}

// @public
export type PolicyDefinitionsListBuiltInResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsListByManagementGroupNextResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    top?: number;
}

// @public
export type PolicyDefinitionsListByManagementGroupResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionsListNextResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionsListOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    top?: number;
}

// @public
export type PolicyDefinitionsListResponse = PolicyDefinitionListResult;

// @public
export interface PolicyDefinitionVersion {
    description?: string;
    displayName?: string;
    readonly id?: string;
    metadata?: any;
    mode?: string;
    readonly name?: string;
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
    policyRule?: any;
    policyType?: PolicyType;
    readonly systemData?: SystemData;
    readonly type?: string;
    version?: string;
}

// @public
export interface PolicyDefinitionVersionListResult {
    nextLink?: string;
    value?: PolicyDefinitionVersion[];
}

// @public
export interface PolicyDefinitionVersions {
    createOrUpdate(policyDefinitionName: string, policyDefinitionVersion: string, parameters: PolicyDefinitionVersion, options?: PolicyDefinitionVersionsCreateOrUpdateOptionalParams): Promise<PolicyDefinitionVersionsCreateOrUpdateResponse>;
    createOrUpdateAtManagementGroup(managementGroupName: string, policyDefinitionName: string, policyDefinitionVersion: string, parameters: PolicyDefinitionVersion, options?: PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse>;
    delete(policyDefinitionName: string, policyDefinitionVersion: string, options?: PolicyDefinitionVersionsDeleteOptionalParams): Promise<void>;
    deleteAtManagementGroup(managementGroupName: string, policyDefinitionName: string, policyDefinitionVersion: string, options?: PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    get(policyDefinitionName: string, policyDefinitionVersion: string, options?: PolicyDefinitionVersionsGetOptionalParams): Promise<PolicyDefinitionVersionsGetResponse>;
    getAtManagementGroup(managementGroupName: string, policyDefinitionName: string, policyDefinitionVersion: string, options?: PolicyDefinitionVersionsGetAtManagementGroupOptionalParams): Promise<PolicyDefinitionVersionsGetAtManagementGroupResponse>;
    getBuiltIn(policyDefinitionName: string, policyDefinitionVersion: string, options?: PolicyDefinitionVersionsGetBuiltInOptionalParams): Promise<PolicyDefinitionVersionsGetBuiltInResponse>;
    list(policyDefinitionName: string, options?: PolicyDefinitionVersionsListOptionalParams): PagedAsyncIterableIterator<PolicyDefinitionVersion>;
    listAll(options?: PolicyDefinitionVersionsListAllOptionalParams): Promise<PolicyDefinitionVersionsListAllResponse>;
    listAllAtManagementGroup(managementGroupName: string, options?: PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams): Promise<PolicyDefinitionVersionsListAllAtManagementGroupResponse>;
    listAllBuiltins(options?: PolicyDefinitionVersionsListAllBuiltinsOptionalParams): Promise<PolicyDefinitionVersionsListAllBuiltinsResponse>;
    listBuiltIn(policyDefinitionName: string, options?: PolicyDefinitionVersionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicyDefinitionVersion>;
    listByManagementGroup(managementGroupName: string, policyDefinitionName: string, options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicyDefinitionVersion>;
}

// @public
export interface PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse = PolicyDefinitionVersion;

// @public
export interface PolicyDefinitionVersionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsCreateOrUpdateResponse = PolicyDefinitionVersion;

// @public
export interface PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicyDefinitionVersionsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicyDefinitionVersionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsGetAtManagementGroupResponse = PolicyDefinitionVersion;

// @public
export interface PolicyDefinitionVersionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsGetBuiltInResponse = PolicyDefinitionVersion;

// @public
export interface PolicyDefinitionVersionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsGetResponse = PolicyDefinitionVersion;

// @public
export interface PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListAllAtManagementGroupResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListAllBuiltinsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListAllBuiltinsResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListAllOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListAllResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListBuiltInNextResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListBuiltInOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type PolicyDefinitionVersionsListBuiltInResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListByManagementGroupNextResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type PolicyDefinitionVersionsListByManagementGroupResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicyDefinitionVersionsListNextResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicyDefinitionVersionsListOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type PolicyDefinitionVersionsListResponse = PolicyDefinitionVersionListResult;

// @public
export interface PolicySetDefinition {
    description?: string;
    displayName?: string;
    readonly id?: string;
    metadata?: any;
    readonly name?: string;
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
    policyDefinitionGroups?: PolicyDefinitionGroup[];
    policyDefinitions?: PolicyDefinitionReference[];
    policyType?: PolicyType;
    readonly systemData?: SystemData;
    readonly type?: string;
    version?: string;
    versions?: string[];
}

// @public
export interface PolicySetDefinitionListResult {
    nextLink?: string;
    value?: PolicySetDefinition[];
}

// @public
export interface PolicySetDefinitions {
    createOrUpdate(policySetDefinitionName: string, parameters: PolicySetDefinition, options?: PolicySetDefinitionsCreateOrUpdateOptionalParams): Promise<PolicySetDefinitionsCreateOrUpdateResponse>;
    createOrUpdateAtManagementGroup(managementGroupId: string, policySetDefinitionName: string, parameters: PolicySetDefinition, options?: PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
    delete(policySetDefinitionName: string, options?: PolicySetDefinitionsDeleteOptionalParams): Promise<void>;
    deleteAtManagementGroup(managementGroupId: string, policySetDefinitionName: string, options?: PolicySetDefinitionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    get(policySetDefinitionName: string, options?: PolicySetDefinitionsGetOptionalParams): Promise<PolicySetDefinitionsGetResponse>;
    getAtManagementGroup(managementGroupId: string, policySetDefinitionName: string, options?: PolicySetDefinitionsGetAtManagementGroupOptionalParams): Promise<PolicySetDefinitionsGetAtManagementGroupResponse>;
    getBuiltIn(policySetDefinitionName: string, options?: PolicySetDefinitionsGetBuiltInOptionalParams): Promise<PolicySetDefinitionsGetBuiltInResponse>;
    list(options?: PolicySetDefinitionsListOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    listBuiltIn(options?: PolicySetDefinitionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
    listByManagementGroup(managementGroupId: string, options?: PolicySetDefinitionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicySetDefinition>;
}

// @public
export interface PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse = PolicySetDefinition;

// @public
export interface PolicySetDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionsCreateOrUpdateResponse = PolicySetDefinition;

// @public
export interface PolicySetDefinitionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicySetDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicySetDefinitionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionsGetAtManagementGroupResponse = PolicySetDefinition;

// @public
export interface PolicySetDefinitionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionsGetBuiltInResponse = PolicySetDefinition;

// @public
export interface PolicySetDefinitionsGetOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionsGetResponse = PolicySetDefinition;

// @public
export interface PolicySetDefinitionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionsListBuiltInNextResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionsListBuiltInOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionsListBuiltInResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionsListByManagementGroupNextResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionsListByManagementGroupResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionsListNextResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionsListOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    filter?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionsListResponse = PolicySetDefinitionListResult;

// @public
export interface PolicySetDefinitionVersion {
    description?: string;
    displayName?: string;
    readonly id?: string;
    metadata?: any;
    readonly name?: string;
    parameters?: {
        [propertyName: string]: ParameterDefinitionsValue;
    };
    policyDefinitionGroups?: PolicyDefinitionGroup[];
    policyDefinitions?: PolicyDefinitionReference[];
    policyType?: PolicyType;
    readonly systemData?: SystemData;
    readonly type?: string;
    version?: string;
}

// @public
export interface PolicySetDefinitionVersionListResult {
    nextLink?: string;
    value?: PolicySetDefinitionVersion[];
}

// @public
export interface PolicySetDefinitionVersions {
    createOrUpdate(policySetDefinitionName: string, policyDefinitionVersion: string, parameters: PolicySetDefinitionVersion, options?: PolicySetDefinitionVersionsCreateOrUpdateOptionalParams): Promise<PolicySetDefinitionVersionsCreateOrUpdateResponse>;
    createOrUpdateAtManagementGroup(managementGroupName: string, policySetDefinitionName: string, policyDefinitionVersion: string, parameters: PolicySetDefinitionVersion, options?: PolicySetDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams): Promise<PolicySetDefinitionVersionsCreateOrUpdateAtManagementGroupResponse>;
    delete(policySetDefinitionName: string, policyDefinitionVersion: string, options?: PolicySetDefinitionVersionsDeleteOptionalParams): Promise<void>;
    deleteAtManagementGroup(managementGroupName: string, policySetDefinitionName: string, policyDefinitionVersion: string, options?: PolicySetDefinitionVersionsDeleteAtManagementGroupOptionalParams): Promise<void>;
    get(policySetDefinitionName: string, policyDefinitionVersion: string, options?: PolicySetDefinitionVersionsGetOptionalParams): Promise<PolicySetDefinitionVersionsGetResponse>;
    getAtManagementGroup(managementGroupName: string, policySetDefinitionName: string, policyDefinitionVersion: string, options?: PolicySetDefinitionVersionsGetAtManagementGroupOptionalParams): Promise<PolicySetDefinitionVersionsGetAtManagementGroupResponse>;
    getBuiltIn(policySetDefinitionName: string, policyDefinitionVersion: string, options?: PolicySetDefinitionVersionsGetBuiltInOptionalParams): Promise<PolicySetDefinitionVersionsGetBuiltInResponse>;
    list(policySetDefinitionName: string, options?: PolicySetDefinitionVersionsListOptionalParams): PagedAsyncIterableIterator<PolicySetDefinitionVersion>;
    listAll(options?: PolicySetDefinitionVersionsListAllOptionalParams): Promise<PolicySetDefinitionVersionsListAllResponse>;
    listAllAtManagementGroup(managementGroupName: string, options?: PolicySetDefinitionVersionsListAllAtManagementGroupOptionalParams): Promise<PolicySetDefinitionVersionsListAllAtManagementGroupResponse>;
    listAllBuiltins(options?: PolicySetDefinitionVersionsListAllBuiltinsOptionalParams): Promise<PolicySetDefinitionVersionsListAllBuiltinsResponse>;
    listBuiltIn(policySetDefinitionName: string, options?: PolicySetDefinitionVersionsListBuiltInOptionalParams): PagedAsyncIterableIterator<PolicySetDefinitionVersion>;
    listByManagementGroup(managementGroupName: string, policySetDefinitionName: string, options?: PolicySetDefinitionVersionsListByManagementGroupOptionalParams): PagedAsyncIterableIterator<PolicySetDefinitionVersion>;
}

// @public
export interface PolicySetDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsCreateOrUpdateAtManagementGroupResponse = PolicySetDefinitionVersion;

// @public
export interface PolicySetDefinitionVersionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsCreateOrUpdateResponse = PolicySetDefinitionVersion;

// @public
export interface PolicySetDefinitionVersionsDeleteAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicySetDefinitionVersionsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PolicySetDefinitionVersionsGetAtManagementGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionVersionsGetAtManagementGroupResponse = PolicySetDefinitionVersion;

// @public
export interface PolicySetDefinitionVersionsGetBuiltInOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionVersionsGetBuiltInResponse = PolicySetDefinitionVersion;

// @public
export interface PolicySetDefinitionVersionsGetOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PolicySetDefinitionVersionsGetResponse = PolicySetDefinitionVersion;

// @public
export interface PolicySetDefinitionVersionsListAllAtManagementGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListAllAtManagementGroupResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListAllBuiltinsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListAllBuiltinsResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListAllOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListAllResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListBuiltInNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListBuiltInNextResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListBuiltInOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionVersionsListBuiltInResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListByManagementGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListByManagementGroupNextResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListByManagementGroupOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionVersionsListByManagementGroupResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PolicySetDefinitionVersionsListNextResponse = PolicySetDefinitionVersionListResult;

// @public
export interface PolicySetDefinitionVersionsListOptionalParams extends coreClient.OperationOptions {
    expand?: string;
    top?: number;
}

// @public
export type PolicySetDefinitionVersionsListResponse = PolicySetDefinitionVersionListResult;

// @public
export type PolicyType = string;

// @public
export type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "None";

// @public
export interface ResourceSelector {
    name?: string;
    selectors?: Selector[];
}

// @public
export interface Selector {
    in?: string[];
    kind?: SelectorKind;
    notIn?: string[];
}

// @public
export type SelectorKind = string;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public (undocumented)
export interface UserAssignedIdentitiesValue {
    readonly clientId?: string;
    readonly principalId?: string;
}

// (No @packageDocumentation comment for this package)

```
