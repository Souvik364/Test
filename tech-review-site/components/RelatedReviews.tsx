"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

interface RelatedReviewsProps {
  currentSlug: string;
  brand: string;
  category: string;
}

// Sample related reviews data
const reviewsData = [
  {
    id: 2,
    title: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    brand: 'Apple',
    category: 'Smartphone',
    image: '/iphone15-pro.jpg',
    rating: 4.7,
    excerpt: 'Apple's flagship phone with pro-grade cameras and the powerful A17 Pro chip.'
  },
  {
    id: 3,
    title: 'iPhone 15',
    slug: 'iphone-15',
    brand: 'Apple',
    category: 'Smartphone',
    image: '/iphone15.jpg',
    rating: 4.5,
    excerpt: 'A fantastic all-around phone with great cameras and the capable A16 chip.'
  },
  {
    id: 4,
    title: 'Samsung Galaxy S23 Ultra',
    slug: 'samsung-galaxy-s23-ultra',
    brand: 'Samsung',
    category: 'Smartphone',
    image: '/samsung-s23-ultra.jpg',
    rating: 4.7,
    excerpt: 'Samsung's powerhouse device with a versatile camera system and S-Pen integration.'
  },
  {
    id: 5,
    title: 'Google Pixel 8 Pro',
    slug: 'google-pixel-8-pro',
    brand: 'Google',
    category: 'Smartphone',
    image: '/pixel-8-pro.jpg',
    rating: 4.6,
    excerpt: 'Google's flagship with a focus on AI and computational photography.'
  }
];

export default function RelatedReviews({ currentSlug, brand, category }: RelatedReviewsProps) {
  // Filter out the current review and any with different category
  // Then prioritize same brand, but include some from different brands
  const filteredReviews = reviewsData
    .filter(review => review.slug !== currentSlug && review.category === category)
    .sort((a, b) => {
      // Sort so that same brand comes first
      if (a.brand === brand && b.brand !== brand) return -1;
      if (a.brand !== brand && b.brand === brand) return 1;
      // Then by rating
      return b.rating - a.rating;
    })
    .slice(0, 3); // Take only top 3

  if (filteredReviews.length === 0) return null;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="font-bold text-lg mb-4">Related Reviews</h3>
      
      <div className="space-y-4">
        {filteredReviews.map(review => (
          <Link 
            key={review.id}
            href={`/reviews/${review.slug}`}
            className="flex gap-3 group"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {review.title}
              </h4>
              
              <div className="flex items-center mb-1">
                <FiStar className="text-yellow-400 fill-current w-3 h-3" />
                <span className="ml-1 text-xs">{review.rating}</span>
              </div>
              
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {review.brand}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 