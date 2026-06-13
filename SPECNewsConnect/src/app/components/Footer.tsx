import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-zinc-900 py-16 text-zinc-600 text-xs tracking-wider uppercase font-medium relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-4 normal-case">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
            <h3 className="text-white font-black text-sm tracking-widest">SPEC NEWS CONNECT</h3>
          </div>
          <p className="text-zinc-500 text-xs tracking-normal">
            Capturing campus stories, celebrating student voices. St. Peter's Engineering College.
          </p>
        </div>
        <div>
          <h4 className="text-zinc-400 font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            {['Articles', 'Gallery', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-white transition flex items-center">
                  {item} <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-zinc-400 font-bold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="mailto:specnews@college.edu" className="hover:text-white transition">Email</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-zinc-400 font-bold mb-4">Campus</h4>
          <p className="text-zinc-500 leading-relaxed tracking-normal normal-case">
            Media Hub Desk, Main Block<br />
            St. Peter's Engineering College<br />
            Hyderabad, Telangana
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-900/60 text-center flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-700">
        <p>&copy; 2026 SPEC NEWS CONNECT. DESIGN LANGUAGE HYBRID.</p>
        <p className="mt-2 sm:mt-0">ST. PETER'S ENGINEERING COLLEGE</p>
      </div>
    </footer>
  );
}