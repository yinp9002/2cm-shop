import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
import { categoryOrder, categories, footerLine } from "@/lib/catalog";

const footerNav = [
  { href: "/", label: "Home" },
  ...categoryOrder.map((slug) => ({ href: categories[slug].href, label: categories[slug].name })),
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#1c1916] text-[#f4efe4]">
      <div className="grid h-2 grid-cols-3" aria-hidden>
        <div className="bg-[#ffb21a]" />
        <div className="bg-[#2f45f5]" />
        <div className="bg-[#ff4d6a]" />
      </div>
      <div className="mx-auto grid w-[90%] max-w-[1400px] gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1.2fr]">
        <div>
          <p className="font-heading text-4xl tracking-tight">2CM</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f4efe4]/75">
            2CM is a world trading company for everyday electronics. Shop power banks, earphones,
            and speakers — all in one colorful shop.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ContactDetails inverted className="text-sm" />
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-[90%] max-w-[1400px] py-5 text-sm text-[#f4efe4]/75">{footerLine}</p>
      </div>
    </footer>
  );
}
