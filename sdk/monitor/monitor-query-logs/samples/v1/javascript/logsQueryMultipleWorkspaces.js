// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates how to run a query against a Log Analytics workspace
 */

const { DefaultAzureCredential } = require("@azure/identity");
const { Durations, LogsQueryClient, LogsQueryResultStatus } = require("@azure/monitor-query-logs");
require("dotenv/config");
const monitorWorkspaceId = process.env.MONITOR_WORKSPACE_ID;
const additionalWorkspaces1 = process.env.ADDITIONAL_WORKSPACES_1 || "workspace1";
const additionalWorkspaces2 = process.env.ADDITIONAL_WORKSPACES_2 || "workspace2";

async function main() {
  const tokenCredential = new DefaultAzureCredential();
  const logsQueryClient = new LogsQueryClient(tokenCredential);

  if (!monitorWorkspaceId) {
    throw new Error("MONITOR_WORKSPACE_ID must be set in the environment for this sample");
  }

  const kustoQuery =
    "AppEvents | project TimeGenerated, Name, AppRoleInstance | order by TimeGenerated asc | limit 10";

  console.log(`Running '${kustoQuery}' over the last 5 minutes`);
  const queryLogsOptions = {
    // explicitly control the amount of time the server can spend processing the query.
    serverTimeoutInSeconds: 600, // sets the timeout to 10 minutes
    // optionally enable returning additional statistics about the query's execution.
    // (by default this is off)
    includeQueryStatistics: true,
    additionalWorkspaces: [additionalWorkspaces1, additionalWorkspaces2],
  };

  const result = await logsQueryClient.queryWorkspace(
    monitorWorkspaceId,
    kustoQuery,
    // The timespan is an ISO8601 formatted time (or interval). Some common aliases
    // are available (like durationOf1Day, durationOf1Hour, durationOf48Hours, etc..) but any properly formatted ISO8601
    // value is valid.
    { duration: Durations.oneHour },
    queryLogsOptions,
  );

  console.log(`Results for query '${kustoQuery}'`);

  if (result.status === LogsQueryResultStatus.Success) {
    const tablesFromResult = result.tables;
    if (tablesFromResult.length === 0) {
      console.log(`No results for query '${kustoQuery}'`);
      return;
    }
    processTables(tablesFromResult);
  } else {
    console.log(`Error processing the query '${kustoQuery}' - ${result.partialError}`);
    if (result.partialTables.length > 0) {
      console.log(`This query has also returned partial data in the following table(s) - `);
      processTables(result.partialTables);
    }
  }
}

async function processTables(tablesFromResult) {
  for (const table of tablesFromResult) {
    const columnHeaderString = table.columnDescriptors
      .map((column) => `${column.name}(${column.type}) `)
      .join("| ");
    console.log("| " + columnHeaderString);

    for (const row of table.rows) {
      const columnValuesString = row.map((columnValue) => `'${columnValue}' `).join("| ");
      console.log("| " + columnValuesString);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
  process.exit(1);
});

module.exports = { main };
