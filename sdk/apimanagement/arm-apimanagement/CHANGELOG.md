# Release History

## 9.2.1 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 9.2.0 (2024-11-25)

### Features Added

- Remove xmlSerializer and isXML to fix xml value response serialize issue

## 9.1.0 (2023-08-23)

### Features Added

- Added operation group ApiWiki
- Added operation group ApiWikis
- Added operation group Authorization
- Added operation group AuthorizationAccessPolicy
- Added operation group AuthorizationLoginLinks
- Added operation group AuthorizationProvider
- Added operation group Documentation
- Added operation group GraphQLApiResolver
- Added operation group GraphQLApiResolverPolicy
- Added operation group PolicyFragment
- Added operation group PortalConfig
- Added operation group ProductWiki
- Added operation group ProductWikis
- Added operation ApiManagementService.beginMigrateToStv2
- Added operation ApiManagementService.beginMigrateToStv2AndWait
- Added Interface ApiManagementServiceApplyNetworkConfigurationUpdatesHeaders
- Added Interface ApiManagementServiceBackupHeaders
- Added Interface ApiManagementServiceMigrateToStv2Headers
- Added Interface ApiManagementServiceMigrateToStv2OptionalParams
- Added Interface ApiManagementServiceRestoreHeaders
- Added Interface ApiWikiCreateOrUpdateHeaders
- Added Interface ApiWikiCreateOrUpdateOptionalParams
- Added Interface ApiWikiDeleteOptionalParams
- Added Interface ApiWikiGetEntityTagHeaders
- Added Interface ApiWikiGetEntityTagOptionalParams
- Added Interface ApiWikiGetHeaders
- Added Interface ApiWikiGetOptionalParams
- Added Interface ApiWikisListNextOptionalParams
- Added Interface ApiWikisListOptionalParams
- Added Interface ApiWikiUpdateHeaders
- Added Interface ApiWikiUpdateOptionalParams
- Added Interface AuthorizationAccessPolicyCollection
- Added Interface AuthorizationAccessPolicyContract
- Added Interface AuthorizationAccessPolicyCreateOrUpdateHeaders
- Added Interface AuthorizationAccessPolicyCreateOrUpdateOptionalParams
- Added Interface AuthorizationAccessPolicyDeleteOptionalParams
- Added Interface AuthorizationAccessPolicyGetHeaders
- Added Interface AuthorizationAccessPolicyGetOptionalParams
- Added Interface AuthorizationAccessPolicyListByAuthorizationNextOptionalParams
- Added Interface AuthorizationAccessPolicyListByAuthorizationOptionalParams
- Added Interface AuthorizationCollection
- Added Interface AuthorizationConfirmConsentCodeHeaders
- Added Interface AuthorizationConfirmConsentCodeOptionalParams
- Added Interface AuthorizationConfirmConsentCodeRequestContract
- Added Interface AuthorizationContract
- Added Interface AuthorizationCreateOrUpdateHeaders
- Added Interface AuthorizationCreateOrUpdateOptionalParams
- Added Interface AuthorizationDeleteOptionalParams
- Added Interface AuthorizationError
- Added Interface AuthorizationGetHeaders
- Added Interface AuthorizationGetOptionalParams
- Added Interface AuthorizationListByAuthorizationProviderNextOptionalParams
- Added Interface AuthorizationListByAuthorizationProviderOptionalParams
- Added Interface AuthorizationLoginLinksPostHeaders
- Added Interface AuthorizationLoginLinksPostOptionalParams
- Added Interface AuthorizationLoginRequestContract
- Added Interface AuthorizationLoginResponseContract
- Added Interface AuthorizationProviderCollection
- Added Interface AuthorizationProviderContract
- Added Interface AuthorizationProviderCreateOrUpdateHeaders
- Added Interface AuthorizationProviderCreateOrUpdateOptionalParams
- Added Interface AuthorizationProviderDeleteOptionalParams
- Added Interface AuthorizationProviderGetHeaders
- Added Interface AuthorizationProviderGetOptionalParams
- Added Interface AuthorizationProviderListByServiceNextOptionalParams
- Added Interface AuthorizationProviderListByServiceOptionalParams
- Added Interface AuthorizationProviderOAuth2GrantTypes
- Added Interface AuthorizationProviderOAuth2Settings
- Added Interface DeletedServicesPurgeHeaders
- Added Interface DocumentationCollection
- Added Interface DocumentationContract
- Added Interface DocumentationCreateOrUpdateHeaders
- Added Interface DocumentationCreateOrUpdateOptionalParams
- Added Interface DocumentationDeleteOptionalParams
- Added Interface DocumentationGetEntityTagHeaders
- Added Interface DocumentationGetEntityTagOptionalParams
- Added Interface DocumentationGetHeaders
- Added Interface DocumentationGetOptionalParams
- Added Interface DocumentationListByServiceNextOptionalParams
- Added Interface DocumentationListByServiceOptionalParams
- Added Interface DocumentationUpdateContract
- Added Interface DocumentationUpdateHeaders
- Added Interface DocumentationUpdateOptionalParams
- Added Interface GraphQLApiResolverCreateOrUpdateHeaders
- Added Interface GraphQLApiResolverCreateOrUpdateOptionalParams
- Added Interface GraphQLApiResolverDeleteOptionalParams
- Added Interface GraphQLApiResolverGetEntityTagHeaders
- Added Interface GraphQLApiResolverGetEntityTagOptionalParams
- Added Interface GraphQLApiResolverGetHeaders
- Added Interface GraphQLApiResolverGetOptionalParams
- Added Interface GraphQLApiResolverListByApiNextOptionalParams
- Added Interface GraphQLApiResolverListByApiOptionalParams
- Added Interface GraphQLApiResolverPolicyCreateOrUpdateHeaders
- Added Interface GraphQLApiResolverPolicyCreateOrUpdateOptionalParams
- Added Interface GraphQLApiResolverPolicyDeleteOptionalParams
- Added Interface GraphQLApiResolverPolicyGetEntityTagHeaders
- Added Interface GraphQLApiResolverPolicyGetEntityTagOptionalParams
- Added Interface GraphQLApiResolverPolicyGetHeaders
- Added Interface GraphQLApiResolverPolicyGetOptionalParams
- Added Interface GraphQLApiResolverPolicyListByResolverNextOptionalParams
- Added Interface GraphQLApiResolverPolicyListByResolverOptionalParams
- Added Interface GraphQLApiResolverUpdateHeaders
- Added Interface GraphQLApiResolverUpdateOptionalParams
- Added Interface PolicyFragmentCollection
- Added Interface PolicyFragmentContract
- Added Interface PolicyFragmentCreateOrUpdateHeaders
- Added Interface PolicyFragmentCreateOrUpdateOptionalParams
- Added Interface PolicyFragmentDeleteOptionalParams
- Added Interface PolicyFragmentGetEntityTagHeaders
- Added Interface PolicyFragmentGetEntityTagOptionalParams
- Added Interface PolicyFragmentGetHeaders
- Added Interface PolicyFragmentGetOptionalParams
- Added Interface PolicyFragmentListByServiceOptionalParams
- Added Interface PolicyFragmentListReferencesOptionalParams
- Added Interface PortalConfigCollection
- Added Interface PortalConfigContract
- Added Interface PortalConfigCorsProperties
- Added Interface PortalConfigCreateOrUpdateOptionalParams
- Added Interface PortalConfigCspProperties
- Added Interface PortalConfigDelegationProperties
- Added Interface PortalConfigGetEntityTagHeaders
- Added Interface PortalConfigGetEntityTagOptionalParams
- Added Interface PortalConfigGetHeaders
- Added Interface PortalConfigGetOptionalParams
- Added Interface PortalConfigListByServiceOptionalParams
- Added Interface PortalConfigPropertiesSignin
- Added Interface PortalConfigPropertiesSignup
- Added Interface PortalConfigTermsOfServiceProperties
- Added Interface PortalConfigUpdateOptionalParams
- Added Interface ProductWikiCreateOrUpdateHeaders
- Added Interface ProductWikiCreateOrUpdateOptionalParams
- Added Interface ProductWikiDeleteOptionalParams
- Added Interface ProductWikiGetEntityTagHeaders
- Added Interface ProductWikiGetEntityTagOptionalParams
- Added Interface ProductWikiGetHeaders
- Added Interface ProductWikiGetOptionalParams
- Added Interface ProductWikisListHeaders
- Added Interface ProductWikisListNextHeaders
- Added Interface ProductWikisListNextOptionalParams
- Added Interface ProductWikisListOptionalParams
- Added Interface ProductWikiUpdateHeaders
- Added Interface ProductWikiUpdateOptionalParams
- Added Interface ProxyResource
- Added Interface ResolverCollection
- Added Interface ResolverContract
- Added Interface ResolverResultContract
- Added Interface ResolverResultLogItemContract
- Added Interface ResolverUpdateContract
- Added Interface ResourceCollection
- Added Interface ResourceCollectionValueItem
- Added Interface WikiCollection
- Added Interface WikiContract
- Added Interface WikiDocumentationContract
- Added Interface WikiUpdateContract
- Added Type Alias ApiManagementServiceMigrateToStv2Response
- Added Type Alias ApiWikiCreateOrUpdateResponse
- Added Type Alias ApiWikiGetEntityTagResponse
- Added Type Alias ApiWikiGetResponse
- Added Type Alias ApiWikisListNextResponse
- Added Type Alias ApiWikisListResponse
- Added Type Alias ApiWikiUpdateResponse
- Added Type Alias AsyncResolverStatus
- Added Type Alias AuthorizationAccessPolicyCreateOrUpdateResponse
- Added Type Alias AuthorizationAccessPolicyGetResponse
- Added Type Alias AuthorizationAccessPolicyListByAuthorizationNextResponse
- Added Type Alias AuthorizationAccessPolicyListByAuthorizationResponse
- Added Type Alias AuthorizationConfirmConsentCodeResponse
- Added Type Alias AuthorizationCreateOrUpdateResponse
- Added Type Alias AuthorizationGetResponse
- Added Type Alias AuthorizationListByAuthorizationProviderNextResponse
- Added Type Alias AuthorizationListByAuthorizationProviderResponse
- Added Type Alias AuthorizationLoginLinksPostResponse
- Added Type Alias AuthorizationProviderCreateOrUpdateResponse
- Added Type Alias AuthorizationProviderGetResponse
- Added Type Alias AuthorizationProviderListByServiceNextResponse
- Added Type Alias AuthorizationProviderListByServiceResponse
- Added Type Alias AuthorizationType
- Added Type Alias DocumentationCreateOrUpdateResponse
- Added Type Alias DocumentationGetEntityTagResponse
- Added Type Alias DocumentationGetResponse
- Added Type Alias DocumentationListByServiceNextResponse
- Added Type Alias DocumentationListByServiceResponse
- Added Type Alias DocumentationUpdateResponse
- Added Type Alias GraphQLApiResolverCreateOrUpdateResponse
- Added Type Alias GraphQLApiResolverGetEntityTagResponse
- Added Type Alias GraphQLApiResolverGetResponse
- Added Type Alias GraphQLApiResolverListByApiNextResponse
- Added Type Alias GraphQLApiResolverListByApiResponse
- Added Type Alias GraphQLApiResolverPolicyCreateOrUpdateResponse
- Added Type Alias GraphQLApiResolverPolicyGetEntityTagResponse
- Added Type Alias GraphQLApiResolverPolicyGetResponse
- Added Type Alias GraphQLApiResolverPolicyListByResolverNextResponse
- Added Type Alias GraphQLApiResolverPolicyListByResolverResponse
- Added Type Alias GraphQLApiResolverUpdateResponse
- Added Type Alias NatGatewayState
- Added Type Alias OAuth2GrantType
- Added Type Alias PolicyFragmentContentFormat
- Added Type Alias PolicyFragmentCreateOrUpdateResponse
- Added Type Alias PolicyFragmentGetEntityTagResponse
- Added Type Alias PolicyFragmentGetResponse
- Added Type Alias PolicyFragmentListByServiceResponse
- Added Type Alias PolicyFragmentListReferencesResponse
- Added Type Alias PortalConfigCreateOrUpdateResponse
- Added Type Alias PortalConfigGetEntityTagResponse
- Added Type Alias PortalConfigGetResponse
- Added Type Alias PortalConfigListByServiceResponse
- Added Type Alias PortalConfigUpdateResponse
- Added Type Alias PortalSettingsCspMode
- Added Type Alias ProductWikiCreateOrUpdateResponse
- Added Type Alias ProductWikiGetEntityTagResponse
- Added Type Alias ProductWikiGetResponse
- Added Type Alias ProductWikisListNextResponse
- Added Type Alias ProductWikisListResponse
- Added Type Alias ProductWikiUpdateResponse
- Added Type Alias TranslateRequiredQueryParametersConduct
- Interface AdditionalLocation has a new optional parameter natGatewayState
- Interface AdditionalLocation has a new optional parameter outboundPublicIPAddresses
- Interface ApiCreateOrUpdateParameter has a new optional parameter translateRequiredQueryParametersConduct
- Interface ApiCreateOrUpdateProperties has a new optional parameter translateRequiredQueryParametersConduct
- Interface ApiManagementServiceBaseProperties has a new optional parameter natGatewayState
- Interface ApiManagementServiceBaseProperties has a new optional parameter outboundPublicIPAddresses
- Interface ApiManagementServiceResource has a new optional parameter natGatewayState
- Interface ApiManagementServiceResource has a new optional parameter outboundPublicIPAddresses
- Interface ApiManagementServiceUpdateParameters has a new optional parameter natGatewayState
- Interface ApiManagementServiceUpdateParameters has a new optional parameter outboundPublicIPAddresses
- Interface AuthenticationSettingsContract has a new optional parameter oAuth2AuthenticationSettings
- Interface AuthenticationSettingsContract has a new optional parameter openidAuthenticationSettings
- Interface AuthorizationServerContract has a new optional parameter useInApiDocumentation
- Interface AuthorizationServerContract has a new optional parameter useInTestConsole
- Interface AuthorizationServerContractProperties has a new optional parameter useInApiDocumentation
- Interface AuthorizationServerContractProperties has a new optional parameter useInTestConsole
- Interface AuthorizationServerUpdateContract has a new optional parameter useInApiDocumentation
- Interface AuthorizationServerUpdateContract has a new optional parameter useInTestConsole
- Interface AuthorizationServerUpdateContractProperties has a new optional parameter useInApiDocumentation
- Interface AuthorizationServerUpdateContractProperties has a new optional parameter useInTestConsole
- Interface IdentityProviderBaseParameters has a new optional parameter clientLibrary
- Interface IdentityProviderContract has a new optional parameter clientLibrary
- Interface IdentityProviderCreateContract has a new optional parameter clientLibrary
- Interface IdentityProviderUpdateParameters has a new optional parameter clientLibrary
- Interface OpenidConnectProviderContract has a new optional parameter useInApiDocumentation
- Interface OpenidConnectProviderContract has a new optional parameter useInTestConsole
- Interface OpenidConnectProviderUpdateContract has a new optional parameter useInApiDocumentation
- Interface OpenidConnectProviderUpdateContract has a new optional parameter useInTestConsole
- Added Enum KnownAuthorizationType
- Added Enum KnownNatGatewayState
- Added Enum KnownOAuth2GrantType
- Added Enum KnownPolicyFragmentContentFormat
- Added Enum KnownPortalSettingsCspMode
- Added Enum KnownTranslateRequiredQueryParametersConduct
- Class ApiManagementClient has a new signature

