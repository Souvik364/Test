import type { Metadata } from 'next';
import BlogListing from '@/components/BlogListing';
import BlogSidebar from '@/components/BlogSidebar';

export const metadata: Metadata = {
  title: 'Tech Blog - News, Guides & Comparisons | TechReviewer',
  description: 'Read the latest technology news, buying guides, comparisons, and helpful tips about smartphones, laptops, and other digital products.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Tech Blog</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover the latest tech news, in-depth articles, buying guides, and expert opinions.
        </p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <BlogListing />
        </div>
        
        <div className="lg:col-span-4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
} 