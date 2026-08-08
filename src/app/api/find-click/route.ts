import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { collections } from "@/data/collections";

// GET /api/find-click?collection=best-kitchen-finds&item=electric-bbq-grill
export async function GET(req: NextRequest) {
  const collectionSlug = req.nextUrl.searchParams.get("collection");
  const itemId = req.nextUrl.searchParams.get("item");

  if (!collectionSlug || !itemId) {
    return NextResponse.json({ error: "collection and item are required" }, { status: 400 });
  }

  const collection = collections.find((c) => c.slug === collectionSlug);
  const item = collection?.items.find((i) => i.id === itemId);

  if (!item) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  await prisma.findClick.create({ data: { collectionSlug, itemId } }).catch((err) => {
    console.error("findClick log failed", err);
  });

  return NextResponse.redirect(item.url);
}
