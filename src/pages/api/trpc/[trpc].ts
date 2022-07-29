import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context, createContext } from "@/server/trpc/context";
import { TRPCError } from "@trpc/server";

export const appRouter = trpc.router<Context>().query("hello", {
  resolve({ ctx }) {
    return {
      greeting: `hello ${ctx.session?.user?.name ?? "world"}`,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
