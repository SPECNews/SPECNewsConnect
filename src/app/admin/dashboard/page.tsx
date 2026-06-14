'use client';

import { useEffect, useState } from "react";
import { getArticles, deleteArticle } from "@/lib/articles/articleService";
import Link from "next/link";

export default function Dashboard() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getArticles();
      setArticles(data);
      setLoading(false);
    };

    load();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteArticle(id);
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="p-10 bg-black min-h-screen text-white">

      <h1 className="text-3xl font-black text-amber-500 mb-6">
        ADMIN DASHBOARD
      </h1>

      <Link href="/admin/create">
        <button className="bg-amber-500 text-black px-4 py-2 font-bold mb-6">
          + CREATE ARTICLE
        </button>
      </Link>

      <div className="space-y-4">

        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center"
          >

            {/* LEFT SIDE */}
            <div>
              <h2 className="font-bold text-lg">{article.title}</h2>
              <p className="text-zinc-400 text-sm">{article.cat}</p>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex gap-2">

              {/* ✅ EDIT BUTTON (PASTE HERE) */}
              <Link href={`/admin/edit/${article.id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
              </Link>

              <button
                onClick={() => handleDelete(article.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}