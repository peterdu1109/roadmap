import React from 'react';
import { ViewToggle } from '../controls/ViewToggle';
import { SortSelect } from '../controls/SortSelect';
import { TeamFilter } from '../controls/TeamFilter';
import type { ViewMode } from '../../types/controls';
import type { SortOption } from '../../types/controls';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapControlsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
  selectedTeam: string | null;
  onTeamChange: (team: string | null) => void;
  items: RoadmapItem[];
}

export function RoadmapControls({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  selectedTeam,
  onTeamChange,
  items,
}: RoadmapControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <ViewToggle mode={viewMode} onChange={onViewModeChange} />
      <SortSelect value={sortBy} onChange={onSortChange} />
      <TeamFilter
        items={items}
        selectedTeam={selectedTeam}
        onChange={onTeamChange}
      />
    </div>
  );
}