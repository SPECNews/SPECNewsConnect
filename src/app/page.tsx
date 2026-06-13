"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Film, Newspaper, Radio } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HomePage() {
  return (
    <div className="pb-24 space-y-32">
      {/* Cinematic Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-500 block">OFFICIAL MEDIA PLATFORM</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
            SPEC News Connect — <br />
            <span className="text-zinc-500">cinematic campus narratives, engineered for premium audiences.</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl normal-case leading-relaxed">
            Experience campus journalism with a dark cinematic interface, immersive editorial flows, and premium story presentation for St. Peter's Engineering College.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/articles" className="px-6 py-3.5 bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition flex items-center space-x-2 group">
              <span>Explore Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/gallery" className="px-6 py-3.5 bg-zinc-950 border border-zinc-900 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition">
              View Gallery
            </Link>
          </div>
        </div>

        {/* Dashboard Metric Grid Panel */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-zinc-900/80 high-tech-glow space-y-6">
          <div className="flex items-center space-x-3 pb-4 border-b border-zinc-900/60">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Cinematic Media Hub Stats</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: 78, suf: "%", label: "ENGAGEMENT" },
              { val: 120, suf: "+", label: "PUBLISHED STORIES" },
              { val: 16, suf: "K+", label: "SOCIAL REACH" },
              { val: 42, suf: "+", label: "CAMPUS EVENTS" }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-900/50 p-5 rounded-2xl">
                <AnimatedCounter value={stat.val} suffix={stat.suf} />
                <span className="text-[9px] font-black tracking-widest text-zinc-500 mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Feed Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">HIGHLIGHTS FEED</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">Latest Campus Narratives</h2>
          </div>
          <p className="text-zinc-500 text-xs max-w-xs normal-case leading-relaxed">
            Discover the newest campus dispatches, editorial celebrations, and operational highlights from SPEC News Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, tag: "PHOTOGRAPHY", title: "Spectrum Tech Fest 2026 Visuals", time: "2 hours ago" },
            { icon: Newspaper, tag: "EDITORIAL", title: "Student Innovation Profile: Smart Campus", time: "Yesterday" },
            { icon: Radio, tag: "CAMPUS NEWS", title: "Club Broadcast: Recruitment Drive", time: "2 days ago" }
          ].map((item, i) => (
            <div key={i} className="glass-panel glass-panel-hover p-6 rounded-2xl border border-zinc-900 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <item.icon className="w-5 h-5 text-blue-500" />
                <div>
                  <span className="text-[9px] font-black text-blue-400 tracking-widest block mb-1">{item.tag}</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition duration-300">{item.title}</h3>
                </div>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">
                  A premium feature story crafted to reflect the pulse of campus innovation and news culture.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-[10px] font-bold text-zinc-500">
                <span>{item.time}</span>
                <span className="text-white group-hover:underline cursor-pointer">Read more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">OPERATIONAL BOARD</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">Leadership at the Helm</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "CREATIVE DIRECTOR", title: "President", name: "G. Vishwanadh", pfp: "/team/president.jpg", desc: "Leading editorial strategy, cinematic identity, and cross-channel leadership for the club." },
            { role: "OPERATIONS LEAD", title: "Secretary", name: "B. Rishikesh", pfp: "/team/secretary.jpg", desc: "Managing field coverage, production logistics, and campus media operations." },
            { role: "BRAND ARCHITECT", title: "Club Admin", name: "B. Sri Vardhan", pfp: "/team/admin.jpg", desc: "Designing visual language, digital branding, and premium media presentation." }
          ].map((lead, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-900 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Photo container box */}
                <div className="relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 flex items-center justify-center group">
                  <img src={lead.pfp} alt={lead.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-102 transition duration-500" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <span className="absolute text-[10px] font-bold tracking-widest text-zinc-700 uppercase group-hover:text-zinc-500 transition">PHOTO ARCHIVE</span>
                </div>
                <div>
                  <span className="text-[9px] font-black text-blue-500 tracking-widest block uppercase">{lead.role} — {lead.title}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">{lead.name}</h3>
                </div>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">{lead.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
