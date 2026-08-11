import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FindItemCard from "@/components/FindItemCard";
import BuyingTips from "@/components/BuyingTips";
import { collections } from "@/data/collections";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const sortedItems = [...collection.items].sort((a, b) => a.price - b.price);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-3xl text-paper mt-3 mb-2">{collection.title}</h1>
        <p className="text-paper/50 mb-8">{collection.description}</p>

        <div className="flex flex-col gap-4">
          {sortedItems.map((item) => {
            const buyHref = `/api/find-click?collection=${collection.slug}&item=${item.id}`;
            return <FindItemCard key={item.id} item={item} buyHref={buyHref} />;
          })}
        </div>

        <BuyingTips />
      </section>

      <Footer />
    </main>
  );
}
