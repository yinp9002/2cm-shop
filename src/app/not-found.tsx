import { Container } from "@/components/container";
import { ShopButtonLink } from "@/components/shop-button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="font-heading text-5xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg">That page is not in this shop.</p>
      <ShopButtonLink href="/shop" className="mt-8 w-fit">
        Shop the collection
      </ShopButtonLink>
    </Container>
  );
}
