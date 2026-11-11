import Image from "next/image";
import { cn } from "cn";
import type { Product } from "@/lib/catalog";

export function ProductImage({
  product,
  className,
  priority = false,
  sizes = "(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw",
}: {
  product: Product;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#f7f4ee]", className)}>
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
