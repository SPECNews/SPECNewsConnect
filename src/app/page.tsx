'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Native mouse follow effect hooks
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax constraints based on view center
  const x = useTransform(mouseX, [0, windowSize.width], [-15, 15]);
  const y = useTransform(mouseY, [0, windowSize.height], [-10, 10]);

  // Spring settings for standard native cursor fluidity
  const smoothX = useSpring(x, { stiffness: 350, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 350, damping: 28 });

  useEffect(() => {
    // Correct initial mount and update window constraints
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Direct mouse input values used
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="pb-32 space-y-36 relative overflow-hidden native-cursor">
      
      {/* Immersive background layout layers */}
      <div className="absolute inset-0 z-0">
        <div className="fixed inset-0 bg-[#000000]" /> {/* Deepest purely black base layer */}
        <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-red-950/10 blur-[130px] opacity-70" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-950/5 blur-[140px] opacity-50" />
        
        {/* Parallax dynamic logo backing graphic */}
        <motion.div 
          style={{ x: smoothX, y: smoothY, rotateX: useTransform(smoothY, [-10, 10], [2, -2]), rotateY: useTransform(smoothX, [-15, 15], [-3, 3]) }}
          className="fixed inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0"
        >
          <img 
            src="/logo.png" 
            alt="Dynamic Logo Backing" 
            className="w-[100vw] h-[100vw] sm:w-[90vw] sm:h-[90vw] object-contain opacity-[0.035] filter grayscale scale-105"
          />
        </motion.div>
      </div>

      {/* Floating high-end navigation matrix with responsive components */}
      <nav className="fixed top-5 left-0 right-0 z-50 max-w-5xl mx-auto px-4 lg:px-0">
        <div className="bg-zinc-950/70 backdrop-blur-3xl border border-zinc-900 rounded-full px-6 py-3.5 flex items-center justify-between shadow-[0_15px_50px_-15px_rgba(0,0,0,0.8)]">
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-10 h-10 rounded-full bg-zinc-900/60 border border-zinc-800 p-1.5 flex items-center justify-center shadow-inner group-hover:border-blue-500/50 transition duration-300">
              <img src="/logo.png" alt="Branding Emblem" className="w-full h-full object-contain brightness-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black tracking-widest text-white uppercase leading-none">SPEC NEWS</span>
              <span className="text-[9px] font-bold text-blue-500 tracking-[0.25em] uppercase leading-none mt-1">CONNECT</span>
            </div>
          </Link>
          <div className="flex items-center space-x-1.5 p-1 bg-zinc-900/40 border border-zinc-900 rounded-full">
            {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item, idx) => (
              <Link key={idx} href="#" className={`relative px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-colors ${idx === 0 ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'text-zinc-400 hover:text-white'}`}>
                {idx === 0 && <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Primary Immersive Hero Viewport Section */}
      <section className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[90vh] relative z-10 pt-28">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="space-y-10 flex flex-col items-center"
        >
          {/* Parallax dynamic logo hub emblem with smooth animations */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-600/20 to-blue-600/30 blur-lg group-hover:blur-2xl opacity-40 transition duration-500" />
            <div className="w-28 h-28 rounded-full bg-zinc-950 border border-zinc-800 p-4 flex items-center justify-center relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:border-blue-500/50">
              <img 
                src="/logo.png" 
                alt="SPEC News Emblem" 
                className="w-full h-full object-contain brightness-110 filter drop-shadow-lg" 
              />
            </div>
          </motion.div>

          {/* Council badge with integrated animations */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="inline-flex items-center space-x-2.5 bg-zinc-950/60 border border-zinc-800 px-4 py-1.5 rounded-full shadow-[0_0_25px_-5px_rgba(0,0,0,0.7)]"
          >
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Trophy className="w-3.5 h-3.5 text-blue-500" />
            </motion.div>
            <span className="text-[10px] font-black tracking-widest uppercase text-zinc-300">Official Media & Communications Council</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-[1.03] max-w-4xl text-gradient">
            CAPTURING MOMENTS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-300">
              CHRONICLING STORIES.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-base normal-case leading-relaxed max-w-3xl font-sans font-medium px-4">
            Welcome to the digital command hub of <strong className="text-white font-bold">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We construct high-fidelity cinematic records, engineer innovative editorial flows, and showcase creative journalism for a premium audience matrix.
          </p>
          
          <div className="pt-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="#" className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <span>EXPLORE ARTICLES</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Cursor Light Blot Layer */}
      <motion.div
        className="fixed inset-0 z-[1] pointer-events-none mix-blend-screen opacity-100 hidden lg:block"
        style={{ x: smoothX, y: smoothY }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[80px]" />
      </motion.div>
    </div>
  );
}