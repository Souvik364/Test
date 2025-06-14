"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';

interface ReviewGalleryProps {
  mainImage: string;
  gallery: string[];
}

export default function ReviewGallery({ mainImage, gallery }: ReviewGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const allImages = [mainImage, ...gallery];
  
  const handleThumbnailClick = (image: string) => {
    setCurrentImage(image);
  };
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowLightbox(true);
    // Prevent scrolling when lightbox is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };
  
  const closeLightbox = () => {
    setShowLightbox(false);
    // Re-enable scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };
  
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer group"
          onClick={() => openLightbox(allImages.indexOf(currentImage))}
        >
          <Image
            src={currentImage}
            alt="Product image"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 p-2 rounded-full transition-opacity">
              <FiMaximize className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-all ${
                currentImage === image ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleThumbnailClick(image)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-xl"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 bg-black bg-opacity-50 rounded-full p-2 text-white"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={allImages[lightboxIndex]}
              alt="Product image"
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 bg-black bg-opacity-50 rounded-full p-2 text-white"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
} 