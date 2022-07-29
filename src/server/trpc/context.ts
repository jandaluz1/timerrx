import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { getServerSession } from "@/utils/serverSession";
import { prisma } from "@/server/db";

export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  const req = opts?.req;
  const res = opts?.res;

  const session = req && res && (await getServerSession({ req, res }));

  return { session, prisma };
}
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
