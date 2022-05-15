import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import Test from "../models/test";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  await Test.create({
    id: "1",
    tags: ["test", "test2"],
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};
