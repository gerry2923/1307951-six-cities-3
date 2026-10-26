export function formatDateToMonthYear(dateString: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export function compareByDateDesc<T extends { date: string }>(a: T, b: T): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort(compareByDateDesc);
}
