'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const revealVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="pb-32 space-y-36">
      {/* High-Status Hero Frame */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-red-950/50 border border-amber-500/20 px-3.5 py-1.5 rounded-xl">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[9px] font-black tracking-widest uppercase text-amber-400">Official Media & Communications Council</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            CAPTURING MOMENTS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
              CHRONICLING STORIES.
            </span>
          </h1>
          
          <p className="text-stone-400 text-xs sm:text-sm normal-case leading-relaxed max-w-xl font-sans">
            Welcome to the official media console of <strong className="text-white font-bold">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We command verified high-fidelity event records, broadcast campus updates, and chronicle student journalism achievements.
          </p>
          
          <div className="pt-2">
            <Link href="/articles" className="inline-flex items-center space-x-2.5 px-6 py-3.5 btn-primary text-white font-black text-xs uppercase tracking-widest rounded-xl transition">
              <span>EXPLORE ARTICLES</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </motion.div>

        {/* Official Data Impact Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 premium-card p-6 rounded-2xl bg-stone-950/40"
        >
          <div className="flex items-center space-x-2.5 pb-4 border-b border-stone-900/80 mb-4">
            <img src="/logo.png" alt="" className="w-4 h-4 object-contain brightness-110" />
            <span className="text-[9px] font-black tracking-widest uppercase text-stone-400">Club Impact Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: 50, suf: "+", label: "PUBLICATIONS FILED" },
              { val: 20, suf: "+", label: "EVENTS COVERED" },
              { val: 1000, suf: "+", label: "STAKEHOLDERS REACHED" },
              { val: 15, suf: "+", label: "CREDENTIALED REPORTERS" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-stone-950/50 border border-stone-900/60 p-4 rounded-xl shadow-inner">
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
                <span className="text-[8px] font-bold tracking-widest text-stone-500 mt-1.5 block uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Broadcast Bulletins */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6"
      >
        <div>
          <span className="text-[9px] font-black text-amber-500 tracking-[0.25em] uppercase">CAMPUS CHRONICLES</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">Featured Bulletins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY TEAM", title: "Technical Spectrum Summit Recap", desc: "A high-fidelity curation of visual designs and engineering innovations documented across this year's technical panels." },
            { icon: BookOpen, tag: "EDITORIAL DESK", title: "Orientation Ceremonies Coverages", desc: "The campus systems synchronized beautifully as our press crews covered welcoming assemblies for incoming freshers." },
            { icon: Trophy, tag: "COUNCIL ANNOUNCEMENT", title: "Media Division Recruitment Drive", desc: "Select roles are opening across our graphic layout design squads, report writers, and official coverage crews." }
          ].map((item, idx) => (
            <div key={idx} className="premium-card p-6 rounded-2xl flex flex-col justify-between h-60 bg-stone-950/10">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-amber-500/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-amber-400 tracking-widest block uppercase">{item.tag}</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight mt-1">{item.title}</h3>
                </div>
                <p className="text-stone-400 text-xs normal-case leading-relaxed font-sans">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-900/80 text-[10px] font-black tracking-wider text-stone-500">
                <span>SPEC ARCHIVE REPLICA</span>
                <span className="text-amber-500 hover:text-amber-400 cursor-pointer transition">ACCESS BULLETIN &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Leadership Council Board */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6"
      >
        <div>
          <span className="text-[10px] font-black text-amber-500 tracking-[0.25em] uppercase">OFFICERS COUNCIL</span>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">Leadership at the Helm</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR — PRESIDENT", name: "G. Vishwanadh", imageKey: "president" },
            { role: "OPERATIONS LEAD — SECRETARY", name: "B. Rishikesh", imageKey: "secretary" },
            { role: "BRAND ARCHITECT — ADMINISTRATOR", name: "B. Sri Vardhan", imageKey: "admin" }
          ].map((lead, idx) => (
            <div key={idx} className="premium-card p-5 rounded-2xl space-y-4 bg-stone-950/30">
              <div className="relative aspect-[4/5] bg-stone-950/90 rounded-xl overflow-hidden border border-stone-900 flex flex-col items-center justify-center p-4 text-center">
                <img 
                  src={`/team/${lead.imageKey}.jpg`} 
                  alt={lead.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity transition-opacity" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
                <ShieldAlert className="w-5 h-5 text-stone-700 mb-2 relative z-10" />
                <span className="text-[9px] font-black tracking-widest text-stone-600 uppercase relative z-10">PENDING PRESS PHOTOGRAPHY</span>
              </div>
              <div>
                <span className="text-[9px] font-black text-amber-500 tracking-widest block uppercase">{lead.role}</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5">{lead.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}