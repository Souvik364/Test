import { FeaturedReviews } from '@/components/FeaturedReviews';
import { HeroSection } from '@/components/HeroSection';
import { LatestArticles } from '@/components/LatestArticles';
import { Newsletter } from '@/components/Newsletter';
import { TrendingProducts } from '@/components/TrendingProducts';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      
      <section className="container">
        <h2 className="text-3xl font-bold mb-6">Featured Reviews</h2>
        <FeaturedReviews />
      </section>
      
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Trending Products</h2>
          <TrendingProducts />
        </div>
      </section>
      
      <section className="container">
        <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
        <LatestArticles />
      </section>
      
      <section className="bg-primary/10 dark:bg-primary/5 py-12">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </div>
  );
} 