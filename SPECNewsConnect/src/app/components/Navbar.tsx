'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-zinc-900 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 p-1 overflow-hidden transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <img src="/logo.png" alt="SPEC Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-lg tracking-widest text-white group-hover:text-blue-400 transition-colors">
              SPEC NEWS
            </span>
          </Link>

          {/* Nav pills */}
          <div className="hidden md:flex items-center space-x-1 bg-zinc-900/40 p-1 rounded-full border border-zinc-800/50 backdrop-blur-md">
            {links.map((link) => {
              const active = pathname === link.path;
              return (
                <Link key={link.path} href={link.path} className="relative px-5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors rounded-full">
                  {active && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 bg-zinc-800/80 rounded-full -z-10" transition={{ type: 'spring', stiffness: 350, damping: 28 }} />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-zinc-200 transition shadow-lg">
              Connect
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-white transition">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-zinc-900 px-6 py-6 space-y-2 flex flex-col md:hidden">
              {links.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider ${pathname === link.path ? 'bg-zinc-900 text-white' : 'text-zinc-500'}`}>
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Top scroll-progress line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 z-50 origin-left" style={{ scaleX: typeof window !== 'undefined' ? undefined : 0 }} />
    </>
  );
}