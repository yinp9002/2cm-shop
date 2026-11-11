import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product-card";
import { getProductsByCategory, type Category } from "@/lib/catalog";

export function CategoryView({ category }: { category: Category }) {
  return (
    <Container className="py-12 md:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">Shop</p>
        <h1 className="mt-3 font-heading text-5xl tracking-tight md:text-6xl">{category.name}</h1>
        <p className="mt-4 text-lg leading-relaxed">{category.intro}</p>
      </header>
      <div className="mt-10">
        <ProductGrid products={getProductsByCategory(category.slug)} />
      </div>
    </Container>
  );
}
