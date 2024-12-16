import React from 'react';
import { X } from 'lucide-react';
import { RoadmapItemForm } from './RoadmapItemForm';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<RoadmapItem, 'id'>) => void;
  initialData?: Partial<RoadmapItem>;
  title: string;
}

export function RoadmapItemModal({ isOpen, onClose, onSubmit, initialData, title }: RoadmapItemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <RoadmapItemForm
            initialData={initialData}
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}