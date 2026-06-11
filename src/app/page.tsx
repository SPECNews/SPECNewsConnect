"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, Calendar, Bell, Award, MessageSquare, ChevronRight, TrendingUp, Image as ImageIcon, ArrowUpRight } from "lucide-react";

export default function SpecNewsConnect() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-[#070708] text-[#F5F5F7] antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 to-amber-500 origin-left z-50" style={{ scaleX }} />

      <nav className="fixed top-0 w-full z-40 bg-[#070708]/70 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-600 animate-pulse" />
          <span className="font-bold tracking-wider text-sm uppercase">SPEC News <span className="text-neutral-400 font-light">Connect</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-400">
          <a href="#featured" className="hover:text-white transition-colors">Featured</a>
          <a href="#announcements" className="hover:text-white transition-colors">Announcements</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#voices" className="hover:text-white transition-colors">Voices</a>
        </div>
        <a href="/admin/dashboard" className="bg-white text-black text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full hover:bg-neutral-200 transition-all">
          Dashboard
        </a>
      </nav>

      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="absolute inset-0 w-full h-full object-cover">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#070708]" />

        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-red-500 mb-4">
            <Play size={12} className="fill-current" />
            <span>Live Digital Stream</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">SPEC News Connect</h1>
          <p className="text-lg md:text-2xl font-light tracking-wide text-neutral-400 max-w-2xl mx-auto">
            The Digital Pulse of St. Peter's Engineering College
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-36 pb-36">
        <section id="featured" className="scroll-mt-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 mb-2 font-semibold">Editorial Pick</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Stories</h2>
            </div>
            <TrendingUp className="text-neutral-600 hidden md:block" size={32} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative bg-[#0d0d0f] border border-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col justify-between">
              <span className="bg-red-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm w-fit">Cover Story</span>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-12">
                The Genesis of Next-Gen Robotics: SPEC Tech Team Breaks Records at National Conclave
              </h3>
              <p className="text-neutral-400 font-light text-sm mt-4">An in-depth exclusive detailing how our engineering majors developed an autonomous drone ecosystem.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#0d0d0f] border border-white/5 rounded-xl p-6 h-44 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500">Campus</span>
                <h4 className="text-lg font-semibold tracking-tight">Smart Campus Initiative: Green Energy Integration Complete</h4>
              </div>
              <div className="bg-[#0d0d0f] border border-white/5 rounded-xl p-6 h-44 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500">Academics</span>
                <h4 className="text-lg font-semibold tracking-tight">Decoding the New AI-Driven Curriculum Framework</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}