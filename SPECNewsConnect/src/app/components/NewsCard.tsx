interface ArticleProps {
  title: string;
  author: string;
  date: string;
  category: string;
}

export default function NewsCard({ title, author, date, category }: ArticleProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition flex flex-col justify-between p-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-slate-500">By {author}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">{date}</span>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
}