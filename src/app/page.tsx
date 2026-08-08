import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const POPULAR_SEARCHES = [
  "Best mobile under 10000",
  "Best laptop under 50000",
  "Best earbuds under 2000",
  "Best washing machine",
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-rupee text-sm tracking-[0.2em] uppercase mb-3">
          Paisa vasool, guaranteed
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-paper max-w-xl leading-tight">
          Say what you want. We&apos;ll find the best deal.
        </h1>
        <p className="text-paper/50 mt-4 max-w-md">
          Type it like you&apos;d say it to a friend — &quot;best mobile under 10000&quot; —
          and get ranked picks with real Buy links.
        </p>

        <form action="/search" className="mt-10 w-full max-w-lg flex gap-2">
          <label htmlFor="home-search" className="sr-only">
            Search products
          </label>
          <input
            id="home-search"
            type="text"
            name="q"
            placeholder="Best phone under 15000..."
            className="flex-1 bg-surface border border-border rounded-sm px-4 py-3 text-paper placeholder:text-paper/30 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-marigold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-[filter]"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-lg">
          {POPULAR_SEARCHES.map((q) => (
            <Link
              key={q}
              href={`/search?q=${encodeURIComponent(q)}`}
              className="text-xs text-paper/60 border border-border rounded-full px-3 py-1.5 hover:border-marigold hover:text-marigold transition-colors"
            >
              {q}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
