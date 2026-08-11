// Hand-curated product collections — edit this file directly to add new
// finds or new collections. Items are sorted low-to-high by price
// automatically at render time, so order here doesn't matter.

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
      { id: "electric-bbq-grill", name: "Electric BBQ Grill", price: 2599, url: "https://link.amazon/B0bDrytoz", image: "https://m.media-amazon.com/images/I/410iOA0F+lL.jpg" },
      { id: "sink-drainer-mat", name: "Sink Drainer Mat", price: 530, url: "https://link.amazon/B0j9wPoqX", image: "https://m.media-amazon.com/images/I/61e-niERB4L._SL1500_.jpg" },
      { id: "pineapple-peeler", name: "Pineapple Peeler", price: 299, url: "https://link.amazon/B0gnFo2KM", image: "https://m.media-amazon.com/images/I/416jX722aCL.jpg" },
      { id: "kitchen-wallpaper", name: "Kitchen Wallpaper (Oil & Water Proof)", price: 174, url: "https://link.amazon/B01mfvuTW", image: "https://m.media-amazon.com/images/I/61MOamcjZoL._SL1500_.jpg" },
      { id: "soap-stand", name: "Soap Stand", price: 279, url: "https://link.amazon/B07a1CVLh", image: "https://m.media-amazon.com/images/I/41BdSR9jl4L._SX679_.jpg" },
      { id: "sink-strainer", name: "Sink Strainer", price: 479, url: "https://link.amazon/B077sshYj", image: "https://m.media-amazon.com/images/I/6140iA2aRFL._SL1500_.jpg" },
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
  {
    slug: "interesting-home-finds",
    title: "Interesting Home Finds",
    description: "Odd little household fixes you didn't know you needed.",
    items: [
      { id: "glue-remover-scraper", name: "Glue Remover Cleaning Scraper Tool", price: 283, url: "https://link.amazon/B06M0gsPN", image: "https://m.media-amazon.com/images/I/61dp6I-oFCL._SL1500_.jpg" },
      { id: "wardrobe-foldable-ironing-board", name: "Wardrobe Pull Out Foldable Ironing Board", price: 5649, url: "https://link.amazon/B0faUdYZ9", image: "https://m.media-amazon.com/images/I/61DElBHC1EL._SL1400_.jpg" },
      { id: "premium-wooden-ironing-board", name: "Premium Wooden Ironing Board", price: 1349, url: "https://link.amazon/B0aqkzUcm", image: "https://m.media-amazon.com/images/I/813Li-CVe+L._SL1500_.jpg" },
      { id: "bathla-xpres-ace-ironing-board", name: "Bathla X-Pres Ace Ironing Board", price: 3899, url: "https://link.amazon/B0aWkcQ8C", image: "https://m.media-amazon.com/images/I/81GuUePJHQL._SL1500_.jpg" },
      { id: "door-stoppers", name: "Door Stoppers", price: 140, url: "https://link.amazon/B031hkho1", image: "https://m.media-amazon.com/images/I/6161c2Kq2wL._SL1200_.jpg" },
      { id: "door-bumper-wall-protectors", name: "Door Bumper Stoppers Wall Protectors", price: 216, url: "https://link.amazon/B0atYGue2", image: "https://m.media-amazon.com/images/I/61-9mYLznIL._SL1500_.jpg" },
      { id: "round-door-handle-bumper", name: "Round Door Handle Bumper", price: 170, url: "https://link.amazon/B0ecivUXt", image: "https://m.media-amazon.com/images/I/8134YVxAX0L._SL1500_.jpg" },
      { id: "silicone-heating-mat", name: "Silicone Heating Mat for Food", price: 2199, url: "https://link.amazon/B000LwoRJ", image: "https://m.media-amazon.com/images/I/71b5+L4iqyL._SX679_.jpg" },
      { id: "handheld-vacuum-cleaner", name: "Handheld Vacuum Cleaner", price: 2599, url: "https://link.amazon/B08zPb4Ke", image: "https://m.media-amazon.com/images/I/71+BHZtdFaL._SX679_.jpg" },
      { id: "bottle-cleaning-brush", name: "Bottle Cleaning Brush", price: 179, url: "https://link.amazon/B04y514Rx", image: "https://m.media-amazon.com/images/I/71P07Y06StL._SL1500_.jpg" },
      { id: "broom-mop-holder", name: "Broom Mop Holder", price: 543, url: "https://link.amazon/B0hOVEGnd", image: "https://m.media-amazon.com/images/I/71-lVQaSsvL._SL1500_.jpg" },
    ],
  },
  {
    slug: "car-cleaning-essentials",
    title: "Car Cleaning Essentials",
    description: "Everything you need to keep your car spotless, inside and out.",
    items: [
      { id: "car-interior-cleaning-brush-combo", name: "Car Interior Cleaning Brush Combo", price: 188, url: "https://link.amazon/B0aCHd9r8", image: "https://m.media-amazon.com/images/I/71BWSick7mL._SL1500_.jpg" },
      { id: "microfiber-cleaning-cloth-roll", name: "Microfiber Cleaning Cloth Roll 25x25 cm - Reusable", price: 183, url: "https://link.amazon/B068Dnjza", image: "https://m.media-amazon.com/images/I/715zqNB7+ML._SL1500_.jpg" },
      { id: "all-purpose-cleaning-wiper", name: "All-Purpose Cleaning Wiper (Set of 2)", price: 89, url: "https://link.amazon/B05JAoD2y", image: "https://m.media-amazon.com/images/I/515kIic-J3L._SL1500_.jpg" },
      { id: "5-in-1-car-cleaning-kit", name: "5 in 1 Car Cleaning Kit", price: 275, url: "https://link.amazon/B0g4KNV58", image: "https://m.media-amazon.com/images/I/81HpJ-spr5L._SL1500_.jpg" },
      { id: "3m-car-wash-shampoo", name: "3M Car wash Shampoo (1 Litre)", price: 599, url: "https://link.amazon/B09fvGnFU", image: "https://m.media-amazon.com/images/I/714jMFnhQbL._SL1500_.jpg" },
      { id: "car-cleaning-brush-set", name: "Car Cleaning Brush (Set of 5)", price: 324, url: "https://link.amazon/B04F6B0pk", image: "https://m.media-amazon.com/images/I/61Fctd4KZVL._SL1500_.jpg" },
      { id: "car-interior-cleaner-protectant", name: "Car Interior Cleaner and Protectant", price: 474, url: "https://link.amazon/B05uJsHJC", image: "https://m.media-amazon.com/images/I/61vHk4ngGPL._SL1500_.jpg" },
      { id: "car-wheel-tire-brush-hub-clean-kit", name: "Car Wheel Tire Brush + Hub Clean Brush Cleaning Tool Kit", price: 264, url: "https://link.amazon/B0i8Cpw1k", image: "https://m.media-amazon.com/images/I/71m-mlgMSQL._SL1500_.jpg" },
      { id: "wavex-car-cleaning-kit", name: "Wavex Car Cleaning Kit", price: 664, url: "https://link.amazon/B05xHMCWb", image: "https://m.media-amazon.com/images/I/81yOYQthbLL._SL1500_.jpg" },
      { id: "airblower-pressure-spray-bottle", name: "AirBlower Pressure Spray Bottle for Car Washing", price: 322, url: "https://link.amazon/B07jq1YIg", image: "https://m.media-amazon.com/images/I/71zZnN1PsNL._SL1500_.jpg" },
    ],
  },
];
