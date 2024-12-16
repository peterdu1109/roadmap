import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search roadmap items..."
        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg
          text-white placeholder-gray-400 focus:outline-none focus:border-blue-500
          transition-colors"
      />
    </div>
  );
}