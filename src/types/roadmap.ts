export type RoadmapStatus = 'in-progress' | 'completed' | 'planned';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  progress: number;
  team: string;
  targetDate: string;
  status: RoadmapStatus;
  category: string;
}