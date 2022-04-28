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
  var users = JSON.parse(fs.readFileSync('sample.json', 'utf8'));

  console.log(`Importing ${users.length} users...`);

  users.forEach(async (user) => {
    var params = {
      TableName: tableName,
      Item: user,
    };

    docClient.put(params, (err, data) => {
      if (err) {
        console.error('Error JSON:', JSON.stringify(err));
      } else {
        console.log('PutItem success..');
      }
    });
  });
};

main();
