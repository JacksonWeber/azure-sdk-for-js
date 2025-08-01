# Release History

## 1.22.1 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 1.22.0 (2025-07-10)

### Other Changes

- Update `engines` to `"node": ">=20.0.0"`. Please refer to our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more information on our supported Node.js versions.

## 1.21.0 (2025-06-05)

### Other Changes

- Export `RestError` and its constructor as an interface [PR #34591](https://github.com/Azure/azure-sdk-for-js/pull/34591)

## 1.20.0 (2025-05-01)

### Features Added

- Add an optional `requestOverrides` property to `PipelineRequest` and `PipelineRequestOptions` [PR #33724](https://github.com/Azure/azure-sdk-for-js/pull/33724).

### Other Changes

- Depend on `@typespec/ts-http-runtime`. [PR #33948](https://github.com/Azure/azure-sdk-for-js/pull/33948)

## 1.19.1 (2025-03-06)

### Other Changes

- Clear the request timeout timer in `NodeHttpClient` after the response is returned [PR #32891](https://github.com/Azure/azure-sdk-for-js/pull/32891)

## 1.19.0 (2025-02-06)

### Features Added

- Add `agent` and `tlsSettings` to `PipelineRequestOptions` [PR #32590](https://github.com/Azure/azure-sdk-for-js/pull/32590)
- Add `agent` option to `PipelineOptions` [PR #32809](https://github.com/Azure/azure-sdk-for-js/pull/32809)

## 1.18.2 (2025-01-10)

### Bugs Fixed

- Fixed an issue where tracing spans were incorrectly marked as successful. [PR #32018](https://github.com/Azure/azure-sdk-for-js/pull/32018)

## 1.18.1 (2024-11-26)

### Bugs Fixed

- Fix `this` not being bound correctly for `ChallengeCallbacks` implementations in `bearerTokenAuthenticationPolicy`. [PR #31961](https://github.com/Azure/azure-sdk-for-js/pull/31961)

## 1.18.0 (2024-11-12)

### Features Added

- `BearerTokenAuthenticationPolicy` will handle CAE claims challenge by default. [PR #31501](https://github.com/Azure/azure-sdk-for-js/pull/31501/)

### Bugs Fixed

- Fix an issue in `isStreamComplete` where the method never resolves if the stream is not readable.

## 1.17.0 (2024-09-12)

### Features Added

- The token cycler of `BearerTokenCredentialPolicy` now checks the `refreshAfterTimestamp` attribute in the `AccessToken` when determining if a token request should be made in the `shouldRefresh` method. #30402
- Added support for automatic span propagation and HTTP tracing for consumers using Rest Level Clients. [#31019](https://github.com/Azure/azure-sdk-for-js/pull/31019)

## 1.16.3 (2024-08-01)

### Other Changes

- The `request` and `response` properties on `RestError` are now non-enumerable.
- Adding React-Native support at top level [PR #30521](https://github.com/Azure/azure-sdk-for-js/pull/30521)

## 1.16.2 (2024-07-10)

### Bugs Fixed

- Fix TypeError on some platforms when retrieving browser user agent data. [PR #30194](https://github.com/Azure/azure-sdk-for-js/pull/30194)
- Fix `ERR_INVALID_URL` error thrown from sanitizer [PR #30151](https://github.com/Azure/azure-sdk-for-js/pull/30151)

### Features Added

- Add EdgeRuntime telemetry information [PR #30239](https://github.com/Azure/azure-sdk-for-js/pull/30239)

## 1.16.1 (2024-06-24)

### Bugs Fixed

- Tracing spans will now correctly sanitize query parameters in the http.url span attribute. [#29606](https://github.com/Azure/azure-sdk-for-js/pull/29606)
- Improve robustness of tokenCycler [PR #29638](https://github.com/Azure/azure-sdk-for-js/pull/29638)
- Fix platform specific data [PR #30011](https://github.com/Azure/azure-sdk-for-js/pull/30011)
- Fix react-native issue [#30065](https://github.com/Azure/azure-sdk-for-js/issues/30065)
- Improve browser telemetry [PR# 30096](https://github.com/Azure/azure-sdk-for-js/pull/30096), [PR #30128](https://github.com/Azure/azure-sdk-for-js/pull/30128)

## 1.16.0 (2024-05-02)

### Features Added

- The FormData global is now a supported request body type in Node in addition to the browser.

## 1.15.2 (2024-04-09)

### Other Changes

- Revert TypeScript output target to ES2017.

## 1.15.1 (2024-03-20)

### Bugs Fixed

- Fixed an issue where `proxyPolicy` was ignoring a custom port setting. [PR #28974](https://github.com/Azure/azure-sdk-for-js/pull/28974)

### Other Changes

- Add top-level `browser` field to `package.json` as fallback for legacy bundlers that do not support the `exports` field.

## 1.15.0 (2024-03-12)

### Bugs Fixed

- Fix issue where files created using `createFileFromStream` were not properly supported in the browser.

### Other Changes

- In the browser, `formDataPolicy` once again uses `multipartPolicy` when content type is `multipart/form-data`. This functionality was removed in 1.14.0, but has now been re-enabled.
- Migrated the codebase to ESM. This change is internal and should not affect customers.
- Migrated unit tests to vitest.

## 1.14.0 (2024-02-01)

### Bugs Fixed

- Fix support for `multipart/form-data` request bodies in browser where server does not support `HTTP/2`.
- Guard against unrecognized value types in the form data policy.
- Form file uploads now have content type `application/octet-stream` if no other content type was specified.
- Fix `multipart/form-data` requests failing in versions of Node 18 below 18.13 and versions of Node 20 below 20.6.

### Other Changes

- Upgrade dependency `@azure/abort-controller` version to `^2.0.0`.

## 1.13.0 (2023-12-07)

### Features Added

- Add `multipartPolicy` and `MultipartRequestBody` to allow for making multipart requests.
- Add `createFile` and `createFileFromStream` to allow creation of `File` objects for `multipart/form-data` requests.

### Other Changes

- `formDataPolicy` now uses `multipartPolicy` when content type is `multipart/form-data`.
- Trim leading and trailing whitespace from header values.

## 1.12.2 (2023-10-23)

### Bugs Fixed

- Support Cloudflare workers by only setting the available fields in the `Request` class for the Fetch API. [PR #27423](https://github.com/Azure/azure-sdk-for-js/pull/27423)
- Add `ENOTFOUND` code to exponential retry policy. [PR #27437](https://github.com/Azure/azure-sdk-for-js/pull/27437)
- Wait before stop listening to the abort signal until after the response stream has been drained to allow for aborting prolonged responses [PR #27205](https://github.com/Azure/azure-sdk-for-js/pull/27205)

## 1.12.1 (2023-09-07)

### Other Changes

- Set `init.duplex` to `"half"` when streaming body via `fetch()` [PR #26890](https://github.com/Azure/azure-sdk-for-js/pull/26890)
- Defer Error construction [PR #26897](https://github.com/Azure/azure-sdk-for-js/pull/26897)

## 1.12.0 (2023-08-08)

### Features Added

- Add CommonTelemetryOptions in PipelineOptions to allow customizing the client request id header name [PR #26424](https://github.com/Azure/azure-sdk-for-js/pull/26424)

### Bugs Fixed

- Fix a TypeError in React Native when `Platform.constants` is undefined [Issue #26609](https://github.com/Azure/azure-sdk-for-js/issues/26609)

## 1.11.0 (2023-06-01)

### Features Added

- Add a policy `auxiliaryAuthenticationHeaderPolicy` for external tokens to `x-ms-authorization-auxiliary` header. This header will be used when creating a cross-tenant application we may need to handle authentication requests for resources that are in different tenants. [PR #25270](https://github.com/Azure/azure-sdk-for-js/pull/25270)

## 1.10.3 (2023-04-06)

### Other Changes

- Migrate to use core-util UUID helper [PR# 25413](https://github.com/Azure/azure-sdk-for-js/pull/25413)

## 1.10.2 (2023-03-02)

### Bugs Fixed

- Remove oscpu from OS sniffing [PR #24809](https://github.com/Azure/azure-sdk-for-js/pull/24809)

## 1.10.1 (2023-01-05)

### Features Added

- In browsers, fire an upload progress event when Blobs are used instead of streams. [PR #24356](https://github.com/Azure/azure-sdk-for-js/pull/24356)

### Bugs Fixed

- Fix an issue in `FormDataPolicy` where we are not waiting for `prepareFormData()` to complete [PR #23858](https://github.com/Azure/azure-sdk-for-js/pull/23858)
- Fix an issue on Node where `HEAD` requests would close their socket, ignoring keep-alive. [PR #24356](https://github.com/Azure/azure-sdk-for-js/pull/24356)

## 1.10.0 (2022-11-03)

### Bugs Fixed

- Fixed an issue where policies added to a cloned Pipeline would also be added to the original (and vice versa) until policies were removed from either. [#23316](https://github.com/Azure/azure-sdk-for-js/pull/23316)

### Other Changes

- Update `engines` to `"node": ">=14.0.0"`

## 1.9.2 (2022-09-01)

### Other Changes

- Move `defaultLogPolicy` to after `Sign` phase in `createPipelineFromOptions`. [#22930](https://github.com/Azure/azure-sdk-for-js/pull/22930)

## 1.9.1 (2022-08-04)

### Bugs Fixed

- Fixed a bug in claim challenge we failed to refresh our token. [#22324](https://github.com/Azure/azure-sdk-for-js/pull/22324)

## 1.9.0 (2022-06-03)

### Features Added

- Add TLS policy in `createPipelineFromOptions`. [#21949](https://github.com/Azure/azure-sdk-for-js/pull/21949)

## 1.8.1 (2022-05-05)

### Features Added

- Support TLS Settings for client certificate authentication. [#21172](https://github.com/Azure/azure-sdk-for-js/pull/21172)

- Exposed type guard for RestError called `isRestError` for typesafe exception handling.

- Improve user agent information for React-Native.

### Other Changes

- Updated our `@azure/core-tracing` dependency to the latest version (1.0.0).
  - Notable changes include Removal of `@opentelemetry/api` as a transitive dependency and ensuring that the active context is properly propagated.
  - Customers who would like to continue using OpenTelemetry driven tracing should visit our [OpenTelemetry Instrumentation](https://www.npmjs.com/package/@azure/opentelemetry-instrumentation-azure-sdk) package for instructions.
- Update tokenCycler to mark as must refresh if the tenantId has changed [PR#21678](https://github.com/Azure/azure-sdk-for-js/pull/21678)

## 1.8.0 (2022-03-31)

### Features Added

- Support resettable streams in the form of `() => NodeJS.ReadableStream` for NodeJS and `() => ReadableStream` for browser. [#21013](https://github.com/Azure/azure-sdk-for-js/pull/21013)
- Add a React-Native mapping for default HTTP Client to the old `XhrHttpClient` because the Fetch API implementation in React-Native runtime is missing streaming support.

### Bugs Fixed

- Updated `redirectPolicy` to remove the `Authorization` header from redirected requests. [#21026](https://github.com/Azure/azure-sdk-for-js/pull/21026)
- Fixed an issue introduced in 1.6.0 where redirects were not properly followed in the browser. [#21051](https://github.com/Azure/azure-sdk-for-js/pull/21051)

## 1.7.0 (2022-03-21)

### Features Added

- Supports the `"retry-after-ms"` and `"x-ms-retry-after-ms"` headers along with the `"Retry-After"` header from throttling retry responses from the services. [#20817](https://github.com/Azure/azure-sdk-for-js/issues/20817)

### Bugs Fixed

- [Bug #20778](https://github.com/Azure/azure-sdk-for-js/pull/20778) Customers can provide abort signals in the options bags for the client libraries but they were not being checked when requests were being retried. The issue is fixed in [#20781](https://github.com/Azure/azure-sdk-for-js/pull/20781).
- Fixed a bug introduced on 1.4.0 that prevented the retry policies from throwing errors after all the retry steps are exhausted.
- Fixed a bug introduced on 1.4.0 that prevented the exponential retry policy to retry when the server answered with some expected errors.

### Other Changes

- Changed the default number of retries from 10 to 3.
- The retry policies now throw errors (if encountered) at the time they stop retrying, rather than merely returning the response.

## 1.6.0 (2022-03-03)

### Other Changes

- Add "WWW-Authenticate" to the allowed logged header list. [#20288](https://github.com/Azure/azure-sdk-for-js/pull/20288)

- Switch browser transport to fetch. [#20201](https://github.com/Azure/azure-sdk-for-js/pull/20201)

## 1.5.0 (2022-02-03)

### Features Added

- Added new phase "Sign" for policies that sign the request for security purposes. [#20129](https://github.com/Azure/azure-sdk-for-js/pull/20129)

### Bugs Fixed

- Updated the HTTP tracing span names to conform to the [OpenTelemetry Specification](https://github.com/open-telemetry/semantic-conventions/blob/4040095eda0159e38edfe7084ed32d3077a6ffb0/docs/http/http-spans.md#name). [#19838](https://github.com/Azure/azure-sdk-for-js/pull/19838)
- New HTTP spans will use the `HTTP <VERB>` convention instead of using the URL path.
- Addressed an issue where policy order might change in cases where there are no policies inside a phase specified by an "afterPhase" constraint. [#20129](https://github.com/Azure/azure-sdk-for-js/pull/20129)

## 1.4.0 (2022-01-06)

### Features Added

- Changed behavior when sending HTTP headers to preserve the original casing of header names. Iterating over `HttpHeaders` now keeps the original name casing. There is also a new `preserveCase` option for `HttpHeaders.toJSON()`. See [PR #18517](https://github.com/Azure/azure-sdk-for-js/pull/18517)
- The count for how many retries in the `throttlingRetryPolicy` policy can now be configured.
- The `bearerTokenAuthenticationPolicy` now accepts a logger.
- A new `retryPolicy` centralizes the retry logic and allows adding retry strategies to any pipeline. With it, we're exposing some new types:
  - `RetryStrategy` defines whether to retry and how to retry.
  - `RetryStrategyState` keeps track of the last retry and controls how to do the subsequent retries.
- Previous retry policies have been enhanced with better error handling.
- A new `defaultRetryPolicy` is added, which has the same behavior as all the other retry policies combined (`throttlingRetryPolicy`, `systemErrorRetryPolicy` and `exponentialRetryPolicy`).
- `createPipelineFromOptions` has been updated to ensure retries are properly traced.

### Bugs Fixed

- Form data of `application/x-www-form-urlencoded` are now sent properly.

## 1.3.2 (2021-11-04)

### Other Changes

- Allow specifying any status response to get a raw stream as response content. [#18492](https://github.com/Azure/azure-sdk-for-js/pull/18492)

## 1.3.1 (2021-09-30)

### Bugs Fixed

- Addressed an issue on Node where aborting a request while its response body was still be processed would cause the HttpClient to emit a `RestError` rather than the appropriate `AbortError`. [PR #17956](https://github.com/Azure/azure-sdk-for-js/pull/17956)

### Other Changes

- Updates package to work with the react native bundler. Browser APIs such as `URL` will still need to be pollyfilled for this package to run in react native. [PR #17783](https://github.com/Azure/azure-sdk-for-js/pull/17783)

## 1.3.0 (2021-09-02)

### Bugs Fixed

- `tracingPolicy` will no longer propagate tracing errors to the caller, and such errors will be logged instead and the operation does not get interrupted. [PR #16916](https://github.com/Azure/azure-sdk-for-js/pull/16916)

### Other Changes

- Allow `number`, `boolean` and `string` for input raw http headers. [PR #17358](https://github.com/Azure/azure-sdk-for-js/pull/17358)
- Refactor `createPipelineFromOptions` to its own file to help tree shaking. [PR #17015](https://github.com/Azure/azure-sdk-for-js/pull/17015)

## 1.2.0 (2021-08-04)

### Features Added

- Updated to use version 1.0.0-preview.13 of `@azure/core-tracing`.
- `tracingPolicy` will no longer inject invalid traceparent headers if an incorrect tracer implementation is used.
- `proxyPolicy` now allows passing in a list of no-proxy patterns to override global ones loaded from NO_PROXY environment variable [PR #16414](https://github.com/Azure/azure-sdk-for-js/pull/16414)

## 1.1.1 (2021-07-13)

### Key Bugs Fixed

- Fixed an issue with `HEAD` HTTP Requests. Destroyed the response before resolving the promise which will ensure that the code does not hang up. Please refer [#1037](https://github.com/Azure/autorest.typescript/issues/1037) for more details.

## 1.1.0 (2021-06-30)

### Fixed

- Fixed an issue where `proxySettings` does not work when there is username but no password [Issue 15720](https://github.com/Azure/azure-sdk-for-js/issues/15720)

### Features Added

- Added support for the `Retry-After` header on responses with status code 503, Service Unavailable.
- The `ExponentialRetryPolicy` will now ignore `503` responses if they have the `Retry-After` header.
- Added support for multiple retries on the `ThrottlingRetryPolicy` (up to 3 by default).

### Breaking Changes

- Updated @azure/core-tracing to version `1.0.0-preview.12`. See [@azure/core-tracing CHANGELOG](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-tracing/CHANGELOG.md) for details about breaking changes with tracing.

## 1.1.0-beta.3 (2021-06-03)

- Merged `bearerTokenChallengeAuthenticationPolicy` into `bearerTokenAuthenticationPolicy`. This will keep the functionality of `bearerTokenAuthenticationPolicy`, but also adds the `challengeCallbacks` feature.

## 1.1.0-beta.2 (2021-05-20)

- Fixed an issue to set the `Content-Length` header correctly when using multibyte characters. [PR 15314](https://github.com/Azure/azure-sdk-for-js/pull/15314)

### Fixed

- Fixed an issue where tracing spans were not setting a status correctly (on success or error) which results in the span status being `UNSET`. In addition, we will now capture the HTTP status code when a request fails in the tracing span. [PR 15061](https://github.com/Azure/azure-sdk-for-js/pull/15061)

## 1.1.0-beta.1 (2021-05-06)

### Features Added

- Add a new `bearerTokenChallengeAuthenticationPolicy` that provides a skeleton of handling challenge-based authorization. There are two extensible points: `authorizeRequest` and `authorizeRequestOnChallenge` callbacks.
  - `authorizeRequest` allows customizing the policy to alter how it authorizes a request before sending it. By default when no callbacks are specified, this policy has the same behavior as `bearerTokenAuthenticationPolicy`. It will retrieve the token from the underlying token credential, and if it gets one, it will cache the token and set it to the outgoing request.
  - `authorizeRequestOnChallenge`, which gets called only if we've found a challenge in the response. This callback has access to the original request and its response and is expected to handle the challenge. If this callback returns true, the request, usually updated after handling the challenge, will be sent again. If this call back returns false, no further actions will be taken.

### Fixed

- Rewrote `bearerTokenAuthenticationPolicy` to use a new backend that refreshes tokens only when they're about to expire and not multiple times before. This is based on a similar fix implemented on `@azure/core-http@1.2.4` ([PR with the changes](https://github.com/Azure/azure-sdk-for-js/pull/14223)). This fixes the issue: [13369](https://github.com/Azure/azure-sdk-for-js/issues/13369).
- Delay loading of NO_PROXY environment variable until when request pipeline is being created. This fixes [issue 14873](https://github.com/Azure/azure-sdk-for-js/issues/14873)

## 1.0.3 (2021-03-30)

### Breaking Changes

- Updated @azure/core-tracing to version `1.0.0-preview.11`. See [@azure/core-tracing CHANGELOG](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-tracing/CHANGELOG.md) for details about breaking changes with tracing.

## 1.0.2 (2021-03-25)

- Fixed an issue where chunked HTTP responses would sometimes be decoded incorrectly when multibyte characters were used. [PR 14517](https://github.com/Azure/azure-sdk-for-js/pull/14517)

## 1.0.1 (2021-03-18)

- Fixed an issue where `timeout` and `abortSignal` of requests was not honored on Node after requests had already been issued to the server. [PR 14359](https://github.com/Azure/azure-sdk-for-js/pull/14359)

## 1.0.0 (2021-03-15)

GA release of this package.

## 1.0.0-beta.2 (2021-03-10)

- Renamed interfaces with `HTTPS` in the name to have `HTTP` instead.
- Changed from exposing `DefaultHttpsClient` as a class directly, to providing `createDefaultHttpsClient()` to instantiate the appropriate runtime class.
- Fix an issue when passing in proxy hosts. [PR 13911](https://github.com/Azure/azure-sdk-for-js/pull/13911)
- Package rename to `core-rest-pipeline` to better reflect its purpose.

## 1.0.0-beta.1 (2021-02-04)

- Changes from `core-http`:
  - First release of new Pipeline model, see README for details.
  - ServiceClient and related AutoRest functionality moved out to `core-client`.
  - XML functionality moved out to `core-xml`.
  - Removal of node-fetch dependency.
  - Switched to use `https-proxy-agent` for proxy support.
  - Dropped IE support.
  - Stopped exporting various helper/utility methods.
  - All function parameters are now interfaces.
  - Remove rpRegistrationPolicy.
  - Remove keepAlivePolicy
  - Let clients add ndJsonPolicy manually
  - Disable redirects by removing the policy instead of an option
  - Invert response decompression policy
  - Remove request cloning, to optimize pipeline allocations.
- Add ms-cv header used as correlation vector (used for distributed tracing) to list of non-redacted headers so that clients can share this header for debugging purposes. [PR 13541](https://github.com/Azure/azure-sdk-for-js/pull/13541)
