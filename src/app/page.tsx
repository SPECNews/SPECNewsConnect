'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Newspaper, Camera, Radio } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import StudentFeed from '@/components/StudentFeed';

const scrollReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="pb-24 space-y-32">
      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[9px] font-black tracking-widest uppercase text-blue-400">Official Media & Communications Club</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[1.0]">
            Capturing Moments.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Chronicling Stories.</span>
          </h1>
          <p className="text-zinc-400 text-xs normal-case leading-relaxed max-w-xl">
            Welcome to the digital home of <strong className="text-white">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We record campus activities, celebrate student updates, and showcase creative journalism.
          </p>
          <div>
            <Link href="/articles" className="inline-flex items-center space-x-2 px-5 py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition">
              <span>Read Our Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Club Metrics Impact Board */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-5 premium-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-zinc-800/80">
            <img src="/logo.png" alt="" className="w-3.5 h-3.5 object-contain opacity-50" />
            <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">Club Impact Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: 50, suf: "+", label: "ARTICLES PUBLISHED" },
              { val: 20, suf: "+", label: "EVENTS COVERED" },
              { val: 1000, suf: "+", label: "STUDENTS REACHED" },
              { val: 15, suf: "+", label: "ACTIVE MEMBERS" }
            ].map((stat, i) => (
              <div key={i} className="bg-black/30 border border-zinc-900 p-4 rounded-xl">
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
                <span className="text-[8px] font-black tracking-widest text-zinc-500 mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Student Bulletin Submission Board */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollReveal} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-[9px] font-black text-blue-500 tracking-[0.2em] uppercase">LIVE STUDENT STREAM</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">Campus Feed Channel</h2>
        </div>
        <StudentFeed />
      </motion.section>

      {/* Bulletins Feed Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollReveal} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-[9px] font-black text-blue-500 tracking-[0.2em] uppercase">CAMPUS UPDATE HUB</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">Featured Bulletins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY", title: "Annual Tech Fest Spectrum Recap", desc: "Capturing the brilliant designs and tech presentations from this year's technical summit." },
            { icon: Newspaper, tag: "EDITORIAL", title: "Orientation Day 2026: Welcoming Freshers", desc: "The campus buzzed with grand energy as we covered the orientation welcomes." },
            { icon: Radio, tag: "CLUB NEWS", title: "Media Desk Recruitment Drive", desc: "Join our editorial units, media photography crews, and design groups." }
          ].map((item, i) => (
            <div key={i} className="premium-card p-5 rounded-2xl flex flex-col justify-between h-56">
              <div className="space-y-2">
                <item.icon className="w-4 h-4 text-blue-500" />
                <div>
                  <span className="text-[8px] font-black text-blue-400 tracking-widest block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight mt-0.5">{item.title}</h3>
                </div>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-zinc-900 text-[9px] font-bold text-zinc-500">
                <span>SPEC CHRONICLES</span>
                <span className="text-blue-400 hover:underline cursor-pointer">Read updates &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Club Leadership Team Board Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollReveal} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-[9px] font-black text-blue-500 tracking-[0.2em] uppercase">OPERATIONAL GOVERNANCE</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">Leadership at the Helm</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR — PRESIDENT", name: "G. Vishwanadh", pfp: "/team/president.jpg" },
            { role: "OPERATIONS LEAD — SECRETARY", name: "B. Rishikesh", pfp: "/team/secretary.jpg" },
            { role: "BRAND ARCHITECT — CLUB ADMIN", name: "B. Sri Vardhan", pfp: "/team/admin.jpg" }
          ].map((lead, idx) => (
            <div key={idx} className="premium-card p-5 rounded-2xl space-y-4">
              <div className="relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 flex items-center justify-center">
                <img src={lead.pfp} alt={lead.name} className="w-full h-full object-cover opacity-60" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <span className="absolute text-[8px] font-bold tracking-widest text-zinc-600 uppercase">SPEC ARCHIVE IMAGERY</span>
              </div>
              <div>
                <span className="text-[8px] font-black text-blue-500 tracking-widest block uppercase">{lead.role}</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5">{lead.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}