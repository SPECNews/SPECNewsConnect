'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Layers, FileText, Mic, Video, Award, Users } from 'lucide-react';
import AnimatedCounter from '@/app/components/AnimatedCounter';

const viewAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="space-y-36 pb-36 overflow-hidden">
      {/* Dynamic Cinematic Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center space-x-3 px-4 py-2 premium-glass rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Official Media Club of SPEC</span>
          </motion.div>

          {/* Centered Massive Logo Backdrop Frame */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <img src="/logo.png" alt="SPEC News Logo" className="w-28 h-28 mx-auto object-contain filter drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] mb-6" />
            <h1 className="text-5xl sm:text-8xl font-black tracking-tighter text-white leading-none uppercase">
              SPEC NEWS<br />CONNECT
            </h1>
          </motion.div>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-medium tracking-wide leading-relaxed">
            Capturing campus stories, celebrating achievements, and giving every single student a voice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/gallery" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition flex items-center justify-center space-x-2 group">
              <span>View Gallery</span>
              <Camera className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
            </Link>
            <Link href="/articles" className="w-full sm:w-auto px-8 py-4 premium-glass border border-zinc-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition flex items-center justify-center space-x-2 group">
              <span>Read Articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid: What We Do */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={viewAnim} className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Operational Scope</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">What We Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Camera, title: "Campus Coverage", desc: "Capturing institutional technical milestones and cultural life maps." },
            { icon: FileText, title: "Article Publishing", desc: "Drafting analytical reviews, student opinions, and research reports." },
            { icon: Mic, title: "Student Interviews", desc: "Amplifying voices through structured on-ground talk forums." },
            { icon: Video, title: "Video Projects", desc: "Producing cinematic event breakdowns and structural club promotions." }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={viewAnim} className="premium-glass premium-glass-hover p-6 rounded-2xl transition-all duration-300 group">
              <item.icon className="w-6 h-6 text-blue-400 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-md font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed normal-case font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* High-Contrast Premium Newsroom Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Active Headlines</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Featured Stories</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { cat: "Tech Coverage", title: "Annual Technical Fest Spectrum Recap", date: "June 2026", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
            { cat: "Achievement", title: "Student Innovations Shifting Regional Engineering Metrics", date: "May 2026", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" },
            { cat: "Briefing", title: "Media & Journalism Evolution Across Campus Formats", date: "April 2026", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600" }
          ].map((story, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={viewAnim} className="premium-glass rounded-2xl overflow-hidden group border border-zinc-900 hover:border-zinc-800 transition duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img src={story.img} alt="" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-black px-2.5 py-1 rounded text-blue-400 border border-zinc-800">
                  {story.cat}
                </span>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                  {story.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-[10px] font-bold uppercase text-zinc-500">
                  <span>{story.date}</span>
                  <span className="text-white group-hover:underline">Read &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Counter Grid Block */}
      <section className="bg-[#050507] border-y border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { num: 50, label: "Articles Published" },
            { num: 100, label: "Events Covered" },
            { num: 500, label: "Photos Captured" },
            { num: 1000, label: "Students Reached" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <AnimatedCounter value={stat.num} suffix="+" />
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Operational Board Board-Preview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Executive Council</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Club Leadership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "President", name: "G. Vishwanadh" },
            { role: "Secretary", name: "B. Rishikesh" },
            { role: "Club Admin", name: "B. Sri Vardhan" }
          ].map((lead, idx) => (
            <div key={idx} className="premium-glass p-8 rounded-2xl border border-zinc-900 hover:border-zinc-800 text-center space-y-4 group transition-all duration-300 relative overflow-hidden">
              <div className="w-14 h-14 bg-zinc-900/50 rounded-full mx-auto flex items-center justify-center border border-zinc-800 group-hover:border-blue-500/30 transition-colors">
                <Users className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/30 px-3 py-1 rounded-full border border-blue-900/30">
                  {lead.role}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-4">{lead.name}</h3>
                <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-wider">SPEC NEWS CONNECT</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}