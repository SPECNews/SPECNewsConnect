"use client";
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div>
        <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">COMMS PORTAL</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mt-1">Connect Node</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-900">
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Identity Parameter</label>
                <input required type="text" placeholder="NAME" className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase focus:outline-none focus:border-blue-600 transition placeholder-zinc-800" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Digital Terminal Address</label>
                <input required type="email" placeholder="EMAIL" className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase focus:outline-none focus:border-blue-600 transition placeholder-zinc-800" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Transmission Text</label>
                <textarea required rows={4} placeholder="YOUR MESSAGE INQUIRY PARAMETERS..." className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase focus:outline-none focus:border-blue-600 transition resize-none placeholder-zinc-800" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-[10px] tracking-widest uppercase hover:bg-blue-500 transition shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Dispatch Matrix Data
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-2">
              <h3 className="text-lg font-black text-white uppercase">Data Transmitted</h3>
              <p className="text-zinc-500 text-xs normal-case">Operational vectors logged inside the SPEC News registry core.</p>
            </div>
          )}
        </div>

        <div className="md:col-span-5 space-y-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-2">
          <div className="space-y-1">
            <span className="text-zinc-700 font-black">MEDIA DESK HUB</span>
            <p className="text-xs font-bold text-white normal-case tracking-normal">Main Block, St. Peter's Engineering College, Hyderabad, Telangana</p>
          </div>
          <div className="space-y-1">
            <span className="text-zinc-700 font-black">NET ROOT ADDRESS</span>
            <p className="text-xs font-bold text-blue-400 tracking-wide lowercase">specnews@college.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
