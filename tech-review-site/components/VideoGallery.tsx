"use client";

import { useState } from 'react';
import { FiPlayCircle, FiClock, FiCalendar, FiEye } from 'react-icons/fi';
import Image from 'next/image';

// Sample video data
const videos = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max Unboxing & First Impressions',
    thumbnail: '/video-iphone15-unboxing.jpg',
    duration: '12:34',
    views: '102K',
    date: '2023-09-22',
    embedId: 'abc123',
    category: 'Unboxing'
  },
  {
    id: 2,
    title: 'Galaxy S23 Ultra vs iPhone 15 Pro Max: Camera Comparison!',
    thumbnail: '/video-s23-iphone-comparison.jpg',
    duration: '18:43',
    views: '245K',
    date: '2023-10-05',
    embedId: 'def456',
    category: 'Comparison'
  },
  {
    id: 3,
    title: 'MacBook Air M3 Complete Review - After 2 Weeks of Use',
    thumbnail: '/video-macbook-air-m3.jpg',
    duration: '22:18',
    views: '189K',
    date: '2023-11-10',
    embedId: 'ghi789',
    category: 'Review'
  },
  {
    id: 4,
    title: 'How to Set Up Your New Android Phone - Complete Guide 2024',
    thumbnail: '/video-android-setup.jpg',
    duration: '15:22',
    views: '76K',
    date: '2024-01-05',
    embedId: 'jkl012',
    category: 'Tutorial'
  },
  {
    id: 5,
    title: 'Sony WH-1000XM5 Review - The Best Gets Better!',
    thumbnail: '/video-sony-wh1000xm5.jpg',
    duration: '14:52',
    views: '134K',
    date: '2023-08-18',
    embedId: 'mno345',
    category: 'Review'
  },
  {
    id: 6,
    title: 'iPad Pro M2 vs Samsung Galaxy Tab S9 Ultra - Ultimate Comparison',
    thumbnail: '/video-ipad-tab-comparison.jpg',
    duration: '25:10',
    views: '208K',
    date: '2023-12-12',
    embedId: 'pqr678',
    category: 'Comparison'
  },
  {
    id: 7,
    title: 'Google Pixel 8 Pro Unboxing & First Look',
    thumbnail: '/video-pixel-8-unboxing.jpg',
    duration: '11:47',
    views: '98K',
    date: '2023-10-14',
    embedId: 'stu901',
    category: 'Unboxing'
  },
  {
    id: 8,
    title: '10 Hidden iPhone Features You Should Be Using!',
    thumbnail: '/video-iphone-tips.jpg',
    duration: '13:25',
    views: '322K',
    date: '2024-01-22',
    embedId: 'vwx234',
    category: 'Tutorial'
  }
];

// Video categories
const categories = [
  'All',
  'Review',
  'Comparison',
  'Unboxing',
  'Tutorial',
  'Hands-On'
];

type SortOption = 'newest' | 'oldest' | 'popular';

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  
  // Filter videos based on selected category
  const filteredVideos = videos.filter(video => {
    return selectedCategory === 'All' || video.category === selectedCategory;
  });
  
  // Sort videos based on selected option
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'popular':
        return parseInt(b.views.replace(/[^0-9]/g, '')) - 
               parseInt(a.views.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  });
  
  const openVideoModal = (video: (typeof videos)[0]) => {
    setActiveVideo(video);
    setShowModal(true);
  };

  return (
    <div>
      {/* Category and Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-4 pr-8 cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedVideos.map((video) => (
          <div 
            key={video.id}
            className="card overflow-hidden cursor-pointer group"
            onClick={() => openVideoModal(video)}
          >
            <div className="relative">
              <div className="aspect-video relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <FiPlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-3">
                  <FiCalendar className="mr-1" size={14} />
                  {new Date(video.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center">
                  <FiEye className="mr-1" size={14} />
                  {video.views} views
                </span>
              </div>
              
              <div className="mt-3">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  {video.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg font-medium">No videos found</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Try selecting a different category</p>
        </div>
      )}
      
      {/* Video Modal */}
      {showModal && activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-5xl">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-bold text-lg line-clamp-1">{activeVideo.title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                &times;
              </button>
            </div>
            
            <div className="aspect-video relative">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.embedId}`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span className="flex items-center">
                    <FiClock className="mr-1" />
                    {activeVideo.duration}
                  </span>
                  <span className="flex items-center">
                    <FiEye className="mr-1" />
                    {activeVideo.views} views
                  </span>
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {new Date(activeVideo.date).toLocaleDateString()}
                  </span>
                </div>
                
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  {activeVideo.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 