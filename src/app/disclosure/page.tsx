import Link from "next/link";

export default function DisclosurePage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-xl mx-auto">
      <Link href="/" className="font-display text-xl text-paper">
        Paisa<span className="text-marigold">Pick</span>
      </Link>
      <h1 className="font-display text-2xl text-paper mt-8 mb-4">Affiliate Disclosure</h1>
      <div className="text-paper/60 leading-relaxed space-y-4">
        <p>
          PaisaPick is a participant in the Amazon Associates Program, an
          affiliate advertising program designed to provide a means for sites
          to earn advertising fees by advertising and linking to Amazon.in.
        </p>
        <p>
          When you click a "Buy Now" button on PaisaPick and make a
          qualifying purchase, we may earn a commission at no additional cost
          to you. This does not affect the price you pay.
        </p>
        <p>
          We rank products using an algorithm based on rating, review count,
          and price — commission rates do not influence which products
          appear or how they're ordered.
        </p>
      </div>
    </main>
  );
}
