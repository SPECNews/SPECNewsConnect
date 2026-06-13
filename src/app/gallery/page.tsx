"use client";
import { useState } from 'react';

const categories = ["ALL LOGS", "EVENTS", "WORKSHOPS", "EDITORIAL"];
const photos = [
  { id: 1, title: "Tech Summit Keynote Frame", cat: "EVENTS", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
  { id: 2, title: "Media Layout Workshop Setup", cat: "WORKSHOPS", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600" },
  { id: 3, title: "On-Ground Crew Documentation", cat: "EDITORIAL", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" }
];

export default function Gallery() {
  const [tab, setTab] = useState("ALL LOGS");
  const filtered = tab === "ALL LOGS" ? photos : photos.filter(p => p.cat === tab);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">VISUAL DATABANK</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mt-1">Capture Core</h1>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setTab(cat)} className={`px-4 py-2 text-[9px] font-black tracking-widest rounded-lg transition border ${tab === cat ? 'bg-blue-600 border-blue-600 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="glass-panel rounded-2xl overflow-hidden border border-zinc-900 group">
            <div className="aspect-video bg-zinc-950 relative overflow-hidden">
              <img src={p.img} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-90 group-hover:scale-103 transition duration-500" />
            </div>
            <div className="p-4 border-t border-zinc-900/60">
              <span className="text-[9px] font-black text-blue-500 tracking-widest uppercase block mb-1">{p.cat}</span>
              <h3 className="text-sm font-bold text-white uppercase tracking-tight">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
