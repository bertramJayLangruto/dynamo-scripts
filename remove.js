var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8080',
});

var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = 'MX-FirmRoster-development';

const main = async () => {
  console.log('Deleting...');

  docClient.scan({ TableName: tableName }, (_, data) => {
    data.Items.forEach(async (doc) => {
      await docClient
        .delete({ TableName: tableName, Key: { userId: doc.userId } }, function (err, data) {
          err && console.log(err);
          data && console.log(data);
        })
        .promise();
    });
  });
};

main();
