/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  SecretResourceDescription as SecretResourceDescriptionMapper,
  SecretValueResourceDescription as SecretValueResourceDescriptionMapper,
  VolumeResourceDescription as VolumeResourceDescriptionMapper,
  NetworkResourceDescription as NetworkResourceDescriptionMapper,
  GatewayResourceDescription as GatewayResourceDescriptionMapper,
  ApplicationResourceDescription as ApplicationResourceDescriptionMapper
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-09-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const secretResourceDescription: OperationParameter = {
  parameterPath: "secretResourceDescription",
  mapper: SecretResourceDescriptionMapper
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const secretResourceName: OperationURLParameter = {
  parameterPath: "secretResourceName",
  mapper: {
    serializedName: "secretResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const secretValueResourceDescription: OperationParameter = {
  parameterPath: "secretValueResourceDescription",
  mapper: SecretValueResourceDescriptionMapper
};

export const secretValueResourceName: OperationURLParameter = {
  parameterPath: "secretValueResourceName",
  mapper: {
    serializedName: "secretValueResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const volumeResourceDescription: OperationParameter = {
  parameterPath: "volumeResourceDescription",
  mapper: VolumeResourceDescriptionMapper
};

export const volumeResourceName: OperationURLParameter = {
  parameterPath: "volumeResourceName",
  mapper: {
    serializedName: "volumeResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const networkResourceDescription: OperationParameter = {
  parameterPath: "networkResourceDescription",
  mapper: NetworkResourceDescriptionMapper
};

export const networkResourceName: OperationURLParameter = {
  parameterPath: "networkResourceName",
  mapper: {
    serializedName: "networkResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const gatewayResourceDescription: OperationParameter = {
  parameterPath: "gatewayResourceDescription",
  mapper: GatewayResourceDescriptionMapper
};

export const gatewayResourceName: OperationURLParameter = {
  parameterPath: "gatewayResourceName",
  mapper: {
    serializedName: "gatewayResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const applicationResourceDescription: OperationParameter = {
  parameterPath: "applicationResourceDescription",
  mapper: ApplicationResourceDescriptionMapper
};

export const applicationResourceName: OperationURLParameter = {
  parameterPath: "applicationResourceName",
  mapper: {
    serializedName: "applicationResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const serviceResourceName: OperationURLParameter = {
  parameterPath: "serviceResourceName",
  mapper: {
    serializedName: "serviceResourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const replicaName: OperationURLParameter = {
  parameterPath: "replicaName",
  mapper: {
    serializedName: "replicaName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const codePackageName: OperationURLParameter = {
  parameterPath: "codePackageName",
  mapper: {
    serializedName: "codePackageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tail: OperationQueryParameter = {
  parameterPath: ["options", "tail"],
  mapper: {
    serializedName: "tail",
    type: {
      name: "Number"
    }
  }
};
