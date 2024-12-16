import React from 'react';
import { RoadmapContainer } from '../components/roadmap/RoadmapContainer';
import { useRoadmapStore } from '../store/roadmapStore';

export function PublicRoadmap() {
  const items = useRoadmapStore((state) => state.items);
  
  return (
    <RoadmapContainer items={items} isAdmin={false} />
  );
}