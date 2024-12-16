import React from 'react';
import { Search, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  type: 'search' | 'filter';
  onReset?: () => void;
}

export function EmptyState({ type, onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {type === 'search' ? (
        <Search className="w-12 h-12 text-gray-500 mb-4" />
      ) : (
        <RefreshCw className="w-12 h-12 text-gray-500 mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">
        {type === 'search' ? 'No results found' : 'No items match your filters'}
      </h3>
      <p className="text-gray-400 text-center mb-4">
        {type === 'search'
          ? 'Try adjusting your search terms'
          : 'Try adjusting your filter criteria'}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Reset {type === 'search' ? 'search' : 'filters'}
        </button>
      )}
    </div>
  );
}