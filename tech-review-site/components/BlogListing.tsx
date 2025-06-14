"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiSearch } from 'react-icons/fi';

// Sample blog articles data
const articles = [
  {
    id: 1,
    title: 'The Future of AI in Smartphone Cameras',
    slug: 'future-of-ai-in-smartphone-cameras',
    excerpt: 'How artificial intelligence is transforming mobile photography and what to expect in upcoming flagship devices.',
    image: '/article-ai-cameras.jpg',
    category: 'Technology',
    readTime: '6 min read',
    date: '2023-10-15',
    author: {
      name: 'Alex Chen',
      avatar: '/authors/alex-chen.jpg'
    }
  },
  {
    id: 2,
    title: 'Best Budget Phones of 2024',
    slug: 'best-budget-phones-2024',
    excerpt: 'Our comprehensive guide to the most value-packed smartphones that won't break the bank this year.',
    image: '/article-budget-phones.jpg',
    category: 'Buying Guide',
    readTime: '8 min read',
    date: '2024-01-28',
    author: {
      name: 'Sarah Johnson',
      avatar: '/authors/sarah-johnson.jpg'
    }
  },
  {
    id: 3,
    title: 'Apple vs Samsung: Ecosystem Comparison',
    slug: 'apple-vs-samsung-ecosystem',
    excerpt: 'A detailed analysis of the two tech giants' ecosystems and how they integrate across devices and services.',
    image: '/article-apple-samsung.jpg',
    category: 'Comparison',
    readTime: '10 min read',
    date: '2024-02-05',
    author: {
      name: 'Michael Torres',
      avatar: '/authors/michael-torres.jpg'
    }
  },
  {
    id: 4,
    title: 'Understanding CPU vs GPU for AI Processing',
    slug: 'cpu-vs-gpu-ai-processing',
    excerpt: 'Breaking down the differences between CPUs and GPUs for artificial intelligence tasks in modern devices.',
    image: '/article-cpu-gpu.jpg',
    category: 'Technology',
    readTime: '7 min read',
    date: '2024-01-15',
    author: {
      name: 'Priya Patel',
      avatar: '/authors/priya-patel.jpg'
    }
  },
  {
    id: 5,
    title: 'How to Extend Your Smartphone Battery Life',
    slug: 'extend-smartphone-battery-life',
    excerpt: 'Practical tips and settings adjustments to maximize the battery life of your smartphone.',
    image: '/article-battery-life.jpg',
    category: 'How To',
    readTime: '5 min read',
    date: '2024-02-10',
    author: {
      name: 'Chris Wilson',
      avatar: '/authors/chris-wilson.jpg'
    }
  },
  {
    id: 6,
    title: 'The Rise of Foldable Phones: Worth the Hype?',
    slug: 'rise-of-foldable-phones',
    excerpt: 'Are foldable smartphones ready for mainstream adoption? We analyze the current state of the technology.',
    image: '/article-foldable-phones.jpg',
    category: 'Analysis',
    readTime: '9 min read',
    date: '2024-01-20',
    author: {
      name: 'Sophia Lee',
      avatar: '/authors/sophia-lee.jpg'
    }
  }
];

// Categories for filtering
const categories = [
  'All',
  'Technology',
  'Buying Guide',
  'Comparison',
  'How To',
  'Analysis',
  'News'
];

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter articles based on search term and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiSearch />
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Showing <span className="font-semibold text-black dark:text-white">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'}
      </div>
      
      {/* Articles list */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg font-medium">No articles found</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="card overflow-hidden">
              <Link href={`/blog/${article.slug}`} className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3 lg:w-1/4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-5 md:p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                      {article.category}
                    </span>
                    <span>
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" size={14} />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center mt-4">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="ml-2 text-sm font-medium">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
          
          {/* Pagination placeholder */}
          <div className="flex justify-center pt-6">
            <div className="flex space-x-1">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 