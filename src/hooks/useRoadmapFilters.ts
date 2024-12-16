import { useState, useMemo, useCallback } from 'react';
import type { Category } from '../constants/categories';
import type { RoadmapItem } from '../types/roadmap';

export function useRoadmapFilters(items: RoadmapItem[]) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  const stats = useMemo(() => {
    return {
      total: filteredItems.length,
      completed: filteredItems.filter(item => item.status === 'completed').length,
      inProgress: filteredItems.filter(item => item.status === 'in-progress').length,
      planned: filteredItems.filter(item => item.status === 'planned').length,
    };
  }, [filteredItems]);

  const resetFilters = useCallback(() => {
    setActiveCategory('All');
    setSearchQuery('');
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredItems,
    stats,
    resetFilters,
  };
}