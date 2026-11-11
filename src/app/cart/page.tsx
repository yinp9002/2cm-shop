import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Cart",
  description: "This is a demo checkout. Orders placed here will not be fulfilled.",
};

export default function CartPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-heading text-5xl tracking-tight md:text-6xl">Cart</h1>
      <div className="mt-8">
        <CartView />
      </div>
    </Container>
  );
}
