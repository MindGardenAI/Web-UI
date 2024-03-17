import type { Metadata } from "next";
import { Manjari } from "next/font/google";
import "./globals.css";
import AuthProvider from "./authprovider";
import QueryProvider from "./queryprovider";
import Navbar from "./components/navigation";

const inter = Manjari({ subsets: ['latin'], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "Mind Garden AI",
  description: "A way to grow happiness with yourself"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <body className={`${inter.className} bg-[var(--secondary-color)]`}>
          <AuthProvider>
            <Navbar/>
            <QueryProvider>
              {children}
            </QueryProvider>
          </AuthProvider>
        </body>
      </html>
  );
}
