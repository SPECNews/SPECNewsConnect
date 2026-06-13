import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SPEC News Connect",
  description: "A cinematic media experience for St. Peter’s Engineering College.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full bg-[#020205] text-white">
      <body className="min-h-screen bg-[#020205] text-slate-100">
        <Navbar />
        <main className="relative pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
