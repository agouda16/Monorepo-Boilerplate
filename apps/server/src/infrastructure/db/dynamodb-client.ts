import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1", // change as needed
});

const docClient = DynamoDBDocumentClient.from(client);

export default docClient;
