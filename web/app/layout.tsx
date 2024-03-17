import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import AuthProvider from "./authprovider";
import QueryProvider from "./queryprovider";
import Navbar from "./components/navigation";

const inter = Manjari({ subsets: ['latin'], weight: ["100", "400", "700"] });

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
        <body className={`${inter.className} bg-[var(--secondary-color)]`}>
          <div>
            <Navbar/>
            <AuthProvider>
              <QueryProvider>
                {children}
              </QueryProvider>
            </AuthProvider>
          </div>
        </body>
      </html>
  );
}
