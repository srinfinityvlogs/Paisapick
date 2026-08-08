import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-3xl text-paper mt-3 mb-2">{collection.title}</h1>
        <p className="text-paper/50 mb-8">{collection.description}</p>

        <div className="flex flex-col gap-4">
          {collection.items.map((item) => {
            const buyHref = `/api/find-click?collection=${collection.slug}&item=${item.id}`;
            return (
              <div key={item.id} className="ticket flex items-center justify-between gap-4 p-4 pl-6">
                <div>
                  <p className="font-display text-lg text-paper">{item.name}</p>
                  {item.blurb && <p className="text-sm text-paper/50 mt-1">{item.blurb}</p>}
                  <p className="price-tag text-xl text-rupee mt-2">₹{item.price.toLocaleString("en-IN")}</p>
                </div>
                <a href={buyHref} target="_blank" rel="noopener noreferrer" className="bg-marigold text-ink text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-110 transition-[filter] shrink-0">
                  Buy Now
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
