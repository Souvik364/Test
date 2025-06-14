"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiStar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Sample review data (in a real app, this would come from a database)
const reviews = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    image: '/iphone15-pro-max.jpg',
    rating: 4.8,
    excerpt: 'Apple's flagship offers incredible performance and camera upgrades, but is it worth the premium price?',
    brand: 'Apple',
    category: 'Smartphone'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    slug: 'samsung-galaxy-s23-ultra',
    image: '/samsung-s23-ultra.jpg',
    rating: 4.7,
    excerpt: 'Samsung's powerhouse device brings a top-tier camera system and S-Pen integration in one premium package.',
    brand: 'Samsung',
    category: 'Smartphone'
  },
  {
    id: 3,
    title: 'Google Pixel 8 Pro',
    slug: 'google-pixel-8-pro',
    image: '/pixel-8-pro.jpg',
    rating: 4.6,
    excerpt: 'Google's AI-focused flagship delivers exceptional photography and smart features in a refined design.',
    brand: 'Google',
    category: 'Smartphone'
  },
  {
    id: 4,
    title: 'MacBook Air M3',
    slug: 'macbook-air-m3',
    image: '/macbook-air-m3.jpg',
    rating: 4.9,
    excerpt: 'Apple's thinnest laptop gets even more powerful with the M3 chip, offering incredible performance and battery life.',
    brand: 'Apple',
    category: 'Laptop'
  },
];

export function FeaturedReviews() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {reviews.map((review) => (
          <motion.div key={review.id} variants={item}>
            <Link href={`/reviews/${review.slug}`} className="card h-full flex flex-col">
              <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {review.brand} / {review.category}
                  </span>
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <FiStar className="w-3 h-3 fill-current" />
                    <span className="text-xs font-semibold">{review.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {review.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {review.excerpt}
                </p>
                
                <div className="inline-flex items-center text-primary font-medium text-sm">
                  Read Review <FiArrowRight className="ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-10">
        <Link 
          href="/reviews"
          className="btn btn-primary inline-flex items-center"
        >
          View All Reviews
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </>
  );
} 