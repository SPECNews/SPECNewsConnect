interface GalleryProps {
  title: string;
  category: string;
  imagePath: string;
}

export default function GalleryCard({ title, category, imagePath }: GalleryProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-slate-900 shadow-md aspect-video">
      <img 
        src={imagePath} 
        alt={title} 
        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
        onError={(e) => {
          // Fallback if the image doesn't exist in public/gallery/ yet
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-4">
        <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">{category}</span>
        <h4 className="text-white font-bold text-lg">{title}</h4>
      </div>
    </div>
  );
}