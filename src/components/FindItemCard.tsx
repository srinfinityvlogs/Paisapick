"use client";

import type { FindItem } from "@/data/collections";

export default function FindItemCard({
  item,
  buyHref,
}: {
  item: FindItem;
  buyHref: string;
}) {
  return (
    <div className="ticket flex gap-4 p-4 pl-6">
      <div className="w-20 h-20 shrink-0 rounded-sm bg-ink/60 border border-border overflow-hidden flex items-center justify-center">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-display text-lg leading-tight text-paper">{item.name}</p>
        {item.blurb && <p className="text-sm text-paper/50 mt-1">{item.blurb}</p>}
        <p className="price-tag text-xl text-rupee mt-2">₹{item.price.toLocaleString("en-IN")}</p>
      </div>

      <div className="flex items-center">
        <a href={buyHref} target="_blank" rel="noopener noreferrer" className="bg-marigold text-ink text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-110 transition-[filter] shrink-0">
          Buy Now
        </a>
      </div>
    </div>
  );
}
