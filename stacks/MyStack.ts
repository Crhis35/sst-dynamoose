import { StackContext, Api, Permissions } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  }).attachPermissions("*");
}
