import React from 'react';
import { RoadmapGrid } from './RoadmapGrid';
import { TimelineView } from '../timeline/TimelineView';
import type { ViewMode } from '../../types/controls';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapContentProps {
  items: RoadmapItem[];
  viewMode: ViewMode;
  onResetFilters: () => void;
  isAdmin?: boolean;
}

export function RoadmapContent({ items, viewMode, onResetFilters, isAdmin = false }: RoadmapContentProps) {
  return viewMode === 'grid' ? (
    <RoadmapGrid items={items} onResetFilters={onResetFilters} isAdmin={isAdmin} />
  ) : (
    <TimelineView items={items} onResetFilters={onResetFilters} isAdmin={isAdmin} />
  );
}