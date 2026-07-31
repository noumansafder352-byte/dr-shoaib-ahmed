import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small uppercase label above the heading. */
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Heading level — keep a correct document hierarchy. */
  as?: "h1" | "h2" | "h3";
  id?: string;
  align?: "left" | "center";
  className?: string;
};

/** Standard section title block: small label + large heading + short paragraph. */
export function SectionHeading({
  label,
  title,
  description,
  as: Tag = "h2",
  id,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        centered && "mx-auto items-center text-center",
        className,
      )}
    >
      {label ? <span className="eyebrow">{label}</span> : null}
      <Tag
        id={id}
        className={cn(
          "text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]",
          Tag === "h1" && "lg:text-5xl",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
