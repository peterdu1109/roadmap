import React from 'react';
import { LayoutGrid, ListOrdered } from 'lucide-react';

export type ViewMode = 'grid' | 'timeline';

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-800 rounded-lg">
      <button
        onClick={() => onChange('grid')}
        className={`p-2 rounded ${
          mode === 'grid'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <LayoutGrid size={20} />
      </button>
      <button
        onClick={() => onChange('timeline')}
        className={`p-2 rounded ${
          mode === 'timeline'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <ListOrdered size={20} />
      </button>
    </div>
  );
}