"use client";

import { useState } from 'react';
import { FiChevronDown, FiX, FiFilter } from 'react-icons/fi';

type FilterSection = {
  name: string;
  options: { value: string; label: string; count: number }[];
  expanded?: boolean;
};

export default function ReviewFilters() {
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [filterSections, setFilterSections] = useState<FilterSection[]>([
    {
      name: 'Brand',
      expanded: true,
      options: [
        { value: 'apple', label: 'Apple', count: 12 },
        { value: 'samsung', label: 'Samsung', count: 14 },
        { value: 'google', label: 'Google', count: 8 },
        { value: 'sony', label: 'Sony', count: 6 },
        { value: 'xiaomi', label: 'Xiaomi', count: 7 },
      ],
    },
    {
      name: 'Category',
      options: [
        { value: 'smartphones', label: 'Smartphones', count: 32 },
        { value: 'laptops', label: 'Laptops', count: 18 },
        { value: 'tablets', label: 'Tablets', count: 9 },
        { value: 'earbuds', label: 'Earbuds', count: 11 },
        { value: 'smartwatches', label: 'Smartwatches', count: 7 },
      ],
    },
    {
      name: 'Price Range',
      options: [
        { value: 'budget', label: 'Budget ($100-$300)', count: 14 },
        { value: 'mid', label: 'Mid-range ($300-$700)', count: 22 },
        { value: 'premium', label: 'Premium ($700-$1000)', count: 18 },
        { value: 'ultra', label: 'Ultra Premium ($1000+)', count: 16 },
      ],
    },
    {
      name: 'Rating',
      options: [
        { value: '5', label: '5 Stars', count: 7 },
        { value: '4', label: '4+ Stars', count: 28 },
        { value: '3', label: '3+ Stars', count: 15 },
        { value: '2', label: '2+ Stars', count: 6 },
      ],
    },
  ]);

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    Brand: [],
    Category: [],
    'Price Range': [],
    Rating: [],
  });

  const toggleSection = (sectionName: string) => {
    setFilterSections(sections =>
      sections.map(section => {
        if (section.name === sectionName) {
          return { ...section, expanded: !section.expanded };
        }
        return section;
      })
    );
  };

  const toggleFilter = (section: string, value: string) => {
    setSelectedFilters(prevFilters => {
      const currentFilters = prevFilters[section] || [];
      
      if (currentFilters.includes(value)) {
        return {
          ...prevFilters,
          [section]: currentFilters.filter(item => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [section]: [...currentFilters, value],
        };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      Brand: [],
      Category: [],
      'Price Range': [],
      Rating: [],
    });
  };

  const activeFiltersCount = Object.values(selectedFilters).flat().length;

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-6 flex justify-between items-center">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
          onClick={() => setFiltersExpanded(!filtersExpanded)}
        >
          <FiFilter className="w-5 h-5" />
          <span className="font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
        
        {activeFiltersCount > 0 && (
          <button
            className="text-sm text-primary font-medium"
            onClick={clearFilters}
          >
            Clear all
          </button>
        )}
      </div>
    
      {/* Filter sidebar - mobile (slide-in) */}
      {filtersExpanded && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setFiltersExpanded(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {renderFilterSections()}
            
            <div className="mt-6 flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-2 border border-gray-300 dark:border-gray-700 rounded-lg font-medium"
              >
                Clear all
              </button>
              <button
                onClick={() => setFiltersExpanded(false)}
                className="flex-1 py-2 bg-primary text-white rounded-lg font-medium"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Filter sidebar - desktop (permanent) */}
      <div className="hidden lg:block space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Filters</h2>
          {activeFiltersCount > 0 && (
            <button
              className="text-sm text-primary font-medium"
              onClick={clearFilters}
            >
              Clear all
            </button>
          )}
        </div>
        
        {renderFilterSections()}
      </div>
    </>
  );

  function renderFilterSections() {
    return filterSections.map(section => (
      <div key={section.name} className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4 last:border-0">
        <button
          className="flex justify-between items-center w-full text-left py-2"
          onClick={() => toggleSection(section.name)}
        >
          <h3 className="font-semibold">{section.name}</h3>
          <FiChevronDown
            className={`transform transition-transform ${
              section.expanded ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {section.expanded && (
          <div className="mt-2 space-y-1">
            {section.options.map((option) => {
              const isSelected = selectedFilters[section.name]?.includes(option.value);
              
              return (
                <div key={option.value} className="flex items-center">
                  <label className="flex items-center cursor-pointer py-1 w-full">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleFilter(section.name, option.value)}
                      className="form-checkbox rounded text-primary focus:ring-primary h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      {option.label}
                    </span>
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                      ({option.count})
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    ));
  }
} 