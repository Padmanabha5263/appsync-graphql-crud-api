const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  const { fieldName } = event.info;
  const args = event.arguments;

  switch (fieldName) {
    case "createUser":
      return createUser(args.input);
    case "getUser":
      return getUser(args.id);
    default:
      throw new Error(`Unknown field: ${fieldName}`);
  }
};

const createUser = async (input) => {
  const params = {
    TableName: TABLE_NAME,
    Item: input,
  };

  await dynamodb.put(params).promise();
  return input;
};

const getUser = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  const result = await dynamodb.get(params).promise();
  return result.Item;
};
