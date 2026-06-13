'use client';
import { motion } from 'framer-motion';
import { Shield, Compass, Camera, Palette, Terminal, Mail } from 'lucide-react';

const structure = [
  { role: "President", name: "G. Vishwanadh", desc: "Formulates operational blueprints, executive alignment maps, and strategic corporate communications targets." },
  { role: "Secretary", name: "B. Rishikesh", desc: "Coordinates physical workflow tracks, resource provisioning, and field deployment logistics." },
  { role: "Club Admin", name: "B. Sri Vardhan", desc: "Directs layout infrastructure, database resources, and administrative validation pipelines." }
];

const wings = [
  { name: "Editorial Team", icon: Compass },
  { name: "Photography Team", icon: Camera },
  { name: "Content Team", icon: Shield },
  { name: "Design Team", icon: Palette },
  { name: "Technical Team", icon: Terminal }
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">System Architecture</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">The Core Matrix</h1>
      </div>

      <div className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-2">Executive Council</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {structure.map((lead, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="premium-glass p-6 rounded-2xl border border-zinc-900 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-950/30 px-2.5 py-1 rounded border border-blue-900/30">
                  {lead.role}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-2">{lead.name}</h3>
                <p className="text-zinc-500 text-xs normal-case leading-relaxed font-medium">{lead.desc}</p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-bold text-zinc-500 pt-4 border-t border-zinc-900">
                <Mail className="w-3.5 h-3.5 text-zinc-600" />
                <span>CONNECT@SPECNEWS.COM</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-2">Operational Divisions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {wings.map((w, idx) => (
            <div key={idx} className="premium-glass p-6 rounded-xl text-center space-y-3 group hover:border-zinc-800 transition">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl mx-auto flex items-center justify-center border border-zinc-800 group-hover:border-blue-500/30 transition">
                <w.icon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition" />
              </div>
              <h3 className="text-xs font-black uppercase text-zinc-300 tracking-wider">{w.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}