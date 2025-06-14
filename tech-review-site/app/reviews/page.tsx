import type { Metadata } from 'next';
import ReviewsGrid from '@/components/ReviewsGrid';
import ReviewFilters from '@/components/ReviewFilters';

export const metadata: Metadata = {
  title: 'Tech Reviews - Smartphones, Laptops & More | TechReviewer',
  description: 'Expert reviews on the latest smartphones, laptops, and tech gadgets with detailed specifications, ratings, and buying advice.',
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Tech Reviews</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover in-depth analysis, ratings and comparisons of the latest technology products.
        </p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ReviewFilters />
        </div>
        
        <div className="lg:col-span-3">
          <ReviewsGrid />
        </div>
      </div>
    </div>
  );
} 