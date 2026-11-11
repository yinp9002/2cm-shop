"use client";

import { Button } from "@/components/ui/button";

export function QuantityField({
  value,
  onChange,
  id,
  label = "Quantity",
}: {
  value: number;
  onChange: (value: number) => void;
  id: string;
  label?: string;
}) {
  return (
    <div className="inline-flex w-fit items-center justify-self-start rounded-full border border-border bg-card">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label={`Decrease ${label.toLowerCase()}`}
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        −
      </Button>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        inputMode="numeric"
        className="w-10 bg-transparent text-center text-sm font-semibold outline-none"
        value={value}
        aria-label={label}
        onChange={(event) => {
          const next = Number(event.target.value);
          if (Number.isFinite(next)) onChange(next);
        }}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label={`Increase ${label.toLowerCase()}`}
        onClick={() => onChange(value + 1)}
      >
        +
      </Button>
    </div>
  );
}
