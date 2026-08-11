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
  {
    slug: "useful-gadgets",
    title: "Useful Gadgets",
    description: "Small gadgets that quietly make everyday life easier.",
    items: [
      { id: "cable-holder-organiser", name: "Cable Holder/Organiser", price: 699, url: "https://link.amazon/B0arpElur", image: "https://m.media-amazon.com/images/I/81MVtXhqWxL._SL1500_.jpg" },
      { id: "smart-door-lock", name: "Smart Door Lock", price: 3125, url: "https://link.amazon/B0c3uSth3", image: "https://m.media-amazon.com/images/I/71ejGTPszrL._SL1500_.jpg" },
      { id: "portable-neck-fan", name: "Portable Neck Fan", price: 724, url: "https://link.amazon/B0bOfruW4", image: "https://m.media-amazon.com/images/I/419guoTTLDL.jpg" },
      { id: "mini-portable-projector", name: "Mini Portable Projector", price: 3499, url: "https://link.amazon/B09LhhM50", image: "https://m.media-amazon.com/images/I/717mUTHZIcL._SL1500_.jpg" },
      { id: "digital-spoon", name: "Digital Spoon", price: 499, url: "https://link.amazon/B06qHR4q2", image: "https://m.media-amazon.com/images/I/21pfKu5jzqL.jpg" },
      { id: "automatic-toothpaste-dispenser", name: "Automatic Toothpaste Dispenser", price: 869, url: "https://link.amazon/B05obVH3y", image: "https://m.media-amazon.com/images/I/71TCGdlj25L._SL1200_.jpg" },
      { id: "mini-garment-steamer", name: "Mini Garment Steamer/Iron Box", price: 1819, url: "https://link.amazon/B0iKiszJI", image: "https://m.media-amazon.com/images/I/51PR3uXMn5L._SL1500_.jpg" },
      { id: "electric-coffee-mug-warmer", name: "Electric Coffee Mug Warmer", price: 5219, url: "https://link.amazon/B0eeXbmnC", image: "https://m.media-amazon.com/images/I/71sd9DJiUDL._SL1500_.jpg" },
      { id: "portable-mosquito-repeller", name: "Portable Mosquito Repeller", price: 299, url: "https://link.amazon/B05lgs4PR", image: "https://m.media-amazon.com/images/I/61I-ABfx4QL._SL1177_.jpg" },
      { id: "mini-portable-thermal-printer", name: "Mini Portable Thermal Printer", price: 759, url: "https://link.amazon/B0frcYIIT", image: "https://m.media-amazon.com/images/I/51IP3nBtfKL._SL1000_.jpg" },
      { id: "wireless-door-bell", name: "Wireless Door Bell", price: 796, url: "https://link.amazon/B0efbIeDL", image: "https://m.media-amazon.com/images/I/71XwaKCSTkL._SL1500_.jpg" },
    ],
  },
];
