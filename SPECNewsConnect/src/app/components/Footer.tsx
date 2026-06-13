export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p className="text-white font-semibold">SPEC News &copy; {new Date().getFullYear()}</p>
        <p className="text-sm">The Official Media & Communications Club</p>
        <div className="flex justify-center space-x-6 pt-2">
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="mailto:specnews@college.edu" className="hover:text-blue-400">Email</a>
        </div>
      </div>
    </footer>
  );
}