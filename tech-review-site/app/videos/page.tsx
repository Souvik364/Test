import type { Metadata } from 'next';
import VideoGallery from '@/components/VideoGallery';

export const metadata: Metadata = {
  title: 'Tech Videos - Reviews, Unboxings & Tutorials | TechReviewer',
  description: 'Watch our latest tech video reviews, unboxings, tutorials, and comparison videos for smartphones, laptops, and other digital products.',
};

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Tech Videos</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Watch our latest video reviews, unboxings, comparisons, and tutorials.
        </p>
      </div>
      
      <div className="mt-10">
        <VideoGallery />
      </div>
    </div>
  );
} 