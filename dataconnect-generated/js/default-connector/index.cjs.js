const { CallerSdkTypeEnum, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'employee-assessment',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

