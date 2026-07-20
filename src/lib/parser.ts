// Rule-based parser for Phase 1 — no LLM cost.
// Extracts category + budget from queries like:
//   "best mobile under 10000", "phone below 10k", "laptop under 50000"
// Phase 2 will swap/augment this with a free-tier LLM (Groq/Gemini)
// for messier queries ("gaming mobile under 15000", "phone for parents").

export type ParsedQuery = {
  category: string | null;
  budget: number | null;
  sort: "rating" | "price";
};

// Maps user words to the category values stored in the Product table.
const CATEGORY_SYNONYMS: Record<string, string> = {
  mobile: "mobile",
  mobiles: "mobile",
  phone: "mobile",
  phones: "mobile",
  smartphone: "mobile",
  laptop: "laptop",
  laptops: "laptop",
  notebook: "laptop",
  earbud: "earbuds",
  earbuds: "earbuds",
  earphone: "earbuds",
  earphones: "earbuds",
  headphone: "earbuds",
  headphones: "earbuds",
  "washing machine": "washing machine",
  washer: "washing machine",
  tv: "tv",
  television: "tv",
};

function extractBudget(query: string): number | null {
  const q = query.toLowerCase();

  // "under 10000", "below 10k", "under ₹15,000"
  const match = q.match(/(?:under|below|less than)\s*₹?\s*([\d,]+)\s*(k)?/i);
  if (match) {
    let num = parseInt(match[1].replace(/,/g, ""), 10);
    if (match[2]) num *= 1000; // "10k" -> 10000
    return num;
  }

  // bare "10k" anywhere
  const kMatch = q.match(/\b(\d+)\s*k\b/i);
  if (kMatch) return parseInt(kMatch[1], 10) * 1000;

  return null;
}

function extractCategory(query: string): string | null {
  const q = query.toLowerCase();
  // check multi-word synonyms first (e.g. "washing machine")
  const sortedKeys = Object.keys(CATEGORY_SYNONYMS).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (q.includes(key)) return CATEGORY_SYNONYMS[key];
  }
  return null;
}

export function parseQuery(rawQuery: string): ParsedQuery {
  return {
    category: extractCategory(rawQuery),
    budget: extractBudget(rawQuery),
    sort: "rating",
  };
}
