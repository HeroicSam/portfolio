'use client';

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from 'next-themes'
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
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png"/>
        <TRPCReactProvider>
          <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
            <AnimatePresence mode="wait">
              <Header key={"header"} />
              <Background key={"background"} />
              {children}
            </AnimatePresence>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
