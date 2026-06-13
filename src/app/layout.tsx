import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "SPEC News Connect | St. Peter's Engineering College",
  description: "The Official Media & Journalism Communications Hub of St. Peter's Engineering College.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col relative antialiased">
        {/* Deep background ambient glowing accents */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[130px] pointer-events-none -z-10" />
        
        <Navbar />
        <main className="flex-grow pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}