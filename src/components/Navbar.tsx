"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-zinc-900/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-800 group-hover:border-blue-500/50 transition duration-300">
            <img src="/logo.png" alt="SPEC News Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.25em] text-white uppercase">SPEC NEWS</span>
            <span className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase">Connect</span>
          </div>
        </Link>

        <div className="flex items-center space-x-1 bg-zinc-950/60 border border-zinc-900 p-1 rounded-full backdrop-blur-xl">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors rounded-full">
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.4)]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
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
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Gallery", path: "/gallery" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#020205]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <img src="/logo.png" alt="SPEC News Connect" className="h-8 w-8 object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">SPEC News</p>
            <h1 className="text-base font-black tracking-tight text-white">Connect</h1>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl shadow-[0_25px_90px_-60px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-blue-500 text-white shadow-[0_10px_30px_-20px_rgba(59,130,246,0.75)]" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
