import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import AuthProvider from "./authprovider";

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
        <body className={`${inter.className} bg-[#E8E6CF]`}>
          <div>
            <Navbar/>
            <AuthProvider>{children}</AuthProvider>
          </div>
        </body>
      </html>
  );
}
