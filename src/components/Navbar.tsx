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
      <div className="premium-card rounded-full px-6 py-3 flex items-center justify-between bg-black/60 backdrop-blur-xl">
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Animated pulsing container wrapper around your logo image */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1 group-hover:border-blue-500/50 transition-colors duration-300"
          >
            <img src="/logo.png" alt="SPEC News Logo" className="w-full h-full object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.2em] text-white uppercase">SPEC NEWS</span>
            <span className="text-[9px] font-bold text-blue-500 tracking-widest uppercase">CONNECT</span>
          </div>
        </Link>

        <div className="flex items-center space-x-1">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {active && (
                  <motion.span layoutId="nav-pill-glow" className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
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
