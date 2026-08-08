import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} — ₹${product.price.toLocaleString("en-IN")}`,
    description: `Buy ${product.title}${product.brand ? ` by ${product.brand}` : ""} at ₹${product.price.toLocaleString("en-IN")}. ${product.rating}/5 stars from ${product.reviewCount.toLocaleString("en-IN")} reviews.`,
    openGraph: {
      title: product.title,
      description: `₹${product.price.toLocaleString("en-IN")} — ${product.rating}/5 stars`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  const buyHref = `/api/click?productId=${product.id}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <div className="w-full h-56 rounded-sm bg-surface border border-border flex items-center justify-center overflow-hidden mb-6">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={224}
            className="object-contain h-full w-auto"
            priority
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>

        {product.brand && (
          <p className="text-xs text-paper/50 uppercase tracking-wide mb-1">
            {product.brand}
          </p>
        )}
        <h1 className="font-display text-2xl text-paper mb-3">
          {product.title}
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-marigold">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-sm text-paper/50">
            {product.rating.toFixed(1)} (
            {product.reviewCount.toLocaleString("en-IN")} reviews)
          </span>
        </div>

        <p className="price-tag text-3xl text-rupee mb-6">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <a
          href={buyHref}
          className="inline-block bg-marigold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-[filter]"
        >
          Buy on{" "}
          {product.marketplace[0].toUpperCase() + product.marketplace.slice(1)}
        </a>

        <p className="text-xs text-paper/30 mt-6">
          As an Amazon Associate, PaisaPick earns from qualifying purchases.
        </p>
      </section>

      <Footer />
    </main>
  );
}
