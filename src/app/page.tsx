'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, Camera, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const teamCardVariant = {
  hidden: { opacity: 0, y: 160, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 11,
      mass: 0.75,
    },
  },
};

export default function HomePage() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightX = useSpring(mouseX, {
    stiffness: 150,
    damping: 25,
  });

  const lightY = useSpring(mouseY, {
    stiffness: 150,
    damping: 25,
  });

  const x = useTransform(mouseX, [0, windowSize.width || 1], [-40, 40]);

  const y = useTransform(mouseY, [0, windowSize.height || 1], [-30, 30]);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 30,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pb-32 relative overflow-hidden min-h-screen bg-[#020001] text-white">

      {/* Dynamic background effects */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">

        <motion.div
          className="fixed inset-0 mix-blend-screen opacity-70 hidden lg:block"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([cx, cy]) =>
                `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(185, 28, 28, 0.22) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)`
            ),
          }}
        />

        <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-950/15 blur-[140px]" />

        <div className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-950/5 blur-[160px]" />

        <motion.div
          style={{
            x: windowSize.width >= 1024 ? smoothX : 0,
            y: windowSize.width >= 1024 ? smoothY : 0,
          }}
          className="fixed inset-0 flex items-center justify-center z-0"
        >
          <img
            src="/logo.png"
            alt="Watermark backdrop"
            className="w-[90vw] h-[90vw] sm:w-[75vw] sm:h-[75vw] object-contain opacity-[0.12]"
          />
        </motion.div>
      </div>

      {/* Hero section */}
      <section className="w-full px-4 sm:px-6 lg:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen relative z-10 pt-24 sm:pt-32 pb-12 gap-12 overflow-hidden">

        <div className="absolute inset-0 -z-10">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#020001]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-red-950/60 to-stone-900/40 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />

            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400">
              The Voice of St. Peter's
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08]">
            CAPTURING MOMENTS.
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400">
              CHRONICLING STORIES.
            </span>

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-200">
              BROADCASTING CAMPUS LIFE.
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            Welcome to SPEC NEWS Connect—the ultimate digital heartbeat of St. Peter's Engineering College.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

            <Link
              href="/articles"
              className="inline-flex items-center justify-center space-x-3 px-8 py-3.5 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition"
            >
              <span>EXPLORE ARTICLES</span>

              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-stone-950/80 border border-stone-800 hover:border-stone-700 text-stone-300 font-black text-xs uppercase tracking-widest rounded-xl transition"
            >
              VIEW GALLERY
            </Link>
          </div>
        </motion.div>

        {/* Logo with glow preserved */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          whileHover={{ scale: 1.04 }}
          className="relative group/emblem cursor-pointer flex-shrink-0"
        >
          <div className="absolute inset-[-30px] sm:inset-[-40px] rounded-full animate-morphing-hero opacity-70 pointer-events-none transition-all duration-700" />

          <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#050304] border-2 border-stone-800 flex items-center justify-center relative shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden z-10">
            <img
              src="/logo.png"
              alt="SPEC Central Emblem"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/emblem:scale-105"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}