## 9.0.0 (2023-02-01)

### Features Added

- Added operation group GlobalSchema
- Added Interface GlobalSchemaCollection
- Added Interface GlobalSchemaContract
- Added Interface GlobalSchemaCreateOrUpdateHeaders
- Added Interface GlobalSchemaCreateOrUpdateOptionalParams
- Added Interface GlobalSchemaDeleteOptionalParams
- Added Interface GlobalSchemaGetEntityTagHeaders
- Added Interface GlobalSchemaGetEntityTagOptionalParams
- Added Interface GlobalSchemaGetHeaders
- Added Interface GlobalSchemaGetOptionalParams
- Added Interface GlobalSchemaListByServiceNextOptionalParams
- Added Interface GlobalSchemaListByServiceOptionalParams
- Added Type Alias GlobalSchemaCreateOrUpdateResponse
- Added Type Alias GlobalSchemaGetEntityTagResponse
- Added Type Alias GlobalSchemaGetResponse
- Added Type Alias GlobalSchemaListByServiceNextResponse
- Added Type Alias GlobalSchemaListByServiceResponse
- Added Type Alias SchemaType
- Interface DiagnosticContract has a new optional parameter metrics
- Added Enum KnownSchemaType
- Added function getContinuationToken
- Interface ApiDiagnosticListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiDiagnosticListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiDiagnosticListByServiceNextOptionalParams no longer has parameter top
- Interface ApiIssueAttachmentListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiIssueAttachmentListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiIssueAttachmentListByServiceNextOptionalParams no longer has parameter top
- Interface ApiIssueCommentListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiIssueCommentListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiIssueCommentListByServiceNextOptionalParams no longer has parameter top
- Interface ApiIssueListByServiceNextOptionalParams no longer has parameter expandCommentsAttachments
- Interface ApiIssueListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiIssueListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiIssueListByServiceNextOptionalParams no longer has parameter top
- Interface ApiListByServiceNextOptionalParams no longer has parameter expandApiVersionSet
- Interface ApiListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiListByServiceNextOptionalParams no longer has parameter tags
- Interface ApiListByServiceNextOptionalParams no longer has parameter top
- Interface ApiListByTagsNextOptionalParams no longer has parameter filter
- Interface ApiListByTagsNextOptionalParams no longer has parameter includeNotTaggedApis
- Interface ApiListByTagsNextOptionalParams no longer has parameter skip
- Interface ApiListByTagsNextOptionalParams no longer has parameter top
- Interface ApiOperationListByApiNextOptionalParams no longer has parameter filter
- Interface ApiOperationListByApiNextOptionalParams no longer has parameter skip
- Interface ApiOperationListByApiNextOptionalParams no longer has parameter tags
- Interface ApiOperationListByApiNextOptionalParams no longer has parameter top
- Interface ApiProductListByApisNextOptionalParams no longer has parameter filter
- Interface ApiProductListByApisNextOptionalParams no longer has parameter skip
- Interface ApiProductListByApisNextOptionalParams no longer has parameter top
- Interface ApiReleaseListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiReleaseListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiReleaseListByServiceNextOptionalParams no longer has parameter top
- Interface ApiRevisionListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiRevisionListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiRevisionListByServiceNextOptionalParams no longer has parameter top
- Interface ApiSchemaListByApiNextOptionalParams no longer has parameter filter
- Interface ApiSchemaListByApiNextOptionalParams no longer has parameter skip
- Interface ApiSchemaListByApiNextOptionalParams no longer has parameter top
- Interface ApiTagDescriptionListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiTagDescriptionListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiTagDescriptionListByServiceNextOptionalParams no longer has parameter top
- Interface ApiVersionSetListByServiceNextOptionalParams no longer has parameter filter
- Interface ApiVersionSetListByServiceNextOptionalParams no longer has parameter skip
- Interface ApiVersionSetListByServiceNextOptionalParams no longer has parameter top
- Interface AuthorizationServerListByServiceNextOptionalParams no longer has parameter filter
- Interface AuthorizationServerListByServiceNextOptionalParams no longer has parameter skip
- Interface AuthorizationServerListByServiceNextOptionalParams no longer has parameter top
- Interface BackendListByServiceNextOptionalParams no longer has parameter filter
- Interface BackendListByServiceNextOptionalParams no longer has parameter skip
- Interface BackendListByServiceNextOptionalParams no longer has parameter top
- Interface CacheListByServiceNextOptionalParams no longer has parameter skip
- Interface CacheListByServiceNextOptionalParams no longer has parameter top
- Interface CertificateListByServiceNextOptionalParams no longer has parameter filter
- Interface CertificateListByServiceNextOptionalParams no longer has parameter isKeyVaultRefreshFailed
- Interface CertificateListByServiceNextOptionalParams no longer has parameter skip
- Interface CertificateListByServiceNextOptionalParams no longer has parameter top
- Interface DiagnosticListByServiceNextOptionalParams no longer has parameter filter
- Interface DiagnosticListByServiceNextOptionalParams no longer has parameter skip
- Interface DiagnosticListByServiceNextOptionalParams no longer has parameter top
- Interface EmailTemplateListByServiceNextOptionalParams no longer has parameter filter
- Interface EmailTemplateListByServiceNextOptionalParams no longer has parameter skip
- Interface EmailTemplateListByServiceNextOptionalParams no longer has parameter top
- Interface GatewayApiListByServiceNextOptionalParams no longer has parameter filter
- Interface GatewayApiListByServiceNextOptionalParams no longer has parameter skip
- Interface GatewayApiListByServiceNextOptionalParams no longer has parameter top
- Interface GatewayCertificateAuthorityListByServiceNextOptionalParams no longer has parameter filter
- Interface GatewayCertificateAuthorityListByServiceNextOptionalParams no longer has parameter skip
- Interface GatewayCertificateAuthorityListByServiceNextOptionalParams no longer has parameter top
- Interface GatewayHostnameConfigurationListByServiceNextOptionalParams no longer has parameter filter
- Interface GatewayHostnameConfigurationListByServiceNextOptionalParams no longer has parameter skip
- Interface GatewayHostnameConfigurationListByServiceNextOptionalParams no longer has parameter top
- Interface GatewayListByServiceNextOptionalParams no longer has parameter filter
- Interface GatewayListByServiceNextOptionalParams no longer has parameter skip
- Interface GatewayListByServiceNextOptionalParams no longer has parameter top
- Interface GroupListByServiceNextOptionalParams no longer has parameter filter
- Interface GroupListByServiceNextOptionalParams no longer has parameter skip
- Interface GroupListByServiceNextOptionalParams no longer has parameter top
- Interface GroupUserListNextOptionalParams no longer has parameter filter
- Interface GroupUserListNextOptionalParams no longer has parameter skip
- Interface GroupUserListNextOptionalParams no longer has parameter top
- Interface IssueListByServiceNextOptionalParams no longer has parameter filter
- Interface IssueListByServiceNextOptionalParams no longer has parameter skip
- Interface IssueListByServiceNextOptionalParams no longer has parameter top
- Interface LoggerListByServiceNextOptionalParams no longer has parameter filter
- Interface LoggerListByServiceNextOptionalParams no longer has parameter skip
- Interface LoggerListByServiceNextOptionalParams no longer has parameter top
- Interface NamedValueListByServiceNextOptionalParams no longer has parameter filter
- Interface NamedValueListByServiceNextOptionalParams no longer has parameter isKeyVaultRefreshFailed
- Interface NamedValueListByServiceNextOptionalParams no longer has parameter skip
- Interface NamedValueListByServiceNextOptionalParams no longer has parameter top
- Interface NotificationListByServiceNextOptionalParams no longer has parameter skip
- Interface NotificationListByServiceNextOptionalParams no longer has parameter top
- Interface OpenIdConnectProviderListByServiceNextOptionalParams no longer has parameter filter
- Interface OpenIdConnectProviderListByServiceNextOptionalParams no longer has parameter skip
- Interface OpenIdConnectProviderListByServiceNextOptionalParams no longer has parameter top
- Interface OperationListByTagsNextOptionalParams no longer has parameter filter
- Interface OperationListByTagsNextOptionalParams no longer has parameter includeNotTaggedOperations
- Interface OperationListByTagsNextOptionalParams no longer has parameter skip
- Interface OperationListByTagsNextOptionalParams no longer has parameter top
- Interface PortalRevisionListByServiceNextOptionalParams no longer has parameter filter
- Interface PortalRevisionListByServiceNextOptionalParams no longer has parameter skip
- Interface PortalRevisionListByServiceNextOptionalParams no longer has parameter top
- Interface ProductApiListByProductNextOptionalParams no longer has parameter filter
- Interface ProductApiListByProductNextOptionalParams no longer has parameter skip
- Interface ProductApiListByProductNextOptionalParams no longer has parameter top
- Interface ProductGroupListByProductNextOptionalParams no longer has parameter filter
- Interface ProductGroupListByProductNextOptionalParams no longer has parameter skip
- Interface ProductGroupListByProductNextOptionalParams no longer has parameter top
- Interface ProductListByServiceNextOptionalParams no longer has parameter expandGroups
- Interface ProductListByServiceNextOptionalParams no longer has parameter filter
- Interface ProductListByServiceNextOptionalParams no longer has parameter skip
- Interface ProductListByServiceNextOptionalParams no longer has parameter tags
- Interface ProductListByServiceNextOptionalParams no longer has parameter top
- Interface ProductListByTagsNextOptionalParams no longer has parameter filter
- Interface ProductListByTagsNextOptionalParams no longer has parameter includeNotTaggedProducts
- Interface ProductListByTagsNextOptionalParams no longer has parameter skip
- Interface ProductListByTagsNextOptionalParams no longer has parameter top
- Interface ProductSubscriptionsListNextOptionalParams no longer has parameter filter
- Interface ProductSubscriptionsListNextOptionalParams no longer has parameter skip
- Interface ProductSubscriptionsListNextOptionalParams no longer has parameter top
- Interface ReportsListByApiNextOptionalParams no longer has parameter orderby
- Interface ReportsListByApiNextOptionalParams no longer has parameter skip
- Interface ReportsListByApiNextOptionalParams no longer has parameter top
- Interface ReportsListByGeoNextOptionalParams no longer has parameter skip
- Interface ReportsListByGeoNextOptionalParams no longer has parameter top
- Interface ReportsListByOperationNextOptionalParams no longer has parameter orderby
- Interface ReportsListByOperationNextOptionalParams no longer has parameter skip
- Interface ReportsListByOperationNextOptionalParams no longer has parameter top
- Interface ReportsListByProductNextOptionalParams no longer has parameter orderby
- Interface ReportsListByProductNextOptionalParams no longer has parameter skip
- Interface ReportsListByProductNextOptionalParams no longer has parameter top
- Interface ReportsListBySubscriptionNextOptionalParams no longer has parameter orderby
- Interface ReportsListBySubscriptionNextOptionalParams no longer has parameter skip
- Interface ReportsListBySubscriptionNextOptionalParams no longer has parameter top
- Interface ReportsListByTimeNextOptionalParams no longer has parameter orderby
- Interface ReportsListByTimeNextOptionalParams no longer has parameter skip
- Interface ReportsListByTimeNextOptionalParams no longer has parameter top
- Interface ReportsListByUserNextOptionalParams no longer has parameter orderby
- Interface ReportsListByUserNextOptionalParams no longer has parameter skip
- Interface ReportsListByUserNextOptionalParams no longer has parameter top
- Interface SubscriptionListNextOptionalParams no longer has parameter filter
- Interface SubscriptionListNextOptionalParams no longer has parameter skip
- Interface SubscriptionListNextOptionalParams no longer has parameter top
- Interface TagListByApiNextOptionalParams no longer has parameter filter
- Interface TagListByApiNextOptionalParams no longer has parameter skip
- Interface TagListByApiNextOptionalParams no longer has parameter top
- Interface TagListByOperationNextOptionalParams no longer has parameter filter
- Interface TagListByOperationNextOptionalParams no longer has parameter skip
- Interface TagListByOperationNextOptionalParams no longer has parameter top
- Interface TagListByProductNextOptionalParams no longer has parameter filter
- Interface TagListByProductNextOptionalParams no longer has parameter skip
- Interface TagListByProductNextOptionalParams no longer has parameter top
- Interface TagListByServiceNextOptionalParams no longer has parameter filter
- Interface TagListByServiceNextOptionalParams no longer has parameter scope
- Interface TagListByServiceNextOptionalParams no longer has parameter skip
- Interface TagListByServiceNextOptionalParams no longer has parameter top
- Interface TagResourceListByServiceNextOptionalParams no longer has parameter filter
- Interface TagResourceListByServiceNextOptionalParams no longer has parameter skip
- Interface TagResourceListByServiceNextOptionalParams no longer has parameter top
- Interface TenantAccessListByServiceNextOptionalParams no longer has parameter filter
- Interface TenantSettingsListByServiceNextOptionalParams no longer has parameter filter
- Interface UserGroupListNextOptionalParams no longer has parameter filter
- Interface UserGroupListNextOptionalParams no longer has parameter skip
- Interface UserGroupListNextOptionalParams no longer has parameter top
- Interface UserListByServiceNextOptionalParams no longer has parameter expandGroups
- Interface UserListByServiceNextOptionalParams no longer has parameter filter
- Interface UserListByServiceNextOptionalParams no longer has parameter skip
- Interface UserListByServiceNextOptionalParams no longer has parameter top
- Interface UserSubscriptionListNextOptionalParams no longer has parameter filter
- Interface UserSubscriptionListNextOptionalParams no longer has parameter skip
- Interface UserSubscriptionListNextOptionalParams no longer has parameter top

