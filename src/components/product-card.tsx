import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductArt } from "@/components/product-art";
import { categories, type Product } from "@/lib/catalog";
import { formatHkd } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const category = categories[product.category];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-[0_10px_30px_rgba(28,25,22,0.05)]">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductArt product={product} className="aspect-square" />
        <span className="sr-only">Placeholder image for {product.name}</span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {category.name}
        </p>
        <h3 className="font-heading text-2xl leading-tight tracking-tight">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="text-lg font-semibold" data-price={product.price}>
          {formatHkd(product.price)}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            View product
          </Link>
          <AddToCartButton slug={product.slug} />
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <li key={product.slug}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
