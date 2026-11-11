import type { Metadata } from "next";
import { CategoryView } from "@/components/category-view";
import { ProductView } from "@/components/product-view";
import { categories, getProduct, type CategorySlug } from "@/lib/catalog";
import { formatHkd } from "@/lib/format";

export function categoryPage(slug: CategorySlug) {
  const category = categories[slug];
  const metadata: Metadata = {
    title: category.name,
    description: category.intro,
  };
  function Page() {
    return <CategoryView category={category} />;
  }
  return { metadata, Page };
}

export function productPage(slug: string) {
  const found = getProduct(slug);
  if (!found) throw new Error(`Unknown product: ${slug}`);
  const product = found;
  const metadata: Metadata = {
    title: product.name,
    description: `${product.name}. ${product.shortLine} ${formatHkd(product.price)}.`,
  };
  function Page() {
    return <ProductView product={product} />;
  }
  return { metadata, Page };
}
