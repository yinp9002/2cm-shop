import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/checkout-flow";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Checkout",
  description: "This is a demo checkout. Orders placed here will not be fulfilled.",
};

export default function CheckoutPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-heading text-5xl tracking-tight md:text-6xl">Checkout</h1>
      <div className="mt-8">
        <CheckoutFlow />
      </div>
    </Container>
  );
}
