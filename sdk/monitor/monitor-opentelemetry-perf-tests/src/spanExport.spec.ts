// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { PerfOptionDictionary } from "@azure-tools/test-perf";
import { MonitorOpenTelemetryTest } from "./monitorOpenTelemetry.spec.js";
import type { Span, Tracer } from "@opentelemetry/api";
import { trace, context } from "@opentelemetry/api";

type MonitorOpenTelemetryTestOptions = Record<string, unknown>;

export class SpanExportTest extends MonitorOpenTelemetryTest<MonitorOpenTelemetryTestOptions> {
  public options: PerfOptionDictionary<MonitorOpenTelemetryTestOptions> = {};

  async run(): Promise<void> {
    async function main(): Promise<void> {
      const tracer = trace.getTracer("testTracer");
      const parentSpan = tracer.startSpan("main");
      doWork(parentSpan, tracer);
      parentSpan.end();
    }

    function doWork(parent: Span, tracer: Tracer): void {
      const ctx = trace.setSpan(context.active(), parent);
      const span = tracer.startSpan("doWork", undefined, ctx);
      for (let i = 0; i <= 1; i += 1) {
        continue;
      }
      span.setAttribute("key", "value");
      span.addEvent("invoking doWork");
      span.end();
    }

    main().catch((error) => {
      console.error("Error running perf test:", error.message);
      process.exit(1);
    });
  }
}
