"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-[#04050a] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_24%)] opacity-80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-blue-400">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">A pristine communication interface for campus collaboration.</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Send a secure message to SPEC News Connect, or use our offline contact details for direct communication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#07070f]/90 p-10 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)]">
            <h2 className="text-3xl font-black text-white">Send us a message</h2>
            <p className="mt-4 text-sm text-slate-300 leading-7">
              Fill out the form below and our team will respond to your request as quickly as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block uppercase tracking-[0.25em] text-slate-500">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block uppercase tracking-[0.25em] text-slate-500">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </label>
              </div>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block uppercase tracking-[0.25em] text-slate-500">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="w-full rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
                Send Message
              </button>
              {submitted ? (
                <p className="mt-4 text-sm text-emerald-300">Thank you! Your message has been sent successfully.</p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#07070f]/90 p-10 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)]">
            <h2 className="text-3xl font-black text-white">Offline Contact</h2>
            <div className="space-y-5 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-semibold text-slate-100">Email</p>
                <p>specnews@college.edu</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Office</p>
                <p>Media Hub Desk, Main Block, St. Peter’s Engineering College</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Phone</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Consultation Hours</p>
              <p className="mt-3 text-sm text-slate-300 leading-7">Monday to Friday · 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
