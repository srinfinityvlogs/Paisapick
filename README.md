# PaisaPick — Phase 1 (MVP)

Amazon-only deal-search site. Natural-language search over a manually seeded
product list, ranked by rating/reviews/price, with real affiliate links using
Associate tag **dealskingon0b-21**.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind
- Postgres via Prisma (use Neon or Supabase free tier)
- Hosted entirely on Vercel free tier

## Local setup

```bash
npm install
cp .env.example .env      # then fill in DATABASE_URL
npx prisma generate
npx prisma db push        # creates tables from schema.prisma
npm run seed               # populates sample products
npm run dev
```

Visit http://localhost:3000

## Before going live

1. **Replace seed data.** Everything in `prisma/seed.ts` uses placeholder
   image URLs and placeholder ASINs. Swap in real Amazon product data
   (title, price, rating, review count, real image URL, real ASIN) before
   deploying — these are what get 3 qualifying sales to lock in stable
   PAAPI access (see Phase 0 checklist).
2. **Verify affiliate links.** `src/lib/affiliate.ts` builds links as
   `https://www.amazon.in/dp/{ASIN}?tag=dealskingon0b-21`. Confirm a few
   manually in a browser before launch.
3. **Fill in Privacy Policy.** The placeholder in `src/app/privacy/page.tsx`
   needs your finalized policy.

## Deploy (Vercel, free tier)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add the `DATABASE_URL` environment variable in Vercel project settings
   (same value as your local `.env`).
4. Deploy. Vercel builds and hosts both the frontend and the API routes —
   no separate backend service needed.
5. Run `npx prisma db push` and `npm run seed` once against your production
   database (locally, pointed at the prod `DATABASE_URL`) before first
   launch.

## What's intentionally not built yet (see project checklist for phases)

- Live Amazon PAAPI calls (Phase 2) — Phase 1 uses seeded data only
- Redis caching (Phase 2)
- LLM-based query parsing — Phase 1 uses a free rule-based parser
  (`src/lib/parser.ts`)
- Other marketplaces (Phase 3)
- Auth, wishlist, price alerts, price history (Phase 4)
