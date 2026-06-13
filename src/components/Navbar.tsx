"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Gallery", path: "/gallery" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#020205]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <img src="/logo.png" alt="SPEC News Connect" className="h-8 w-8 object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">SPEC News</p>
            <h1 className="text-base font-black tracking-tight text-white">Connect</h1>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl shadow-[0_25px_90px_-60px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-blue-500 text-white shadow-[0_10px_30px_-20px_rgba(59,130,246,0.75)]" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
