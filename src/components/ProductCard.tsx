"use client";

import Link from "next/link";

type Product = {
  id: string;
  title: string;
  brand: string | null;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  marketplace: string;
};

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="text-marigold text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      <span className="text-border">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const buyHref = `/api/click?productId=${product.id}`;

  return (
    <div className="ticket flex gap-4 p-4 pl-6">
      <div className="w-20 h-20 shrink-0 rounded-sm bg-ink/60 border border-border overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <Link
          href={`/product/${product.id}`}
          className="font-display text-lg leading-tight text-paper truncate block hover:text-marigold transition-colors"
        >
          {product.title}
        </Link>
        {product.brand && (
          <p className="text-xs text-paper/50 uppercase tracking-wide mt-0.5">
            {product.brand}
          </p>
        )}
        <div className="flex items-center gap-2 mt-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-paper/50">
            ({product.reviewCount.toLocaleString("en-IN")})
          </span>
        </div>
        <p className="price-tag text-xl text-rupee mt-2">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>

      <div className="flex flex-col justify-between items-end">
        <span className="text-[10px] uppercase tracking-wider text-paper/40 border border-border rounded-sm px-1.5 py-0.5">
          {product.marketplace}
        </span>
        <a href={buyHref} className="bg-marigold text-ink text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-110 transition-[filter]">
          Buy Now
        </a>
      </div>
    </div>
  );
}
