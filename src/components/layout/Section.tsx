import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: ElementType;
  ariaLabelledBy?: string;
};

/** Reusable vertical rhythm + max-width container for page sections. */
export function Section({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <Tag
      aria-labelledby={ariaLabelledBy}
      className={cn("px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24", className)}
    >
      <div className={cn("mx-auto w-full max-w-7xl", containerClassName)}>{children}</div>
    </Tag>
  );
}
