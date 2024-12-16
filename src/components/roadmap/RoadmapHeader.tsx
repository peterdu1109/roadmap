import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { SearchBar } from '../ui/SearchBar';
import { Stats } from '../ui/Stats';
import type { Category } from '../../constants/categories';

interface RoadmapHeaderProps {
  itemCount: number;
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  categories: readonly Category[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  stats: {
    completed: number;
    inProgress: number;
    planned: number;
  };
}

export function RoadmapHeader({ 
  itemCount, 
  activeCategory, 
  onCategoryChange, 
  categories,
  searchQuery,
  onSearchChange,
  stats,
}: RoadmapHeaderProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Development Progress</h2>
          <p className="text-gray-400">
            {itemCount} items in {activeCategory.toLowerCase()}
          </p>
        </div>
        <div className="w-full md:w-64">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
      </div>
      
      <Stats {...stats} />
      
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
}