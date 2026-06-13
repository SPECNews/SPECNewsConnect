import NewsCard from '@/components/NewsCard';

const articlesData = [
  { id: 1, title: 'SPEC News Chronicles: Edition 12', author: 'Editorial Team', date: 'June 01, 2026', category: 'SPEC News Chronicles' },
  { id: 2, title: 'Student Voices: Grading Policies & Campus Life', author: 'Vishwanadh Rishi', date: 'May 14, 2026', category: 'Student Voices & Reviews' },
  { id: 3, title: 'Hostel Renovation Projects Complete', author: 'Vardhan', date: 'April 20, 2026', category: 'Campus Updates' },
  { id: 4, title: 'Coding Club Clinches National Hackathon Trophy', author: 'Editorial Team', date: 'April 12, 2026', category: 'Achievements' },
];

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Articles & Releases</h1>
        <p className="text-slate-500 mt-2">Explore the pulse of our campus through chronicles, feedback, and stories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <NewsCard 
            key={article.id}
            title={article.title}
            author={article.author}
            date={article.date}
            category={article.category}
          />
        ))}
      </div>
    </div>
  );
}