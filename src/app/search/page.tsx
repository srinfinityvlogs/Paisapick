import Link from "next/link";
import { prisma } from "@/lib/db";
import { parseQuery } from "@/lib/parser";
import { rankProducts } from "@/lib/rank";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const rawQuery = resolvedParams.q ?? "";
  const parsed = parseQuery(rawQuery);

  const products = await prisma.product.findMany({
    where: {
      ...(parsed.category ? { category: parsed.category } : {}),
      ...(parsed.budget ? { price: { lte: parsed.budget } } : {}),
    },
    include: { _count: { select: { clicks: true } } },
    take: 100,
  });

  const ranked = rankProducts(
    products.map((p) => ({ ...p, clickCount: p._count.clicks }))
  ).slice(0, 10);

  // fire-and-forget search log
  prisma.searchLog
    .create({
      data: { query: rawQuery, category: parsed.category, budget: parsed.budget ?? undefined },
    })
    .catch(() => {});

  return (
    <main className="min-h-screen">
      <header className="px-6 py-5 flex items-center justify-between border-b border-border">
        <Link href="/" className="font-display text-xl text-paper">
          Paisa<span className="text-marigold">Pick</span>
        </Link>
        <form action="/search" className="flex gap-2 w-full max-w-sm ml-6">
          <input
            type="text"
            name="q"
            defaultValue={rawQuery}
            className="flex-1 bg-surface border border-border rounded-sm px-3 py-2 text-sm text-paper focus:outline-none"
          />
          <button
            type="submit"
            className="bg-marigold text-ink text-sm font-semibold px-4 py-2 rounded-sm"
          >
            Search
          </button>
        </form>
      </header>

      <section className="px-6 py-8 max-w-2xl mx-auto">
        <p className="text-paper/50 text-sm mb-1">Search</p>
        <h1 className="font-display text-2xl text-paper mb-1">"{rawQuery}"</h1>
        {(parsed.category || parsed.budget) && (
          <p className="text-xs text-paper/40 mb-6">
            Understood as:{" "}
            {parsed.category && <span className="text-rupee">{parsed.category}</span>}
            {parsed.category && parsed.budget && " · "}
            {parsed.budget && (
              <span className="text-rupee">under ₹{parsed.budget.toLocaleString("en-IN")}</span>
            )}
          </p>
        )}
        {!parsed.category && !parsed.budget && <div className="mb-6" />}

        {ranked.length === 0 ? (
          <div className="ticket p-6 pl-8 text-center">
            <p className="text-paper/60">
              No picks matched that search yet — try a broader term or a different budget.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {ranked.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}