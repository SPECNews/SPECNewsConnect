'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, User, Calendar, MessageCircle } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  content: string;
  category: string;
  date: string;
  likes: number;
  liked?: boolean;
}

export default function StudentFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Rahul M. (CSE)',
      content: 'Massive turnout at the sports arena today for the inter-college cricket qualifiers! The energy was unreal.',
      category: 'CAMPUS LIFE',
      date: 'Just now',
      likes: 24,
      liked: false
    },
    {
      id: '2',
      author: 'Anonymous Student',
      content: 'Shoutout to the SPEC NEWS crew for the incredible coverage of the tech fest last week! Those cinematic recaps were insane.',
      category: 'CLUB SHOUTOUT',
      date: '2 hours ago',
      likes: 42,
      liked: false
    }
  ]);

  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('CAMPUS LIFE');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);

    const newPost: Post = {
      id: Date.now().toString(),
      author: author.trim() || 'Anonymous Student',
      content: content.trim(),
      category: category,
      date: 'Just now',
      likes: 0,
      liked: false
    };

    setTimeout(() => {
      setPosts([newPost, ...posts]);
      setContent('');
      setAuthor('');
      setIsSubmitting(false);
    }, 400);
  };

  const toggleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Post Submission Form */}
      <div className="lg:col-span-5 premium-card p-6 rounded-2xl border border-zinc-800/80">
        <div className="flex items-center space-x-2 pb-4 border-b border-zinc-900 mb-4">
          <Send className="w-4 h-4 text-blue-500" />
          <h3 className="text-xs font-black tracking-widest text-white uppercase">Broadcast Your News</h3>
        </div>

        <form onSubmit={handlePostSubmit} className="space-y-4">
          <div>
            <label className="text-[9px] font-black tracking-widest text-zinc-500 block mb-1">REPORTER NAME / DEPT</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-3.5 h-3.5 text-zinc-600" />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Optional: e.g., Anon, Amit (ECE)"
                className="w-full bg-black/40 border border-zinc-900 rounded-xl pl-9 pr-4 py-3 text-xs text-white focus:outline-none focus:border-blue-600 transition"
              />
            </div>
          </div>

          <div>
            <label className="text-[9px] font-black tracking-widest text-zinc-500 block mb-1">BULLETIN CATEGORY</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-black/40 border border-zinc-900 rounded-xl px-3 py-3 text-xs font-bold text-zinc-400 focus:outline-none focus:border-blue-600 transition uppercase"
            >
              <option value="CAMPUS LIFE">Campus Life</option>
              <option value="ACADEMICS">Academics & Exams</option>
              <option value="SPORTS">Sports & Culturals</option>
              <option value="CLUB SHOUTOUT">Club Shoutouts</option>
            </select>
          </div>

          <div>
            <label className="text-[9px] font-black tracking-widest text-zinc-500 block mb-1">YOUR CAMPUS UPDATES *</label>
            <textarea
              required
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What is happening on campus right now?"
              className="w-full bg-black/40 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-600 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-black py-3 rounded-xl text-[10px] tracking-widest uppercase hover:bg-blue-500 transition"
          >
            <span>{isSubmitting ? 'UPLOADING...' : 'POST UPDATE'}</span>
          </button>
        </form>
      </div>

      {/* Live Bulletins Stream */}
      <div className="lg:col-span-7 space-y-4">
        <AnimatePresence initial={false}>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="premium-card rounded-2xl p-5 border border-zinc-900 bg-zinc-950/20"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-900/60 mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-[10px] text-blue-400">
                    {post.author[0].toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{post.author}</h4>
                    <span className="text-[8px] font-black text-blue-500 tracking-wider block uppercase">{post.category}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-zinc-600 text-[9px]">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed normal-case">
                {post.content}
              </p>

              <div className="pt-3 mt-3 border-t border-zinc-900/60 flex items-center space-x-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center space-x-1 text-[9px] font-bold tracking-wider transition ${post.liked ? 'text-red-500' : 'text-zinc-500 hover:text-zinc-400'}`}
                >
                  <Heart className={`w-3.5 h-3.5 ${post.liked ? 'fill-current' : ''}`} />
                  <span>{post.likes} LIKES</span>
                </button>
                <div className="flex items-center space-x-1 text-zinc-600 text-[9px] font-bold">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>0 COMMENTS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}