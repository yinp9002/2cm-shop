import Link from "next/link";
import { Container } from "@/components/container";
import { ProductArt } from "@/components/product-art";
import { ProductGrid } from "@/components/product-card";
import { ProductPurchase } from "@/components/product-purchase";
import { categories, getProductsByCategory, type Product } from "@/lib/catalog";
import { formatHkd } from "@/lib/format";

export function ProductView({ product }: { product: Product }) {
  const category = categories[product.category];
  const others = getProductsByCategory(product.category).filter((item) => item.slug !== product.slug);

  return (
    <Container className="py-10 md:py-14">
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
          <li>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={category.href} className="hover:underline">
              {category.name}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
        <figure>
          <ProductArt product={product} className="aspect-square rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Placeholder image for {product.name}.
          </figcaption>
        </figure>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {category.name}
          </p>
          <h1 className="mt-3 font-heading text-4xl tracking-tight md:text-5xl">{product.name}</h1>
          <p className="mt-4 font-heading text-4xl" data-price={product.price}>
            {formatHkd(product.price)}
          </p>
          <ProductPurchase slug={product.slug} />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Market-reference demo listing.</p>
          <p className="mt-2 text-sm leading-relaxed">Shipping & returns: To be confirmed before launch.</p>
          <p className="mt-4">
            <Link href={category.href} className="text-sm font-semibold underline-offset-4 hover:underline">
              View collection
            </Link>
          </p>
        </div>
      </div>

      {others.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-heading text-3xl tracking-tight md:text-4xl">More in {category.name}</h2>
          <div className="mt-6">
            <ProductGrid products={others} />
          </div>
        </section>
      ) : null}
    </Container>
  );
}
