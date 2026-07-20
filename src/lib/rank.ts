// Weighted ranking: 40% rating, 30% review count, 20% price, 10% popularity(clicks)
// Each factor is normalized to 0-1 within the current result set before weighting.

export type Rankable = {
  id: string;
  price: number;
  rating: number;
  reviewCount: number;
  clickCount?: number;
};

export function rankProducts<T extends Rankable>(products: T[]): T[] {
  if (products.length === 0) return products;

  const maxReviews = Math.max(...products.map((p) => p.reviewCount), 1);
  const maxPrice = Math.max(...products.map((p) => p.price), 1);
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxClicks = Math.max(...products.map((p) => p.clickCount ?? 0), 1);

  const scored = products.map((p) => {
    const ratingScore = p.rating / 5; // 0-1
    const reviewScore = p.reviewCount / maxReviews; // 0-1
    // cheaper = higher score, normalized within range
    const priceScore =
      maxPrice === minPrice ? 1 : 1 - (p.price - minPrice) / (maxPrice - minPrice);
    const popularityScore = (p.clickCount ?? 0) / maxClicks;

    const score =
      ratingScore * 0.4 + reviewScore * 0.3 + priceScore * 0.2 + popularityScore * 0.1;

    return { ...p, _score: score };
  });

  return scored.sort((a, b) => b._score - a._score);
}
