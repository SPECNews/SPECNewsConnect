"use client";
import { Shield, Camera, Film } from 'lucide-react';

export default function Team() {
  const teams = [
    { name: "Editorial Team", icon: Shield, desc: "Reporting campus stories, interviews, and feature narratives." },
    { name: "Photography Unit", icon: Camera, desc: "Crafting visual coverage with cinematic photography and event imagery." },
    { name: "Production Crew", icon: Film, desc: "Delivering video, motion design, and multimedia storytelling." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center space-y-2">
        <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">HUMAN ARCHITECTURE</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Leadership and Teams.</h1>
        <p className="text-zinc-500 text-xs max-w-md mx-auto normal-case pt-2">
          Meet the leadership and core teams shaping editorial direction, campus coverage, and premium brand storytelling.
        </p>
      </div>

      {/* Leadership Board Row Re-confirmed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-900 pb-16">
        {[
          { title: "President", name: "G. Vishwanadh", role: "CREATIVE DIRECTOR" },
          { title: "Secretary", name: "B. Rishikesh", role: "OPERATIONS LEAD" },
          { title: "Club Admin", name: "B. Sri Vardhan", role: "BRAND ARCHITECT" }
        ].map((lead, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl border border-zinc-900 text-center space-y-2">
            <span className="text-[9px] font-black text-blue-500 tracking-widest block">{lead.role}</span>
            <h3 className="text-lg font-black text-white uppercase">{lead.name}</h3>
            <span className="text-[11px] font-bold text-zinc-500 uppercase block tracking-wider">{lead.title}</span>
          </div>
        ))}
      </div>

      {/* Sub-divisions Matrix Section */}
      <div className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Sub-Divisions Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((t, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl border border-zinc-900 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center">
                <t.icon className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-400 tracking-widest block uppercase mb-1">{t.name}</span>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
