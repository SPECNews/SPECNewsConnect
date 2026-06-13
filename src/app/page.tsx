'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Newspaper, Camera, Radio } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="pb-24 space-y-36">
      {/* Premium Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[9px] font-black tracking-widest uppercase text-blue-400">Official Media & Communications Club</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
            Capturing Moments.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-zinc-400">Chronicling Stories.</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl normal-case leading-relaxed">
            Welcome to the digital home of <strong className="text-white">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We record campus activities, celebrate student updates, and showcase creative journalism.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/articles" className="px-6 py-3.5 bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition flex items-center space-x-2 group">
              <span>Read Our Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Clean, Authentic Club Metrics Panel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 premium-card p-8 rounded-3xl space-y-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-zinc-800/80">
            <img src="/logo.png" alt="" className="w-4 h-4 object-contain opacity-60" />
            <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Club Impact Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: 50, suf: "+", label: "ARTICLES PUBLISHED" },
              { val: 20, suf: "+", label: "EVENTS COVERED" },
              { val: 1000, suf: "+", label: "STUDENTS REACHED" },
              { val: 15, suf: "+", label: "ACTIVE MEMBERS" }
            ].map((stat, i) => (
              <div key={i} className="bg-black/30 border border-zinc-900 p-5 rounded-2xl">
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
                <span className="text-[9px] font-black tracking-widest text-zinc-500 mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Highlights Feed with Scroll-reveal effects */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollReveal} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">CAMPUS UPDATE HUB</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">Featured Bulletins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY", title: "Annual Tech Fest Spectrum Recap", desc: "Capturing the brilliant designs and tech presentations from this year's technical summit." },
            { icon: Newspaper, tag: "EDITORIAL", title: "Orientation Day 2026: Welcoming Freshers", desc: "The campus buzzed with grand energy as we covered the orientation welcomes." },
            { icon: Radio, tag: "CLUB NEWS", title: "Media Desk Recruitment Drive", desc: "Join our editorial units, media photography crews, and design groups." }
          ].map((item, i) => (
            <motion.div whileHover={{ y: -6 }} key={i} className="premium-card p-6 rounded-2xl flex flex-col justify-between h-64 transition-all duration-300">
              <div className="space-y-4">
                <item.icon className="w-5 h-5 text-blue-500" />
                <div>
                  <span className="text-[9px] font-black text-blue-400 tracking-widest block mb-1">{item.tag}</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-snug">{item.title}</h3>
                </div>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-[10px] font-black text-zinc-500">
                <span>SPEC CHRONICLES</span>
                <span className="text-white hover:underline cursor-pointer">Read updates →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Official Board Section with Scroll reveal */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollReveal} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">OPERATIONAL GOVERNANCE</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">Leadership at the Helm</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR", title: "President", name: "G. Vishwanadh", pfp: "/team/president.jpg" },
            { role: "OPERATIONS LEAD", title: "Secretary", name: "B. Rishikesh", pfp: "/team/secretary.jpg" },
            { role: "BRAND ARCHITECT", title: "Club Admin", name: "B. Sri Vardhan", pfp: "/team/admin.jpg" }
          ].map((lead, idx) => (
            <div key={idx} className="premium-card p-6 rounded-2xl space-y-6">
              <div className="relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 flex items-center justify-center group">
                <img src={lead.pfp} alt={lead.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-85 transition duration-500" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <span className="absolute text-[9px] font-black tracking-widest text-zinc-700 uppercase group-hover:text-blue-500 transition">SPEC ARCHIVE PHOTO</span>
              </div>
              <div>
                <span className="text-[9px] font-black text-blue-500 tracking-widest block uppercase">{lead.role} — {lead.title}</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">{lead.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
