"use client";

import Link from "next/link";
import { DemoNote } from "@/components/demo-note";
import { ProductArt } from "@/components/product-art";
import { QuantityField } from "@/components/quantity-field";
import { ShopButtonLink } from "@/components/shop-button";
import { Button } from "@/components/ui/button";
import { categoryOrder, categories, getProduct } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { formatHkd } from "@/lib/format";

export function CartView() {
  const { lines, ready, setQuantity, remove, subtotal } = useCart();

  if (!ready) {
    return <p className="text-muted-foreground">Loading your cart…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className="grid gap-6">
        <DemoNote />
        <p className="font-heading text-3xl tracking-tight">
          Your cart is empty — start with a collection.
        </p>
        <div className="flex flex-wrap gap-3">
          <ShopButtonLink href="/shop">Shop now</ShopButtonLink>
          {categoryOrder.map((slug) => (
            <ShopButtonLink key={slug} href={categories[slug].href} variant="outline">
              {categories[slug].name}
            </ShopButtonLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="grid gap-4">
        <DemoNote />
        <ul className="grid gap-4">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            const category = categories[product.category];
            return (
              <li
                key={line.slug}
                className="grid grid-cols-[5.5rem_1fr] gap-4 rounded-[1.4rem] border border-border bg-card p-3 sm:grid-cols-[6.5rem_1fr_auto] sm:p-4"
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <ProductArt product={product} className="aspect-square rounded-2xl" />
                  <span className="sr-only">Placeholder image for {product.name}</span>
                </Link>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {category.name}
                  </p>
                  <h2 className="mt-1 font-heading text-xl leading-tight">
                    <Link href={`/products/${product.slug}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm">{formatHkd(product.price)}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <QuantityField
                      id={`cart-${product.slug}`}
                      label={`Quantity for ${product.name}`}
                      value={line.quantity}
                      onChange={(next) => setQuantity(product.slug, next)}
                    />
                    <Button type="button" variant="ghost" onClick={() => remove(product.slug)}>
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="col-span-2 text-right font-semibold sm:col-span-1 sm:pt-1">
                  {formatHkd(product.price * line.quantity)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <aside className="h-fit rounded-[1.6rem] bg-[#1c1916] p-6 text-[#f4efe4]">
        <h2 className="font-heading text-3xl tracking-tight">Summary</h2>
        <dl className="mt-6 grid gap-3 text-sm">
          <div className="flex justify-between gap-4 text-base font-semibold">
            <dt>Subtotal</dt>
            <dd>{formatHkd(subtotal)}</dd>
          </div>
          <div className="flex justify-between gap-4 text-[#f4efe4]/75">
            <dt>Shipping</dt>
            <dd>To be confirmed before launch</dd>
          </div>
        </dl>
        <div className="mt-6 grid gap-3">
          <ShopButtonLink
            href="/checkout"
            className="bg-[#d6f25c] text-[#1c1916] hover:bg-[#e4ff7a]"
          >
            Checkout
          </ShopButtonLink>
          <ShopButtonLink href="/shop" variant="outline" className="border-white/30 bg-transparent text-[#f4efe4] hover:bg-white/10">
            Continue shopping
          </ShopButtonLink>
        </div>
      </aside>
    </div>
  );
}
