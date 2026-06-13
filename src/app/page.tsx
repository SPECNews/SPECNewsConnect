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

  // Smooth mouse coordinates for spotlight tracking
  const lightX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const lightY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Background Parallax vector transformations
  const x = useTransform(mouseX, [0, windowSize.width], [-40, 40]);
  const y = useTransform(mouseY, [0, windowSize.height], [-30, 30]);

  const smoothX = useSpring(x, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 25 });

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
    <div className="pb-32 relative overflow-hidden min-h-screen bg-[#030001] text-white selection:bg-red-950 selection:text-amber-400">
      
      {/* IMMERSIVE LIGHT DISCOVERY GRID & PARALLAX CANVAS */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Dynamic Under-Cursor Spotlight Engine */}
        <motion.div 
          className="fixed inset-0 mix-blend-screen opacity-60 hidden lg:block"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([cx, cy]) => `radial-gradient(650px circle at ${cx}px ${cy}px, rgba(153, 27, 27, 0.18) 0%, rgba(217, 119, 6, 0.04) 40%, transparent 70%)`
            )
          }}
        />

        {/* Ambient Secondary Edge Glows */}
        <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-950/10 blur-[140px]" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-950/5 blur-[160px]" />
        
        {/* Parallax Core Watermark Emblem Grid */}
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="fixed inset-0 flex items-center justify-center z-0"
        >
          <img 
            src="/logo.png" 
            alt="SPEC Background Canvas Logo" 
            className="w-[88vw] h-[88vw] sm:w-[72vw] sm:h-[72vw] object-contain opacity-[0.11] filter drop-shadow-[0_0_80px_rgba(153,27,27,0.1)]"
          />
        </motion.div>
      </div>

      {/* RE-ENGINEERED PREMIUM GLASSMORPHISM NAVIGATION ENGINE */}
      <nav className="fixed top-6 left-0 right-0 z-50 max-w-5xl mx-auto px-4">
        <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-stone-800/40 via-amber-500/10 to-stone-800/40 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-stone-700/50">
          <div className="absolute inset-0 rounded-full bg-stone-950/80 -z-10" />
          
          <div className="px-6 py-3 flex items-center justify-between">
            {/* Branding Core Vector */}
            <Link href="/" className="flex items-center space-x-3.5 group/logo">
              <div className="relative w-10 h-10 rounded-full bg-black ring-1 ring-white/10 overflow-hidden p-0 transition-transform duration-500 group-hover/logo:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.15)]">
                <img 
                  src="/logo.png" 
                  alt="SPEC Logo" 
                  className="w-full h-full object-cover scale-105 transform transition duration-500 group-hover/logo:brightness-110" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-stone-300 uppercase">
                  SPEC NEWS
                </span>
                <span className="text-[10px] font-extrabold text-amber-500 tracking-[0.25em] uppercase mix-blend-plus-lighter">
                  CONNECT
                </span>
              </div>
            </Link>

            {/* Click-Optimized Interactive Navigation Tracks */}
            <div className="flex items-center space-x-1 relative">
              {['Home', 'Articles', 'Gallery', 'Team', 'Contact'].map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 rounded-full focus:outline-none ${
                      isActive ? 'text-amber-400' : 'text-stone-400 hover:text-stone-100'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navGlowDock"
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-950/60 to-amber-950/40 border border-amber-500/30 rounded-full shadow-[0_0_15px_rgba(217,119,6,0.15)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
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

      {/* CORE HERO INTERFACE LAYER */}
      <section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[95vh] relative z-10 pt-36">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="space-y-10 flex flex-col items-center"
        >
          {/* Edge-to-Edge Circular Centered Emblem Module */}
          <motion.div whileHover={{ scale: 1.04 }} className="relative group/emblem cursor-pointer">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 via-red-700 to-amber-600 opacity-30 blur-xl group-hover/emblem:opacity-60 transition duration-700 animate-pulse" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500/40 to-red-600/40 opacity-100 blur-sm group-hover/emblem:scale-105 transition duration-500" />
            
            {/* The circle frame has p-0 and object-cover to ensure the logo fills it fully and crisply */}
            <div className="w-28 h-28 rounded-full bg-black border border-amber-500/40 flex items-center justify-center p-0 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <img 
                src="/logo.png" 
                alt="SPEC News Full Fill Emblem" 
                className="w-full h-full object-cover scale-105 filter brightness-110 drop-shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-transform duration-500 group-hover/emblem:scale-110" 
              />
            </div>
          </motion.div>

          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/50 to-stone-900/50 border border-amber-500/20 px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Trophy className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-amber-400">Official Media & Communications Council</span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] max-w-3xl">
            CAPTURING MOMENTS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200 drop-shadow-[0_2px_20px_rgba(239,68,68,0.1)]">
              CHRONICLING STORIES.
            </span>
          </h1>
          
          <p className="text-stone-400 text-sm sm:text-base normal-case leading-relaxed max-w-2xl font-sans font-medium">
            Welcome to the official media console of <strong className="text-white font-semibold">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We command verified high-fidelity event records, broadcast campus updates, and chronicle student journalism achievements.
          </p>
          
          <div className="pt-4">
            <Link href="/articles" className="relative inline-flex items-center space-x-3 px-9 py-4 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_20px_40px_-10px_rgba(185,28,28,0.4)] group">
              <span>EXPLORE ARTICLES</span>
              <ArrowRight className="w-4 h-4 text-amber-300 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* LATEST DIGITAL BROADCASTS FEED */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-8 relative z-10 mt-12"
      >
        <div className="text-center md:text-left space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">CAMPUS CHRONICLES</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Featured Bulletins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY TEAM", title: "Technical Spectrum Summit Recap", desc: "A high-fidelity curation of visual designs and engineering innovations documented across this year's technical panels." },
            { icon: BookOpen, tag: "EDITORIAL DESK", title: "Orientation Ceremonies Coverages", desc: "The campus systems synchronized beautifully as our press crews covered welcoming assemblies for incoming freshers." },
            { icon: Trophy, tag: "COUNCIL ANNOUNCEMENT", title: "Media Division Recruitment Drive", desc: "Select roles are opening across our graphic layout design squads, report writers, and official coverage crews." }
          ].map((item, idx) => (
            <div key={idx} className="relative group/card rounded-2xl p-[1px] bg-stone-900 border border-stone-800/60 hover:border-amber-500/30 transition-all duration-300 bg-stone-950/20 backdrop-blur-sm flex flex-col justify-between h-64 p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-xl bg-red-950/30 border border-amber-500/20 flex items-center justify-center shadow-inner group-hover/card:bg-red-900/40 transition duration-300">
                  <item.icon className="w-4 h-4 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-amber-400 tracking-widest block uppercase">{item.tag}</span>
                  <h3 className="text-base font-extrabold text-white uppercase tracking-tight">{item.title}</h3>
                </div>
                <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-900 text-[10px] font-black tracking-wider text-stone-500">
                <span>SPEC ARCHIVE REPLICA</span>
                <span className="text-amber-500 group-hover/card:text-amber-400 cursor-pointer transition duration-300">ACCESS BULLETIN &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* LEADERSHIP MATRIX SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-8 relative z-10 mt-36"
      >
        <div className="text-center md:text-left space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">OFFICERS COUNCIL</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Leadership at the Helm</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR — PRESIDENT", name: "G. Vishwanadh", imageKey: "president" },
            { role: "OPERATIONS LEAD — SECRETARY", name: "B. Rishikesh", imageKey: "secretary" },
            { role: "BRAND ARCHITECT — ADMINISTRATOR", name: "B. Sri Vardhan", imageKey: "admin" }
          ].map((lead, idx) => (
            <div key={idx} className="bg-stone-950/40 backdrop-blur-sm border border-stone-900 p-5 rounded-2xl space-y-4 hover:border-stone-800 transition duration-300 shadow-2xl">
              <div className="relative aspect-[4/5] bg-stone-950 rounded-xl overflow-hidden border border-stone-900/80 flex flex-col items-center justify-center p-4 text-center group/member">
                <img 
                  src={`/team/${lead.imageKey}.jpg`} 
                  alt={lead.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity scale-100 group-hover/member:scale-105 group-hover/member:opacity-60 transition duration-500" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
                <ShieldAlert className="w-5 h-5 text-stone-700 mb-2 relative z-10 group-hover/member:text-stone-500 transition" />
                <span className="text-[9px] font-black tracking-widest text-stone-600 group-hover/member:text-stone-400 transition uppercase relative z-10">PENDING PRESS PHOTOGRAPHY</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">{lead.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}