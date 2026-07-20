import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/click?productId=xxx
// Logs the click then redirects to the product's real affiliate URL.
// This indirection is what makes CTR/conversion tracking possible.
export async function GET(req: NextRequest) {
  const productId = req.nextUrl.searchParams.get("productId");
  if (!productId) {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

  await prisma.click.create({ data: { productId } }).catch((err) => {
    console.error("click log failed", err);
  });

  return NextResponse.redirect(product.affiliateUrl);
}
