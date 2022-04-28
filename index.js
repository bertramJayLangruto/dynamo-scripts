var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8080',
});

var dynamodb = new AWS.DynamoDB();
var tableName = 'MX-FirmRoster-development';

const main = async () => {
  console.log('Table list');

  await dynamodb
    .listTables({}, (err, data) => {
      err && console.log(err);
      data && console.log(data);
    })
    .promise();

  console.log('Table info');
  await dynamodb
    .describeTable({ TableName: tableName }, (err, data) => {
      err && console.log(err);
      data && console.log(data.Table.AttributeDefinitions, data.Table.KeySchema);
    })
    .promise();
};

main();
