import { Handler } from "aws-lambda";

export const handler: Handler<void, void> = () => {
  console.log("Hello world");
};
