"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/demo-note";
import { ShopButtonLink } from "@/components/shop-button";
import { formatHkd } from "@/lib/format";
import { ORDER_STORAGE_KEY, type DemoOrder } from "@/lib/order";

function readOrder(): DemoOrder | null {
  try {
    const raw = sessionStorage.getItem(ORDER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DemoOrder;
    if (!parsed || typeof parsed.reference !== "string" || !Array.isArray(parsed.items)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function OrderConfirmation() {
  const [order, setOrder] = useState<DemoOrder | null | undefined>(undefined);

  useEffect(() => {
    // The demo order is stored in sessionStorage after checkout.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(readOrder());
  }, []);

  if (order === undefined) {
    return <p className="text-muted-foreground">Loading your demo order…</p>;
  }

  if (!order) {
    return (
      <div className="grid gap-6">
        <DemoNote />
        <p className="max-w-xl text-lg">There is no demo order to show.</p>
        <ShopButtonLink href="/shop" className="w-fit">
          Continue shopping
        </ShopButtonLink>
      </div>
    );
  }

  const placed = new Intl.DateTimeFormat("en-HK", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Hong_Kong",
  }).format(new Date(order.placedAt));

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-5">
        <DemoNote />
        <p className="text-lg">
          Demo reference <span className="font-semibold">{order.reference}</span>
        </p>
        <p className="text-sm text-muted-foreground">{placed} (Hong Kong time)</p>
        <div className="rounded-[1.6rem] border border-border bg-card p-5">
          <h2 className="font-heading text-2xl">Details entered</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Name</dt>
              <dd>{order.customer.name}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd>{order.customer.email}</dd>
            </div>
            {order.customer.phone ? (
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>{order.customer.phone}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-muted-foreground">Address</dt>
              <dd>{order.customer.address}</dd>
            </div>
          </dl>
        </div>
      </div>
      <aside className="h-fit rounded-[1.6rem] bg-[#1c1916] p-6 text-[#f4efe4]">
        <h2 className="font-heading text-3xl tracking-tight">Items</h2>
        <ul className="mt-5 grid gap-3 text-sm">
          {order.items.map((item) => (
            <li key={item.slug} className="flex justify-between gap-4">
              <span>
                {item.name}
                <span className="text-[#f4efe4]/70"> × {item.quantity}</span>
              </span>
              <span>{formatHkd(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-white/15 pt-4 font-semibold">
          Subtotal {formatHkd(order.subtotal)}
        </p>
        <p className="mt-2 text-sm text-[#f4efe4]/75">Shipping: To be confirmed before launch.</p>
        <ShopButtonLink
          href="/shop"
          className="mt-6 bg-[#d6f25c] text-[#1c1916] hover:bg-[#e4ff7a]"
        >
          Continue shopping
        </ShopButtonLink>
      </aside>
    </div>
  );
}
