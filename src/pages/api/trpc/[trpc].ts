import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context, createContext } from "@/server/trpc/context";
import { TRPCError } from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";

const dateSchema = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());
type DateSchema = z.infer<typeof dateSchema>;

export const appRouter = trpc
  .router<Context>()
  .query("hello", {
    resolve({ ctx }) {
      return {
        greeting: `hello ${ctx.session?.user?.name ?? "world"}`,
      };
    },
  })
  .query("get-user-meds", {
    async resolve({ ctx }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          message: "Please sign in",
          code: "UNAUTHORIZED",
        });
      }
      const user = await ctx.prisma.user.findFirst({
        where: { email: ctx.session.user.email! },
      });

      return user?.meds;
    },
  })
  .mutation("add-med", {
    input: z.object({
      name: z.string(),
      dosage: z.number(),
      timesPerDay: z.number(),
      nextDose: z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date()),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          message: "Please sign in",
          code: "UNAUTHORIZED",
        });
      }

      const nextDose = new Date(new Date().getTime() + 5000);
      const med = await ctx.prisma.user.update({
        where: {
          email: ctx.session.user.email!,
        },
        data: {
          meds: {
            push: { ...input, nextDose },
          },
        },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
