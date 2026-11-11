export const categoryOrder = ["power-banks", "earphones", "speakers"] as const;

export type CategorySlug = (typeof categoryOrder)[number];

export type Motif = "slab" | "puck" | "brick" | "buds" | "speaker";

export type Category = {
  slug: CategorySlug;
  name: string;
  homeBlurb: string;
  intro: string;
  cta: string;
  href: string;
  panelClass: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: CategorySlug;
  motif: Motif;
  from: string;
  to: string;
  ink: string;
};

export const categories: Record<CategorySlug, Category> = {
  "power-banks": {
    slug: "power-banks",
    name: "Power Banks",
    homeBlurb: "Portable charging for phones and daily carry.",
    intro:
      "Stay charged on the go. Browse portable power banks for phones, tablets, and daily carry.",
    cta: "Shop power banks",
    href: "/shop/power-banks",
    panelClass: "bg-[#ffb21a] text-[#1c1916]",
  },
  earphones: {
    slug: "earphones",
    name: "Earphones",
    homeBlurb: "Clear sound for music, calls, and commuting.",
    intro:
      "Everyday earphones for music, calls, and commuting. Find a pair that fits the way you listen.",
    cta: "Shop earphones",
    href: "/shop/earphones",
    panelClass: "bg-[#2f45f5] text-white",
  },
  speakers: {
    slug: "speakers",
    name: "Speakers",
    homeBlurb: "Sound for the desk, the room, and the road.",
    intro:
      "Speakers for the desk, the room, and the road. Browse everyday options you can add to your cart.",
    cta: "Shop speakers",
    href: "/shop/speakers",
    panelClass: "bg-[#ff4d6a] text-[#1c1916]",
  },
};

export const products: Product[] = [
  {
    slug: "xiaomi-50w-power-bank-20000",
    name: "Xiaomi 50W Power Bank 20000",
    price: 299,
    category: "power-banks",
    motif: "slab",
    from: "#ff8a3d",
    to: "#ffd7a1",
    ink: "#4a220c",
  },
  {
    slug: "anker-zolo-power-bank-10k-magnetic-a1685",
    name: "Anker Zolo Power Bank 10K Magnetic (A1685)",
    price: 329,
    category: "power-banks",
    motif: "puck",
    from: "#1d2a44",
    to: "#5b78ff",
    ink: "#eef2ff",
  },
  {
    slug: "anker-prime-20000mah-200w-a1336",
    name: "Anker Prime 20,000mAh 200W (A1336)",
    price: 899,
    category: "power-banks",
    motif: "brick",
    from: "#2c2c2c",
    to: "#8a8a8a",
    ink: "#f6f6f6",
  },
  {
    slug: "soundcore-liberty-4-nc",
    name: "Soundcore Liberty 4 NC",
    price: 699,
    category: "earphones",
    motif: "buds",
    from: "#14c4a8",
    to: "#d9fff6",
    ink: "#08352e",
  },
  {
    slug: "sony-wf-1000xm5",
    name: "Sony WF-1000XM5",
    price: 1299,
    category: "earphones",
    motif: "buds",
    from: "#1a1a1a",
    to: "#4a4a4a",
    ink: "#f4f4f4",
  },
  {
    slug: "apple-airpods-pro-3",
    name: "Apple AirPods Pro 3",
    price: 1799,
    category: "earphones",
    motif: "buds",
    from: "#f7f3ec",
    to: "#e4ddd2",
    ink: "#1c1916",
  },
  {
    slug: "jbl-flip-7",
    name: "JBL Flip 7",
    price: 849,
    category: "speakers",
    motif: "speaker",
    from: "#ff5a1f",
    to: "#ffc857",
    ink: "#3d1608",
  },
  {
    slug: "jbl-charge-6",
    name: "JBL Charge 6",
    price: 1199,
    category: "speakers",
    motif: "speaker",
    from: "#e10600",
    to: "#ff9a6b",
    ink: "#fff8f5",
  },
  {
    slug: "bose-soundlink-flex-2nd-gen",
    name: "Bose SoundLink Flex 2nd Gen",
    price: 1399,
    category: "speakers",
    motif: "speaker",
    from: "#3d5a80",
    to: "#b7d4e4",
    ink: "#071421",
  },
];

export function getCategory(slug: string): Category | undefined {
  if (categoryOrder.includes(slug as CategorySlug)) {
    return categories[slug as CategorySlug];
  }
  return undefined;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((product) => product.category === slug);
}

export const contactDetails = {
  email: "hello@2cm-demo.com",
  emailHref: "mailto:hello@2cm-demo.com",
  phone: "+852 1234 5678",
  phoneHref: "tel:+85212345678",
  whatsapp: "+852 1234 5678",
  whatsappHref: "https://wa.me/85212345678",
  address: "12/F, Demo House, 88 Example Street, Kowloon, Hong Kong",
  hours: "Monday–Friday, 10:00–18:00 (Hong Kong time)",
} as const;

export const demoCheckoutNote =
  "This is a demo checkout. Orders placed here will not be fulfilled.";

export const footerLine =
  "© 2026 2CM. All rights reserved. Prices in HKD. Contact details on this demo are placeholders.";
