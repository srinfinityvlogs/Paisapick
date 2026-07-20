import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-xl mx-auto">
      <Link href="/" className="font-display text-xl text-paper">
        Paisa<span className="text-marigold">Pick</span>
      </Link>
      <h1 className="font-display text-2xl text-paper mt-8 mb-4">Privacy Policy</h1>
      <div className="text-paper/60 leading-relaxed space-y-4">
        <p>
          PaisaPick logs search queries and product clicks to improve ranking
          and understand what people are looking for. We do not collect
          personal information in this version of the site — there are no
          accounts, and we don't store names, emails, or payment details.
        </p>
        <p>
          When you click "Buy Now," you're redirected to Amazon via an
          affiliate link. Amazon's own privacy policy governs what happens on
          their site from that point.
        </p>
        <p>
          [Placeholder — replace with your finalized policy before launch,
          including any analytics tools and cookie usage you add.]
        </p>
      </div>
    </main>
  );
}
