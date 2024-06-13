'use client';

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Kaisei_Tokumin } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { AnimatePresence } from "framer-motion";
import Header from "./_components/header";
import Background from "./_components/background";
import App, { AppProps } from "next/app";

// export const metadata = {
//   title: "Conor Yuen",
//   description: "My portfolio website",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export const kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

export default function RootLayout({
  children,
  Component,
  pageProps,
}: {
  children: React.ReactNode;
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
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
