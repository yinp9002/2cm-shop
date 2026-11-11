"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { DemoNote } from "@/components/demo-note";
import { ShopButtonLink, pillButtonClass } from "@/components/shop-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categoryOrder, categories, getProduct } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { formatHkd } from "@/lib/format";
import { makeDemoReference, ORDER_STORAGE_KEY, type DemoOrder } from "@/lib/order";

const fieldClass = "h-11 rounded-xl bg-card px-3";

type Errors = {
  name?: string;
  email?: string;
  address?: string;
};

export function CheckoutFlow() {
  const { lines, ready, subtotal, clear } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [placing, setPlacing] = useState(false);

  if (!ready || placing) {
    return <p className="text-muted-foreground">{placing ? "Placing your demo order…" : "Loading checkout…"}</p>;
  }

  if (lines.length === 0) {
    return (
      <div className="grid gap-6">
        <DemoNote />
        <p className="font-heading text-3xl tracking-tight">
          Your cart is empty — start with a collection.
        </p>
        <div className="flex flex-wrap gap-3">
          <ShopButtonLink href="/shop">Shop now</ShopButtonLink>
          {categoryOrder.map((slug) => (
            <ShopButtonLink key={slug} href={categories[slug].href} variant="outline">
              {categories[slug].name}
            </ShopButtonLink>
          ))}
        </div>
      </div>
    );
  }

  function placeOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
    if (!address.trim()) next.address = "Enter a delivery address.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const items = lines.flatMap((line) => {
      const product = getProduct(line.slug);
      if (!product) return [];
      return [
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity: line.quantity,
        },
      ];
    });

    const order: DemoOrder = {
      reference: makeDemoReference(),
      placedAt: new Date().toISOString(),
      customer: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        address: address.trim(),
      },
      items,
      subtotal,
    };

    setPlacing(true);
    sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
    clear();
    router.push("/checkout/confirmation");
  }

  return (
    <form onSubmit={placeOrder} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]" noValidate>
      <div className="grid gap-5">
        <DemoNote />
        <p className="text-sm text-muted-foreground">No payment is collected.</p>
        <div className="grid gap-4 rounded-[1.6rem] border border-border bg-card p-5 md:p-6">
          <div className="grid gap-2">
            <Label htmlFor="checkout-name">Name</Label>
            <Input
              id="checkout-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "checkout-name-error" : undefined}
            />
            {errors.name ? (
              <p id="checkout-name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="checkout-email">Email</Label>
              <Input
                id="checkout-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "checkout-email-error" : undefined}
              />
              {errors.email ? (
                <p id="checkout-email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="checkout-phone">Phone</Label>
              <Input
                id="checkout-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={fieldClass}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="checkout-address">Address</Label>
            <Textarea
              id="checkout-address"
              name="address"
              autoComplete="street-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="min-h-28 rounded-xl bg-background px-3 py-3"
              aria-invalid={Boolean(errors.address)}
              aria-describedby={errors.address ? "checkout-address-error" : undefined}
            />
            {errors.address ? (
              <p id="checkout-address-error" className="text-sm text-destructive">
                {errors.address}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <aside className="h-fit rounded-[1.6rem] bg-[#1c1916] p-6 text-[#f4efe4]">
        <h2 className="font-heading text-3xl tracking-tight">Your order</h2>
        <ul className="mt-5 grid gap-3 text-sm">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li key={line.slug} className="flex justify-between gap-4">
                <span>
                  {product.name}
                  <span className="text-[#f4efe4]/70"> × {line.quantity}</span>
                </span>
                <span className="shrink-0">{formatHkd(product.price * line.quantity)}</span>
              </li>
            );
          })}
        </ul>
        <dl className="mt-5 grid gap-2 border-t border-white/15 pt-4 text-sm">
          <div className="flex justify-between gap-4 text-base font-semibold">
            <dt>Subtotal</dt>
            <dd>{formatHkd(subtotal)}</dd>
          </div>
          <div className="flex justify-between gap-4 text-[#f4efe4]/75">
            <dt>Shipping</dt>
            <dd className="text-right">To be confirmed before launch</dd>
          </div>
        </dl>
        <Button
          type="submit"
          disabled={placing}
          className={`${pillButtonClass} mt-6 w-full bg-[#d6f25c] text-[#1c1916] hover:bg-[#e4ff7a]`}
        >
          Place demo order
        </Button>
      </aside>
    </form>
  );
}
