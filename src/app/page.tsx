import NewsCard from '@/components/NewsCard';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">SPEC NEWS CONNECT</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The Official Media & Communications Club. Voice of the campus, capturing moments and chronicling stories.
          </p>
        </div>
      </section>

      {/* Quick Statistics */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-extrabold text-blue-600">50+</p>
            <p className="text-slate-600 font-medium mt-1">Articles Published</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-extrabold text-blue-600">20+</p>
            <p className="text-slate-600 font-medium mt-1">Events Covered</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-extrabold text-blue-600">1000+</p>
            <p className="text-slate-600 font-medium mt-1">Students Reached</p>
          </div>
        </div>
      </section>

      {/* Featured & Latest Story */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Featured Story</h2>
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-slate-200 aspect-video md:aspect-auto">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600" className="w-full h-full object-cover" alt="Featured" />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 tracking-wide uppercase">Spec News Chronicles</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">Annual Tech Fest Spectrum Recap</h3>
                <p className="text-slate-600 text-sm line-clamp-3">The campus buzzed with grand innovations, standard-setting designs, and exceptional student reviews during this year's technical summit.</p>
              </div>
              <button className="mt-4 text-blue-600 font-semibold text-sm text-left hover:underline">Read full chronicle &rarr;</button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
          <div className="space-y-4">
            <NewsCard title="Orientation Day 2026: Welcoming Freshers" author="Editorial Team" date="June 10, 2026" category="Campus Updates" />
            <NewsCard title="Workshop on Visual Storytelling & Photography" author="Photography Wing" date="May 28, 2026" category="Workshops" />
          </div>
        </div>
      </section>
    </div>
  );
}