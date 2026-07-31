import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type CtaAction = {
  label: string;
  /** Internal route. */
  to?: "/" | "/about" | "/services" | "/contact";
  /** External / tel: link. */
  href?: string;
};

/**
 * Full-width CTA banner: heading + paragraph on the left, buttons on the right.
 * Reused at the end of every page.
 * tone="primary" renders the brand-red conversion banner.
 */
export function CtaBanner({
  label,
  title,
  description,
  primary,
  secondary,
  tone = "card",
  className,
}: {
  label?: string;
  title: ReactNode;
  description: ReactNode;
  primary: CtaAction;
  secondary?: CtaAction;
  tone?: "card" | "primary";
  className?: string;
}) {
  const onPrimary = tone === "primary";

  const renderAction = (action: CtaAction, kind: "primary" | "secondary") => (
    <Button
      asChild
      variant={onPrimary ? "outline" : kind === "primary" ? "default" : "outline"}
      className={cn(
        "w-full sm:w-auto",
        onPrimary && kind === "primary" && "border-card bg-card text-primary hover:bg-card/90 hover:text-primary",
        onPrimary &&
          kind === "secondary" &&
          "border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary",
      )}
    >
      {action.to ? (
        <Link to={action.to}>{action.label}</Link>
      ) : (
        <a href={action.href}>{action.label}</a>
      )}
    </Button>
  );

  return (
    <section
      className={cn("section-y", onPrimary ? "bg-primary" : "bg-surface", className)}
      aria-labelledby="cta-title"
    >
      <div className="container-page">
        <Reveal>
          <div
            className={cn(
              "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
              !onPrimary && "rounded-xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:p-14",
            )}
          >
            <div className="min-w-0 lg:col-span-7">
              {label ? (
                <span className={cn("eyebrow", onPrimary && "text-primary-foreground/80")}>
                  {label}
                </span>
              ) : null}
              <h2
                id="cta-title"
                className={cn(
                  "text-2xl font-semibold sm:text-3xl lg:text-4xl",
                  label && "mt-4",
                  onPrimary && "text-primary-foreground",
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "mt-4 max-w-xl text-base leading-relaxed",
                  onPrimary ? "text-primary-foreground/90" : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              {renderAction(primary, "primary")}
              {secondary ? renderAction(secondary, "secondary") : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
