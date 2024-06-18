import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Resend } from "resend";
import { z } from "zod";

export const messageRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const resend = new Resend(process.env.RESEND_API_KEY);

      try {
        // await resend.emails.send({
        //   from: 'me@conoryuen.com',
        //   to: 'cyuen10@gmail.com', 
        //   subject: `Portfolio: ${input.name} sent you a message from ${input.email}`,
        //   text: input.message,
        // });
        setTimeout(() => {
          return { success: true };
        }, 5000);
        // return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false };
      }
    })
})

