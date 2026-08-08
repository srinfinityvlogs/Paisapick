// Input validation & sanitization for API routes and server components.

const MAX_QUERY_LENGTH = 200;
const MAX_BUDGET = 10_000_000; // ₹1 crore — no consumer product costs more

/**
 * Sanitizes a raw search query string:
 * - Trims whitespace
 * - Caps length at 200 characters
 * - Strips HTML angle brackets to prevent stored XSS
 */
export function sanitizeSearchQuery(raw: string): string {
  return raw.trim().slice(0, MAX_QUERY_LENGTH).replace(/[<>]/g, "");
}

/**
 * Parses and validates a budget override from query params.
 * Returns null for invalid/missing values instead of NaN or negatives.
 */
export function sanitizeBudget(raw: string | null): number | null {
  if (!raw) return null;
  const parsed = parseInt(raw, 10);
  if (isNaN(parsed) || parsed <= 0 || parsed > MAX_BUDGET) return null;
  return parsed;
}

/**
 * Validates that a product ID looks like a valid CUID.
 * Prevents obviously garbage IDs from hitting the database.
 */
export function isValidProductId(id: string | null): id is string {
  if (!id) return false;
  // CUIDs are 25 chars, start with 'c', alphanumeric
  return /^c[a-z0-9]{24}$/.test(id);
}
