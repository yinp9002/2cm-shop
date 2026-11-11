import type { Metadata } from "next";
import { OrderConfirmation } from "@/components/order-confirmation";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Demo order",
  description: "This is a demo checkout. Orders placed here will not be fulfilled.",
};

export default function ConfirmationPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-heading text-5xl tracking-tight md:text-6xl">Demo order received</h1>
      <div className="mt-8">
        <OrderConfirmation />
      </div>
    </Container>
  );
}
