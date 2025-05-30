# Azure Tables Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
v3: true
package-version: 13.3.1
package-name: "@azure/data-tables"
title: TablesClient
description: Tables Client
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src/generated
input-file: https://github.com/Azure/azure-rest-api-specs/blob/4ae412cf228fb0320ced6fd6020435296752bf68/specification/cosmos-db/data-plane/Microsoft.Tables/preview/2019-02-02/table.json
add-credentials: false
override-client-name: GeneratedClient
use-extension:
  "@autorest/typescript": "6.0.34"
hide-clients: true
openapi-type: data-plane
module-kind: esm
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.GeoReplication
    transform: >
      $["description"] = "Geo-Replication information for the Secondary Storage Service";
```

### Fix additionalProperties type, it should be any not AnyObject. True defaults to AnyObject

```yaml
directive:
  - from: swagger-document
    where: $.definitions.TableEntityProperties
    transform: >
      $["additionalProperties"] = {};
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.TableResponseProperties.properties.TableName
    transform: >
      $["x-ms-client-name"] = "name";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.TableProperties.properties.TableName
    transform: >
      $["x-ms-client-name"] = "name";
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.Metrics
    transform: >
      $["description"] = "A summary of request statistics grouped by API";
```

```yaml
directive:
  - from: swagger-document
    where: $.paths..responses..headers["ETag"]
    transform: >
      $["x-ms-client-name"] = "etag";
```

### Make Access Policy not required

```yaml
directive:
  from: swagger-document
  where: $.definitions.SignedIdentifier
  transform: >
    $.required = ["Id"]
```

```yaml
directive:
  from: swagger-document
  where: $.definitions.AccessPolicy
  transform: >
    delete $.required
```

```yaml
directive:
  from: swagger-document
  where: $.definitions.AccessPolicy
  transform: >
    delete $.properties["Start"]["format"];
    delete $.properties["Expiry"]["format"];
```
