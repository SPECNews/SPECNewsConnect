"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, TrendingUp, ArrowUpRight, Sparkles, Layers, Zap, Bell, Calendar, Clock, Megaphone } from "lucide-react";

export default function SpecNewsConnectPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking coordinates for the responsive spotlight glow background
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll animations for smooth parallax backdrop shifts
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgShiftY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // Animation layout configs for splitting words
  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.08 } }
  };

  const wordVariant = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] } }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-bg text-[#F5F5F7] antialiased selection:bg-brand-crimson overflow-hidden relative">
      
      {/* Dynamic Interactive Spotlight Glow Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(225, 29, 72, 0.08), transparent 80%)`
        }}
      />

      {/* Top Reading Scroll Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson to-amber-500 origin-left z-50" style={{ scaleX }} />

      {/* Aligned Premium Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-brand-bg/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <img src="/logo.png" alt="SPEC News" className="h-9 w-auto object-contain group-hover:rotate-6 transition-transform duration-300" />
          <span className="font-bold tracking-wider text-xs uppercase text-white">
            SPEC News <span className="text-neutral-500 font-light group-hover:text-brand-crimson transition-colors">Connect</span>
          </span>
        </motion.div>

        <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
          {["Featured", "Announcements", "Events"].map((tab) => (
            <a key={tab} href={`#${tab.toLowerCase()}`} className="hover:text-white relative py-1 transition-colors group">
              {tab}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-crimson transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/admin/dashboard" 
          className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-brand-crimson hover:text-white transition-all duration-300 shadow-lg shadow-black/20"
        >
          HQ Console
        </motion.a>
      </nav>

      {/* Cinematic Hero Segment */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Parallax Moving Ambient light Rings behind text */}
        <motion.div style={{ y: bgShiftY }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-brand-crimson/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[90px] translate-x-32 -translate-y-20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-brand-bg z-10" />

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-brand-card border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest text-brand-crimson font-semibold"
          >
            <Sparkles size={12} className="animate-spin" />
            <span>The Real-Time Digital Pulse</span>
          </motion.div>

          {/* Splitting Word Dramatic Entrance Text Node */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white flex flex-wrap justify-center gap-x-4 md:gap-x-6 overflow-hidden py-2">
            {"SPEC News Connect".split(" ").map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden">
                <motion.span variants={wordVariant} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-base md:text-xl font-light tracking-wide text-neutral-400 max-w-2xl mx-auto"
          >
            St. Peter's Engineering College modern high-fidelity publication network.
          </motion.p>
        </div>
      </section>

      {/* Main Stream Interface Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-36 pb-36 relative z-20">
        
        {/* Featured Content Segment */}
        <section id="featured" className="scroll-mt-28">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-brand-crimson mb-2 font-bold flex items-center gap-2">
                <Layers size={14} /> Editorial Spotlight
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Featured Stories</h2>
            </div>
            <TrendingUp className="text-neutral-700 hidden md:block" size={36} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Massive Hover Responsive Interactive Grid Card */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(225, 29, 72, 0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="lg:col-span-2 relative bg-brand-card border border-white/5 rounded-2xl p-8 md:p-12 min-h-[420px] flex flex-col justify-between group cursor-pointer overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-crimson/5 rounded-full blur-3xl group-hover:bg-brand-crimson/10 transition-colors duration-500" />
              
              <div className="flex justify-between items-center z-10">
                <span className="bg-brand-crimson text-white text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-md">Cover Story</span>
                <span className="text-neutral-500 group-hover:text-white transition-colors"><ArrowUpRight size={20} /></span>
              </div>
              
              <div className="space-y-4 z-10">
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  The Genesis of Next-Gen Robotics: SPEC Tech Team Breaks Records at National Conclave
                </h3>
                <p className="text-neutral-400 font-light text-sm md:text-base max-w-2xl">
                  An in-depth exclusive detailing how our engineering majors developed a custom autonomous drone swarm ecosystem inside the campus R&D labs.
                </p>
              </div>
            </motion.div>

            {/* Side Stream Layout Module */}
            <div className="space-y-6">
              {[
                { cat: "Smart Campus", title: "Green Energy Integration Complete Across Blocks" },
                { cat: "Academics", title: "Decoding the New AI-Driven Curriculum Framework" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 6, borderColor: "rgba(225, 29, 72, 0.2)" }}
                  className="bg-brand-card border border-white/5 rounded-xl p-6 h-48 flex flex-col justify-between cursor-pointer group transition-all"
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-crimson flex items-center gap-1.5">
                    <Zap size={12} /> {item.cat}
                  </span>
                  <h4 className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-neutral-500 font-mono group-hover:text-neutral-300 transition-colors flex items-center gap-1">
                    Read Update <ArrowUpRight size={12} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcements Notice Board Segment */}
        <section id="announcements" className="scroll-mt-28">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-widest text-brand-crimson mb-2 font-bold flex items-center gap-2">
              <Bell size={14} className="animate-bounce" /> Operational Bulletins
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Live Announcements</h2>
          </div>

          <div className="space-y-4">
            {[
              { tag: "Examination", date: "June 12, 2026", msg: "End-Semester Theory Lab Evaluations Timetable Released for Year II & IV.", urgent: true },
              { tag: "Placements", date: "June 10, 2026", msg: "Registration window open for Global Tech Campus Hiring Drive. Deadline tonight.", urgent: false },
              { tag: "Administration", date: "June 08, 2026", msg: "Campus Wi-Fi core switch upgrade scheduled for Sunday 02:00 IST. Expect brief latency drop.", urgent: false }
            ].map((ann, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.005, backgroundColor: "rgba(255,255,255,0.02)", borderColor: ann.urgent ? "#e11d48" : "rgba(255,255,255,0.1)" }}
                className={`p-6 bg-brand-card rounded-xl border ${ann.urgent ? "border-brand-crimson/40" : "border-white/5"} flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors cursor-pointer`}
              >
                <div className="flex items-start md:items-center space-x-4">
                  <span className={`text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded ${ann.urgent ? "bg-brand-crimson/20 text-brand-crimson" : "bg-white/5 text-neutral-400"}`}>
                    {ann.tag}
                  </span>
                  <p className="text-sm text-neutral-200 font-medium">{ann.msg}</p>
                </div>
                <span className="text-xs font-mono text-neutral-500 shrink-0">{ann.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Events Countdown Deck Segment */}
        <section id="events" className="scroll-mt-28">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-widest text-brand-crimson mb-2 font-bold flex items-center gap-2">
              <Calendar size={14} /> Academic Calendar
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "SPEC HackFest 2026", type: "Technical Hackathon", delay: "2 Days Left", details: "36-Hour continuous build sprint across AI and Web3 tracks." },
              { name: "National Cyber Security Forum", type: "Guest Lecture Series", delay: "Next Week", details: "Keynote talks by leading data defense architects from industry." },
              { name: "Annual Cultural Fest", type: "Campus Celebration", delay: "June 25", details: "Inter-college staging competitions, music ensembles, and gallery arts." }
            ].map((ev, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, borderColor: "rgba(225, 29, 72, 0.4)" }}
                className="bg-brand-card border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">{ev.type}</span>
                    <span className="text-[10px] bg-white/5 text-brand-crimson font-bold font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock size={10} /> {ev.delay}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white pt-2 group-hover:text-brand-crimson transition-colors">{ev.name}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{ev.details}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono group-hover:text-white transition-colors">
                  <span>Secure Seat Pass</span>
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}