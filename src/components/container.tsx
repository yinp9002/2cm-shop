import { cn } from "cn";
import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-[90%] max-w-[1400px]", className)}>{children}</div>;
}
