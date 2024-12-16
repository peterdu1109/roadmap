import React from 'react';
import { RoadmapCard } from './RoadmapCard';
import { EmptyState } from '../ui/EmptyState';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapGridProps {
  items: RoadmapItem[];
  onResetFilters?: () => void;
}

export function RoadmapGrid({ items, onResetFilters }: RoadmapGridProps) {
  if (items.length === 0) {
    return <EmptyState type="filter" onReset={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <RoadmapCard key={item.id} {...item} />
      ))}
    </div>
  );
}