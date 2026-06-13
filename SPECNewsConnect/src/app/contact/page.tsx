export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact SPEC News</h1>
          <p className="text-slate-500 text-sm mt-1">Have a pitch, review, or feedback? Drop us a line.</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="yourname@domain.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Message</label>
            <textarea rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your query here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>

      {/* Club Meta Metadata */}
      <div className="flex flex-col justify-center space-y-8 lg:pl-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Instagram</h3>
          <p className="text-xl font-semibold text-slate-800">@specnews_connect</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Official Email</h3>
          <p className="text-xl font-semibold text-slate-800">specnews@college.edu</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Location Desk</h3>
          <p className="text-xl font-semibold text-slate-800 max-w-sm">Media Hub room, Main Administrative Block, Campus Ground</p>
        </div>
      </div>
    </div>
  );
}