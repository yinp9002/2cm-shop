"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { pillButtonClass } from "@/components/shop-button";
import { QuantityField } from "@/components/quantity-field";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/catalog";

export function ProductPurchase({ slug }: { slug: string }) {
  const product = getProduct(slug);
  const { add } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const qty = Math.max(1, Math.min(99, quantity || 1));

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        add(slug, qty);
        setAdded(true);
      }}
    >
      <QuantityField
        id={`qty-${slug}`}
        label={`Quantity for ${product.name}`}
        value={quantity}
        onChange={(next) => {
          if (next < 1) setQuantity(1);
          else if (next > 99) setQuantity(99);
          else setQuantity(next);
        }}
      />
      <div className="flex flex-wrap gap-3">
        <Button type="submit" className={pillButtonClass}>
          Add to cart
        </Button>
        <Button
          type="button"
          variant="outline"
          className={pillButtonClass}
          onClick={() => {
            add(slug, qty);
            router.push("/checkout");
          }}
        >
          Buy now
        </Button>
      </div>
      <p role="status" className="min-h-6 text-sm font-medium">
        {added ? `Added ${product.name} to cart.` : ""}
      </p>
    </form>
  );
}
