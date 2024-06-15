import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const messageRouter = createTRPCRouter({
  send: publicProcedure
    .query(() => {
      return {
        greeting: "Hello World!",
      }
    })
})

