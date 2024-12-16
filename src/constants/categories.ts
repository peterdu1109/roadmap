export const CATEGORIES = [
  'All',
  'Gameplay',
  'Graphics',
  'UI/UX',
  'Performance',
  'Content'
] as const;

export type Category = (typeof CATEGORIES)[number];