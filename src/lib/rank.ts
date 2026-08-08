// Weighted ranking: 40% rating, 30% review count, 20% price, 10% popularity(clicks)
// Each factor is normalized to 0-1 within the current result set before weighting.

export type Rankable = {
  id: string;
  price: number;
  rating: number;
  reviewCount: number;
  clickCount: number;
};

function computeScore(
  p: Rankable,
  maxReviews: number,
  maxPrice: number,
  minPrice: number,
  maxClicks: number
): number {
  const ratingScore = p.rating / 5; // 0-1
  const reviewScore = p.reviewCount / maxReviews; // 0-1
  // cheaper = higher score, normalized within range
  const priceScore =
    maxPrice === minPrice ? 1 : 1 - (p.price - minPrice) / (maxPrice - minPrice);
  const popularityScore = p.clickCount / maxClicks;

  return (
    ratingScore * 0.4 +
    reviewScore * 0.3 +
    priceScore * 0.2 +
    popularityScore * 0.1
  );
}

/**
 * Ranks products by a weighted score. Returns a new array sorted
 * by score descending. Does NOT leak the internal _score to callers.
 */
export function rankProducts<T extends Rankable>(products: T[]): T[] {
  if (products.length === 0) return products;

  const maxReviews = Math.max(...products.map((p) => p.reviewCount), 1);
  const maxPrice = Math.max(...products.map((p) => p.price), 1);
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxClicks = Math.max(...products.map((p) => p.clickCount), 1);

  const indexed = products.map((p) => ({
    product: p,
    score: computeScore(p, maxReviews, maxPrice, minPrice, maxClicks),
  }));

  indexed.sort((a, b) => b.score - a.score);
  return indexed.map((item) => item.product);
}
