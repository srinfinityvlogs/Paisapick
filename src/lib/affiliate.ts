// Affiliate link generation.
// The Amazon Associates store ID is loaded from the environment
// so it can be changed per-deployment without rebuilding.

const AMAZON_ASSOCIATE_TAG = process.env.AMAZON_ASSOCIATE_TAG;

if (!AMAZON_ASSOCIATE_TAG) {
  throw new Error(
    "AMAZON_ASSOCIATE_TAG environment variable is required. " +
      "Set it in .env.local or your deployment environment."
  );
}

/**
 * Builds a valid Amazon India affiliate URL from an ASIN.
 * Once Phase 2 wires up the live PAAPI, this is also how you should
 * construct links from API responses that don't already include your tag.
 */
export function buildAmazonAffiliateUrl(asin: string): string {
  if (!asin || typeof asin !== "string") {
    throw new Error(`Invalid ASIN: ${asin}`);
  }
  return `https://www.amazon.in/dp/${encodeURIComponent(asin)}?tag=${AMAZON_ASSOCIATE_TAG}`;
}
