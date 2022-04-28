var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8080',
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'MX-FirmRoster-development';

const main = async () => {
  console.log('All Items');

  docClient.scan({ TableName: tableName }, (err, data) => {
    console.log(data.Items);
  });
};

main();
