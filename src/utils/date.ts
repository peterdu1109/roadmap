export function formatQuarter(quarter: string): string {
  const [q, year] = quarter.split(' ');
  return `${q} ${year}`;
}

export function sortByDate(a: string, b: string): number {
  const [aQ, aYear] = a.split(' ');
  const [bQ, bYear] = b.split(' ');
  
  if (aYear !== bYear) {
    return parseInt(aYear) - parseInt(bYear);
  }
  
  return parseInt(aQ[1]) - parseInt(bQ[1]);
}