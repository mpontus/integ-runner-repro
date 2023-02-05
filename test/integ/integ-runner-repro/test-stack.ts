import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class IntegRunnerReproTestStack extends cdk.Stack {
  public readonly handler: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.handler = new NodejsFunction(this, "RunAllTests", {
      entry: `${__dirname}/handlers.ts`,
      handler: "handler",
    });
  }
}
