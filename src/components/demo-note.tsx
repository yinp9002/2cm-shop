import { demoCheckoutNote } from "@/lib/catalog";

export function DemoNote() {
  return (
    <p className="rounded-2xl border border-[#1c1916] bg-[#d6f25c] px-4 py-3 text-sm font-medium text-[#1c1916] md:text-base">
      {demoCheckoutNote}
    </p>
  );
}
