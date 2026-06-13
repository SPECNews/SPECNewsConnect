"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const articleData = [
  { id: 1, title: "Campus Tech Fest: Design, Data, and Digital Culture", category: "Tech", excerpt: "A cinematic take on the latest campus festival with engineering innovation and student showcases.", date: "June 2026" },
  { id: 2, title: "Feature Story: Sustainable Design in Student Projects", category: "Feature", excerpt: "Inside the sustainable design projects shaping campus innovation and practical engineering solutions.", date: "May 2026" },
  { id: 3, title: "Broadcast: Media Training For Emerging Journalists", category: "Guides", excerpt: "A professional guide for student journalists, photographers, and media storytellers.", date: "April 2026" },
  { id: 4, title: "Club Spotlight: Photography and Production Team", category: "Profiles", excerpt: "An inside look at the teams powering our campus coverage and visual storytelling.", date: "March 2026" },
];

const categories = ["All", "Tech", "Feature", "Guides", "Profiles"];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return selectedCategory === "All"
      ? articleData
      : articleData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-[#04050a] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_26%)] opacity-70" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-400">Digital Magazine Portal</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">A premium editorial archive with live filtering and cinematic story cards.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Discover the latest feature stories, journalistic dispatches, and media narratives from SPEC News Connect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#08080e]/90 p-6 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.9)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Live Filter</p>
            <p className="mt-2 text-sm text-slate-300">Choose a category to focus the editorial feed instantly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === category ? "border-blue-500 bg-blue-500/15 text-blue-200" : "border-white/10 text-slate-300 hover:border-blue-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredArticles.map((article) => (
            <motion.article key={article.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass-panel rounded-[2rem] p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-blue-400">
                <span>{article.category}</span>
                <span className="h-px flex-1 bg-white/10" />
                <span>{article.date}</span>
              </div>
              <h2 className="mt-6 text-3xl font-black text-white">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{article.excerpt}</p>
              <div className="mt-8 flex items-center justify-between gap-4 text-sm text-slate-200">
                <span className="uppercase tracking-[0.35em] text-slate-400">Read now</span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-blue-300">Open article</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
