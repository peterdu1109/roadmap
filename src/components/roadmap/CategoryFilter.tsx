import React from 'react';
import type { Category } from '../../constants/categories';

interface CategoryFilterProps {
  categories: readonly Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all
            ${activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}