"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Play,
  TrendingUp,
} from "lucide-react";

export default function SpecNewsConnect() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="min-h-screen bg-black text-white">

      {/* PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* BREAKING TICKER */}
      <div className="fixed top-3 w-full z-40 bg-red-600 text-white text-xs py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_12s_linear_infinite]">
          🚨 BREAKING: SPEC News Connect is LIVE • Campus updates rolling • Student voices rising • Tech innovations showcased 🔥
        </div>
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        className="h-screen flex items-center justify-center text-center relative overflow-hidden"
      >
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"
        />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-xs uppercase tracking-widest">
            <Play size={12} /> Live Digital Stream
          </div>

          <motion.h1
            className="text-5xl md:text-8xl font-black tracking-tighter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            SPEC NEWS
          </motion.h1>

          <p className="text-neutral-400 max-w-xl mx-auto">
            The Digital Pulse of St. Peter's Engineering College
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 space-y-20 pb-32">

        {/* FEATURE */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Stories</h2>
            <TrendingUp className="text-neutral-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="md:col-span-2 bg-zinc-900 border border-white/10 p-6 rounded-xl hover:scale-[1.02] transition">
              <span className="text-xs text-red-500 uppercase">Cover Story</span>
              <h3 className="text-2xl font-bold mt-4">
                Robotics Team Breaks National Record at Tech Conclave
              </h3>
              <p className="text-neutral-400 mt-2">
                Engineering students build autonomous drone system.
              </p>
            </div>

            <div className="space-y-4">

              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl">
                <p className="text-xs text-neutral-500">Campus</p>
                <h4 className="font-semibold mt-2">
                  Smart Campus Energy Project Completed
                </h4>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl">
                <p className="text-xs text-neutral-500">Academics</p>
                <h4 className="font-semibold mt-2">
                  New AI Curriculum Introduced
                </h4>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}