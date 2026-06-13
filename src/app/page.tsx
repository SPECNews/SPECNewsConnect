'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const revealVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="pb-32 space-y-36">
      
      {/* Absolute Centered Hero Frame */}
      <section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[70vh] relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="space-y-8 flex flex-col items-center"
        >
          {/* Centered Large Emblem Badge */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-red-700 to-amber-600 opacity-30 blur-md group-hover:opacity-50 transition duration-500" />
            <div className="w-24 h-24 rounded-full bg-stone-950 border-2 border-amber-500/30 flex items-center justify-center p-4 relative shadow-2xl">
              <img 
                src="/logo.png" 
                alt="SPEC News Logo" 
                className="w-full h-full object-contain brightness-110" 
              />
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 bg-red-950/40 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">Official Media & Communications Council</span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] max-w-3xl">
            CAPTURING MOMENTS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
              CHRONICLING STORIES.
            </span>
          </h1>
          
          <p className="text-stone-400 text-sm normal-case leading-relaxed max-w-2xl font-sans">
            Welcome to the official media console of <strong className="text-white font-bold">SPEC NEWS Connect</strong> at St. Peter's Engineering College. We command verified high-fidelity event records, broadcast campus updates, and chronicle student journalism achievements.
          </p>
          
          <div className="pt-4">
            <Link href="/articles" className="inline-flex items-center space-x-3 px-8 py-4 btn-primary text-white font-black text-xs uppercase tracking-widest rounded-xl transition">
              <span>EXPLORE ARTICLES</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Broadcast Bulletins */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} 
        className="max-w-6xl mx-auto px-6 space-y-6"
      >
        <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
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