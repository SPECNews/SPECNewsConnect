'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { articles } from '@/data/articles';

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = articles;

        // IMPORTANT: Firestore IDs are strings
        const found = data.find((a: any) => a.id === id);

        setArticle(found || null);
      } catch (err) {
        console.error("Error loading article:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return <div className="text-white p-10">Loading article...</div>;
  }

  if (!article) {
    return <div className="text-white p-10">Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">

      {/* CATEGORY */}
      <div className="text-amber-500 text-xs font-black tracking-[0.2em] uppercase mb-3">
        {article.cat}
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-black mb-4 leading-tight">
        {article.title}
      </h1>

      {/* META */}
      <div className="flex justify-between text-zinc-500 text-sm border-b border-zinc-800 pb-4 mb-6">
        <span>{article.date}</span>
        <span>{article.reporter}</span>
      </div>

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <p className="text-zinc-300 text-lg leading-8 whitespace-pre-line">
        {article.content}
      </p>

    </div>
  );
}