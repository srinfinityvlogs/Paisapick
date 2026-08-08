// Lightweight in-memory rate limiter for Phase 1.
// Phase 2 should swap this for @upstash/ratelimit with Redis
// for distributed rate limiting across serverless instances.

const WINDOW_MS = 60_000; // 1-minute window
const MAX_REQUESTS = 30; // 30 requests per window

type ClientRecord = { count: number; resetAt: number };

const clients = new Map<string, ClientRecord>();

// Cleanup stale entries every 5 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of clients) {
      if (value.resetAt < now) clients.delete(key);
    }
  }, 5 * 60_000).unref?.();
}

/**
 * Returns true if the given IP has exceeded the rate limit.
 * Call this at the top of every API route handler.
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const client = clients.get(ip);

  if (!client || client.resetAt < now) {
    clients.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  client.count++;
  return client.count > MAX_REQUESTS;
}

/**
 * Extracts the client IP from a Next.js request.
 * Uses x-forwarded-for (set by Vercel/reverse proxies) with fallback.
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}
