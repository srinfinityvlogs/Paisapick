import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  const buyHref = `/api/click?productId=${product.id}`;

  return (
    <main className="min-h-screen">
      <header className="px-6 py-5 border-b border-border">
        <Link href="/" className="font-display text-xl text-paper">
          Paisa<span className="text-marigold">Pick</span>
        </Link>
      </header>

      <section className="px-6 py-10 max-w-xl mx-auto">
        <div className="w-full h-56 rounded-sm bg-surface border border-border flex items-center justify-center overflow-hidden mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.title} className="object-contain h-full" />
        </div>

        {product.brand && (
          <p className="text-xs text-paper/50 uppercase tracking-wide mb-1">{product.brand}</p>
        )}
        <h1 className="font-display text-2xl text-paper mb-3">{product.title}</h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-marigold">{"★".repeat(Math.round(product.rating))}</span>
          <span className="text-sm text-paper/50">
            {product.rating.toFixed(1)} ({product.reviewCount.toLocaleString("en-IN")} reviews)
          </span>
        </div>

        <p className="price-tag text-3xl text-rupee mb-6">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <a href={buyHref} className="inline-block bg-marigold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-[filter]">
          Buy on {product.marketplace[0].toUpperCase() + product.marketplace.slice(1)}
        </a>

        <p className="text-xs text-paper/30 mt-6">
          As an Amazon Associate, PaisaPick earns from qualifying purchases.
        </p>
      </section>
    </main>
  );
}
