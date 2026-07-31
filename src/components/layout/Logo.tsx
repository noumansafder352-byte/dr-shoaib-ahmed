import { Link } from "@tanstack/react-router";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Clinic wordmark: an ENT-inspired monogram tile plus the doctor's name.
 * Always legible — the tile never shrinks and the name truncates instead.
 */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label={`${site.shortName} — home`}
      className={cn("flex min-w-0 items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-[var(--ease-brand)]",
          compact ? "size-9" : "size-11",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={compact ? "size-[19px]" : "size-[22px]"}
        >
          <path d="M13.5 3.2c-3.6-1-7 1.3-7.4 4.8-.2 1.9.5 3 .5 4.4 0 1.2-.7 1.8-.7 3 0 2.9 2.3 5.2 5.2 5.2 1.6 0 2.6-.9 2.9-2.3" />
          <path d="M10.2 8.6c.6-1.4 2.6-1.6 3.4-.3.7 1.2-.2 2.4-1.2 2.9-1 .5-1.5 1.2-1.5 2.3" />
          <circle cx="17.4" cy="12" r="1.1" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "truncate font-heading font-semibold transition-all duration-300 ease-[var(--ease-brand)]",
            compact ? "text-[0.95rem]" : "text-base sm:text-lg",
          )}
        >
          {site.shortName}
        </span>
        <span className="truncate text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
          {site.specialty}
        </span>
      </span>
    </Link>
  );
}
