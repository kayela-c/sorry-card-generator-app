import React from "react";

import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sorry Card Generator",
  description: "Built by Kayela Claybon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme='cymk' lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
