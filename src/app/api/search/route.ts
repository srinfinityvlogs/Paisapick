import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";
import { sanitizeSearchQuery, sanitizeBudget } from "@/lib/validation";
import { executeSearch } from "@/lib/search-service";

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const searchParams = req.nextUrl.searchParams;
  const rawQuery = sanitizeSearchQuery(searchParams.get("q") ?? "");
  const categoryOverride = searchParams.get("category") ?? undefined;
  const budgetOverride = sanitizeBudget(searchParams.get("budget")) ?? undefined;

  const result = await executeSearch(rawQuery, {
    category: categoryOverride,
    budget: budgetOverride,
  });

  return NextResponse.json(result);
}
