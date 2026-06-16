'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getArticles } from '@/lib/articles/articleService';

export default function ArticlesPage() {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      console.log('Loading articles...');

      try {
        const data = await getArticles();

        console.log('Articles loaded:', data);

        setArticles(data);
      } catch (err) {
        console.error('Error loading articles:', err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = articles.filter(
    (article) =>
      (article.title || '')
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (article.cat || '')
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800 pb-10">
        <div>
          <span className="text-[11px] font-black text-amber-500 tracking-[0.25em] uppercase">
            SPEC NEWS ARCHIVE
          </span>

          <h1 className="text-5xl font-black text-white uppercase mt-2 tracking-tight">
            Chronicle Stream
          </h1>

          <p className="text-zinc-500 text-sm mt-3">
            Official Reports • Campus Updates • Event Coverage
          </p>
        </div>

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-950 border border-zinc-800 text-white px-5 py-3 rounded-2xl w-full md:w-80 focus:outline-none focus:border-amber-500 transition"
        />
      </div>

      {/* LOADING STATE */}
      {loading && (
        <p className="text-zinc-400">Loading articles...</p>
      )}

      {/* EMPTY STATE */}
      {!loading && filtered.length === 0 && (
        <p className="text-zinc-400">
          No articles found.
        </p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={article.image || '/placeholder.jpg'}
                alt={article.title || 'Article image'}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-7 space-y-4">
              <span className="text-[11px] text-amber-500 font-black tracking-[0.2em] uppercase">
                {article.cat}
              </span>

              <h2 className="text-2xl font-extrabold text-white leading-snug group-hover:text-amber-400 transition">
                {article.title}
              </h2>

              <div className="flex justify-between items-center text-xs text-zinc-500 border-t border-zinc-800 pt-4">
                <span>{article.date}</span>
                <span>{article.reporter}</span>
              </div>

              <Link href={`/articles/${article.id}`}>
                <button className="mt-3 w-full px-6 py-3 bg-amber-500 text-black font-black rounded-2xl hover:bg-amber-400 transition">
                  READ FULL ARTICLE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

