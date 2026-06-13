import GalleryCard from '@/components/GalleryCard';

const galleryItems = [
  { id: 1, title: 'SPEC News Orientation', category: 'Club Meetings', imagePath: '/gallery/event1.jpg' },
  { id: 2, title: 'Annual Fest Coverage', category: 'Event Coverage', imagePath: '/gallery/event2.jpg' },
  { id: 3, title: 'Workshop Session', category: 'Workshops', imagePath: '/gallery/event3.jpg' },
  { id: 4, title: 'Student Panel Discussion', category: 'Student Voices', imagePath: '/gallery/event4.jpg' },
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Media Gallery</h1>
        <p className="text-slate-500 mt-2">A visual showcase of club milestones, workshops, and event coverage highlights.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GalleryCard 
            key={item.id}
            title={item.title}
            category={item.category}
            imagePath={item.imagePath}
          />
        ))}
      </div>
    </div>
  );
}