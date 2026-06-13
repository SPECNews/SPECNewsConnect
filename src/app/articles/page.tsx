'use client';
import { useState } from 'react';

const articles = [
  { id: 1, cat: "SPECTRUM", title: "Processing the 2026 System Architecture Matrix", date: "June 2026" },
  { id: 2, cat: "NETWORK NEWS", title: "Digital Integration Infrastructure Overhaul", date: "May 2026" }
];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-900/60 pb-8">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">DATABASE INDEX</span>
          <h1 className="text-4xl font-black text-white uppercase mt-1">Chronicle Stream</h1>
        </div>
        <input type="text" placeholder="FILTER STREAM..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-zinc-950 border border-zinc-900 text-[10px] font-bold text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 transition w-full md:w-64 tracking-widest" />
      </div>

      <div className="space-y-4">
        {filtered.map(art => (
          <div key={art.id} className="cyber-panel p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition group">
            <div>
              <span className="text-[9px] font-black text-blue-400 tracking-widest uppercase block mb-1">{art.cat}</span>
              <h3 className="text-lg font-bold text-white uppercase transition group-hover:text-blue-500">{art.title}</h3>
            </div>
            <span className="text-[10px] font-bold text-zinc-600 whitespace-nowrap tracking-wider">{art.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
