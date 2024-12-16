import React from 'react';
import { Users } from 'lucide-react';
import type { RoadmapItem } from '../../types/roadmap';

interface TeamFilterProps {
  items: RoadmapItem[];
  selectedTeam: string | null;
  onChange: (team: string | null) => void;
}

export function TeamFilter({ items, selectedTeam, onChange }: TeamFilterProps) {
  const teams = Array.from(new Set(items.map(item => item.team)));

  return (
    <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
      <Users size={20} className="text-gray-400" />
      <select
        value={selectedTeam ?? ''}
        onChange={(e) => onChange(e.target.value || null)}
        className="bg-transparent text-white border-none outline-none"
      >
        <option value="">All Teams</option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
}