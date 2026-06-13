export default function TeamPage() {
  const departments = [
    'Editorial Team', 'Content Writing Team', 'Photography Team', 'Design Team', 'Social Media Team'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Core Board</h1>
        <p className="text-slate-500 mt-2">The architecture driving media, communication, and storytelling across campus.</p>
      </div>

      {/* Hierarchy Trees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">President</p>
          <h3 className="text-xl font-bold mt-1 text-slate-800">SPEC NEWS</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm ring-2 ring-blue-500">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Secretary</p>
          <h3 className="text-xl font-bold mt-1 text-slate-800">Vishwanadh Rishi</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Admin</p>
          <h3 className="text-xl font-bold mt-1 text-slate-800">Vardhan</h3>
        </div>
      </div>

      {/* Departments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center tracking-tight">Club Wings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-slate-100 p-4 rounded-lg text-center font-medium text-sm text-slate-700 hover:bg-slate-200 transition">
              {dept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}