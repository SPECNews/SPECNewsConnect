import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'SPEC News Connect',
  description: 'The Official Media Hub of St. Peter\'s Engineering College.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-blue-500/30">
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}