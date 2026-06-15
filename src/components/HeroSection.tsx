"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/spec-campus.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
            St. Peter's Engineering College
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            The Official Media & Communications Club of
            <span className="block text-red-500">
              St. Peter's Engineering College
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Capturing campus stories, celebrating achievements, and connecting
            the SPEC community through journalism, photography, videography,
            and digital media.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/articles"
              className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Explore Stories
            </Link>

            <Link
              href="/join"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Join SPEC News
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/70">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
