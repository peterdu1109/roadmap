import React from 'react';
import type { RoadmapItem } from '../../types/roadmap';
import { RoadmapCard } from '../roadmap/RoadmapCard';
import { formatQuarter } from '../../utils/date';

interface TimelineQuarterProps {
  quarter: string;
  items: RoadmapItem[];
}

export function TimelineQuarter({ quarter, items }: TimelineQuarterProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-xl font-bold">{formatQuarter(quarter)}</h3>
        <div className="flex-1 h-px bg-gray-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <RoadmapCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}