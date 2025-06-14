"use client";

import { useState } from 'react';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    setStatus('loading');
    
    // This would normally send a request to your API or newsletter service
    // For demo purposes, we're just simulating a successful subscription
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-primary/20 dark:bg-primary/10 p-3 rounded-full">
          <FiMail className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
        Subscribe to our newsletter to receive the latest tech reviews, news, and exclusive deals straight to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              disabled={status === 'loading' || status === 'success'}
            />
            {status === 'error' && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FiAlertCircle className="w-5 h-5 text-red-500" />
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap
              ${status === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-primary hover:bg-primary-dark text-white'
              }
              disabled:opacity-70
            `}
          >
            {status === 'loading' && 'Subscribing...'}
            {status === 'success' && (
              <span className="flex items-center justify-center">
                Subscribed <FiCheck className="ml-1" />
              </span>
            )}
            {(status === 'idle' || status === 'error') && 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <p className={`mt-2 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
} 