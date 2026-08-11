import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="px-6 pt-16 pb-10 text-center">
        <p className="text-rupee text-sm tracking-[0.2em] uppercase mb-3">
          Paisa vasool, guaranteed
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-paper max-w-xl mx-auto leading-tight">
          Hand-picked deals. Real Buy links. No digging required.
        </h1>
        <p className="text-paper/50 mt-4 max-w-md mx-auto">
          Every product below is checked and linked by us — pick a list and
          find something worth buying.
        </p>
      </section>

      <section className="flex-1 px-6 pb-16 max-w-xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/finds/${c.slug}`}
              className="ticket block p-4 pl-6 hover:border-marigold transition-colors"
            >
              <p className="font-display text-lg text-paper">{c.title}</p>
              <p className="text-sm text-paper/50 mt-1">{c.description}</p>
              <p className="text-xs text-paper/40 mt-2">{c.items.length} picks</p>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-paper/30 mt-10">
          Looking for something specific?{" "}
          <Link href="/search" className="underline hover:text-paper/60">
            Try our search (beta)
          </Link>
        </p>
      </section>

      <Footer />
    </main>
  );
}
