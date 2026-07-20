import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { parseQuery } from "@/lib/parser";
import { rankProducts } from "@/lib/rank";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const rawQuery = searchParams.get("q") ?? "";
  const categoryOverride = searchParams.get("category");
  const budgetOverride = searchParams.get("budget");

  const parsed = parseQuery(rawQuery);
  const category = categoryOverride || parsed.category;
  const budget = budgetOverride ? parseInt(budgetOverride, 10) : parsed.budget;

  const products = await prisma.product.findMany({
    where: {
      ...(category ? { category } : {}),
      ...(budget ? { price: { lte: budget } } : {}),
    },
    include: {
      _count: { select: { clicks: true } },
    },
    take: 100,
  });

  const ranked = rankProducts(
    products.map((p) => ({
      ...p,
      clickCount: p._count.clicks,
    }))
  ).slice(0, 10);

  // Log the search (fire and forget — don't block the response on this)
  prisma.searchLog
    .create({ data: { query: rawQuery, category, budget: budget ?? undefined } })
    .catch((err) => console.error("searchLog failed", err));

  return NextResponse.json({
    query: rawQuery,
    parsed: { category, budget },
    results: ranked,
  });
}
