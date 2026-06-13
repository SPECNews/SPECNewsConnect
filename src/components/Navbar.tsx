'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    // FLOATING CONTAINER WRAPPER
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      
      {/* CAPSULE CONTAINER: 
        Increased height from h-20 to h-28 and maximum width to max-w-6xl 
        to ensure the large logo and branding look balanced and premium.
      */}
      <nav className="w-full max-w-6xl h-28 bg-[#050304]/80 backdrop-blur-2xl border border-stone-800/80 rounded-[32px] flex items-center justify-between px-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
        
        {/* BRANDING LOGO & TEXT CONTAINER */}
        <Link href="/" className="flex items-center space-x-5 select-none group focus:outline-none relative z-10">
          
          {/* UPGRADED LOGO BADGE: 
            Increased size significantly from w-12 to w-16 so the details are clearly visible.
            Added a smooth pulse glowing border ring that matches your site accent.
          */}
          <div className="w-16 h-16 rounded-full bg-black border-2 border-amber-500/40 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.25)] group-hover:border-amber-400 transition-colors duration-300">
            <img 
              src="/logo.png" 
              alt="SPEC Logo" 
              className="w-full h-full object-cover rounded-full filter brightness-110 contrast-105"
            />
          </div>
          
          {/* ANIMATED STANDOUT TYPOGRAPHY:
            - "SPEC NEWS" is scaled up to text-3xl with heavy bolding.
            - "CONNECT" is expanded to text-[15px] with extreme modern tracking.
            - Linear gradient text mask applied with an infinite looping shimmer animation.
          */}
          <div className="flex flex-col relative overflow-hidden">
            <motion.span 
              animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
              className="text-3xl font-black tracking-[0.12em] uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 via-white to-white"
            >
              SPEC NEWS
            </motion.span>
            
            <motion.span 
              animate={{ backgroundPosition: ['200% 50%', '0% 50%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
              className="text-[15px] font-black tracking-[0.4em] uppercase mt-2 leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 via-amber-500 to-amber-500"
            >
              CONNECT
            </motion.span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center space-x-4 relative z-10">
          {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-2xl focus:outline-none ${
                  isActive ? 'text-amber-400' : 'text-stone-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActiveGlow"
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950/90 to-amber-950/70 border border-amber-500/40 rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.15)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
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