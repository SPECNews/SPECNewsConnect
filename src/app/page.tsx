import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "SPEC News Connect | St. Peter's Engineering College",
  description: "The Official Media & Communications Hub of St. Peter's Engineering College.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#020001] text-white flex flex-col relative antialiased selection:bg-red-950 selection:text-amber-400">
        
        {/* Global Navigation - Rendered over all child route nodes */}
        <Navbar />

        {/* Dynamic Route Children Insertion Slot */}
        <main className="flex-grow relative z-10">
          {children}
        </main>
        
        {/* Global Institutional Footer */}
        <Footer />

      </body>
    </html>
  );
}