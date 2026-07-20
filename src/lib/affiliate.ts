// Affiliate link generation.
// PaisaPick's Amazon Associates store ID.
const AMAZON_ASSOCIATE_TAG = "dealskingon0b-21";

/**
 * Builds a valid Amazon India affiliate URL from an ASIN.
 * Once Phase 2 wires up the live PAAPI, this is also how you should
 * construct links from API responses that don't already include your tag.
 */
export function buildAmazonAffiliateUrl(asin: string): string {
  return `https://www.amazon.in/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}
