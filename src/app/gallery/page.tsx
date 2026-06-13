"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Campus Night Editorial", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200", group: "Events" },
  { id: 2, title: "Tech Fest Projection", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200", group: "Highlights" },
  { id: 3, title: "Profile Portrait", image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=1200", group: "Team" },
  { id: 4, title: "Production Suite", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200", group: "Behind The Scenes" },
  { id: 5, title: "Campus Studio", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200", group: "Events" },
  { id: 6, title: "Editorial Layout", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200", group: "Highlights" },
];

const groups = ["All", "Events", "Highlights", "Team", "Behind The Scenes"];

export default function GalleryPage() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return activeGroup === "All" ? galleryItems : galleryItems.filter((item) => item.group === activeGroup);
  }, [activeGroup]);

  const activeItem = galleryItems.find((item) => item.id === selectedImage) || null;

  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-[#04050a] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.13),_transparent_30%)] opacity-80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-400">Gallery Mosaic</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">Clean image grids with immersive preview experiences.</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Explore cinematic campus moments and gallery stories in a premium showcase layout.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 rounded-full border border-white/10 bg-[#08080e]/90 p-4 shadow-[0_30px_140px_-110px_rgba(0,0,0,0.9)]">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeGroup === group ? "bg-blue-500/20 text-blue-100" : "border border-white/10 bg-white/5 text-slate-300 hover:bg-blue-500/10 hover:text-white"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item.id)}
              whileHover={{ scale: 1.02 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-0 text-left shadow-[0_40px_90px_-70px_rgba(0,0,0,0.75)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-300">{item.group}</p>
                  <h2 className="mt-2 text-lg font-bold text-white">{item.title}</h2>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          >
            <div className="relative max-w-6xl rounded-[2rem] border border-white/10 bg-[#020205] p-6 shadow-[0_0_80px_10px_rgba(0,0,0,0.55)]">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                Close
              </button>
              <div className="grid gap-6 lg:grid-cols-[0.7fr_0.5fr]">
                <img src={activeItem.image} alt={activeItem.title} className="w-full rounded-[1.5rem] object-cover" />
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-400">{activeItem.group}</p>
                  <h2 className="text-4xl font-black text-white">{activeItem.title}</h2>
                  <p className="text-sm leading-7 text-slate-300">
                    A full-screen gallery preview with premium styling, curated for cinematic campus storytelling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
