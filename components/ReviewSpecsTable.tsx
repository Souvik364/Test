"use client";

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ReviewSpecsTableProps {
  specs: Record<string, string | number | boolean>;
}

export default function ReviewSpecsTable({ specs }: ReviewSpecsTableProps) {
  const [expanded, setExpanded] = useState(false);
  
  // Format spec key into readable form
  const formatSpecKey = (key: string) => {
    return key
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Show only first 5 specs when collapsed
  const visibleSpecs = expanded ? Object.entries(specs) : Object.entries(specs).slice(0, 5);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <table className="w-full text-left">
        <tbody>
          {visibleSpecs.map(([key, value]) => (
            <tr 
              key={key}
              className="border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white w-1/3">
                {formatSpecKey(key)}
              </td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {Object.keys(specs).length > 5 && (
        <div 
          className="py-3 px-4 text-center text-primary font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <span className="flex items-center justify-center">
              Show Less <FiChevronUp className="ml-1" />
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Show All Specifications <FiChevronDown className="ml-1" />
            </span>
          )}
        </div>
      )}
    </div>
  );
} 