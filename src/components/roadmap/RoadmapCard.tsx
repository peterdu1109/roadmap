import React from 'react';
import { Clock, Users, Pencil, Trash } from 'lucide-react';
import type { RoadmapItem } from '../../types/roadmap';
import { StatusBadge } from '../ui/StatusBadge';
import { ProgressBar } from '../ui/ProgressBar';

interface RoadmapCardProps extends RoadmapItem {
  isAdmin?: boolean;
  onEdit?: (item: RoadmapItem) => void;
  onDelete?: (id: string) => void;
}

export function RoadmapCard({ 
  id,
  title, 
  description, 
  progress, 
  team, 
  targetDate, 
  status,
  isAdmin,
  onEdit,
  onDelete,
}: RoadmapCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <>
              <button
                onClick={() => onEdit?.({ id, title, description, progress, team, targetDate, status })}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete?.(id)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Trash className="w-4 h-4" />
              </button>
            </>
          )}
          <StatusBadge status={status} />
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="space-y-4">
        <ProgressBar progress={progress} />
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>{team}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{targetDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}