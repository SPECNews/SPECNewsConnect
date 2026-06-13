"use client";
import { useState } from 'react';

const articles = [
  { id: 1, cat: "SPECTRUM", title: "Tracking the 2026 Engineering Conclave Meta", date: "June 2026" },
  { id: 2, cat: "CAMPUS CULTURE", title: "Unveiling Student Innovations Across Smart Hubs", date: "May 2026" },
  { id: 3, cat: "EXECUTIVE INTERVIEW", title: "Behind the Scenes with Campus Creative Units", date: "April 2026" }
];

export default function Articles() {
  const [search, setSearch] = useState("");
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-900 pb-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">CHRONICLE INDEX</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mt-1">Articles Engine</h1>
        </div>
        <input type="text" placeholder="Filter articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-zinc-950 border border-zinc-900 text-xs uppercase tracking-wider font-bold text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-600 transition w-full md:w-64 placeholder-zinc-700" />
      </div>

      <div className="space-y-4">
        {filtered.map(art => (
          <div key={art.id} className="glass-panel glass-panel-hover p-6 rounded-xl border border-zinc-900/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition group">
            <div>
              <span className="text-[9px] font-black text-blue-400 tracking-widest uppercase block mb-1">{art.cat}</span>
              <h3 className="text-lg font-bold text-white uppercase group-hover:text-blue-500 transition">{art.title}</h3>
            </div>
            <span className="text-[10px] font-bold text-zinc-500 whitespace-nowrap">{art.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
