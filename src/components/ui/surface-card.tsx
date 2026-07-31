import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Enable the subtle hover lift. */
  interactive?: boolean;
};

/**
 * Base card: 18px radius, 1px soft border, very soft shadow, generous padding.
 * Pass interactive for the slight-lift hover treatment.
 */
export function SurfaceCard({
  children,
  className,
  as: Tag = "div",
  interactive = false,
}: SurfaceCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-border bg-card p-7 shadow-soft sm:p-9",
        interactive && "card-lift hover:border-border",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type IconCardProps = {
  icon: ElementType;
  title: string;
  children?: ReactNode;
  className?: string;
};

/** Card with a line icon in a light tile — the default feature/service card. */
export function IconCard({ icon: Icon, title, children, className }: IconCardProps) {
  return (
    <SurfaceCard interactive className={cn("flex flex-col gap-4", className)}>
      <span
        aria-hidden="true"
        className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface text-primary"
      >
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      {children ? (
        <div className="text-base leading-relaxed text-muted-foreground">{children}</div>
      ) : null}
    </SurfaceCard>
  );
}
