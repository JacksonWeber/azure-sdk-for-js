# AnomalyDetectorRest client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for AnomalyDetectorRest in some common scenarios.

| **File Name**                                                                 | **Description**                                   |
| ----------------------------------------------------------------------------- | ------------------------------------------------- |
| [sample_detect_change_point.js][sample_detect_change_point]                   | detects change points.                            |
| [sample_detect_entire_series_anomaly.js][sample_detect_entire_series_anomaly] | detects anomaly points on entire series.          |
| [sample_detect_last_point_anomaly.js][sample_detect_last_point_anomaly]       | detects anomaly for the last point on the series. |
| [sample_multivariate_detection.js][sample_multivariate_detection]             | detect multivaariate anomalies.                   |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node sample_detect_change_point.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env ANOMALY_DETECTOR_API_KEY="<anomaly detector api key>" ANOMALY_DETECTOR_ENDPOINT="<anomaly detector endpoint>" node sample_detect_change_point.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[sample_detect_change_point]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/anomalydetector/ai-anomaly-detector-rest/samples/v1-beta/javascript/sample_detect_change_point.js
[sample_detect_entire_series_anomaly]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/anomalydetector/ai-anomaly-detector-rest/samples/v1-beta/javascript/sample_detect_entire_series_anomaly.js
[sample_detect_last_point_anomaly]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/anomalydetector/ai-anomaly-detector-rest/samples/v1-beta/javascript/sample_detect_last_point_anomaly.js
[sample_multivariate_detection]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/anomalydetector/ai-anomaly-detector-rest/samples/v1-beta/javascript/sample_multivariate_detection.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure-rest/ai-anomaly-detector?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/anomalydetector/ai-anomaly-detector-rest/README.md
