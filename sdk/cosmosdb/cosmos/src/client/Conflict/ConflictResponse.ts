// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { CosmosDiagnostics } from "../../CosmosDiagnostics.js";
import type { CosmosHeaders } from "../../queryExecutionContext/index.js";
import { ResourceResponse } from "../../request/index.js";
import type { Resource } from "../Resource.js";
import type { Conflict } from "./Conflict.js";
import type { ConflictDefinition } from "./ConflictDefinition.js";

export class ConflictResponse extends ResourceResponse<ConflictDefinition & Resource> {
  constructor(
    resource: ConflictDefinition & Resource,
    headers: CosmosHeaders,
    statusCode: number,
    conflict: Conflict,
    diagnostics: CosmosDiagnostics,
  ) {
    super(resource, headers, statusCode, diagnostics);
    this.conflict = conflict;
  }
  /** A reference to the {@link Conflict} corresponding to the returned {@link ConflictDefinition}. */
  public readonly conflict: Conflict;
}
