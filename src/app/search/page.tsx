import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { sanitizeSearchQuery } from "@/lib/validation";
import { executeSearch } from "@/lib/search-service";

export const revalidate = 300; // Revalidate every 5 minutes

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q ?? "";
  return {
    title: query ? `"${query}" — Search Results` : "Search",
    description: query
      ? `Find the best deals for "${query}" — ranked by rating, reviews, and price.`
      : "Search for the best product deals on PaisaPick.",
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const rawQuery = sanitizeSearchQuery(resolvedParams.q ?? "");
  const { parsed, results: ranked } = await executeSearch(rawQuery);

  return (
    <main className="min-h-screen flex flex-col">
      <Header showSearch defaultQuery={rawQuery} />

      <section className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full">
        <p className="text-paper/50 text-sm mb-1">Search</p>
        <h1 className="font-display text-2xl text-paper mb-1">
          &quot;{rawQuery}&quot;
        </h1>
        {(parsed.category || parsed.budget) && (
          <p className="text-xs text-paper/40 mb-6">
            Understood as:{" "}
            {parsed.category && (
              <span className="text-rupee">{parsed.category}</span>
            )}
            {parsed.category && parsed.budget && " · "}
            {parsed.budget && (
              <span className="text-rupee">
                under ₹{parsed.budget.toLocaleString("en-IN")}
              </span>
            )}
          </p>
        )}
        {!parsed.category && !parsed.budget && <div className="mb-6" />}

        {ranked.length === 0 ? (
          <div className="ticket p-6 pl-8 text-center">
            <p className="text-paper/60">
              No picks matched that search yet — try a broader term or a
              different budget.
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

      <Footer />
    </main>
  );
}