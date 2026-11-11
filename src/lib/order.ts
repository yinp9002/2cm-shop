export const ORDER_STORAGE_KEY = "2cm-demo-last-order";

export type DemoOrderItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type DemoOrder = {
  reference: string;
  placedAt: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: DemoOrderItem[];
  subtotal: number;
};

export function makeDemoReference(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  let body = "";
  for (const byte of bytes) {
    body += alphabet[byte % alphabet.length];
  }
  return `2CM-${body}`;
}
