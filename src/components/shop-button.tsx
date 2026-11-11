import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const pill =
  "h-12 rounded-full px-6 text-base font-semibold shadow-none";

export function ShopButtonLink({
  href,
  children,
  variant = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size: "lg" }), pill, className)}
    >
      {children}
    </Link>
  );
}

export const pillButtonClass = pill;
