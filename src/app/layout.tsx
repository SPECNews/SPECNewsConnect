import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 MAKE SURE THIS IMPORT IS HERE
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
      <body className={inter.className}>
        {/* 👇 THE NAVBAR COMPONENT MUST SIT HERE ABOVE THE CHILDREN */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}