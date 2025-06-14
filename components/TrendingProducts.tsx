"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Sample trending products data
const trendingProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    image: '/sony-wh1000xm5.jpg',
    price: '$399',
    slug: 'sony-wh-1000xm5',
    rating: 4.9
  },
  {
    id: 2,
    name: 'iPad Pro M2',
    category: 'Tablets',
    image: '/ipad-pro-m2.jpg',
    price: '$1099',
    slug: 'ipad-pro-m2',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Samsung 55" OLED TV',
    category: 'TVs',
    image: '/samsung-oled.jpg',
    price: '$1799',
    slug: 'samsung-55-oled-tv',
    rating: 4.7
  },
  {
    id: 4,
    name: 'DJI Mavic 3 Pro',
    category: 'Drones',
    image: '/dji-mavic3-pro.jpg',
    price: '$1599',
    slug: 'dji-mavic-3-pro',
    rating: 4.8
  },
  {
    id: 5,
    name: 'Sonos Arc',
    category: 'Speakers',
    image: '/sonos-arc.jpg',
    price: '$899',
    slug: 'sonos-arc',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Bose QuietComfort Ultra',
    category: 'Headphones',
    image: '/bose-qc-ultra.jpg',
    price: '$429',
    slug: 'bose-quietcomfort-ultra',
    rating: 4.7
  }
];

export function TrendingProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    
    const scrollAmount = 300; // pixels to scroll
    const newScrollPosition = direction === 'left' 
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newScrollPosition);
  };
  
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  
  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="flex justify-end mb-6 gap-2">
        <button 
          onClick={() => scroll('left')}
          disabled={scrollPosition <= 0}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Scroll left"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Scroll right"
        >
          <FiArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Carousel */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x"
      >
        {trendingProducts.map((product) => (
          <div 
            key={product.id}
            className="flex-none w-[280px] snap-start"
          >
            <Link href={`/reviews/${product.slug}`}>
              <div className="card h-full transition-transform hover:scale-[1.02] duration-300">
                <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                
                <div className="p-4">
                  <span className="text-xs font-medium text-primary">
                    {product.category}
                  </span>
                  
                  <h3 className="font-semibold text-lg mt-1 text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 