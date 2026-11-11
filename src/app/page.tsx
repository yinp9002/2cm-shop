import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
import { Container } from "@/components/container";
import { ProductArt } from "@/components/product-art";
import { ProductGrid } from "@/components/product-card";
import { ShopButtonLink } from "@/components/shop-button";
import { buttonVariants } from "@/components/ui/button";
import {
  categories,
  categoryOrder,
  getProductsByCategory,
  products,
} from "@/lib/catalog";
import { cn } from "cn";

export default function HomePage() {
  return (
    <>
      <section>
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <h1 className="font-heading text-[clamp(3.4rem,8vw,6.7rem)] leading-[0.9] tracking-[-0.035em]">
              <span className="block">Charge up.</span>
              <span className="block text-[#2f45f5]">Tune in.</span>
              <span className="block">Turn it up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              2CM is a world trading company for everyday electronics. Shop power banks, earphones,
              and speakers — all in one colorful shop.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ShopButtonLink href="/shop">Shop the collection</ShopButtonLink>
              <ShopButtonLink href="#categories" variant="outline">
                Browse categories
              </ShopButtonLink>
            </div>
          </div>
          <div className="grid gap-3">
            {categoryOrder.map((slug) => {
              const category = categories[slug];
              const preview = getProductsByCategory(slug)[0];
              return (
                <Link
                  key={slug}
                  href={category.href}
                  className={cn(
                    "grid grid-cols-[1fr_auto] items-center gap-4 rounded-[1.6rem] px-5 py-4",
                    category.panelClass,
                  )}
                >
                  <span>
                    <span className="block font-heading text-3xl tracking-tight">{category.name}</span>
                    <span className="mt-1 block text-sm font-medium">
                      {getProductsByCategory(slug).length} items
                    </span>
                  </span>
                  {preview ? (
                    <ProductArt product={preview} labeled={false} className="size-20 rounded-2xl" />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card">
        <Container className="grid gap-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <h2 className="font-heading text-4xl tracking-tight md:text-5xl">
            Everyday electronics, easy to browse
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            Find a power bank for the commute, earphones for music and calls, or a speaker for home
            and travel. Pick a category, choose a model, and add it to your cart.
          </p>
        </Container>
      </section>

      <section id="categories" className="scroll-mt-28">
        <Container className="py-14 md:py-20">
          <h2 className="font-heading text-4xl tracking-tight md:text-5xl">Shop by category</h2>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {categoryOrder.map((slug) => {
              const category = categories[slug];
              return (
                <li key={slug}>
                  <article
                    className={cn(
                      "flex min-h-[24rem] flex-col justify-between rounded-[2rem] p-7 md:min-h-[28rem] md:p-8",
                      category.panelClass,
                    )}
                  >
                    <div>
                      <p className="text-sm font-semibold">{getProductsByCategory(slug).length} items</p>
                      <h3 className="mt-3 font-heading text-4xl tracking-tight md:text-5xl">
                        {category.name}
                      </h3>
                      <p className="mt-4 max-w-xs text-base leading-relaxed">{category.homeBlurb}</p>
                    </div>
                    <Link
                      href={category.href}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-8 h-12 w-fit rounded-full bg-white px-5 text-[#1c1916] hover:bg-white/90",
                      )}
                    >
                      {category.cta}
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-[#fff8ee]">
        <Container className="py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl tracking-tight md:text-5xl">Featured picks</h2>
              <p className="mt-4 text-lg leading-relaxed">
                A first look at the devices in this shop. Product photos are placeholders.
              </p>
            </div>
            <ShopButtonLink href="/shop" variant="outline">
              View all
            </ShopButtonLink>
          </div>
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 md:py-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-card lg:grid-cols-2">
            <div className="grid">
              {categoryOrder.map((slug) => (
                <Link
                  key={slug}
                  href={categories[slug].href}
                  className={cn(
                    "flex items-end px-7 py-8 font-heading text-4xl tracking-tight md:text-5xl",
                    categories[slug].panelClass,
                  )}
                >
                  {categories[slug].name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
              <h2 className="font-heading text-4xl tracking-tight md:text-5xl">
                A trading company for everyday tech
              </h2>
              <p className="text-lg leading-relaxed">
                2CM sources and sells electronic devices for daily use. This first shop focuses on
                three essentials: power banks, earphones, and speakers.
              </p>
              <ShopButtonLink href="/about" className="w-fit">
                About 2CM
              </ShopButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-border bg-[#2f45f5] p-7 text-white md:grid-cols-[1fr_1fr] md:p-12">
            <div>
              <h2 className="font-heading text-4xl tracking-tight md:text-5xl">Questions? Get in touch</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">
                Reach us with the placeholder details below — they are for this demo only, so the
                page looks complete.
              </p>
              <ShopButtonLink
                href="/contact"
                className="mt-6 w-fit bg-white text-[#1c1916] hover:bg-white/90"
              >
                Contact
              </ShopButtonLink>
            </div>
            <ContactDetails className="text-white [&_a]:text-white [&_dt]:text-white/70" />
          </div>
        </Container>
      </section>
    </>
  );
}
