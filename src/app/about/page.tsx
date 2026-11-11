import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ShopButtonLink } from "@/components/shop-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "2CM is a world trading company that sells electronic devices. This shop is built to make everyday tech easy to browse and buy.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="font-heading text-5xl tracking-tight md:text-6xl">About 2CM</h1>
        <p className="mt-5 text-lg leading-relaxed">
          2CM is a world trading company that sells electronic devices. This shop is built to make
          everyday tech easy to browse and buy, starting with power banks, earphones, and speakers.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-10">
          <section>
            <h2 className="font-heading text-3xl tracking-tight md:text-4xl">
              What you’ll find in the shop
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
              The first collection is small and focused: a few well-known power banks, earphones, and
              speakers, with prices in Hong Kong dollars. More items can be added as the shop grows.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-3xl tracking-tight md:text-4xl">Shopping with 2CM</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
              Browse by category, open a product, and add it to your cart. Checkout is included in
              this demo so you can walk through the full path. Fulfilment, shipping, returns, and
              warranty terms will be confirmed before a live launch.
            </p>
          </section>
          <ShopButtonLink href="/shop" className="w-fit">
            Shop the collection
          </ShopButtonLink>
        </div>
        <aside className="grid content-start gap-3">
          <div className="rounded-[1.6rem] bg-[#ffb21a] px-6 py-8 font-heading text-4xl tracking-tight">
            Power Banks
          </div>
          <div className="rounded-[1.6rem] bg-[#2f45f5] px-6 py-8 font-heading text-4xl tracking-tight text-white">
            Earphones
          </div>
          <div className="rounded-[1.6rem] bg-[#ff4d6a] px-6 py-8 font-heading text-4xl tracking-tight">
            Speakers
          </div>
        </aside>
      </div>
    </Container>
  );
}
