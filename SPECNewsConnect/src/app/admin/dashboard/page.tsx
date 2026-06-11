"use client";

import React, { useState } from "react";
import { LayoutDashboard, BookOpen, Calendar, Image as ImageIcon, UserPlus, Users, Search, Filter, Plus, Edit3, Trash2 } from "lucide-react";

type ModuleType = "dashboard" | "publications" | "events" | "gallery" | "recruitment" | "team";

export default function AdminDashboard() {
  const [activeModule, setActiveModule] = useState<ModuleType>("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Overview", icon: LayoutDashboard },
    { id: "publications", label: "Publication CMS", icon: BookOpen },
    { id: "events", label: "Event Manager", icon: Calendar },
    { id: "gallery", label: "Gallery Manager", icon: ImageIcon },
    { id: "recruitment", label: "Recruitment", icon: UserPlus },
    { id: "team", label: "Team Manager", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-[#F5F5F7] flex">
      <aside className="w-64 bg-[#0d0d0f] border-r border-white/5 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center space-x-3 px-2">
            <div className="h-3 w-3 rounded-full bg-red-600" />
            <span className="font-bold tracking-widest text-xs uppercase text-white">SPEC HQ</span>
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id as ModuleType)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-medium transition-all ${
                    activeModule === item.id ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
          <a href="/admin/publications" className="w-full text-center bg-white/5 text-xs text-white py-2 rounded-lg hover:bg-white/10 transition-colors">
            Open CMS Editor →
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="border-b border-white/5 p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white capitalize">{activeModule} Control Panel</h1>
          <div className="text-xs font-mono text-neutral-500">HQ REMOTE NETWORK CONNECTED</div>
        </header>

        <main className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6">
              <span className="text-xs uppercase text-neutral-500 font-medium">Platform Metrics</span>
              <h3 className="text-3xl font-black text-white mt-2">48.2K</h3>
              <p className="text-[10px] text-neutral-500 font-mono mt-1">+24.8% Monthly Reach</p>
            </div>
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6">
              <span className="text-xs uppercase text-neutral-500 font-medium">Pending Articles</span>
              <h3 className="text-3xl font-black text-white mt-2">14</h3>
              <p className="text-[10px] text-neutral-400 font-mono mt-1">Requires Editor Approval</p>
            </div>
            <div className="bg-[#0d0d0f] border border-white/5 rounded-2xl p-6">
              <span className="text-xs uppercase text-neutral-500 font-medium">Active Events</span>
              <h3 className="text-3xl font-black text-white mt-2">6</h3>
              <p className="text-[10px] text-neutral-500 font-mono mt-1">Scheduled This Month</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}