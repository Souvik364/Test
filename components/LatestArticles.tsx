"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Sample articles data
const articles = [
  {
    id: 1,
    title: 'The Future of AI in Smartphone Cameras',
    slug: 'future-of-ai-in-smartphone-cameras',
    excerpt: 'How artificial intelligence is transforming mobile photography and what to expect in upcoming flagship devices.',
    image: '/article-ai-cameras.jpg',
    category: 'Technology',
    readTime: '6 min read',
    date: '2023-10-15'
  },
  {
    id: 2,
    title: 'Best Budget Phones of 2024',
    slug: 'best-budget-phones-2024',
    excerpt: 'Our comprehensive guide to the most value-packed smartphones that won't break the bank this year.',
    image: '/article-budget-phones.jpg',
    category: 'Buying Guide',
    readTime: '8 min read',
    date: '2024-01-28'
  },
  {
    id: 3,
    title: 'Apple vs Samsung: Ecosystem Comparison',
    slug: 'apple-vs-samsung-ecosystem',
    excerpt: 'A detailed analysis of the two tech giants' ecosystems and how they integrate across devices and services.',
    image: '/article-apple-samsung.jpg',
    category: 'Comparison',
    readTime: '10 min read',
    date: '2024-02-05'
  }
];

export function LatestArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.article 
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card overflow-hidden flex flex-col h-full"
        >
          <Link href={`/blog/${article.slug}`}>
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-md">
                  {article.category}
                </span>
              </div>
            </div>
          </Link>
          
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <FiClock className="mr-1" size={14} />
                {article.readTime}
              </span>
            </div>
            
            <Link href={`/blog/${article.slug}`} className="group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
              {article.excerpt}
            </p>
            
            <Link 
              href={`/blog/${article.slug}`}
              className="inline-flex items-center text-primary font-medium text-sm group"
            >
              Read Article 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
} 