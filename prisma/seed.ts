// Seed script — populates ~30 manually curated products for Phase 1.
// Replace these with your own real, verified Amazon product links/prices
// before going live. ASINs below are placeholders — swap for real ones.

import { PrismaClient } from "@prisma/client";
import { buildAmazonAffiliateUrl } from "../src/lib/affiliate";

const prisma = new PrismaClient();

type SeedProduct = {
  title: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  asin: string;
};

const products: SeedProduct[] = [
  // ---- mobiles ----
  { title: "Samsung Galaxy M06", brand: "Samsung", price: 9499, image: "https://m.media-amazon.com/images/I/71vibvcdAlL._SL1500_.jpg", rating: 4.2, reviewCount: 3120, category: "mobile", asin: "B0G81V3VY4" },
  { title: "Redmi A5", brand: "Redmi", price: 8999, image: "https://m.media-amazon.com/images/I/placeholder2.jpg", rating: 4.4, reviewCount: 5210, category: "mobile", asin: "B0PLACEHOLD2" },
  { title: "Moto G35", brand: "Motorola", price: 9999, image: "https://m.media-amazon.com/images/I/placeholder3.jpg", rating: 4.1, reviewCount: 1870, category: "mobile", asin: "B0PLACEHOLD3" },
  { title: "Realme C63", brand: "Realme", price: 8499, image: "https://m.media-amazon.com/images/I/placeholder4.jpg", rating: 4.0, reviewCount: 2450, category: "mobile", asin: "B0PLACEHOLD4" },
  { title: "Poco C71", brand: "Poco", price: 7499, image: "https://m.media-amazon.com/images/I/placeholder5.jpg", rating: 3.9, reviewCount: 980, category: "mobile", asin: "B0PLACEHOLD5" },
  { title: "Redmi Note 13 5G", brand: "Redmi", price: 14999, image: "https://m.media-amazon.com/images/I/placeholder6.jpg", rating: 4.3, reviewCount: 8900, category: "mobile", asin: "B0PLACEHOLD6" },
  { title: "Samsung Galaxy M15 5G", brand: "Samsung", price: 13499, image: "https://m.media-amazon.com/images/I/placeholder7.jpg", rating: 4.2, reviewCount: 4300, category: "mobile", asin: "B0PLACEHOLD7" },

  // ---- laptops ----
  { title: "Acer Aspire 3 (i3, 8GB)", brand: "Acer", price: 32999, image: "https://m.media-amazon.com/images/I/placeholder8.jpg", rating: 4.0, reviewCount: 1200, category: "laptop", asin: "B0PLACEHOLD8" },
  { title: "HP 15s (Ryzen 5, 8GB)", brand: "HP", price: 39999, image: "https://m.media-amazon.com/images/I/placeholder9.jpg", rating: 4.1, reviewCount: 2670, category: "laptop", asin: "B0PLACEHOLD9" },
  { title: "Lenovo IdeaPad Slim 3", brand: "Lenovo", price: 36499, image: "https://m.media-amazon.com/images/I/placeholder10.jpg", rating: 4.2, reviewCount: 1980, category: "laptop", asin: "B0PLACEHD10" },
  { title: "ASUS Vivobook 15", brand: "ASUS", price: 41999, image: "https://m.media-amazon.com/images/I/placeholder11.jpg", rating: 4.3, reviewCount: 3150, category: "laptop", asin: "B0PLACEHD11" },
  { title: "Dell 15 (i5, 16GB)", brand: "Dell", price: 48999, image: "https://m.media-amazon.com/images/I/placeholder12.jpg", rating: 4.4, reviewCount: 2100, category: "laptop", asin: "B0PLACEHD12" },

  // ---- earbuds ----
  { title: "boAt Airdopes 141", brand: "boAt", price: 1299, image: "https://m.media-amazon.com/images/I/placeholder13.jpg", rating: 4.1, reviewCount: 45000, category: "earbuds", asin: "B0PLACEHD13" },
  { title: "Noise Buds VS104", brand: "Noise", price: 999, image: "https://m.media-amazon.com/images/I/placeholder14.jpg", rating: 4.0, reviewCount: 18000, category: "earbuds", asin: "B0PLACEHD14" },
  { title: "Realme Buds T300", brand: "Realme", price: 1799, image: "https://m.media-amazon.com/images/I/placeholder15.jpg", rating: 4.2, reviewCount: 9200, category: "earbuds", asin: "B0PLACEHD15" },
  { title: "OnePlus Nord Buds 2", brand: "OnePlus", price: 1999, image: "https://m.media-amazon.com/images/I/placeholder16.jpg", rating: 4.3, reviewCount: 15400, category: "earbuds", asin: "B0PLACEHD16" },

  // ---- washing machines ----
  { title: "LG 6.5kg Semi-Automatic", brand: "LG", price: 10990, image: "https://m.media-amazon.com/images/I/placeholder17.jpg", rating: 4.1, reviewCount: 6700, category: "washing machine", asin: "B0PLACEHD17" },
  { title: "Samsung 7kg Fully-Automatic Front Load", brand: "Samsung", price: 22990, image: "https://m.media-amazon.com/images/I/placeholder18.jpg", rating: 4.3, reviewCount: 4100, category: "washing machine", asin: "B0PLACEHD18" },
  { title: "Whirlpool 7.5kg Top Load", brand: "Whirlpool", price: 15990, image: "https://m.media-amazon.com/images/I/placeholder19.jpg", rating: 4.0, reviewCount: 3300, category: "washing machine", asin: "B0PLACEHD19" },

  // ---- TVs ----
  { title: "Xiaomi 32-inch HD Smart TV", brand: "Xiaomi", price: 11999, image: "https://m.media-amazon.com/images/I/placeholder20.jpg", rating: 4.2, reviewCount: 22000, category: "tv", asin: "B0PLACEHD20" },
  { title: "Samsung 43-inch Crystal 4K", brand: "Samsung", price: 29990, image: "https://m.media-amazon.com/images/I/placeholder21.jpg", rating: 4.4, reviewCount: 8600, category: "tv", asin: "B0PLACEHD21" },
];

async function main() {
  console.log("Seeding PaisaPick products...");
  await prisma.click.deleteMany();
  await prisma.product.deleteMany();

  for (const p of products) {
    await prisma.product.create({
      data: {
        title: p.title,
        brand: p.brand,
        price: p.price,
        image: p.image,
        rating: p.rating,
        reviewCount: p.reviewCount,
        category: p.category,
        marketplace: "amazon",
        asin: p.asin,
        affiliateUrl: buildAmazonAffiliateUrl(p.asin),
      },
    });
  }

  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
