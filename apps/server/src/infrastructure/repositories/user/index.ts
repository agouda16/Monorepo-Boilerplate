import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import docClient from "../../db/dynamodb-client.js";
import { User } from "../../../domain/entities/user.js";

const TABLE_NAME = "Users";

export const createUser = async (user: User): Promise<void> => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: user,
  });

  await docClient.send(command);
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: { email },
  });

  const result = await docClient.send(command);
  return result.Item as User | null;
};
