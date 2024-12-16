import React from 'react';
import type { RoadmapStatus } from '../../types/roadmap';

interface StatusBadgeProps {
  status: RoadmapStatus;
}

const statusStyles = {
  completed: 'bg-green-500/20 text-green-400',
  'in-progress': 'bg-blue-500/20 text-blue-400',
  planned: 'bg-gray-500/20 text-gray-400'
} as const;

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned'
} as const;

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}