export const categoryOrder = ["power-banks", "earphones", "speakers"] as const;

export type CategorySlug = (typeof categoryOrder)[number];

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
  shortLine: string;
  details: string;
  image: string;
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
    shortLine: "A 20,000mAh Xiaomi power bank with 50W output and three ports.",
    details:
      "20,000mAh (74Wh) capacity, with up to 50W output. One USB-C port for input and output, plus two USB-A output ports, so you can charge up to three devices at once.",
    image: "/products/xiaomi-50w-power-bank-20000.png",
  },
  {
    slug: "anker-zolo-10k-magnetic-a1685",
    name: "Anker Zolo Power Bank 10K Magnetic (A1685)",
    price: 329,
    category: "power-banks",
    shortLine:
      "A compact 10,000mAh magnetic power bank with 30W wired charging and a built-in USB-C cable.",
    details:
      "10,000mAh capacity. Charge at up to 30W through the built-in USB-C cable, or use magnetic wireless charging at up to 7.5W. A built-in kickstand holds your phone for hands-free viewing.",
    image: "/products/anker-zolo-10k-magnetic-a1685.png",
  },
  {
    slug: "anker-prime-20000-200w-a1336",
    name: "Anker Prime 20,000mAh 200W (A1336)",
    price: 899,
    category: "power-banks",
    shortLine: "A 20,000mAh Anker power bank with up to 200W total output, for phones and laptops.",
    details:
      "20,000mAh capacity, with two USB-C ports and one USB-A port. Total output up to 200W, and each USB-C port supports up to 100W. A digital screen shows output, input, and remaining charge.",
    image: "/products/anker-prime-20000-200w-a1336.png",
  },
  {
    slug: "soundcore-liberty-4-nc",
    name: "Soundcore Liberty 4 NC",
    price: 699,
    category: "earphones",
    shortLine: "True wireless earphones with adaptive noise cancelling and long battery life.",
    details:
      "Adaptive ANC 2.0 and 11mm drivers, with Bluetooth 5.3 multipoint connection. Up to 10 hours per charge, or 50 hours with the case (up to 8 hours with ANC on, 40 hours with the case). The earbuds are IPX4 water-resistant.",
    image: "/products/soundcore-liberty-4-nc.jpg",
  },
  {
    slug: "sony-wf-1000xm5",
    name: "Sony WF-1000XM5",
    price: 1299,
    category: "earphones",
    shortLine: "Sony’s WF-1000XM5 truly wireless noise-cancelling earphones.",
    details:
      "Truly wireless earphones with active noise cancellation, for music, calls, and commuting. Further on-page specs can be added if needed once official details are confirmed for this listing.",
    image: "/products/sony-wf-1000xm5.jpg",
  },
  {
    slug: "apple-airpods-pro-3",
    name: "Apple AirPods Pro 3",
    price: 1799,
    category: "earphones",
    shortLine:
      "Apple AirPods Pro 3 with Active Noise Cancellation and up to 8 hours of listening on a charge.",
    details:
      "Active Noise Cancellation, with heart rate sensing during workouts. Up to 8 hours of listening with ANC on a single charge. IP57 dust, sweat, and water resistance. Includes a MagSafe Charging Case (USB-C).",
    image: "/products/apple-airpods-pro-3.jpg",
  },
  {
    slug: "jbl-flip-7",
    name: "JBL Flip 7",
    price: 849,
    category: "speakers",
    shortLine: "A portable JBL Bluetooth speaker with AI Sound Boost and up to 16 hours of playtime.",
    details:
      "Portable Bluetooth speaker with AI Sound Boost. Up to 14 hours on a charge, plus 2 hours with Playtime Boost (up to 16 hours in total). IP68 waterproof and dustproof. Bluetooth 5.4, with Auracast pairing for more than one compatible JBL speaker.",
    image: "/products/jbl-flip-7.jpg",
  },
  {
    slug: "jbl-charge-6",
    name: "JBL Charge 6",
    price: 1199,
    category: "speakers",
    shortLine: "A portable JBL Bluetooth speaker with AI Sound Boost and up to 24 hours of playtime.",
    details:
      "Portable Bluetooth speaker with AI Sound Boost. Up to 24 hours of playtime, plus 4 hours with Playtime Boost. IP68 waterproof and dustproof. It can also charge other devices, and supports Auracast pairing with compatible JBL speakers.",
    image: "/products/jbl-charge-6.jpg",
  },
  {
    slug: "bose-soundlink-flex-2nd-gen",
    name: "Bose SoundLink Flex (2nd Gen)",
    price: 1399,
    category: "speakers",
    shortLine: "A packable Bose Bluetooth speaker with deep bass and up to 12 hours of battery life.",
    details:
      "Portable Bluetooth speaker with PositionIQ, which adjusts the sound to the speaker’s orientation. Up to 12 hours of battery life. IP67 dust and water resistant, and it floats. Bluetooth 5.3, with USB-C charging.",
    image: "/products/bose-soundlink-flex-2nd-gen.png",
  },
];

export const featuredPicks: { slug: string; line: string }[] = [
  {
    slug: "xiaomi-50w-power-bank-20000",
    line: "20,000mAh with 50W output.",
  },
  {
    slug: "soundcore-liberty-4-nc",
    line: "True wireless earphones with adaptive noise cancelling.",
  },
  {
    slug: "jbl-flip-7",
    line: "Portable Bluetooth speaker with up to 16 hours of playtime.",
  },
];

export const shippingNote =
  "Shipping, returns, and warranty will be confirmed before a live launch.";

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
