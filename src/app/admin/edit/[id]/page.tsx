'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getArticles, updateArticle } from "@/lib/articles/articleService";

export default function EditArticlePage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getArticles();
      const article = data.find((a: any) => a.id === id);

      if (!article) return;

      setTitle(article.title || "");
      setCat(article.cat || "");
      setContent(article.content || "");
      setImage(article.image || "");

      setLoading(false);
    };

    load();
  }, [id]);

  const handleUpdate = async () => {
    await updateArticle(id as string, {
      title,
      cat,
      content,
      image,
    });

    router.push("/admin/dashboard");
  };

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="p-10 bg-black min-h-screen text-white space-y-4">

      <h1 className="text-3xl font-black text-amber-500">
        EDIT ARTICLE
      </h1>

      <input
        className="w-full p-3 bg-zinc-900"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        className="w-full p-3 bg-zinc-900"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        placeholder="Category"
      />

      <textarea
        className="w-full p-3 bg-zinc-900"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <input
        className="w-full p-3 bg-zinc-900"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />

      <button
        onClick={handleUpdate}
        className="bg-amber-500 text-black px-6 py-3 font-bold"
      >
        UPDATE ARTICLE
      </button>

    </div>
  );
}