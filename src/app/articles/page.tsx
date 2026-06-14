'use client';

import { useState } from 'react';

const articles = [
  {
    id: 1,
    cat: "INFRASTRUCTURE",
    title: "Infrastructure Development at St. Peter's Engineering College",
    date: "June 2026",
    image: "/articles/infrastructure.jpg",
    reporter: "SPEC News Team"
  },

  {
    id: 2,
    cat: "SPECATHON",
    title: "SPECATHON 2026 Coverage",
    date: "July 2026",
    image: "/articles/specathon.jpg",
    reporter: "SPEC News Team"
  }
];

export default function ArticlesPage() {
  const [search, setSearch] = useState('');

  const filtered = articles.filter(
    article =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800 pb-8">
        <div>
          <span className="text-[10px] font-black text-amber-500 tracking-widest uppercase">
            SPEC NEWS ARCHIVE
          </span>

          <h1 className="text-4xl font-black text-white uppercase mt-2">
            Chronicle Stream
          </h1>

          <p className="text-zinc-500 text-sm mt-2">
            Official Articles • Reports • Event Coverage
          </p>
        </div>

        <input
          type="text"
          placeholder="SEARCH ARTICLES..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-xl w-full md:w-72 focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">

              <span className="text-[10px] text-amber-500 font-black tracking-widest uppercase">
                {article.cat}
              </span>

              <h2 className="text-2xl font-black text-white">
                {article.title}
              </h2>

              <div className="flex justify-between items-center text-xs text-zinc-500">
                <span>{article.date}</span>
                <span>{article.reporter}</span>
              </div>

              <a
                href={article.image}
                target="_blank"
                className="inline-block mt-2 px-6 py-3 bg-amber-500 text-black font-black rounded-xl hover:bg-amber-400 transition"
              >
                VIEW ARTICLE
              </a>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}