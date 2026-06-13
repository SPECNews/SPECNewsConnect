'use client';
import { useState } from 'react';

const categories = ["ALL LOGS", "EVENTS", "WORKSHOPS"];
const photos = [
  { id: 1, title: "Tech Summit Keynote Interface", cat: "EVENTS", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
  { id: 2, title: "Media Terminal Workshop Configuration", cat: "WORKSHOPS", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600" }
];

export default function GalleryPage() {
  const [tab, setTab] = useState("ALL LOGS");
  const filtered = tab === "ALL LOGS" ? photos : photos.filter(p => p.cat === tab);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-900/60 pb-6">
        <div>
          <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">VISUAL STORAGE MATRIX</span>
          <h1 className="text-4xl font-black text-white uppercase mt-1">Capture Log Array</h1>
        </div>
        <div className="flex space-x-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setTab(cat)} className={`px-4 py-2 text-[9px] font-black tracking-widest rounded-lg transition border ${tab === cat ? 'bg-blue-600 border-blue-600 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="cyber-panel rounded-2xl overflow-hidden group">
            <div className="aspect-video bg-zinc-950 relative overflow-hidden">
              <img src={p.img} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-75 transition duration-500" />
            </div>
            <div className="p-5 border-t border-zinc-900">
              <span className="text-[9px] font-black text-blue-500 tracking-widest uppercase block mb-1">{p.cat}</span>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
