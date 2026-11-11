"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { pillButtonClass } from "@/components/shop-button";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/catalog";
import { cn } from "cn";

export function AddToCartButton({
  slug,
  quantity = 1,
  className,
}: {
  slug: string;
  quantity?: number;
  className?: string;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const product = getProduct(slug);

  return (
    <>
      <Button
        type="button"
        className={cn(pillButtonClass, "h-10 px-4", className)}
        onClick={() => {
          add(slug, quantity);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1600);
        }}
      >
        Add to cart
      </Button>
      <span className="sr-only" role="status">
        {added && product ? `Added ${product.name} to cart.` : ""}
      </span>
    </>
  );
}
