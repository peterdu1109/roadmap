import { useState } from 'react';
import type { ViewMode } from '../components/controls/ViewToggle';
import type { SortOption } from '../components/controls/SortSelect';
import type { RoadmapItem } from '../types/roadmap';
import { sortByDate } from '../utils/date';

export function useRoadmapControls(items: RoadmapItem[]) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return sortByDate(a.targetDate, b.targetDate);
      case 'progress':
        return b.progress - a.progress;
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const filteredItems = selectedTeam
    ? sortedItems.filter(item => item.team === selectedTeam)
    : sortedItems;

  return {
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    selectedTeam,
    setSelectedTeam,
    filteredItems,
  };
}