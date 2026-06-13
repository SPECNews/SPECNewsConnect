'use client';
import { Layers, Camera, Video } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center space-y-2">
        <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">HUMAN ASSET METRIC</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">Core Administration Matrix</h1>
      </div>

      {/* Strict Core Leaders Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-900 pb-16">
        {[
          { title: "President", name: "G. Vishwanadh", role: "CREATIVE DIRECTOR" },
          { title: "Secretary", name: "B. Rishikesh", role: "OPERATIONS LEAD" },
          { title: "Club Admin", name: "B. Sri Vardhan", role: "BRAND ARCHITECT" }
        ].map((lead, i) => (
          <div key={i} className="cyber-panel p-8 rounded-2xl text-center space-y-2">
            <span className="text-[9px] font-black text-blue-500 tracking-widest block">{lead.role}</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{lead.name}</h3>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{lead.title}</span>
          </div>
        ))}
      </div>

      {/* Operations Matrix Subdivisions */}
      <div className="space-y-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Sub-Sector Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Editorial Team", icon: Layers, desc: "Processing system updates, interviews, and feature narratives." },
            { name: "Photography Unit", icon: Camera, desc: "Capturing telemetry assets and visuals across high-impact events." },
            { name: "Production Crew", icon: Video, desc: "Fusing video feeds, cinematic design, and creative editing streams." }
          ].map((t, idx) => (
            <div key={idx} className="cyber-panel p-6 rounded-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center">
                <t.icon className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white tracking-wide uppercase mb-1">{t.name}</h3>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
