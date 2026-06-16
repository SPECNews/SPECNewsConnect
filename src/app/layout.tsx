import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPEC NEWS Connect",
  description: "The Voice of St. Peter's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020001] text-white`}>
        <Navbar />
        {/* Dynamic top padding: Larger on mobile to prevent navbar overlapping content */}
        <main className="pt-32 sm:pt-24 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}