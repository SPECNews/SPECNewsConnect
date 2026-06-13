'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
};

export default function HomePage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [activeTab, setActiveTab] = useState('Home');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-performance spring vectors for cursor-under-glow spotlight tracking
  const lightX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const lightY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  // Parallax vectors for the dynamic background watermark logo
  const x = useTransform(mouseX, [0, windowSize.width], [-40, 40]);
  const y = useTransform(mouseY, [0, windowSize.height], [-30, 30]);

  const smoothX = useSpring(x, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 30 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
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
    <div className="pb-32 relative overflow-hidden min-h-screen bg-[#020001] text-white selection:bg-red-950 selection:text-amber-400">
      
      {/* 1. DYNAMIC LIGHT UNDER THE CURSOR & BACKGROUND PARALLAX EMBLEM */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Cursor Glow Matrix */}
        <motion.div 
          className="fixed inset-0 mix-blend-screen opacity-70 hidden lg:block"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(185, 28, 28, 0.22) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)`
            )
          }}
        />

        {/* Ambient Dark Velvet Backing Gradients */}
        <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-950/15 blur-[140px]" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-950/5 blur-[160px]" />
        
        {/* Dynamic Logo Watermark Backdrop */}
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="fixed inset-0 flex items-center justify-center z-0"
        >
          <img 
            src="/logo.png" 
            alt="SPEC Dynamic Canvas Logo" 
            className="w-[90vw] h-[90vw] sm:w-[75vw] sm:h-[75vw] object-contain opacity-[0.12] filter drop-shadow-[0_0_100px_rgba(185,28,28,0.08)]"
          />
        </motion.div>
      </div>

      {/* 2. PREMIUM HIGH-GLOW EYE-CATCHING NAVIGATION DOCK */}
      <nav className="fixed top-6 left-0 right-0 z-50 max-w-5xl mx-auto px-4">
        {/* Outer Glow container edge */}
        <div className="relative rounded-full p-[1px] bg-gradient-to-r from-stone-800/80 via-amber-500/40 to-stone-800/80 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] shadow-red-950/20">
          <div className="absolute inset-0 rounded-full bg-black/90 -z-10" />
          
          <div className="px-6 py-3 flex items-center justify-between">
            {/* Highly Visible SPEC News Connect Logo Branding */}
            <Link href="/" className="flex items-center space-x-3 group/logo">
              <div className="relative w-9 h-9 rounded-full bg-stone-950 border border-amber-500/40 overflow-hidden p-0 shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-transform duration-300 group-hover/logo:scale-105">
                <img 
                  src="/logo.png" 
                  alt="SPEC Navbar Logo" 
                  className="w-full h-full object-cover scale-110 filter brightness-110" 
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black tracking-wider text-white uppercase group-hover/logo:text-amber-400 transition-colors duration-300">
                  SPEC NEWS
                </span>
                <span className="text-[10px] font-black text-amber-500 tracking-[0.22em] uppercase">
                  CONNECT
                </span>
              </div>
            </Link>

            {/* Click-Optimized Glowing Action Tabs */}
            <div className="flex items-center space-x-1">
              {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 rounded-full ${
                      isActive ? 'text-amber-400 font-extrabold' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActiveGlow"
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950/80 to-amber-950/60 border border-amber-500/40 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)] -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* 3. HERO LAYER & ULTRA-LARGE CLEAR EMBLEM */}
      <section className="max-w-6xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between min-h-[96vh] relative z-10 pt-32 gap-12">
        <motion.div 
          initial="hidden" animate="visible" variants={revealVariant}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/60 to-stone-900/40 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">Official Media Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
            SPEC News Connect — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">
              cinematic campus narratives,
            </span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
              engineered for premium audiences.
            </span>
          </h1>
          
          <p className="text-stone-400 text-sm sm:text-base normal-case leading-relaxed font-medium max-w-xl">
            Experience campus journalism with a dark cinematic interface, immersive editorial flows, and premium story presentation for St. Peter's Engineering College.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2 justify-center lg:justify-start">
            <Link href="/articles" className="inline-flex items-center space-x-3 px-8 py-3.5 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition shadow-[0_15px_30px_-5px_rgba(185,28,28,0.4)] group">
              <span>EXPLORE ARTICLES</span>
              <ArrowRight className="w-4 h-4 text-amber-300 transform transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/gallery" className="inline-flex items-center space-x-2 px-7 py-3.5 bg-stone-950/80 border border-stone-800 hover:border-stone-700 text-stone-300 font-black text-xs uppercase tracking-widest rounded-xl transition">
              <span>VIEW GALLERY</span>
            </Link>
          </div>
        </motion.div>

        {/* LARGE EDGE-TO-EDGE CIRCULAR GOLD GLOW EMBLEM */}
        <motion.div 
          initial="hidden" animate="visible" variants={revealVariant}
          whileHover={{ scale: 1.03 }}
          className="relative group/emblem cursor-pointer flex-shrink-0"
        >
          {/* Intense Outer Golden Glowing Design Background Layers */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500 via-red-600 to-yellow-500 opacity-25 blur-2xl group-hover/emblem:opacity-45 transition duration-700 animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/50 to-red-600/50 opacity-100 blur-md group-hover/emblem:scale-105 transition duration-500" />
          
          {/* The Circular Frame container is set to size w-64 h-64 with p-0 and object-cover to make sure the image fills it clearly up to the margins */}
          <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-black border border-amber-500/50 flex items-center justify-center p-0 relative shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden">
            <img 
              src="/logo.png" 
              alt="SPEC Full-Scale Clear Emblem" 
              className="w-full h-full object-cover scale-105 filter brightness-110 contrast-105 transition-transform duration-500 group-hover/emblem:scale-110" 
            />
          </div>
        </motion.div>
      </section>

      {/* 4. REAL-TIME HIGH-FIDELITY IMPACT METRICS PANEL */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 relative z-10 mt-12"
      >
        <div className="bg-stone-950/40 backdrop-blur-md border border-stone-900 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <div className="inline-block bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-md text-[9px] font-black tracking-widest text-red-400 uppercase">
              AWARD-WINNING DESIGN
            </div>
            <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">Cinematic Media Hub</h2>
            <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans">
              A fluid editorial environment layered with animated metrics, premium cards, and cinematic visual storytelling.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { metric: "78%", tag: "ENGAGEMENT SPEED" },
              { metric: "120+", tag: "INDEXED NARRATIVES" },
              { metric: "16K+", tag: "NETWORK METRICS" },
              { metric: "42+", tag: "PROCESSED LOGS" }
            ].map((stat, i) => (
              <div key={i} className="bg-stone-950 border border-stone-900 p-5 rounded-2xl text-center space-y-1 hover:border-stone-800 transition">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white block">{stat.metric}</span>
                <span className="text-[8px] font-bold tracking-wider text-stone-500 uppercase block">{stat.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. CAMPUS HIGHLIGHTS FEED CHRONICLES */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6 relative z-10 mt-36"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">HIGHLIGHTS FEED</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Latest Campus Narratives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY", title: "Spectrum Tech Fest 2026 Visuals", desc: "A premium feature story crafted to reflect the pulse of campus innovation and news culture." },
            { icon: BookOpen, tag: "EDITORIAL", title: "Student Innovation Profile: Smart Campus", desc: "A premium feature story crafted to reflect the pulse of campus innovation and news culture." },
            { icon: Trophy, tag: "CAMPUS NEWS", title: "Club Broadcast: Recruitment Drive", desc: "A premium feature story crafted to reflect the pulse of campus innovation and news culture." }
          ].map((item, idx) => (
            <div key={idx} className="group/card rounded-2xl border border-stone-900/80 hover:border-amber-500/30 transition-all duration-300 bg-stone-950/20 backdrop-blur-sm flex flex-col justify-between h-64 p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-xl bg-red-950/30 border border-amber-500/20 flex items-center justify-center transition group-hover/card:bg-red-900/30">
                  <item.icon className="w-4 h-4 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-amber-400 tracking-widest block uppercase">{item.tag}</span>
                  <h3 className="text-base font-black text-white uppercase tracking-tight leading-snug">{item.title}</h3>
                </div>
                <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-900/60 text-[10px] font-black text-stone-500">
                <span>2 HOURS AGO</span>
                <span className="text-amber-500 group-hover/card:text-amber-400 cursor-pointer transition">Read more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. SYSTEM LEADERSHIP MATRIX SQUAD */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6 relative z-10 mt-36"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">OPERATIONAL BOARD</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Leadership at the Helm</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR", name: "G. Vishwanadh", desc: "Leading editorial strategy, cinematic identity, and cross-channel leadership for the club." },
            { role: "OPERATIONS LEAD", name: "B. Rishikesh", desc: "Managing field coverage, production logistics, and campus media operations." },
            { role: "BRAND ARCHITECT", name: "B. Sri Vardhan", desc: "Crafting the brand language, campaign visuals, and premium media presentation." }
          ].map((lead, idx) => (
            <div key={idx} className="bg-stone-950/30 backdrop-blur-sm border border-stone-900 p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-stone-800 transition">
              <div className="space-y-3">
                <div>
                  <span className="text-[9px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-0.5">{lead.name}</h3>
                </div>
                <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans font-medium">{lead.desc}</p>
              </div>
              
              <div className="pt-4 border-t border-stone-900/60 flex items-center space-x-2 text-stone-600">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black tracking-widest uppercase">Verified Officer Credentials</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}