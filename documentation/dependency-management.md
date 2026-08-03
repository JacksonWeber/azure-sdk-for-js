# Dependency Management

The Azure SDK for JS client libraries include a host of dependencies, both internal and external. In general, our policy allows for some flexibility in dependencies and we generally pin to a [caret] version - allowing for patches, security fixes, and any non-breaking changes in our dependency ranges.

There are times when a dependency needs to be updated, such as when a security vulnerability has been found and patched in the dependency's codebase. While we will address security vulnerabilities in dependencies by updating our minimum version to the latest patched version, our SemVer policy allows customers to update to the latest version of a transitive dependency without waiting for our next releases and without requiring a hotfix.

In this document we'll outline a few options available to you when a transitive dependency must be updated.

> **SDK authors:** for the policy on taking a _new_ third-party runtime
> dependency in a shipped library, see
> [Adding a new third-party runtime dependency](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/steps-after-generations.md#adding-a-new-third-party-runtime-dependency).

## Example scenario

Let's assume that a vulnerability has been found in `semver` version 7.5.2 and that you use `@azure/arm-storage` directly. Your security scan identified this vulnerability and asks to upgrade to 7.5.4 or higher.

The outputs below assume you're using `npm v8.1.2` with a lockfile, but we will provide instructions for Yarn as well.

### Identifying the dependency tree

First, let's see how `semver` is pulled into our dependency tree.

```
> npm ls semver

my-app@1.0.0 /home/user/my-app
└─┬ @azure/arm-storage@18.0.0
  └─┬ @azure/core-rest-pipeline@1.10.0
    └── semver@7.5.2
```

> If you are using Yarn you can use `yarn why semver` with similar results.

It looks like `semver`, a dependency of `@azure/core-rest-pipeline@1.10.0` is being pulled in _transitively_ via `@azure/arm-storage@18.0.0`.

Because I use a lockfile, running `npm install` again will not help me here. But `npm` provides a few utilities that can.

### Using `npm audit fix`

First, it's possible that you were alerted to a security vulnerability thanks to `npm audit`. In this case, the simplest solution might be to run `npm audit fix`. Let's see what that looks like:

```
> npm audit fix

changed 1 package, and audited 51 packages in 421ms

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
my-app main % npm ls semver
my-app@1.0.0 /home/user/my-app
└─┬ @azure/arm-storage@18.0.0
  └─┬ @azure/core-rest-pipeline@1.10.0
    └── semver@7.5.4
```

As you can see semver has been updated to 7.5.4, without having to wait for a new version of `@azure/core-rest-pipeline`.

For more information on `npm audit` please refer to the [npm-audit documentation][npm-audit].

> If you are using Yarn you can use `yarn npm audit` with similar results.

### Using `npm update`

Not all updates are due to security vulnerabilities. Sometimes you just want to update a transitive dependency without deleting your lockfile. In that case, `npm update semver` can help. Let's see what that looks like:

```
> npm update semver

changed 1 package, and audited 51 packages in 320ms

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
my-app main % npm ls semver
my-app@1.0.0 /home/user/my-app
└─┬ @azure/arm-storage@18.0.0
  └─┬ @azure/core-rest-pipeline@1.10.0
    └── semver@7.5.4
```

Awesome!

> If you are using Yarn you can use `yarn up semver` with similar results.

> Note: In some previous versions of `npm`, `npm update` would only update _top-level_ dependencies. If you're using npm 6.x for example you can provide the `--depth` argument to achieve similar results.

For more information on `npm update` please refer to the [npm-update documentation][npm-update].

### I read this guide and still have no idea what to do

Feel free to [file an issue][file-an-issue] and start a discussion, we're here to help and will try to do so to the best of our abilities!

[caret]: https://docs.npmjs.com/cli/v6/using-npm/semver#caret-ranges-123-025-004
[npm-audit]: https://docs.npmjs.com/cli/v8/commands/npm-audit
[npm-update]: https://docs.npmjs.com/cli/v8/commands/npm-update
[file-an-issue]: https://github.com/Azure/azure-sdk-for-js/issues/new/choose
