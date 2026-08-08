import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
};

export default function DisclosurePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-2xl text-paper mt-8 mb-4">
          Affiliate Disclosure
        </h1>
        <div className="text-paper/60 leading-relaxed space-y-4">
          <p>
            PaisaPick is a participant in the Amazon Associates Program, an
            affiliate advertising program designed to provide a means for sites
            to earn advertising fees by advertising and linking to Amazon.in.
          </p>
          <p>
            When you click a &quot;Buy Now&quot; button on PaisaPick and make a
            qualifying purchase, we may earn a commission at no additional cost
            to you. This does not affect the price you pay.
          </p>
          <p>
            We rank products using an algorithm based on rating, review count,
            and price — commission rates do not influence which products appear
            or how they&apos;re ordered.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
