import { cn } from "cn";
import type { Motif, Product } from "@/lib/catalog";

function Motif({ motif, ink }: { motif: Motif; ink: string }) {
  const stroke = {
    fill: "none",
    stroke: ink,
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (motif === "slab") {
    return (
      <g>
        <rect x="62" y="30" width="76" height="140" rx="18" {...stroke} fill={ink} fillOpacity="0.08" />
        <circle cx="100" cy="52" r="3.5" fill={ink} />
        <rect x="82" y="148" width="36" height="7" rx="3.5" fill={ink} />
      </g>
    );
  }

  if (motif === "puck") {
    return (
      <g>
        <circle cx="100" cy="100" r="58" {...stroke} fill={ink} fillOpacity="0.08" />
        <circle cx="100" cy="100" r="28" {...stroke} />
        <circle cx="100" cy="100" r="6" fill={ink} />
      </g>
    );
  }

  if (motif === "brick") {
    return (
      <g>
        <rect x="36" y="58" width="128" height="84" rx="16" {...stroke} fill={ink} fillOpacity="0.08" />
        <circle cx="58" cy="80" r="3.2" fill={ink} />
        <circle cx="70" cy="80" r="3.2" fill={ink} />
        <circle cx="82" cy="80" r="3.2" fill={ink} />
        <rect x="52" y="114" width="18" height="8" rx="2" fill={ink} />
        <rect x="78" y="114" width="18" height="8" rx="2" fill={ink} />
      </g>
    );
  }

  if (motif === "buds") {
    return (
      <g>
        <rect x="44" y="58" width="44" height="62" rx="22" {...stroke} fill={ink} fillOpacity="0.1" />
        <rect x="59" y="112" width="14" height="34" rx="7" {...stroke} fill={ink} fillOpacity="0.1" />
        <rect x="112" y="58" width="44" height="62" rx="22" {...stroke} fill={ink} fillOpacity="0.1" />
        <rect x="127" y="112" width="14" height="34" rx="7" {...stroke} fill={ink} fillOpacity="0.1" />
      </g>
    );
  }

  return (
    <g>
      <ellipse cx="100" cy="52" rx="48" ry="16" {...stroke} />
      <path d="M52 52v80c0 20 21 36 48 36s48-16 48-36V52" {...stroke} fill={ink} fillOpacity="0.08" />
      <path d="M70 86h60M70 106h60M70 126h60" {...stroke} />
    </g>
  );
}

export function ProductArt({
  product,
  className,
  labeled = true,
}: {
  product: Product;
  className?: string;
  labeled?: boolean;
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `linear-gradient(155deg, ${product.from}, ${product.to})`,
      }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-[10%] h-[80%] w-[80%]" aria-hidden>
        <Motif motif={product.motif} ink={product.ink} />
      </svg>
      {labeled ? (
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#1c1916]">
          Placeholder
        </span>
      ) : null}
    </div>
  );
}
