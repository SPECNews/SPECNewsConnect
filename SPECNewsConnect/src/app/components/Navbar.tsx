import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider text-blue-400">
            SPEC NEWS
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/articles" className="hover:text-blue-400 transition">Articles</Link>
            <Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
            <Link href="/team" className="hover:text-blue-400 transition">Team</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}