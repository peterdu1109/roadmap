import type { RoadmapItem } from '../types/roadmap';

export const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Enhanced Space Combat System',
    description: 'Implementing advanced space combat mechanics with realistic physics and damage models.',
    progress: 75,
    team: 'Combat Team',
    targetDate: 'Q2 2024',
    status: 'in-progress',
    category: 'Gameplay'
  },
  {
    id: '2',
    title: 'Ray Tracing Integration',
    description: 'Adding full ray tracing support for improved lighting and reflections.',
    progress: 30,
    team: 'Graphics Team',
    targetDate: 'Q3 2024',
    status: 'in-progress',
    category: 'Graphics'
  },
  {
    id: '3',
    title: 'UI Modernization',
    description: 'Complete overhaul of the user interface with improved accessibility.',
    progress: 100,
    team: 'UI Team',
    targetDate: 'Q1 2024',
    status: 'completed',
    category: 'UI/UX'
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Major optimization pass to improve frame rates and reduce loading times.',
    progress: 0,
    team: 'Engine Team',
    targetDate: 'Q4 2024',
    status: 'planned',
    category: 'Performance'
  },
  {
    id: '5',
    title: 'New Star System',
    description: 'Adding a new explorable star system with unique planets and missions.',
    progress: 45,
    team: 'Content Team',
    targetDate: 'Q3 2024',
    status: 'in-progress',
    category: 'Content'
  }
];