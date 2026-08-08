import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-2xl text-paper mt-8 mb-4">
          About PaisaPick
        </h1>
        <p className="text-paper/60 leading-relaxed">
          PaisaPick helps you find the best deal without scrolling through
          hundreds of listings. Type what you&apos;re looking for in plain language —
          &quot;best mobile under 10000&quot; — and we rank real products by rating,
          review count, and price so you can decide fast.
        </p>
        <p className="text-paper/60 leading-relaxed mt-4">
          We&apos;re currently in an early, Amazon-only phase. More marketplaces are
          on the way.
        </p>
      </section>
      <Footer />
    </main>
  );
}
