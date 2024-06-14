'use client';

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import { AnimatePresence } from "framer-motion";
import Header from "./_components/header";
import Background from "./_components/background";

// export const metadata = {
//   title: "Conor Yuen",
//   description: "My portfolio website",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <AnimatePresence mode="wait">
            <Header />
            <Background />
            {children}
          </AnimatePresence>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
