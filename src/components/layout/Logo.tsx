import { Link } from "@tanstack/react-router";

import logoDark from "@/assets/ent-logo.svg.asset.json";
import logoLight from "@/assets/ent-logo-light.svg.asset.json";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Clinic logo mark. Renders the official wordmark image only — no adjacent text.
 * `variant="light"` uses the white version for dark surfaces (footer).
 */
export function Logo({
  className,
  compact = false,
  variant = "dark",
}: {
  className?: string;
  compact?: boolean;
  variant?: "dark" | "light";
}) {
  const src = variant === "light" ? logoLight.url : logoDark.url;

  return (
    <Link
      to="/"
      aria-label={`${site.shortName} — home`}
      className={cn("flex min-w-0 items-center", className)}
    >
      <img
        src={src}
        alt={`${site.shortName} logo`}
        width={250}
        height={100}
        className={cn(
          "w-auto object-contain transition-all duration-300 ease-[var(--ease-brand)]",
          compact ? "h-11" : "h-14 sm:h-16",
        )}
      />
    </Link>
  );
}
