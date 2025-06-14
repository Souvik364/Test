"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGrid, FiList, FiChevronDown, FiStar } from 'react-icons/fi';

// Sample reviews data (in a real app, this would come from an API or database)
const sampleReviews = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    image: '/iphone15-pro-max.jpg',
    brand: 'Apple',
    category: 'Smartphone',
    rating: 4.8,
    date: '2023-09-22',
    price: '$1,099',
    excerpt: 'Apple's most advanced iPhone with a titanium design, A17 Pro chip, and a revolutionary camera system.',
    pros: ['Powerful A17 Pro chip', 'Excellent camera system', 'Premium build quality', 'Impressive battery life'],
    cons: ['Expensive', 'Heavy', 'Limited customization options']
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    slug: 'samsung-galaxy-s23-ultra',
    image: '/samsung-s23-ultra.jpg',
    brand: 'Samsung',
    category: 'Smartphone',
    rating: 4.7,
    date: '2023-02-17',
    price: '$1,199',
    excerpt: 'Samsung's flagship with an embedded S Pen, powerful camera system, and premium performance.',
    pros: ['Versatile camera setup', 'S Pen functionality', 'Bright display', 'Long software support'],
    cons: ['Expensive', 'Slow charging compared to competitors', 'Bulky design']
  },
  {
    id: 3,
    title: 'Google Pixel 8 Pro',
    slug: 'google-pixel-8-pro',
    image: '/pixel-8-pro.jpg',
    brand: 'Google',
    category: 'Smartphone',
    rating: 4.6,
    date: '2023-10-12',
    price: '$999',
    excerpt: 'Google's AI-powered flagship with exceptional photography capabilities and clean Android experience.',
    pros: ['Outstanding camera quality', 'Smooth software experience', 'AI features', '7 years of updates'],
    cons: ['Battery life could be better', 'Limited availability', 'Occasional software bugs']
  },
  {
    id: 4,
    title: 'MacBook Air M3',
    slug: 'macbook-air-m3',
    image: '/macbook-air-m3.jpg',
    brand: 'Apple',
    category: 'Laptop',
    rating: 4.9,
    date: '2023-11-05',
    price: '$1,099',
    excerpt: 'Apple's thinnest laptop with the powerful M3 chip, offering incredible performance and battery life.',
    pros: ['Exceptional performance', 'All-day battery life', 'Fanless design', 'Excellent build quality'],
    cons: ['Limited ports', 'No Face ID', 'RAM not upgradable']
  },
  {
    id: 5,
    title: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    image: '/sony-wh1000xm5.jpg',
    brand: 'Sony',
    category: 'Headphones',
    rating: 4.9,
    date: '2022-05-20',
    price: '$399',
    excerpt: 'Industry-leading noise cancellation with exceptional sound quality and improved call performance.',
    pros: ['Best-in-class ANC', 'Excellent sound quality', 'Comfortable for long sessions', '30-hour battery life'],
    cons: ['Expensive', 'Not foldable like previous model', 'No water resistance']
  },
  {
    id: 6,
    title: 'Dell XPS 13 Plus',
    slug: 'dell-xps-13-plus',
    image: '/dell-xps-13-plus.jpg',
    brand: 'Dell',
    category: 'Laptop',
    rating: 4.5,
    date: '2023-04-15',
    price: '$1,299',
    excerpt: 'A sleek, minimalist design with invisible trackpad and capacitive function row, powered by Intel's latest processors.',
    pros: ['Futuristic design', 'Excellent OLED display', 'Powerful performance', 'Compact form factor'],
    cons: ['Limited port selection', 'Battery life is average', 'Can run hot under load']
  },
];

type SortOption = 'newest' | 'highest_rated' | 'price_high_low' | 'price_low_high';

export default function ReviewsGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  // Sort reviews based on the selected option
  const sortedReviews = [...sampleReviews].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'highest_rated':
        return b.rating - a.rating;
      case 'price_high_low':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'price_low_high':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  });

  return (
    <div>
      {/* Sorting and view options */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-semibold text-black dark:text-white">{sampleReviews.length}</span> reviews
        </div>
        
        <div className="flex items-center gap-4">
          {/* Sort dropdown */}
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="newest">Newest First</option>
              <option value="highest_rated">Highest Rated</option>
              <option value="price_high_low">Price: High to Low</option>
              <option value="price_low_high">Price: Low to High</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <FiChevronDown className="h-4 w-4" />
            </div>
          </div>
          
          {/* View mode toggle */}
          <div className="flex border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid view */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedReviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="card h-full flex flex-col hover:transform hover:scale-[1.02] transition-all duration-200"
            >
              <div className="relative h-48">
                <Image
                  src={review.image || '/placeholder.jpg'}
                  alt={review.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 py-1 px-2 rounded-md flex items-center gap-1">
                  <FiStar className="text-yellow-400 w-4 h-4 fill-current" />
                  <span className="font-bold text-sm">{review.rating}</span>
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-primary">
                    {review.brand} / {review.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {review.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                  {review.excerpt}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold">{review.price}</span>
                  <span className="text-primary text-sm font-medium">Read Review</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* List view */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="card flex flex-col sm:flex-row hover:shadow-lg transition-all duration-200"
            >
              <div className="relative h-48 sm:h-auto sm:w-1/3 sm:max-w-[240px]">
                <Image
                  src={review.image || '/placeholder.jpg'}
                  alt={review.title}
                  fill
                  className="object-cover sm:rounded-l-lg sm:rounded-tr-none rounded-t-lg"
                />
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-primary">
                        {review.brand} / {review.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {review.title}
                    </h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 py-1 px-2 rounded-md flex items-center gap-1 border border-gray-100 dark:border-gray-700">
                    <FiStar className="text-yellow-400 w-4 h-4 fill-current" />
                    <span className="font-bold text-sm">{review.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {review.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex-grow min-w-[45%]">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">PROS</h4>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      {review.pros.slice(0, 2).map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-1">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-grow min-w-[45%]">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">CONS</h4>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      {review.cons.slice(0, 2).map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-1">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="font-bold">{review.price}</span>
                  <span className="text-primary text-sm font-medium">Read Review</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 