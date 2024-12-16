import type { RoadmapItem } from '../types/roadmap';

export function groupByQuarter(items: RoadmapItem[]): Record<string, RoadmapItem[]> {
  return items.reduce((acc, item) => {
    const quarter = item.targetDate;
    if (!acc[quarter]) {
      acc[quarter] = [];
    }
    acc[quarter].push(item);
    return acc;
  }, {} as Record<string, RoadmapItem[]>);
}