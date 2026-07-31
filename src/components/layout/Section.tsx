import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string | undefined;
  containerClassName?: string | undefined;
  as?: ElementType | undefined;
  id?: string | undefined;
  /** Light gray (#F8F9FA) band instead of white. */
  surface?: boolean | undefined;
  ariaLabelledBy?: string | undefined;
};

/**
 * Page section wrapper: 1280px container + 70/90/120px vertical rhythm.
 * Use for every section so spacing stays consistent site-wide.
 */
export function Section({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  id,
  surface = false,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("section-y", surface && "bg-surface", className)}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </Tag>
  );
}
