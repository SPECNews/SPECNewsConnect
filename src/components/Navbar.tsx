'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    // FULL-WIDTH CONTAINER: Spans completely across the screen to fix the background breaking glitch
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050304]/90 backdrop-blur-2xl border-b border-stone-800/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
      
      {/* INTERNAL CONTENT ALIGNMENT: Keeps items locked inside your 6xl main site width */}
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* BRANDING LOGO: Amplified sizing to make it exceptionally big and prominent */}
        <Link href="/" className="flex flex-col select-none group focus:outline-none">
          <span className="text-4xl font-black tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-amber-400 leading-none">
            SPEC NEWS
          </span>
          <span className="text-[14px] font-black text-amber-500 tracking-[0.38em] mt-1.5 transition-colors duration-300 group-hover:text-amber-300 leading-none">
            CONNECT
          </span>
        </Link>

        {/* NAVIGATION LINKS: Proportional scaling with increased touch padding and bold tracking */}
        <div className="flex items-center space-x-3">
          {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative px-6 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-xl focus:outline-none ${
                  isActive ? 'text-amber-400' : 'text-stone-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActiveGlow"
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950/80 to-amber-950/60 border border-amber-500/30 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.1)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}