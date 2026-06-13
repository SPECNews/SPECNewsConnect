'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div>
        <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">MATRIX COMMUNICATION ROUTE</span>
        <h1 className="text-4xl font-black text-white uppercase mt-1">Terminal Contact</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 cyber-panel p-8 rounded-2xl">
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <input required type="text" placeholder="OPERATOR IDENTITY NAME" className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3.5 text-[10px] font-bold tracking-widest text-white uppercase focus:outline-none focus:border-blue-600 transition placeholder-zinc-800" />
              <input required type="email" placeholder="COMM TERMINAL EMAIL" className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3.5 text-[10px] font-bold tracking-widest text-white uppercase focus:outline-none focus:border-blue-600 transition placeholder-zinc-800" />
              <textarea required rows={4} placeholder="TRANSMISSION DATA INQUIRY DETAILS..." className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3.5 text-[10px] font-bold tracking-widest text-white uppercase focus:outline-none focus:border-blue-600 transition resize-none placeholder-zinc-800" />
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-[10px] tracking-widest uppercase hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                DISPATCH SIGNAL MATRIX
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-2">
              <h3 className="text-lg font-black text-white uppercase">SIGNAL ROUTED</h3>
              <p className="text-zinc-500 text-xs normal-case">Data packets locked inside the SPEC registry core logs successfully.</p>
            </div>
          )}
        </div>

        <div className="md:col-span-5 space-y-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-4">
          <div>
            <span className="text-zinc-700 font-black block mb-1">COMMAND NODE LOCATION</span>
            <p className="text-xs font-bold text-white normal-case tracking-normal">Main Block, St. Peter's Engineering College, Hyderabad, Telangana</p>
          </div>
          <div>
            <span className="text-zinc-700 font-black block mb-1">SIGNAL NET ROUTE</span>
            <p className="text-xs font-bold text-blue-400 tracking-wide lowercase">specnews@college.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
