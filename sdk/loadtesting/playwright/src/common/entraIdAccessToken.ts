// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { TokenCredential } from "@azure/core-auth";
import { coreLogger } from "./logger.js";
import {
  EntraIdAccessTokenConstants,
  InternalEnvironmentVariables,
  ServiceEnvironmentVariable,
} from "./constants.js";
import type { AccessTokenClaims } from "./types.js";
import { parseJwt } from "../utils/parseJwt.js";
import { ServiceErrorMessageConstants } from "./messages.js";

export class EntraIdAccessToken {
  public token?: string;
  private _expiryTimestamp?: number; // in milliseconds
  private _credential?: TokenCredential;
  private _noOpFlag = false;

  constructor(credential?: TokenCredential) {
    this._credential = credential;
    if (!this._credential) {
      this._noOpFlag = true;
      return;
    }
    this.setEntraIdAccessTokenFromEnvironment();
  }

  public fetchEntraIdAccessToken = async (): Promise<void> => {
    if (this._noOpFlag) {
      throw new Error(ServiceErrorMessageConstants.NO_CRED_ENTRA_AUTH_ERROR.message);
    }
    try {
      coreLogger.info("Fetching entra id access token");
      const accessToken = await this._credential!.getToken(EntraIdAccessTokenConstants.SCOPE);
      if (!accessToken) {
        throw new Error("Entra id access token is null");
      }
      if (accessToken.token === this.token) {
        // azure identity library can fetch the same token again from cache. 10 mins before expiry, it allows token refresh
        coreLogger.info("Cached access token is returned, will be retried again.");
        return;
      }
      this.token = accessToken.token;
      this._expiryTimestamp = accessToken.expiresOnTimestamp;
      process.env[ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN] = this.token!;
      coreLogger.info("Entra id access token fetched and set in environment variable");
      coreLogger.info(
        "Entra id access token expiry:",
        new Date(this._expiryTimestamp!).toISOString(),
      );
      return;
    } catch (err) {
      coreLogger.error(err);
      process.env[InternalEnvironmentVariables.MPT_SETUP_FATAL_ERROR] = "true";
      throw new Error(ServiceErrorMessageConstants.NO_AUTH_ERROR.message);
    }
  };

  public doesEntraIdAccessTokenNeedRotation(): boolean {
    if (this._noOpFlag) {
      throw new Error(ServiceErrorMessageConstants.NO_CRED_ENTRA_AUTH_ERROR.message);
    }
    if (!this.token) {
      coreLogger.info("Entra id access token not found, needs rotation");
      return true;
    }
    const lifetimeLeft = this._expiryTimestamp! - new Date().getTime();
    const doesEntraTokenRequireRotation =
      lifetimeLeft <
      EntraIdAccessTokenConstants.LIFETIME_LEFT_THRESHOLD_IN_MINUTES_FOR_ROTATION * 60 * 1000;
    coreLogger.info(
      "Entra id access token requires rotation:",
      doesEntraTokenRequireRotation ? "Yes" : "No",
    );
    return doesEntraTokenRequireRotation;
  }

  private setEntraIdAccessTokenFromEnvironment = (): void => {
    try {
      const token = process.env[ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN];
      if (!token) {
        return;
      }
      const claims = parseJwt<Partial<AccessTokenClaims>>(token);
      if (claims.pwid) {
        return;
      } // mpt PAT
      const expiry = new Date(claims.exp! * 1000);
      this.token = token;
      this._expiryTimestamp = expiry.getTime();
    } catch (_) {
      return;
    }
  };
}

export function createEntraIdAccessToken(credential?: TokenCredential): EntraIdAccessToken {
  return new EntraIdAccessToken(credential);
}
