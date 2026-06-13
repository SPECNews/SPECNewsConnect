'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [localActiveTab, setLocalActiveTab] = useState('Home');
  const currentTab = activeTab !== undefined ? activeTab : localActiveTab;

  const handleTabChange = (item: string) => {
    if (setActiveTab) {
      setActiveTab(item);
    } else {
      setLocalActiveTab(item);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      {/* Outer Wrapper linking the oversized broken-bounds layout */}
      <div className="w-full max-w-6xl flex items-center relative">
        
        {/* 1. LEFT SIDE: MASSIVE OVERSIZED CIRCLE LOGO (Breaks out completely) */}
        <Link href="/" className="absolute left-0 z-30 flex items-center group focus:outline-none select-none">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black border-2 border-amber-500/40 p-1 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.9)] animate-nav-logo overflow-hidden">
            <img 
              src="/logo.png" 
              alt="SPEC Logo" 
              className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 filter brightness-110"
            />
            {/* Soft inner ambient glow layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent pointer-events-none rounded-full" />
          </div>

          {/* Typography next to breaking badge */}
          <div className="flex flex-col text-left ml-4 bg-[#020001]/60 backdrop-blur-md px-3 py-1 rounded-xl border border-stone-900/40 shadow-xl">
            <span className="text-xl font-black tracking-[0.14em] text-white uppercase leading-none">SPEC NEWS</span>
            <span className="text-[11px] font-black text-amber-500 tracking-[0.38em] uppercase mt-1 leading-none">CONNECT</span>
          </div>
        </Link>

        {/* 2. RIGHT SIDE: THE CUT GLASS CAPSULE MENU */}
        {/* pl-28 or pl-36 shifts options over to completely account for the breaking cutout area */}
        <nav className="w-full h-16 bg-[#050304]/85 backdrop-blur-2xl border border-stone-800/80 rounded-full flex items-center justify-end pr-6 pl-32 sm:pl-44 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative z-10">
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
              const isActive = currentTab === item;
              return (
                <button
                  key={item}
                  onClick={() => handleTabChange(item)}
                  className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] rounded-full transition-all duration-300 focus:outline-none ${
                    isActive ? 'text-amber-400' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbarLinkActiveState"
                      className="absolute inset-0 w-full h-full bg-stone-900/60 border border-amber-500/40 rounded-full -z-10 shadow-[0_0_20px_rgba(245,158,11,0.12)]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </div>

        </nav>
      </div>
    </div>
  );
}