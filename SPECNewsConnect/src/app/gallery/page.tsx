'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const categories = ["All", "Events", "Workshops", "Technical Fests", "Cultural Events", "Club Activities", "Photography"];

const galleryData = [
  { id: 1, title: "SPEC News Orientation", category: "Club Activities", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800" },
  { id: 2, title: "Annual Fest Coverage", category: "Technical Fests", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
  { id: 3, title: "Workshop Session Layouts", category: "Workshops", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" },
  { id: 4, title: "Student Panel Forum Log", category: "Events", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
  { id: 5, title: "Optics and Practical Grid Setup", category: "Photography", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800" },
  { id: 6, title: "Cultural Event Live Log", category: "Cultural Events", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const visibleItems = filter === "All" ? galleryData : galleryData.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-1">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Media Showcase</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Capture Log</h1>
      </div>

      <div className="flex flex-wrap gap-2 pb-4 border-b border-zinc-900">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-[10px] font-bold rounded-lg uppercase tracking-widest transition border ${filter === cat ? 'bg-white text-black border-white' : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'}`}>
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} key={item.id} onClick={() => setActiveImg(item.img)} className="premium-glass rounded-2xl overflow-hidden group border border-zinc-900 hover:border-zinc-800 transition cursor-pointer flex flex-col justify-between">
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img src={item.img} alt="" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-103 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[9px] font-black uppercase text-blue-400 tracking-widest block">{item.category}</span>
                <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImg(null)} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out">
            <motion.img initial={{ scale: 0.97 }} animate={{ scale: 1 }} exit={{ scale: 0.97 }} src={activeImg} className="max-w-5xl w-full max-h-[80vh] object-contain rounded-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}