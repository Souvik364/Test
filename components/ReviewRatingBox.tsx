"use client";

import { useMemo } from 'react';

interface ReviewRatingBoxProps {
  rating: number;
}

export default function ReviewRatingBox({ rating }: ReviewRatingBoxProps) {
  // Calculate filled stars, partial stars, and empty stars
  const stars = useMemo(() => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);
    
    return {
      filled: Array(filledStars).fill(null),
      half: hasHalfStar ? [null] : [],
      empty: Array(emptyStars).fill(null)
    };
  }, [rating]);
  
  // Calculate rating verbal descriptions
  const ratingText = useMemo(() => {
    if (rating >= 4.8) return 'Exceptional';
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4.0) return 'Very Good';
    if (rating >= 3.5) return 'Good';
    if (rating >= 3.0) return 'Average';
    if (rating >= 2.0) return 'Below Average';
    return 'Poor';
  }, [rating]);
  
  // Calculate colors based on rating
  const ratingColor = useMemo(() => {
    if (rating >= 4.5) return 'text-green-500';
    if (rating >= 4.0) return 'text-green-400';
    if (rating >= 3.5) return 'text-yellow-500';
    if (rating >= 3.0) return 'text-yellow-400';
    if (rating >= 2.0) return 'text-orange-400';
    return 'text-red-500';
  }, [rating]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center mb-2">
        {/* Filled Stars */}
        {stars.filled.map((_, i) => (
          <svg key={`filled-${i}`} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        
        {/* Half Star */}
        {stars.half.map((_, i) => (
          <svg key={`half-${i}`} className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        
        {/* Empty Stars */}
        {stars.empty.map((_, i) => (
          <svg key={`empty-${i}`} className="w-8 h-8 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      
      <div className={`font-medium ${ratingColor}`}>
        {ratingText}
      </div>
      
      <div className="mt-4 w-full space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span>Performance</span>
          <div className="flex items-center">
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${(rating / 5) * 100}%` }} 
              />
            </div>
            <span className="text-xs">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span>Features</span>
          <div className="flex items-center">
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${(rating - 0.2) / 5 * 100}%` }} 
              />
            </div>
            <span className="text-xs">{(rating - 0.2).toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span>Value</span>
          <div className="flex items-center">
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${(rating - 0.3) / 5 * 100}%` }} 
              />
            </div>
            <span className="text-xs">{(rating - 0.3).toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span>Design</span>
          <div className="flex items-center">
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${(rating + 0.1) / 5 * 100}%` }} 
              />
            </div>
            <span className="text-xs">{Math.min(5, (rating + 0.1)).toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 