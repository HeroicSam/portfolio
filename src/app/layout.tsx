'use client';

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import { AnimatePresence } from "framer-motion";
import Header from "./_components/layout/header";
import Background from "./_components/layout/background";

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
            <Header key={"header"} />
            <Background key={"background"} />
            {children}
          </AnimatePresence>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
