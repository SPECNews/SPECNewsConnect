export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="" className="w-5 h-5 object-contain opacity-30" />
          <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">SPEC News Connect</span>
        </div>
        <p>&copy; 2026 SPEC NEWS CONNECT. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
