"use client";

import React, { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Save, Globe, Image as ImageIcon, Bold, Italic, Loader2 } from "lucide-react";

export default function PublicationCMS() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [authorName, setAuthorName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(val.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").trim());
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (status: "Draft" | "Published") => {
    if (!title || !content || !authorName) return alert("Fill out mandatory parameters.");
    setIsSubmitting(true);
    let downloadUrl = "";

    try {
      if (imageFile) {
        const storageRef = ref(storage, `publications/${Date.now()}_${imageFile.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, imageFile);
        downloadUrl = await getDownloadURL(uploadTask.ref);
      }

      await addDoc(collection(db, "publications"), {
        title, slug, content, category, author: authorName, featuredImage: downloadUrl, status, createdAt: serverTimestamp()
      });
      alert(`Success! Saved as ${status}`);
    } catch (e) {
      console.error(e);
    } file {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#F5F5F7] p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-white/5 pb-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">SPEC CONSOLE</span>
            <h1 className="text-2xl font-bold tracking-tight text-white">Create Publication Entry</h1>
          </div>
          <div className="flex space-x-3">
            <button onClick={() => handleSave("Draft")} className="bg-white/5 border border-white/5 text-neutral-300 text-xs px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Save Draft
            </button>
            <button onClick={() => handleSave("Published")} className="bg-white text-black font-semibold text-xs px-4 py-2 rounded-lg hover:bg-neutral-200 transition-all flex items-center space-x-2">
              {isSubmitting && <Loader2 size={12} className="animate-spin" />}
              <span>Commit & Publish</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6 space-y-4">
              <input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Headline Title" className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-sm text-white focus:outline-none" />
              <input type="text" value={slug} disabled placeholder="Slug Path" className="w-full bg-transparent text-xs font-mono text-neutral-500 outline-none px-4" />
              <textarea rows={12} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Article markdown body context..." className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-sm text-white focus:outline-none resize-none" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6 space-y-4">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-xs text-white">
                <option value="Campus Life">Campus Life</option>
                <option value="Academics">Academics</option>
                <option value="Technology">Technology</option>
              </select>
              <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Author Signature" className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-xs text-white" />
            </div>
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6 text-center">
              <label className="cursor-pointer space-y-2">
                <ImageIcon className="text-neutral-600 mx-auto" size={24} />
                <span className="text-xs text-neutral-400 block">Select Cover Photo</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
              {imagePreview && <img src={imagePreview} className="mt-4 rounded-xl aspect-[16/10] object-cover border border-white/10" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}