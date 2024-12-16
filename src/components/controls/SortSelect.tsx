import React from 'react';
import { SortAsc } from 'lucide-react';

export type SortOption = 'date' | 'progress' | 'status';

interface SortSelectProps {
  value: SortOption;
  onChange: (option: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
      <SortAsc size={20} className="text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="bg-transparent text-white border-none outline-none"
      >
        <option value="date">By Date</option>
        <option value="progress">By Progress</option>
        <option value="status">By Status</option>
      </select>
    </div>
  );
}