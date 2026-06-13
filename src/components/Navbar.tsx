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
    <nav className="fixed top-5 left-0 right-0 z-50 max-w-5xl mx-auto px-4">
      <div className="premium-card rounded-2xl px-6 py-3.5 flex items-center justify-between bg-black/75 shadow-2xl">
        
        {/* Verified Logo & Institutional Branding */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-stone-950 border border-amber-500/20 flex items-center justify-center p-1.5 transition-all group-hover:border-amber-500/50 shadow-inner">
            <img 
              src="/logo.png" 
              alt="SPEC News Logo" 
              className="w-full h-full object-contain brightness-110" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-wider text-white uppercase">SPEC NEWS</span>
            <span className="text-[9px] font-bold text-amber-500 tracking-[0.2em] uppercase">CONNECT</span>
          </div>
        </Link>

        {/* Navigation Options */}
        <div className="flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-white transition-colors"
              >
                {isActive && (
                  <motion.span 
                    layoutId="navbar-glow-pill" 
                    className="absolute inset-0 bg-gradient-to-r from-red-950/40 to-amber-950/30 border border-amber-500/20 rounded-xl -z-10" 
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }} 
                  />
                )}
                <span className={isActive ? 'text-amber-400 font-extrabold' : ''}>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}