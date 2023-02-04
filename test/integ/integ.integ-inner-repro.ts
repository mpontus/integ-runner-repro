import { ExpectedResult, IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, Stack } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

const app = new App();
const stack = new Stack(app, "IntegRunnerReproStack");
const handler = new NodejsFunction(stack, "RunAllTests", {
  entry: `${__dirname}/handlers.ts`,
  handler: "handler",
});
const integ = new IntegTest(app, "IntegRunnerReproIntegTest", {
  testCases: [stack],
});
const invoke = integ.assertions.invokeFunction({
  functionName: handler.functionName,
});
invoke.expect(
  ExpectedResult.objectLike({
    StatusCode: 200,
    Payload: "null",
  })
);