### Breaking Changes

- Operation ContentItem.createOrUpdate has a new signature
- Operation ContentType.createOrUpdate has a new signature

## 8.1.2 (2022-10-08)

### Bugs Fixed

- revert credential scopes

## 8.1.1 (2022-09-30)

### Bugs Fixed

- fix better user experience of credential scopes in government cloud

## 8.1.0 (2022-08-03)

### Features Added

- Added Interface AccessInformationContract
- Added Interface ApiContract
- Added Interface ApiContractProperties
- Added Interface ApiContractUpdateProperties
- Added Interface ApiCreateOrUpdateProperties
- Added Interface ApiManagementServiceProperties
- Added Interface ApiManagementServiceResource
- Added Interface ApiManagementServiceUpdateParameters
- Added Interface ApiManagementServiceUpdateProperties
- Added Interface ApiReleaseContract
- Added Interface ApiTagResourceContractProperties
- Added Interface ApiVersionSetContract
- Added Interface ApiVersionSetContractProperties
- Added Interface ApiVersionSetUpdateParametersProperties
- Added Interface AssociationContract
- Added Interface AuthorizationServerContract
- Added Interface AuthorizationServerContractProperties
- Added Interface AuthorizationServerUpdateContract
- Added Interface AuthorizationServerUpdateContractProperties
- Added Interface BackendContract
- Added Interface BackendContractProperties
- Added Interface BackendReconnectContract
- Added Interface BackendUpdateParameterProperties
- Added Interface CacheContract
- Added Interface CertificateContract
- Added Interface ContentItemContract
- Added Interface ContentTypeContract
- Added Interface DeletedServiceContract
- Added Interface DiagnosticContract
- Added Interface EmailTemplateContract
- Added Interface GatewayCertificateAuthorityContract
- Added Interface GatewayContract
- Added Interface GatewayHostnameConfigurationContract
- Added Interface GroupContract
- Added Interface IdentityProviderContract
- Added Interface IdentityProviderContractProperties
- Added Interface IdentityProviderCreateContract
- Added Interface IdentityProviderCreateContractProperties
- Added Interface IdentityProviderUpdateProperties
- Added Interface IssueAttachmentContract
- Added Interface IssueCommentContract
- Added Interface IssueContract
- Added Interface IssueContractProperties
- Added Interface IssueUpdateContractProperties
- Added Interface KeyVaultContractProperties
- Added Interface LoggerContract
- Added Interface NamedValueContract
- Added Interface NamedValueContractProperties
- Added Interface NamedValueCreateContract
- Added Interface NamedValueCreateContractProperties
- Added Interface NamedValueUpdateParameterProperties
- Added Interface NotificationContract
- Added Interface OpenidConnectProviderContract
- Added Interface OperationContract
- Added Interface OperationContractProperties
- Added Interface OperationResultContract
- Added Interface OperationUpdateContractProperties
- Added Interface PolicyContract
- Added Interface PolicyDescriptionContract
- Added Interface PortalDelegationSettings
- Added Interface PortalRevisionContract
- Added Interface PortalSettingsContract
- Added Interface PortalSigninSettings
- Added Interface PortalSignupSettings
- Added Interface PrivateEndpointConnection
- Added Interface PrivateLinkResource
- Added Interface ProductContract
- Added Interface ProductContractProperties
- Added Interface ProductTagResourceContractProperties
- Added Interface ProductUpdateProperties
- Added Interface RecipientEmailContract
- Added Interface RecipientUserContract
- Added Interface SchemaContract
- Added Interface SubscriptionContract
- Added Interface TagContract
- Added Interface TagDescriptionContract
- Added Interface TagDescriptionContractProperties
- Added Interface TenantConfigurationSyncStateContract
- Added Interface TenantSettingsContract
- Added Interface UserContract
- Added Interface UserContractProperties
- Added Interface UserCreateParameterProperties
- Added Interface UserUpdateParametersProperties

## 8.0.1 (2022-04-06)

### Features Added

- Bug fix

## 8.0.0 (2021-12-13)

The package of @azure/arm-apimanagement is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
