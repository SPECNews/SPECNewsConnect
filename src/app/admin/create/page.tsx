'use client';

import { useState } from "react";
import { createArticle } from "@/lib/articles/articleService";
import { uploadImage } from "@/lib/uploadImage";
import { useRouter } from "next/navigation";

export default function CreateArticle() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const publish = async () => {
    if (!file) return;

    setLoading(true);

    const imageUrl = await uploadImage(file);

    await createArticle({
      title,
      cat,
      content,
      image: imageUrl,
      date: new Date().toDateString(),
      reporter: "SPEC News Team"
    });

    router.push("/admin/dashboard");

    setLoading(false);
  };

  return (
    <div className="p-10 bg-black min-h-screen text-white space-y-4">

      <h1 className="text-3xl font-black text-amber-500">
        CREATE ARTICLE
      </h1>

      <input
        className="w-full p-3 bg-zinc-900"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-3 bg-zinc-900"
        placeholder="Category"
        onChange={(e) => setCat(e.target.value)}
      />

      <textarea
        className="w-full p-3 bg-zinc-900"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full p-3 bg-zinc-900"
      />

      <button
        onClick={publish}
        className="bg-amber-500 text-black px-6 py-3 font-bold"
      >
        PUBLISH
      </button>

    </div>
  );
}