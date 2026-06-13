import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'SPEC News Connect',
  description: 'Premium Campus Media Network Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
