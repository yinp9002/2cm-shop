"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, products } from "@/lib/catalog";

const STORAGE_KEY = "2cm-demo-cart";
const MAX_QTY = 99;

export type CartLine = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function sanitize(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return [];
  const known = new Set(products.map((product) => product.slug));
  const lines: CartLine[] = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const slug = "slug" in entry ? String(entry.slug) : "";
    const quantity = "quantity" in entry ? Number(entry.quantity) : 0;
    if (!known.has(slug) || !Number.isInteger(quantity) || quantity < 1) continue;
    lines.push({ slug, quantity: Math.min(quantity, MAX_QTY) });
  }
  return lines;
}

function loadLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? sanitize(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // The saved cart lives in localStorage, so the first render must match the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLines(loadLines());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => {
      const product = getProduct(line.slug);
      return sum + (product ? product.price * line.quantity : 0);
    }, 0);

    return {
      lines,
      ready,
      count,
      subtotal,
      add: (slug, quantity = 1) => {
        const product = getProduct(slug);
        const addQty = Math.max(1, Math.min(MAX_QTY, Math.floor(quantity)));
        if (!product) return;
        setLines((current) => {
          const existing = current.find((line) => line.slug === slug);
          if (!existing) return [...current, { slug, quantity: addQty }];
          return current.map((line) =>
            line.slug === slug
              ? { ...line, quantity: Math.min(MAX_QTY, line.quantity + addQty) }
              : line,
          );
        });
      },
      setQuantity: (slug, quantity) => {
        const next = Math.floor(quantity);
        setLines((current) => {
          if (!Number.isFinite(next) || next < 1) {
            return current.filter((line) => line.slug !== slug);
          }
          return current.map((line) =>
            line.slug === slug ? { ...line, quantity: Math.min(MAX_QTY, next) } : line,
          );
        });
      },
      remove: (slug) => {
        setLines((current) => current.filter((line) => line.slug !== slug));
      },
      clear: () => setLines([]),
    };
  }, [lines, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
