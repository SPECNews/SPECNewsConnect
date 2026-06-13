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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-performance spring vectors for cursor spotlight tracking
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
    <div className="pb-32 relative overflow-hidden min-h-screen bg-[#020001] text-white">
      
      {/* 1. LIGHT UNDER CURSOR & BACKGROUND PARALLAX EMBLEM */}
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

      {/* 2. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between min-h-[90vh] relative z-10 pt-48 pb-12 gap-12">
        <motion.div 
          initial="hidden" animate="visible" variants={revealVariant}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/60 to-stone-900/40 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">The Voice of St. Peter's</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
            CAPTURING MOMENTS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">
              CHRONICLING STORIES.
            </span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
              BROADCASTING CAMPUS LIFE.
            </span>
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

        {/* LARGE TRUE-CENTER LOGO EMBLEM */}
        <motion.div 
          initial="hidden" animate="visible" variants={revealVariant}
          whileHover={{ scale: 1.03 }}
          className="relative group/emblem cursor-pointer flex-shrink-0"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500 via-red-600 to-yellow-500 opacity-25 blur-2xl group-hover/emblem:opacity-45 transition duration-700 animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/50 to-red-600/50 opacity-100 blur-md group-hover/emblem:scale-105 transition duration-500" />
          
          <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-black border border-amber-500/50 flex items-center justify-center p-0 relative shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden">
            <img 
              src="/logo.png" 
              alt="SPEC Full-Scale Clear Emblem" 
              className="w-full h-full object-cover scale-105 filter brightness-110 contrast-105 transition-transform duration-500 group-hover/emblem:scale-110" 
            />
          </div>
        </motion.div>
      </section>

      {/* 3. NEW LOCATION FOR OPERATIONAL COUNCIL BOARD */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6 relative z-10 mt-12"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase block">OPERATIONAL BOARD</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Leadership at the Helm</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CLUB PRESIDENT", name: "G. Vishwanadh", desc: "Directing media strategy, student engagement campaigns, and lead execution for council initiatives." },
            { role: "CLUB SECRETARY", name: "B. Rishikesh", desc: "Overseeing day-to-day operations, communications timelines, and student journalism coverage logistics." },
            { role: "CLUB ADMINISTRATOR", name: "B. Sri Vardhan", desc: "Managing technical web builds, portal assets, design layouts, and server architecture handles." }
          ].map((lead, idx) => (
            <div key={idx} className="bg-stone-950/30 backdrop-blur-sm border border-stone-900 p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-stone-800 transition shadow-xl">
              <div className="space-y-3">
                <div>
                  <span className="text-[9px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-0.5">{lead.name}</h3>
                </div>
                <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans font-medium">{lead.desc}</p>
              </div>
              
              <div className="pt-4 border-t border-stone-900/60 flex items-center space-x-2 text-stone-600">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black tracking-widest uppercase">Verified Council Member</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. HIGHLIGHTS CHRONICLES FEED */}
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
      </motion.section>

    </div>
  );
}