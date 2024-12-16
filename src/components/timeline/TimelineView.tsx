import React from 'react';
import type { RoadmapItem } from '../../types/roadmap';
import { groupByQuarter } from '../../utils/timeline';
import { TimelineQuarter } from './TimelineQuarter';
import { EmptyState } from '../ui/EmptyState';

interface TimelineViewProps {
  items: RoadmapItem[];
  onResetFilters?: () => void;
}

export function TimelineView({ items, onResetFilters }: TimelineViewProps) {
  if (items.length === 0) {
    return <EmptyState type="filter" onReset={onResetFilters} />;
  }

  const groupedItems = groupByQuarter(items);
  const quarters = Object.keys(groupedItems).sort();

  return (
    <div className="space-y-8">
      {quarters.map((quarter) => (
        <TimelineQuarter
          key={quarter}
          quarter={quarter}
          items={groupedItems[quarter]}
        />
      ))}
    </div>
  );
}