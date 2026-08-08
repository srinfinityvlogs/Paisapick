import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";

// Whitelist of allowed redirect hosts — prevents open redirect attacks
const ALLOWED_REDIRECT_HOSTS = new Set([
  "www.amazon.in",
  "amazon.in",
  "www.amazon.com",
]);

// GET /api/click?productId=xxx
// Logs the click then redirects to the product's real affiliate URL.
// This indirection is what makes CTR/conversion tracking possible.
export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const productId = req.nextUrl.searchParams.get("productId");
  if (!productId) {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    return NextResponse.json(
      { error: "product not found" },
      { status: 404 }
    );
  }

  // Validate redirect target against whitelist
  let targetUrl: URL;
  try {
    targetUrl = new URL(product.affiliateUrl);
  } catch {
    console.error(
      `Invalid affiliate URL for product ${productId}: ${product.affiliateUrl}`
    );
    return NextResponse.json(
      { error: "invalid affiliate URL" },
      { status: 500 }
    );
  }

  if (!ALLOWED_REDIRECT_HOSTS.has(targetUrl.hostname)) {
    console.error(
      `Blocked redirect to unauthorized host: ${targetUrl.hostname}`
    );
    return NextResponse.json(
      { error: "redirect blocked" },
      { status: 403 }
    );
  }

  // Log click asynchronously — don't block the redirect
  prisma.click
    .create({ data: { productId } })
    .catch((err) => console.error("click log failed:", err));

  return NextResponse.redirect(targetUrl.toString());
}
