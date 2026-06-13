"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

const metrics = [
  { value: 78, suffix: "%", label: "Engagement" },
  { value: 120, suffix: "+", label: "Published Stories" },
  { value: 16, suffix: "K+", label: "Social Reach" },
  { value: 42, suffix: "+", label: "Campus Events" },
];

const highlights = [
  { title: "Spectrum Tech Fest 2026 Visuals", category: "Photography", time: "2 hours ago" },
  { title: "Student Innovation Profile: Smart Campus", category: "Editorial", time: "Yesterday" },
  { title: "Club Broadcast: Recruitment Drive", category: "Campus News", time: "2 days ago" },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-[#04050a] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.45em] text-blue-400">Official Media Platform</p>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                SPEC News Connect — cinematic campus narratives, engineered for premium audiences.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Experience campus journalism with a dark cinematic interface, immersive editorial flows, and premium story presentation for St. Peter’s Engineering College.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="/articles" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
                  Explore Articles
                </a>
                <a href="/gallery" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-blue-500/30 hover:text-white">
                  View Gallery
                </a>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_60px_120px_-70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <div className="absolute inset-x-6 top-6 h-56 rounded-[1.75rem] bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_60%)] blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-3xl bg-[#0f172a] p-3 shadow-[0_20px_80px_-50px_rgba(59,130,246,0.55)]">
                    <img src="/logo.png" alt="SPEC News Connect" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Award-Winning Design</p>
                    <p className="text-2xl font-black text-white">Cinematic Media Hub</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  A fluid editorial environment layered with animated metrics, premium cards, and cinematic visual storytelling.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="glass-panel p-5 rounded-3xl">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} label={metric.label} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Highlights Feed</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Latest Campus Narratives</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Discover the newest campus dispatches, editorial celebrations, and operational highlights from SPEC News Connect.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass-panel rounded-[2rem] p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-blue-400">{item.category}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">A premium feature story crafted to reflect the pulse of campus innovation and news culture.</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <span>{item.time}</span>
                <a href="/articles" className="font-semibold text-blue-300 hover:text-white">Read more →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#07070f]/80 p-10 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.85)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Operational Board</p>
              <h2 className="mt-4 text-4xl font-black text-white">Leadership at the Helm</h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-400">
              Our editorial governance model and event operations deliver strategic coverage with premium branding, campus reach, and digital storytelling precision.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="glass-panel rounded-[1.75rem] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Creative Director</p>
              <h3 className="mt-4 text-2xl font-bold text-white">G. Vishwanadh</h3>
              <p className="mt-3 text-sm text-slate-300 leading-7">Leading editorial strategy, cinematic identity, and long-form media direction for the club.</p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Operations Lead</p>
              <h3 className="mt-4 text-2xl font-bold text-white">B. Rishikesh</h3>
              <p className="mt-3 text-sm text-slate-300 leading-7">Managing production schedules, field coverage logistics, and editorial operations.</p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Brand Architect</p>
              <h3 className="mt-4 text-2xl font-bold text-white">B. Sri Vardhan</h3>
              <p className="mt-3 text-sm text-slate-300 leading-7">Crafting the brand language, campaign visuals, and premium club identity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
