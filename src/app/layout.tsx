import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomMouseFollower from '@/components/CustomMouseFollower';

export const metadata = {
  title: 'SPEC News Connect',
  description: 'The Official Media & Communications Hub of St. Peter\'s Engineering College.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] min-h-screen flex flex-col relative">
        <CustomMouseFollower />
        <Navbar />
        <main className="flex-grow pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
