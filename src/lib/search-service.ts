// Shared search service — single source of truth for the
// query → filter → rank → log pipeline.
// Used by both /api/search (API consumers) and /search (SSR page).

import { prisma } from "@/lib/db";
import { parseQuery } from "@/lib/parser";
import { rankProducts } from "@/lib/rank";

export type SearchResult = {
  query: string;
  parsed: { category: string | null; budget: number | null };
  results: Awaited<ReturnType<typeof executeSearch>>["results"];
};

/**
 * Executes a search: parses the query, filters products from the DB,
 * ranks them, and logs the search asynchronously.
 *
 * @param rawQuery  - The user's raw search string
 * @param overrides - Optional category/budget overrides from query params
 */
export async function executeSearch(
  rawQuery: string,
  overrides?: { category?: string; budget?: number }
): Promise<SearchResult> {
  const parsed = parseQuery(rawQuery);
  const category = overrides?.category || parsed.category;
  const budget = overrides?.budget ?? parsed.budget;

  const products = await prisma.product.findMany({
    where: {
      ...(category ? { category } : {}),
      ...(budget ? { price: { lte: budget } } : {}),
    },
    include: { _count: { select: { clicks: true } } },
    take: 100,
  });

  const ranked = rankProducts(
    products.map((p) => ({ ...p, clickCount: p._count.clicks }))
  ).slice(0, 10);

  // Fire-and-forget search log — don't block the response
  prisma.searchLog
    .create({
      data: {
        query: rawQuery,
        category,
        budget: budget ?? undefined,
      },
    })
    .catch((err) => console.error("searchLog write failed:", err));

  return { query: rawQuery, parsed: { category, budget }, results: ranked };
}
