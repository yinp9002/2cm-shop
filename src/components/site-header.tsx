"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryOrder, categories } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="2CM home">
      <span className="flex h-9 w-9 overflow-hidden rounded-xl" aria-hidden>
        <span className="h-full w-1/3 bg-[#ffb21a]" />
        <span className="h-full w-1/3 bg-[#2f45f5]" />
        <span className="h-full w-1/3 bg-[#ff4d6a]" />
      </span>
      <span className="font-heading text-[1.7rem] leading-none tracking-tight">2CM</span>
    </Link>
  );
}

const navClass = "rounded-full px-3 py-2 text-sm font-semibold hover:bg-white/70";

export function SiteHeader() {
  const { count, ready } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-[#d6f25c] px-4 py-2 text-center text-sm font-medium text-[#1c1916]">
        Prices in HKD. Contact details on this demo are placeholders.
      </div>
      <header className="border-b border-border/80 bg-[#f4efe4]/90 backdrop-blur-md">
        <div className="mx-auto flex w-[90%] max-w-[1400px] items-center justify-between gap-4 py-3">
          <Wordmark />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link href="/" className={navClass}>
              Home
            </Link>
            <div className="flex items-center">
              <Link href="/shop" className={navClass}>
                Shop
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="inline-flex size-8 items-center justify-center rounded-full hover:bg-white/70"
                  aria-label="Shop menu"
                >
                  <ChevronDownIcon className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-48 rounded-2xl p-2">
                  {categoryOrder.map((slug) => (
                    <DropdownMenuItem
                      key={slug}
                      render={<Link href={categories[slug].href} />}
                      className="rounded-xl px-3 py-2 text-sm font-medium"
                    >
                      {categories[slug].name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={navClass}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className={navClass}
              aria-label={ready ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart"}
            >
              Cart
              <span className="ml-2 inline-flex min-w-6 justify-center rounded-full bg-[#ff4d6a] px-1.5 py-0.5 text-xs text-[#1c1916]">
                {ready ? count : "–"}
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-border px-[5%] py-4 lg:hidden" aria-label="Mobile">
            <ul className="grid gap-1">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-white">
                  Shop
                </Link>
                <ul className="ml-3 border-l border-border pl-3">
                  {categoryOrder.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={categories[slug].href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm hover:bg-white"
                      >
                        {categories[slug].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
