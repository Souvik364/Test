"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

// Sample popular articles data
const popularArticles = [
  {
    id: 1,
    title: 'iPhone 15 vs iPhone 14: Should You Upgrade?',
    slug: 'iphone-15-vs-iphone-14',
    image: '/article-iphone-comparison.jpg',
    date: '2023-09-25',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'The Best Noise-Cancelling Headphones of 2024',
    slug: 'best-noise-cancelling-headphones-2024',
    image: '/article-headphones.jpg',
    date: '2024-01-12',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Wi-Fi 7 Explained: The Future of Wireless Connectivity',
    slug: 'wifi-7-explained',
    image: '/article-wifi7.jpg',
    date: '2024-02-01',
    readTime: '5 min read'
  }
];

// Sample tags data
const tags = [
  { name: 'Smartphones', count: 24 },
  { name: 'Laptops', count: 18 },
  { name: 'Apple', count: 15 },
  { name: 'Samsung', count: 14 },
  { name: 'Android', count: 12 },
  { name: 'iOS', count: 11 },
  { name: 'Wearables', count: 10 },
  { name: 'Google', count: 9 },
  { name: 'AI', count: 8 },
  { name: '5G', count: 7 },
  { name: 'Software', count: 6 },
  { name: 'Gaming', count: 5 }
];

// Newsletter component for the sidebar
function SidebarNewsletter() {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/5 dark:to-purple-500/5 rounded-xl p-6">
      <h3 className="font-bold text-lg mb-3">Newsletter</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Get the latest tech news and updates delivered to your inbox weekly.
      </p>
      
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Popular Articles Section */}
      <div>
        <h3 className="font-bold text-xl mb-4">Popular Articles</h3>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/blog/${article.slug}`}
              className="flex gap-3 group"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="mx-1">•</span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" size={12} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <SidebarNewsletter />
      
      {/* Tags Cloud Section */}
      <div>
        <h3 className="font-bold text-xl mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/blog/tag/${tag.name.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
            >
              {tag.name} <span className="text-gray-500 dark:text-gray-400">({tag.count})</span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Ad or Featured Content Placeholder */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center bg-gray-50 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">SPONSORED</p>
        <h4 className="font-bold mb-2">Premium Gadget Deals</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          Exclusive deals on premium tech products from our partners.
        </p>
        <button className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
} 