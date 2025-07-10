// Utility function to determine if a book is a new release (published within last 6 months)
export function isNewRelease(pubDate: Date): boolean {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return pubDate >= sixMonthsAgo;
}