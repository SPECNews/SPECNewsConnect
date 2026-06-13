'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-1">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Connect Matrix</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Reach Our Hub</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 premium-glass p-8 rounded-2xl flex flex-col justify-center">
          {!done ? (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-wider text-zinc-400">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white focus:outline-none focus:border-blue-500 transition" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-wider text-zinc-400">Email Address</label>
                  <input required type="email" placeholder="john@domain.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white focus:outline-none focus:border-blue-500 transition" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-wider text-zinc-400">Phone</label>
                <input required type="text" placeholder="+91 XXXX XXXX" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white focus:outline-none focus:border-blue-500 transition" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-wider text-zinc-400">Message Parameters</label>
                <textarea required rows={4} placeholder="Type your inquiry details..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white focus:outline-none focus:border-blue-500 transition normal-case resize-none" />
              </div>
              <button type="submit" className="w-full bg-white hover:bg-zinc-200 text-black font-black py-4 rounded-xl text-[10px] uppercase tracking-widest transition">
                Transmit Parameters
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Transmission Complete</h3>
              <p className="text-zinc-500 text-xs font-medium max-w-xs mx-auto normal-case">
                Your parameters have been logged and linked directly into the SPEC News processing database.
              </p>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-5 premium-glass p-8 rounded-2xl flex flex-col justify-center space-y-8 text-xs font-bold uppercase text-zinc-500">
          <div className="space-y-1">
            <h4 className="text-[9px] font-black tracking-widest text-zinc-600">Primary Channel</h4>
            <p className="text-base font-black text-white tracking-wide lowercase">specnews@college.edu</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-[9px] font-black tracking-widest text-zinc-600">Comms Line</h4>
            <p className="text-base font-black text-white tracking-wide">+91 98765 43210</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-[9px] font-black tracking-widest text-zinc-600">Coordinates</h4>
            <p className="text-zinc-400 text-xs normal-case tracking-normal font-medium leading-relaxed">
              Media Hub Desk, Main Block, St. Peter's Engineering College, Hyderabad, Telangana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}