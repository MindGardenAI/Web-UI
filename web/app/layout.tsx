'use client'
import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import AuthProvider from "./authprovider";
import { QueryClient, QueryClientProvider } from "react-query";

import Navbar from "./components/navigation";
const inter = Manjari({ subsets: ['latin'], weight: ["100", "400", "700"] });
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Mind Garden AI",
description: "A way to grow happiness with yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className}`}>
          <div>
            <Navbar/>
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </AuthProvider>
          </div>
        </body>
      </html>
  );
}
