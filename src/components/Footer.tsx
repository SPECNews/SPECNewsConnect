export default function Footer() {
  return (
    <footer className="bg-[#020204] border-t border-zinc-900/60 py-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 normal-case tracking-normal text-left">
          <img src="/logo.png" alt="" className="w-5 h-5 object-contain opacity-40" />
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">SPEC News Connect</span>
        </div>
        <p>&copy; 2026 SPEC NEWS CONNECT. ST. PETER'S ENGINEERING COLLEGE.</p>
      </div>
    </footer>
  );
}
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:specnews@college.edu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06060b] text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <img src="/logo.png" alt="SPEC News Connect" className="h-10 w-auto" />
            <p className="max-w-sm text-sm text-slate-400">
              SPEC News Connect is the official media platform for St. Peter’s Engineering College, delivering cinematic campus stories and premium editorial coverage.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Headquarters</h2>
            <p className="mt-5 text-sm text-slate-300 leading-7">
              Media Hub Desk<br />St. Peter’s Engineering College<br />Hyderabad, Telangana
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-slate-500 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SPEC News Connect. All rights reserved.</p>
          <p className="text-slate-400">Branding & editorial by SPEC News Connect.</p>
        </div>
      </div>
    </footer>
  );
}
