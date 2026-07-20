import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-xl mx-auto">
      <Link href="/" className="font-display text-xl text-paper">
        Paisa<span className="text-marigold">Pick</span>
      </Link>
      <h1 className="font-display text-2xl text-paper mt-8 mb-4">About PaisaPick</h1>
      <p className="text-paper/60 leading-relaxed">
        PaisaPick helps you find the best deal without scrolling through
        hundreds of listings. Type what you're looking for in plain language —
        "best mobile under 10000" — and we rank real products by rating,
        review count, and price so you can decide fast.
      </p>
      <p className="text-paper/60 leading-relaxed mt-4">
        We're currently in an early, Amazon-only phase. More marketplaces are
        on the way.
      </p>
    </main>
  );
}
