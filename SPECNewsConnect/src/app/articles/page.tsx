'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const data = [
  { id: 1, title: "SPEC News Chronicles: Vol. 14 Release Matrix", summary: "A comprehensive investigation charting infrastructure upgrades, technical laboratory integrations, and academic roadmap modifications.", author: "Editorial Core", date: "June 2026", cat: "SPEC News Chronicles" },
  { id: 2, title: "Student Voices: Evaluation of Modern Industrial Pipelines", summary: "Compiling unfiltered analytical perspective profiles from technical undergraduates handling off-campus internships.", author: "G. Vishwanadh", date: "May 2026", cat: "Student Voices" },
  { id: 3, title: "Technical Integration Architecture Across Smart Labs", summary: "Reviewing backend acceleration structures built by code cells operating within campus frameworks.", author: "B. Sri Vardhan", date: "May 2026", cat: "Tech Insights" },
  { id: 4, title: "Athletic Dominance: Tracking Championship Metrics", summary: "An field breakdown detailing structural training parameters that secured victory profiles in state sports leagues.", author: "B. Rishikesh", date: "April 2026", cat: "Campus Highlights" }
];

export default function ArticlesPage() {
  const [query, setQuery] = useState("");
  const filtered = data.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.summary.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Digital Magazine</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">The Chronicle Core</h1>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-600" />
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter database..." className="w-full bg-zinc-900 text-xs font-semibold uppercase tracking-wider rounded-xl pl-10 pr-4 py-3 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((art) => (
          <motion.article key={art.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="premium-glass p-6 sm:p-8 rounded-2xl hover:border-zinc-800 transition duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-3">
              <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-950/40 border border-blue-900/30 px-2.5 py-1 rounded">
                {art.cat}
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition line-clamp-2">
                {art.title}
              </h2>
              <p className="text-zinc-500 text-xs normal-case font-medium leading-relaxed line-clamp-3">
                {art.summary}
              </p>
            </div>
            <div className="border-t border-zinc-900/80 pt-4 flex items-center justify-between text-[9px] font-bold uppercase text-zinc-500">
              <span>BY {art.author}</span>
              <span>{art.date}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}