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
 */
export function CtaBanner({
  label,
  title,
  description,
  primary,
  secondary,
  className,
}: {
  label?: string;
  title: ReactNode;
  description: ReactNode;
  primary: CtaAction;
  secondary?: CtaAction;
  className?: string;
}) {
  const renderAction = (action: CtaAction, variant: "default" | "outline") => (
    <Button asChild variant={variant} className="w-full sm:w-auto">
      {action.to ? (
        <Link to={action.to}>{action.label}</Link>
      ) : (
        <a href={action.href}>{action.label}</a>
      )}
    </Button>
  );

  return (
    <section className={cn("section-y bg-surface", className)} aria-labelledby="cta-title">
      <div className="container-page">
        <Reveal>
          <div className="grid items-center gap-8 rounded-xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="min-w-0 lg:col-span-7">
              {label ? <span className="eyebrow">{label}</span> : null}
              <h2
                id="cta-title"
                className={cn("text-2xl font-semibold sm:text-3xl lg:text-4xl", label && "mt-4")}
              >
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              {renderAction(primary, "default")}
              {secondary ? renderAction(secondary, "outline") : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
