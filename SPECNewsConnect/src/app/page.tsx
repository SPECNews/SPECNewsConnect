"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, ArrowUpRight, Sparkles, Layers, Zap, Bell, Calendar, Clock, 
  ChevronDown, Flame, Terminal, Cpu, Award, Globe, Radio, ShieldAlert 
} from "lucide-react";

export default function SpecNewsConnectPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLogoExploded, setIsLogoExploded] = useState(false);

  // Smooth mouse coordinates capturing for lighting trace
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgShiftY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

  // Custom multi-club identity matrix nodes
  const navigationCategories = {
    departments: [
      { name: "Computer Science (AI & ML)", short: "CSE-AIML", icon: <Cpu size={14} /> },
      { name: "Information Technology", short: "IT", icon: <Terminal size={14} /> },
      { name: "Electronics & Communication", short: "ECE", icon: <Radio size={14} /> }
    ],
    academics: [
      { name: "AI Autonomous Curriculum", short: "R26 Framework", icon: <Sparkles size={14} /> },
      { name: "R&D Incubation Center", short: "SPEC Labs", icon: <Layers size={14} /> },
      { name: "Intellectual Property Cell", short: "IPR", icon: <Award size={14} /> }
    ],
    campusClubs: [
      { name: "SPEC News Connect", short: "MEDIA HQ", icon: <Flame size={14} />, current: true },
      { name: "Shutterbugs Photo Club", short: "RECON TEAM", icon: <Globe size={14} /> },
      { name: "Cyber Security Forum", short: "SEC OPS", icon: <ShieldAlert size={14} /> }
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050506] text-[#F5F5F7] antialiased selection:bg-rose-600 selection:text-white overflow-hidden relative font-sans">
      
      {/* Immersive Cursor Aura Backing - Cleanly Interpolated */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60 hidden md:block"
        style={{
          backgroundImage: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(225, 29, 72, 0.12), transparent 80%)`
        }}
      />

      {/* Reading Progress Metric Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 origin-left z-50" style={{ scaleX }} />

      {/* Advanced Navigation Node Framework */}
      <nav className="fixed top-0 w-full z-40 bg-[#07070a]/80 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Top Branding Anchor */}
          <div className="flex items-center space-x-2.5 group cursor-pointer">
            <img src="/logo.png" alt="SN" className="h-7 w-auto object-contain group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-black text-[11px] uppercase tracking-wider text-white">
              SPEC NEWS <span className="text-rose-500 font-light">CONNECT</span>
            </span>
          </div>

          {/* Interactive Category Hotspots */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
            {Object.keys(navigationCategories).map((key) => (
              <div 
                key={key} 
                className="relative cursor-pointer py-1 hover:text-white transition-colors flex items-center gap-1"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>{key.replace(/([A-Z])/g, ' $1')}</span>
                <ChevronDown size={10} className={`transition-transform duration-200 ${activeDropdown === key ? "rotate-180 text-rose-500" : ""}`} />
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-64 bg-[#0a0a0f] border border-white/10 p-3 rounded-xl shadow-2xl space-y-1 pointer-events-auto"
                    >
                      {navigationCategories[key as keyof typeof navigationCategories].map((sub, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center justify-between p-2 rounded-lg transition-all ${sub.current ? "bg-rose-950/40 border border-rose-800/30 text-rose-400" : "hover:bg-white/5 text-neutral-300 hover:text-white"}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={sub.current ? "text-rose-500" : "text-neutral-500"}>{sub.icon}</span>
                            <span className="text-[10px] tracking-normal capitalize font-medium">{sub.name}</span>
                          </div>
                          <span className="text-[8px] font-mono opacity-60 bg-white/5 px-1 rounded">{sub.short}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <a href="/admin/dashboard" className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-xl">
          HQ Console
        </a>
      </nav>

      {/* Cinematic Gateway Hero Segment */}
      <motion.section style={{ scale: heroScale, opacity: heroOpacity }} className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Deep Atmospheric Grids */}
        <motion.div style={{ y: bgShiftY }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[650px] h-[650px] bg-rose-600/10 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Dynamic Watermark Background Rotation Core */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: isLogoExploded ? 1.2 : 1
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 40, ease: "linear" },
              scale: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative opacity-[0.04] filter grayscale invert scale-[1.7] md:scale-[2.2]"
          >
            <img src="/logo.png" alt="Background Matrix Graphic" className="w-[400px] h-auto object-contain" />
          </motion.div>
        </div>

        {/* Central Display Elements */}
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 flex flex-col items-center">
          
          {/* Centered Micro-Reactor Interactive Logo Asset */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsLogoExploded(true)}
            onHoverEnd={() => setIsLogoExploded(false)}
            className="cursor-pointer relative group p-1"
          >
            <div className="absolute inset-0 bg-rose-600 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="relative p-3 bg-[#0a0a0f] border border-white/10 rounded-full shadow-2xl"
            >
              <img 
                src="/logo.png" 
                alt="Central Base Logo Core" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            <motion.div className="inline-flex items-center space-x-2 bg-[#0e0e14] border border-white/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-rose-500 font-black">
              <Sparkles size={11} className="text-amber-500 animate-spin" />
              <span>ST. PETER'S MEDIA HQ NETWORK</span>
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase select-none">
              SPEC NEWS
            </h1>

            {/* Prestigious Editorial Creed Divider */}
            <p className="text-xs md:text-sm italic font-light tracking-wide text-neutral-400 max-w-2xl mx-auto border-l-2 border-rose-600 pl-4 my-6 text-left md:text-center">
              "True prestige is not about standing out from the crowd; it is about setting a standard so distinct that others define themselves by your absence."
            </p>

            <p className="text-[10px] font-mono tracking-widest text-neutral-500 max-w-xl mx-auto uppercase">
              // Overthrowing standard publication logic via autonomous engineering code.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Primary Card Grid Frame Layout */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-36 pb-36 relative z-20">
        
        {/* Editorial Spotlight Block */}
        <section id="featured" className="scroll-mt-28">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-rose-500 mb-2 font-bold flex items-center gap-2">
                <Layers size={13} /> Editorial Spotlight
              </p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">Featured Stories</h2>
            </div>
            <TrendingUp className="text-neutral-800 hidden md:block" size={32} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -6, borderColor: "rgba(225, 29, 72, 0.35)" }}
              className="lg:col-span-2 relative bg-[#0b0b10] border border-white/5 rounded-2xl p-8 md:p-10 min-h-[380px] flex flex-col justify-between group cursor-pointer overflow-hidden transition-colors"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/5 rounded-full blur-3xl group-hover:bg-rose-600/10 transition-colors duration-500" />
              <div className="flex justify-between items-center z-10">
                <span className="bg-rose-600 text-white text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded">Cover Story</span>
                <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-3 z-10">
                <h3 className="text-xl md:text-3xl font-black tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  The Genesis of Next-Gen Robotics: SPEC Tech Team Breaks Records at National Conclave
                </h3>
                <p className="text-neutral-400 font-light text-xs md:text-sm max-w-xl">
                  An exclusive look detailing how our engineering majors built a custom autonomous drone ecosystem inside campus development labs.
                </p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                { cat: "Smart Campus", title: "Green Energy Grid Systems Deployment Across Blocks" },
                { cat: "Academics", title: "Decoding the New AI-Driven Autonomous Curriculum Framework" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 6, borderColor: "rgba(225, 29, 72, 0.25)" }}
                  className="bg-[#0b0b10] border border-white/5 rounded-xl p-5 h-[180px] flex flex-col justify-between cursor-pointer group transition-all"
                >
                  <span className="text-[9px] uppercase tracking-widest font-bold text-rose-500 flex items-center gap-1">
                    <Zap size={11} /> {item.cat}
                  </span>
                  <h4 className="text-md font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1 group-hover:text-white transition-colors">
                    Read Update <ArrowUpRight size={11} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Operational Bulletins */}
        <section id="announcements" className="scroll-mt-28">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-widest text-rose-500 mb-2 font-bold flex items-center gap-2">
              <Bell size={13} className="animate-pulse" /> Operational Bulletins
            </p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">Live Announcements</h2>
          </div>

          <div className="space-y-3">
            {[
              { tag: "Examination", date: "June 12, 2026", msg: "End-Semester Theory Lab Evaluations Timetable Released for Year II & IV.", urgent: true },
              { tag: "Placements", date: "June 10, 2026", msg: "Registration window open for Global Tech Campus Hiring Drive. Deadline tonight.", urgent: false },
              { tag: "Administration", date: "June 08, 2026", msg: "Campus Wi-Fi core switch upgrade scheduled for Sunday 02:00 IST. Expect brief latency drop.", urgent: false }
            ].map((ann, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: ann.urgent ? "#e11d48" : "rgba(255,255,255,0.1)" }}
                className={`p-5 bg-[#0b0b10] rounded-xl border ${ann.urgent ? "border-rose-600/30" : "border-white/5"} flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer transition-colors`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`text-[8px] uppercase tracking-widest font-black px-2 py-0.5 rounded ${ann.urgent ? "bg-rose-600/20 text-rose-400" : "bg-white/5 text-neutral-400"}`}>
                    {ann.tag}
                  </span>
                  <p className="text-xs md:text-sm text-neutral-300 font-medium">{ann.msg}</p>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">{ann.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Campus Engagements Calendar Array */}
        <section id="events" className="scroll-mt-28">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-widest text-rose-500 mb-2 font-bold flex items-center gap-2">
              <Calendar size={13} /> Campus Engagements
            </p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "SPEC HackFest 2026", type: "Technical Hackathon", delay: "2 Days Left", info: "36-Hour continuous build sprint across AI and Web3 tracks." },
              { name: "National Cyber Security Forum", type: "Guest Lecture Series", delay: "Next Week", info: "Keynote talks by leading data defense architects from industry." },
              { name: "Annual Cultural Fest", type: "Campus Celebration", delay: "June 25", info: "Inter-college staging competitions, music ensembles, and gallery arts." }
            ].map((ev, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, borderColor: "rgba(225, 29, 72, 0.3)" }}
                className="bg-[#0b0b10] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[200px] cursor-pointer group transition-all"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">{ev.type}</span>
                    <span className="text-[9px] bg-rose-600/10 text-rose-400 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock size={9} /> {ev.delay}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white pt-1 group-hover:text-rose-500 transition-colors">{ev.name}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{ev.info}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500 group-hover:text-white transition-colors">
                  <span>Acquire Gateway Pass</span>
                  <ArrowUpRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}