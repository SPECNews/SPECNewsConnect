"use client";

import { motion } from "framer-motion";

const leaders = [
  { name: "G. Vishwanadh", role: "Creative Director", description: "Leading editorial strategy, cinematic identity, and cross-channel leadership for the club." },
  { name: "B. Rishikesh", role: "Operations Lead", description: "Managing field coverage, production logistics, and campus media operations." },
  { name: "B. Sri Vardhan", role: "Brand Architect", description: "Designing visual language, digital branding, and premium media presentation." },
];

const subteams = [
  { label: "Editorial Team", description: "Reporting campus stories, interviews, and feature narratives." },
  { label: "Photography Unit", description: "Crafting visual coverage with cinematic photography and event imagery." },
  { label: "Production Crew", description: "Delivering video, motion design, and multimedia storytelling." },
];

export default function TeamPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-[#04050a] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_24%)] opacity-80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-400">Executive Council</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">Architectural Identity Blocks for Our Leadership and Teams.</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Meet the leadership and core teams shaping editorial direction, campus coverage, and premium brand storytelling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {leaders.map((leader) => (
            <motion.article key={leader.name} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass-panel rounded-[2rem] p-8">
              <span className="text-xs uppercase tracking-[0.35em] text-blue-400">{leader.role}</span>
              <h2 className="mt-5 text-3xl font-black text-white">{leader.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{leader.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {subteams.map((team) => (
            <div key={team.label} className="rounded-[2rem] border border-white/10 bg-[#07070f]/80 p-8 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)]">
              <p className="text-xs uppercase tracking-[0.35em] text-blue-400">{team.label}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{team.label}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{team.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
