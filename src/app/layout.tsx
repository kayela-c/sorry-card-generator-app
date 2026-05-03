import React from "react";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
//import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Sorry Card Generator",
  description: "Built by Kayela Claybon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
        <body className="flex min-h-screen flex-col justify-between bg-base-300 text-base-content" suppressHydrationWarning>
          <div className="p-4">
            <Navbar />
          </div>
          {children}
          {/* <div className="p-4">
            <Footer />
          </div> */}
        </body>
      </html>
    </ThemeProvider>
  );
}