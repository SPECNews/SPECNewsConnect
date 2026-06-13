'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Disc } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HomePage() {
  return (
    <div className="pb-24 space-y-32">
      {/* Immersive Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
            <Disc className="w-3 h-3 text-blue-500 animate-spin" />
            <span className="text-[9px] font-black tracking-widest uppercase text-blue-400">NETWORK HUB ONLINE</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
            SPEC NEWS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-zinc-500">CONNECT ENGINE.</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl normal-case leading-relaxed">
            Welcome to the digital command hub of St. Peter's Engineering College media network. We craft dark, immersive cinematic records and high-tech storytelling layouts.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/articles" className="px-6 py-3.5 bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition flex items-center space-x-2 group">
              <span>Initialize Feed</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* High-Tech Counter Metrics Dashboard */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 cyber-panel p-8 rounded-3xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">System Telemetry Logs</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: 78, suf: "%", label: "ENGAGEMENT SPEED" },
              { val: 120, suf: "+", label: "INDEXED NARRATIVES" },
              { val: 16, suf: "K", label: "NETWORK METRICS" },
              { val: 42, suf: "+", label: "PROCESSED LOGS" }
            ].map((stat, i) => (
              <div key={i} className="bg-black/40 border border-zinc-900 p-5 rounded-2xl transition hover:border-zinc-800">
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
                <span className="text-[9px] font-black tracking-widest text-zinc-500 mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Highlights Feed */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">SYSTEM BROADCAST FEED</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">Latest Digital Indexes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "IMAGERY LOG", title: "Spectrum Tech Fest 2026 Raw Capture" },
            { tag: "CHRONICLE INDEX", title: "Student Technology Profile Framework" },
            { tag: "NETWORK TRANS", title: "Media Command Recruitment Wave" }
          ].map((item, i) => (
            <motion.div whileHover={{ y: -6 }} key={i} className="cyber-panel p-6 rounded-2xl flex flex-col justify-between h-56 transition duration-300">
              <div>
                <span className="text-[9px] font-black text-blue-400 tracking-widest block mb-2">{item.tag}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-[10px] font-black text-zinc-500">
                <span>INDEX_00{i+1}</span>
                <span className="text-white hover:underline cursor-pointer">Access Vector →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strict Leadership Module */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">COMMAND INTERFACE</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">Core Board Helm</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR", title: "President", name: "G. Vishwanadh", pfp: "/team/president.jpg" },
            { role: "OPERATIONS LEAD", title: "Secretary", name: "B. Rishikesh", pfp: "/team/secretary.jpg" },
            { role: "BRAND ARCHITECT", title: "Club Admin", name: "B. Sri Vardhan", pfp: "/team/admin.jpg" }
          ].map((lead, idx) => (
            <div key={idx} className="cyber-panel p-6 rounded-2xl space-y-6">
              <div className="relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 flex items-center justify-center group">
                <img src={lead.pfp} alt={lead.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition duration-500" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <span className="absolute text-[9px] font-black tracking-widest text-zinc-700 uppercase group-hover:text-blue-500 transition">SYSTEM IMAGE ARCHIVE</span>
              </div>
              <div>
                <span className="text-[9px] font-black text-blue-500 tracking-widest block uppercase">{lead.role} — {lead.title}</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">{lead.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
