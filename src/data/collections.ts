// Hand-curated product collections — edit this file directly to add new
// finds or new collections. No database needed for this content.

export type FindItem = {
  id: string;
  name: string;
  price: number;
  url: string;
  blurb?: string;
  image?: string;
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  items: FindItem[];
};

export const collections: Collection[] = [
  {
    slug: "best-kitchen-finds",
    title: "Best Kitchen Finds",
    description: "Small kitchen buys that punch way above their price.",
    items: [
      { id: "electric-bbq-grill", name: "Electric BBQ Grill", price: 2599, url: "https://link.amazon/B0bDrytoz", image: "" },
      { id: "sink-drainer-mat", name: "Sink Drainer Mat", price: 530, url: "https://link.amazon/B0j9wPoqX", image: "" },
      { id: "pineapple-peeler", name: "Pineapple Peeler", price: 299, url: "https://link.amazon/B0gnFo2KM", image: "" },
      { id: "kitchen-wallpaper", name: "Kitchen Wallpaper (Oil & Water Proof)", price: 174, url: "https://link.amazon/B01mfvuTW", image: "" },
      { id: "soap-stand", name: "Soap Stand", price: 279, url: "https://link.amazon/B07a1CVLh", image: "" },
      { id: "sink-strainer", name: "Sink Strainer", price: 479, url: "https://link.amazon/B077sshYj", image: "" },
    ],
  },
];
