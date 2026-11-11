import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product-card";
import { categories, categoryOrder, getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Find a power bank for the commute, earphones for music and calls, or a speaker for home and travel.",
};

export default function ShopPage() {
  return (
    <Container className="py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="font-heading text-5xl tracking-tight md:text-6xl">Shop</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Find a power bank for the commute, earphones for music and calls, or a speaker for home
          and travel. Pick a category, choose a model, and add it to your cart.
        </p>
      </header>
      <div className="mt-12 grid gap-14">
        {categoryOrder.map((slug) => {
          const category = categories[slug];
          return (
            <section key={slug} aria-labelledby={`shop-${slug}`}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div className="max-w-2xl">
                  <h2 id={`shop-${slug}`} className="font-heading text-4xl tracking-tight">
                    {category.name}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed">{category.intro}</p>
                </div>
                <Link href={category.href} className="text-sm font-semibold underline-offset-4 hover:underline">
                  View collection
                </Link>
              </div>
              <ProductGrid products={getProductsByCategory(slug)} />
            </section>
          );
        })}
      </div>
    </Container>
  );
}
