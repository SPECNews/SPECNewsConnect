'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 max-w-5xl mx-auto px-4">
      <div className="cyber-panel rounded-full px-6 py-3 flex items-center justify-between border border-zinc-800/50 bg-black/60 backdrop-blur-xl">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain" />
          <div className="flex flex-col">
            <span className="text-[11px] font-black tracking-[0.2em] text-white uppercase">SPEC NEWS</span>
            <span className="text-[8px] font-bold text-blue-500 tracking-widest uppercase">CONNECT</span>
          </div>
        </Link>

        <div className="flex items-center space-x-1">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {active && (
                  <motion.span layoutId="nav-glow" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                <span className={active ? 'text-white' : ''}>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
