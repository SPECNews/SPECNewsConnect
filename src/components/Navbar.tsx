'use client';
import { useState } from 'react'; // Added internal fallback state
import { motion } from 'framer-motion';
import Link from 'next/link';

// Made the props optional using "?" so <Navbar /> can sit safely in layout.tsx
interface NavbarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  // Local fallback state in case props aren't passed from a parent layout
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
    <div className="fixed top-5 left-0 right-0 z-50 w-full flex justify-center px-4">
      
      {/* PERFECT COMPACT NAVBAR CAPSULE */}
      <nav className="w-full max-w-6xl h-14 bg-[#050304]/90 backdrop-blur-2xl border border-stone-800/80 rounded-full flex items-center justify-between px-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative">
        
        {/* BRANDING LOGO & TYPOGRAPHY HEADER */}
        <Link href="/" className="flex items-center space-x-4 select-none group focus:outline-none relative">
          
          <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
            {/* The Solid Visual Logo Image */}
            <div className="w-full h-full rounded-full bg-black border border-stone-800 p-0.5 z-10 flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="SPEC Logo" 
                className="w-full h-full object-cover rounded-full filter brightness-110"
              />
            </div>
            {/* High-Energy Crazy Pulsing Boundary Frame */}
            <div className="absolute -inset-1.5 rounded-full border border-amber-500/30 animate-brand-connect z-0" />
          </div>
          
          {/* Standing Out Title Structure */}
          <div className="flex flex-col text-left">
            <span className="text-lg font-black tracking-[0.12em] text-white uppercase leading-none">
              SPEC NEWS
            </span>
            <span className="text-[10px] font-black text-amber-500 tracking-[0.34em] uppercase mt-1 leading-none">
              CONNECT
            </span>
          </div>
        </Link>

        {/* COMPACT ROUTE LINKS */}
        <div className="flex items-center space-x-1">
          {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
            const isActive = currentTab === item;
            return (
              <button
                key={item}
                onClick={() => handleTabChange(item)}
                className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] rounded-full transition-all focus:outline-none ${
                  isActive ? 'text-amber-400' : 'text-stone-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbarLinkActiveState"
                    className="absolute inset-0 w-full h-full bg-stone-900/50 border border-amber-500/30 rounded-full -z-10 shadow-[0_0_15px_rgba(245,158,11,0.08)]"
                    transition={{ type: "spring", stiffness: 360, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

      </nav>
    </div>
  );
}