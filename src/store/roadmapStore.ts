import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { RoadmapItem } from '../types/roadmap';
import { roadmapData as initialData } from '../data/roadmap';

interface RoadmapState {
  items: RoadmapItem[];
  addItem: (item: Omit<RoadmapItem, 'id'>) => void;
  updateItem: (id: string, item: Partial<RoadmapItem>) => void;
  deleteItem: (id: string) => void;
}

export const useRoadmapStore = create<RoadmapState>()(
  persist(
    (set) => ({
      items: initialData,
      addItem: (item) =>
        set((state) => ({
          items: [
            ...state.items,
            { ...item, id: Math.random().toString(36).substr(2, 9) },
          ],
        })),
      updateItem: (id, updatedItem) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updatedItem } : item
          ),
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'roadmap-storage',
    }
  )
);