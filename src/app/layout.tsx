import React from "react";

import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Sorry Card Generator",
  description: "Built by Kayela Claybon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme="cmyk" lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col justify-between bg-base-300 text-base-content">
        <div className="p-4">
          <Navbar />
        </div>
        {children}
        <div className="p-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
