import React from 'react';
import { CATEGORIES } from '../../constants/categories';
import type { RoadmapItem } from '../../types/roadmap';

interface RoadmapItemFormProps {
  initialData?: Partial<RoadmapItem>;
  onSubmit: (data: Omit<RoadmapItem, 'id'>) => void;
  onCancel: () => void;
}

export function RoadmapItemForm({ initialData, onSubmit, onCancel }: RoadmapItemFormProps) {
  const [formData, setFormData] = React.useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    progress: initialData?.progress || 0,
    team: initialData?.team || '',
    targetDate: initialData?.targetDate || '',
    status: initialData?.status || 'planned',
    category: initialData?.category || CATEGORIES[1],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="team" className="block text-sm font-medium mb-1">Team</label>
          <input
            type="text"
            id="team"
            value={formData.team}
            onChange={(e) => setFormData(prev => ({ ...prev, team: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="targetDate" className="block text-sm font-medium mb-1">Target Date</label>
          <select
            id="targetDate"
            value={formData.targetDate}
            onChange={(e) => setFormData(prev => ({ ...prev, targetDate: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
            required
          >
            <option value="">Select Quarter</option>
            {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'].map(quarter => (
              <option key={quarter} value={quarter}>{quarter}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
            required
          >
            {CATEGORIES.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as RoadmapItem['status'] }))}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"
            required
          >
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="progress" className="block text-sm font-medium mb-1">
          Progress: {formData.progress}%
        </label>
        <input
          type="range"
          id="progress"
          value={formData.progress}
          onChange={(e) => setFormData(prev => ({ ...prev, progress: parseInt(e.target.value) }))}
          className="w-full"
          min="0"
          max="100"
          step="5"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
}