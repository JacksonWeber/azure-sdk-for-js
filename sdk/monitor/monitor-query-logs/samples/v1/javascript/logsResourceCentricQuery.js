// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates how to run a query against a Log Analytics workspace, using an Azure resource ID.
 */

const { DefaultAzureCredential } = require("@azure/identity");
const { Durations, LogsQueryClient, LogsQueryResultStatus } = require("@azure/monitor-query-logs");
require("dotenv/config");
const logsResourceId = process.env.LOGS_RESOURCE_ID;

async function main() {
  const tokenCredential = new DefaultAzureCredential();
  const logsQueryClient = new LogsQueryClient(tokenCredential);

  if (!logsResourceId) {
    throw new Error("LOGS_RESOURCE_ID must be set in the environment for this sample");
  }

  const kustoQuery = `MyTable_CL | summarize count()`;

  console.log(`Running '${kustoQuery}' over the last One Hour`);
  const queryLogsOptions = {
    // explicitly control the amount of time the server can spend processing the query.
    serverTimeoutInSeconds: 600, // sets the timeout to 10 minutes
    // optionally enable returning additional statistics about the query's execution.
    // (by default, this is off)
    includeQueryStatistics: true,
  };

  const result = await logsQueryClient.queryResource(
    logsResourceId,
    kustoQuery,
    { duration: Durations.sevenDays },
    queryLogsOptions,
  );

  console.log(`Results for query '${kustoQuery}'`);

  if (result.status === LogsQueryResultStatus.Success) {
    const tablesFromResult = result.tables;

    if (tablesFromResult.length === 0) {
      console.log(`No results for query '${kustoQuery}'`);
      return;
    }
    console.log(`This query has returned table(s) - `);
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
