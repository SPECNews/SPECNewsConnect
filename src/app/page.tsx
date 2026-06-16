'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Trophy,
  BookOpen,
  Camera,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
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
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020001] text-white pb-24">

      {/* Background Logo */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
        <img
          src="/logo.png"
          alt="SPEC watermark"
          className="w-[90vw] max-w-[700px] object-contain"
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 px-5 sm:px-8 lg:px-16 py-12">

        {/* Video */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#020001]" />
        </div>

        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="max-w-2xl text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-red-950/50 px-4 py-2">
            <Trophy className="h-4 w-4 text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
              The Voice of St. Peter's
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-tight">
            CAPTURING MOMENTS.
            <br />

            <span className="bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent">
              CHRONICLING STORIES.
            </span>

            <br />

            <span className="bg-gradient-to-r from-amber-400 via-red-500 to-amber-200 bg-clip-text text-transparent">
              BROADCASTING CAMPUS LIFE.
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-stone-300">
            Welcome to SPEC NEWS Connect—the digital heartbeat of St. Peter's
            Engineering College. We capture events, showcase achievements, and
            bring campus stories to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 px-8 py-4 text-xs font-black uppercase tracking-widest transition hover:from-red-600 hover:to-amber-500"
            >
              <span>Explore Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-xl border border-stone-700 bg-stone-950/80 px-8 py-4 text-xs font-black uppercase tracking-widest text-stone-300 transition hover:border-stone-500"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>

        {/* Right Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="flex-shrink-0"
        >
          <div className="h-44 w-44 sm:h-56 sm:w-56 lg:h-72 lg:w-72 overflow-hidden rounded-full border-2 border-stone-800 bg-[#050304] shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <img
              src="/logo.png"
              alt="SPEC Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="relative z-10 mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:px-6">
        <div className="mb-10 space-y-2">
          <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-amber-500">
            Operational Board
          </span>

          <h2 className="text-3xl font-black uppercase">
            Leadership at the Helm
          </h2>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {[
            {
              role: 'CLUB PRESIDENT',
              name: 'G. Vishwanadh',
              img: '/team/president_full.jpg',
            },
            {
              role: 'CLUB SECRETARY',
              name: 'B. Rishikesh',
              img: '/team/secretary_full.jpg',
            },
            {
              role: 'CLUB ADMINISTRATOR',
              name: 'B. Sri Vardhan',
              img: '/team/admin_full.jpg',
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={teamCardVariant}
              className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-950"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-3 p-6">
                <span className="block text-[10px] font-black uppercase tracking-widest text-amber-500">
                  {member.role}
                </span>

                <h3 className="text-2xl font-black uppercase">
                  {member.name}
                </h3>

                <div className="flex items-center gap-2 border-t border-stone-800 pt-4 text-stone-500">
                  <ShieldAlert className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Verified Council Board
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 mx-auto mt-24 max-w-6xl px-5 sm:px-8 lg:px-6">
        <div className="mb-8">
          <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-amber-500">
            Highlights Feed
          </span>

          <h2 className="text-2xl font-black uppercase">
            Latest Campus Narratives
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Camera,
              tag: 'Photography',
              title: 'Spectrum Tech Fest 2026 Visuals',
            },
            {
              icon: BookOpen,
              tag: 'Editorial',
              title: 'Student Innovation Profile',
            },
            {
              icon: Trophy,
              tag: 'Campus News',
              title: 'Club Recruitment Drive',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-stone-800 bg-stone-950/50 p-6"
            >
              <item.icon className="mb-4 h-8 w-8 text-amber-500" />

              <span className="block text-[10px] font-black uppercase tracking-widest text-amber-400">
                {item.tag}
              </span>

              <h3 className="mt-2 text-lg font-black uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}