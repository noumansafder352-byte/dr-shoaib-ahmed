import type { ReactNode } from "react";

import { Section } from "./Section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type BaseProps = {
  id?: string;
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  surface?: boolean;
  className?: string;
  children?: ReactNode;
};

/** 1 & 2. Split section — image on one side, content on the other. */
export function SplitSection({
  id,
  label,
  title,
  description,
  surface,
  imageSrc,
  imageAlt,
  media,
  reverse = false,
  children,
}: BaseProps & {
  imageSrc?: string;
  imageAlt?: string;
  /** Custom media node instead of a plain image. */
  media?: ReactNode;
  /** true = image right / content left. */
  reverse?: boolean;
}) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal
          variant="scale"
          className={cn("lg:col-span-6", reverse ? "lg:order-2" : "lg:order-1")}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            {media ??
              (imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              ) : null)}
          </div>
        </Reveal>

        <Reveal className={cn("min-w-0 lg:col-span-6", reverse ? "lg:order-1" : "lg:order-2")}>
          <SectionHeading label={label} title={title} description={description} />
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </Section>
  );
}

/** 3. Centered section — heading block centred, content below. */
export function CenteredSection({
  id,
  label,
  title,
  description,
  surface,
  className,
  children,
}: BaseProps) {
  return (
    <Section id={id} surface={surface} className={className}>
      <Reveal>
        <SectionHeading align="center" label={label} title={title} description={description} />
      </Reveal>
      {children ? <div className="mt-14">{children}</div> : null}
    </Section>
  );
}

/** 4. Two-column section — heading left, supporting content right. */
export function TwoColumnSection({
  id,
  label,
  title,
  description,
  surface,
  children,
}: BaseProps) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <SectionHeading label={label} title={title} description={description} />
        </Reveal>
        <Reveal delay={100} className="min-w-0 lg:col-span-7">
          {children}
        </Reveal>
      </div>
    </Section>
  );
}

/** 5 & 6. Card grid — three-column cards or four feature cards. */
export function CardGrid({
  columns = 3,
  className,
  children,
}: {
  columns?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:gap-8",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Staggered wrapper for grid children so cards fade in one after another. */
export function StaggeredGrid({
  columns = 3,
  items,
}: {
  columns?: 2 | 3 | 4;
  items: ReactNode[];
}) {
  return (
    <CardGrid columns={columns}>
      {items.map((item, index) => (
        <Reveal key={index} delay={index * 90} className="h-full">
          {item}
        </Reveal>
      ))}
    </CardGrid>
  );
}
