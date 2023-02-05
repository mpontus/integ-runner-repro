import { ExpectedResult, IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App } from "aws-cdk-lib";
import { IntegRunnerReproTestStack } from "./integ-runner-repro/test-stack";

const app = new App();
const stack = new IntegRunnerReproTestStack(app, "IntegRunnerReproStack");
const integ = new IntegTest(app, "IntegRunnerReproIntegTest", {
  testCases: [stack],
});
const invoke = integ.assertions.invokeFunction({
  functionName: stack.handler.functionName,
});
invoke.expect(
  ExpectedResult.objectLike({
    StatusCode: 200,
    Payload: "null",
  })
);
