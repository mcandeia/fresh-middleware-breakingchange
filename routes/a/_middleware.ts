import { MiddlewareHandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, ctx: MiddlewareHandlerContext) => {
  console.log("Passing here");
  return ctx.next();
};
