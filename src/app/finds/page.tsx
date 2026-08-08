import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";

export default function FindsHubPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-3xl text-paper mb-2">Finds</h1>
        <p className="text-paper/50 mb-8">Hand-picked lists, no searching required.</p>

        <div className="flex flex-col gap-4">
          {collections.map((c) => (
            <Link key={c.slug} href={`/finds/${c.slug}`} className="ticket block p-4 pl-6 hover:border-marigold transition-colors">
              <p className="font-display text-lg text-paper">{c.title}</p>
              <p className="text-sm text-paper/50 mt-1">{c.description}</p>
              <p className="text-xs text-paper/40 mt-2">{c.items.length} picks</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
