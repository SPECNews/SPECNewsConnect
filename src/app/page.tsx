'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// ─── HIGH-VELOCITY ELASTIC SPRING ENTRANCE ───
const teamCardVariant = {
  hidden: { opacity: 0, y: 160, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 150, 
      damping: 11,   
      mass: 0.75,
    } 
  }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Home');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const lightY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const x = useTransform(mouseX, [0, windowSize.width], [-40, 40]);
  const y = useTransform(mouseY, [0, windowSize.height], [-30, 30]);

  const smoothX = useSpring(x, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 30 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
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
    <div className="pb-32 relative overflow-hidden min-h-screen bg-[#020001] text-white">
      
      {/* 1. SEAMLESS MOVEMENT DYNAMICS */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div 
          className="fixed inset-0 mix-blend-screen opacity-70 hidden lg:block"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(185, 28, 28, 0.22) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)`
            )
          }}
        />
        <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-950/15 blur-[140px]" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-950/5 blur-[160px]" />
        
        <motion.div style={{ x: smoothX, y: smoothY }} className="fixed inset-0 flex items-center justify-center z-0">
          <img 
            src="/logo.png" 
            alt="Watermark backdrop" 
            className="w-[90vw] h-[90vw] sm:w-[75vw] sm:h-[75vw] object-contain opacity-[0.12] filter drop-shadow-[0_0_100px_rgba(185,28,28,0.08)]"
          />
        </motion.div>
      </div>

      {/* 2. THE BROKEN-BOUNDS OVERSIZED NAV BAR */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. HERO LAYER ENTRY */}
<section className="w-full px-6 lg:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between min-h-[100vh] relative z-10 pt-36 pb-12 gap-12 overflow-hidden">

  {/* Hero Video Background */}
  <div className="absolute inset-0 -z-10">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>

    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Bottom gradient fade */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#020001]" />
  </div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={revealVariant}
    className="space-y-8 max-w-2xl"
  >
    <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/60 to-stone-900/40 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg">
      <Trophy className="w-3.5 h-3.5 text-amber-500" />
      <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">
        The Voice of St. Peter's
      </span>
    </div>

    <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
      CAPTURING MOMENTS. <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">
        CHRONICLING STORIES.
      </span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
        BROADCASTING CAMPUS LIFE.
      </span>
    </h1>

    <p className="text-stone-300 text-sm sm:text-base normal-case leading-relaxed font-medium max-w-xl">
      Welcome to SPEC NEWS Connect—the ultimate digital heartbeat of St. Peter's Engineering College. We don't just log events; we broadcast student energy, chronicle breakthrough journalism, and deliver high-fidelity campus culture straight to your screen.
    </p>

    <div className="flex flex-wrap items-center gap-4 pt-2 justify-center lg:justify-start">
      <Link
        href="/articles"
        className="inline-flex items-center space-x-3 px-8 py-3.5 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition shadow-[0_15px_30px_-5px_rgba(185,28,28,0.4)] group"
      >
        <span>EXPLORE ARTICLES</span>
        <ArrowRight className="w-4 h-4 text-amber-300 transform transition-transform group-hover:translate-x-1" />
      </Link>

      <Link
        href="/gallery"
        className="inline-flex items-center space-x-2 px-7 py-3.5 bg-stone-950/80 border border-stone-800 hover:border-stone-700 text-stone-300 font-black text-xs uppercase tracking-widest rounded-xl transition"
      >
        <span>VIEW GALLERY</span>
      </Link>
    </div>
  </motion.div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={revealVariant}
    whileHover={{ scale: 1.04 }}
    className="relative group/emblem cursor-pointer flex-shrink-0"
  >
    <div className="absolute inset-[-40px] rounded-full animate-morphing-hero opacity-70 pointer-events-none transition-all duration-700" />

    <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full bg-[#050304] border-2 border-stone-800 flex items-center justify-center p-0 relative shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden z-10">
      <img
        src="/logo.png"
        alt="SPEC Central Emblem"
        className="w-full h-full object-cover scale-100 filter brightness-110 contrast-105 transition-transform duration-500 group-hover/emblem:scale-105"
      />
    </div>
  </motion.div>
</section>

      {/* 4. CLEAN HIGH-FIDELITY PORTRAIT TEAM CARDS */}
      <section className="max-w-6xl mx-auto px-6 space-y-10 relative z-10 mt-16">
        <div className="space-y-2">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">OPERATIONAL BOARD</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Leadership at the Helm</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-full" />
        </div>
        
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              role: "CLUB PRESIDENT", 
              name: "G. Vishwanadh", 
              imgSrc: "/team/president_full.jpg", 
              bio: "Handles overarching club infrastructure management and guides production workflows while steering public connection strategy.",
            },
            { 
              role: "CLUB SECRETARY", 
              name: "B. Rishikesh", 
              imgSrc: "/team/secretary_full.jpg", 
              bio: "Commands multi-department alignment schedules, operational logistics, and formal documentation streams for event journalism.",
            },
            { 
              role: "CLUB ADMINISTRATOR", 
              name: "B. Sri Vardhan", 
              imgSrc: "/team/admin_full.jpg", 
              bio: "Leads complete portal system deployments, interface layout scaling, component optimizations, and core system health checks.",
            }
          ].map((lead, idx) => (
            <motion.div 
              key={idx} 
              variants={teamCardVariant}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 30px 70px rgba(0,0,0,0.95)",
                transition: { duration: 0.35, ease: "easeOut" }
              }}
              className="team-glass-card group rounded-[32px] p-0 flex flex-col justify-between relative overflow-hidden transition-all duration-400"
            >
              {/* Subtle accent hover glow corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-0">
                {/* MASSIVE PORTRAIT FRAME */}
                <div className="w-full aspect-[3/4] bg-stone-950 border-b border-stone-800/80 overflow-hidden relative shadow-inner">
                  {/* Initial Fallback Layer */}
                  <div className="absolute inset-0 flex items-center justify-center text-stone-800 font-black uppercase text-5xl select-none">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <img 
                    src={lead.imgSrc} 
                    alt={lead.name}
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    className="w-full h-full object-cover object-top relative z-10 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Top gradient shield overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/50 z-20 pointer-events-none" />
                </div>

                {/* Typography Wrapper */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5 group-hover:text-amber-400 transition-colors duration-300">{lead.name}</h3>
                  </div>

                  {/* Clean 1-sentence description structure */}
                  <p className="text-stone-300 text-[13px] leading-relaxed font-sans font-medium text-left">
                    {lead.bio}
                  </p>
                </div>
              </div>
              
              {/* Verification Base Cap */}
              <div className="p-6 pt-2 pb-5 text-stone-600">
                <div className="pt-4 border-t border-stone-900/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShieldAlert className="w-4 h-4 text-stone-500 group-hover:text-amber-500/50 transition-colors duration-300" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Verified Council Board</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. HIGHLIGHTS FEED */}
      <section className="max-w-6xl mx-auto px-6 space-y-6 relative z-10 mt-36">
        <div className="space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">HIGHLIGHTS FEED</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Latest Campus Narratives</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY", title: "Spectrum Tech Fest 2026 Visuals", desc: "Capturing high-fidelity action shots, design installations, and innovative engineering project galleries from the college event." },
            { icon: BookOpen, tag: "EDITORIAL", title: "Student Innovation Profile: Smart Campus", desc: "Investigating the new IoT and solar infrastructure deployment engineered by the departments this semester." },
            { icon: Trophy, tag: "CAMPUS NEWS", title: "Club Broadcast: Recruitment Drive", desc: "Fresh opportunities are opening up across our content drafting team, production squads, and official layout design branches." }
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
                <span>RECENT POST</span>
                <span className="text-amber-500 group-hover/card:text-amber-400 cursor-pointer transition">Read more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
