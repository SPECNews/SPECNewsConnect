'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert, Quote } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
};

// Orchestration container for stagered card animations
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const teamCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 } 
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
      
      {/* 1. BACKGROUND GRADIENTS */}
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
          <img src="/logo.png" alt="Watermark" className="w-[90vw] h-[90vw] sm:w-[75vw] sm:h-[75vw] object-contain opacity-[0.12] filter drop-shadow-[0_0_100px_rgba(185,28,28,0.08)]" />
        </motion.div>
      </div>

      {/* 2. NAVBAR */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. HERO CONTENT */}
      <section className="max-w-6xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between min-h-[100vh] relative z-10 pt-24 pb-12 gap-12">
        <motion.div initial="hidden" animate="visible" variants={revealVariant} className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/60 to-stone-900/40 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">The Voice of St. Peter's</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
            CAPTURING MOMENTS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">CHRONICLING STORIES.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">BROADCASTING CAMPUS LIFE.</span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base normal-case leading-relaxed font-medium max-w-xl">
            Welcome to the official media console of SPEC NEWS Connect at St. Peter's Engineering College. We command verified high-fidelity event records, broadcast campus updates, and chronicle student journalism achievements.
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

        {/* CENTRAL EMBLEM DESIGN - CYAN TO MAGENTA AURA */}
        <motion.div initial="hidden" animate="visible" variants={revealVariant} whileHover={{ scale: 1.03 }} className="relative group/emblem cursor-pointer flex-shrink-0">
          <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-40 animate-neon-aura" />
          <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-black border border-stone-800/60 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.95)] overflow-hidden z-10">
            <img src="/logo.png" alt="SPEC Central Emblem" className="w-full h-full object-cover scale-105 filter brightness-110 contrast-105 transition-transform duration-500 group-hover/emblem:scale-110" />
          </div>
        </motion.div>
      </section>

      {/* 4. UPGRADED INTERACTIVE TEAM SECTION */}
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
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {[
            { 
              role: "CLUB PRESIDENT", 
              name: "G. Vishwanadh", 
              imgSrc: "/team/president.jpg", // Replace with your image paths
              responsibility: "Directs overarching media infrastructure strategy, spearheads student engagement campaigns, and orchestrates final lead execution frameworks for high-profile council initiatives.",
              dedication: "Committed to expanding our digital footprint and giving every story on campus a distinctive, powerful voice."
            },
            { 
              role: "CLUB SECRETARY", 
              name: "B. Rishikesh", 
              imgSrc: "/team/secretary.jpg",
              responsibility: "Oversees daily operational sync lines, schedules communications calendars, manages cross-department content streams, and commands student journalism coverage logistics.",
              dedication: "Ensuring organizational precision and editorial excellence so our platform runs like a well-oiled machine."
            },
            { 
              role: "CLUB ADMINISTRATOR", 
              name: "B. Sri Vardhan", 
              imgSrc: "/team/admin.jpg",
              responsibility: "Manages technical platform systems, portal assets, deployment rollouts, interface optimization frameworks, production web updates, and core server architecture handles.",
              dedication: "Merging technological innovation with creative layout designs to deliver a seamless user experience."
            }
          ].map((lead, idx) => (
            <motion.div 
              key={idx} 
              variants={teamCardVariant}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="team-glass-card group rounded-[24px] p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-500/40"
            >
              {/* Backlit Glow Triggered on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-5">
                {/* Header Profile Module */}
                <div className="flex items-center space-x-4">
                  {/* Photo Frame Container */}
                  <div className="w-16 h-16 rounded-full border-2 border-stone-800 bg-stone-900 overflow-hidden flex-shrink-0 relative group-hover:border-amber-500/60 transition-colors duration-300 shadow-inner">
                    {/* Fallback avatar vector if image is pending resolution */}
                    <div className="absolute inset-0 bg-stone-950 flex items-center justify-center text-stone-700 font-bold uppercase text-xs">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <img 
                      src={lead.imgSrc} 
                      alt={lead.name}
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                      className="w-full h-full object-cover relative z-10 scale-100 group-hover:scale-110 transition-transform duration-500 object-top"
                    />
                  </div>
                  
                  {/* Title Metrics */}
                  <div>
                    <span className="text-[10px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mt-0.5 group-hover:text-amber-400 transition-colors duration-300">{lead.name}</h3>
                  </div>
                </div>

                {/* Expanded text content segments */}
                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Responsibilities</h4>
                    <p className="text-stone-300 text-xs leading-relaxed font-sans font-medium text-left">
                      {lead.responsibility}
                    </p>
                  </div>
                  
                  <div className="bg-stone-950/40 rounded-xl p-3 border border-stone-900/60 relative">
                    <Quote className="absolute right-3 top-3 w-4 h-4 text-stone-800 pointer-events-none" />
                    <h4 className="text-[10px] font-bold text-amber-500/70 uppercase tracking-wider mb-1 text-left">Dedication Statement</h4>
                    <p className="text-stone-400 text-xs italic leading-relaxed font-sans text-left pr-4">
                      "{lead.dedication}"
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Foot-cap Verification Tag */}
              <div className="pt-4 mt-6 border-t border-stone-900/80 flex items-center justify-between text-stone-600">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-500/60 transition-colors duration-300" />
                  <span className="text-[9px] font-black tracking-widest uppercase">Verified Council Board</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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