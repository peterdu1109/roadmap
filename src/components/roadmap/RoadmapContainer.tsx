import React from 'react';
import { RoadmapHeader } from './RoadmapHeader';
import { RoadmapContent } from './RoadmapContent';
import { RoadmapControls } from './RoadmapControls';
import { CATEGORIES } from '../../constants/categories';
import { useRoadmapFilters } from '../../hooks/useRoadmapFilters';
import { useRoadmapControls } from '../../hooks/useRoadmapControls';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapContainerProps {
  items: RoadmapItem[];
  isAdmin?: boolean;
}

export function RoadmapContainer({ items, isAdmin = false }: RoadmapContainerProps) {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredItems: categoryFilteredItems,
    stats,
    resetFilters,
  } = useRoadmapFilters(items);

  const {
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    selectedTeam,
    setSelectedTeam,
    filteredItems: finalItems,
  } = useRoadmapControls(categoryFilteredItems);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <RoadmapHeader
        itemCount={finalItems.length}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={CATEGORIES}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        stats={stats}
      />

      <RoadmapControls
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        sortBy={sortBy}
        onSortChange={setSortBy}
        selectedTeam={selectedTeam}
        onTeamChange={setSelectedTeam}
        items={categoryFilteredItems}
      />

      <RoadmapContent
        items={finalItems}
        viewMode={viewMode}
        onResetFilters={resetFilters}
        isAdmin={isAdmin}
      />
    </main>
  );
}