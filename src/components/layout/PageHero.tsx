import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import type { NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: NavItem["to"] };

type PageHeroProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Trailing crumb is rendered as current page. */
  crumbs?: Crumb[];
  className?: string;
};

/**
 * Reusable inner-page hero: label, large H1, breadcrumb and optional intro.
 * Background uses a very subtle medical-inspired pattern over a light gradient.
 */
export function PageHero({ label, title, description, crumbs = [], className }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-surface",
        className,
      )}
    >
      <span aria-hidden="true" className="hero-pattern absolute inset-0 -z-10" />
      <div className="container-page flex min-h-[350px] flex-col justify-center py-16 md:min-h-[400px] lg:min-h-[430px] lg:py-20">
        <div className="mx-auto flex w-full max-w-4xl animate-fade-in flex-col items-center text-center">
          {label ? <span className="eyebrow">{label}</span> : null}
          <h1
            id="page-hero-title"
            className={cn(
              "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3.15rem] lg:leading-[1.1]",
              label && "mt-4",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}

          {crumbs.length > 0 ? (
            <nav aria-label="Breadcrumb" className="mt-7">
              <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">

                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                {crumbs.map((crumb, index) => {
                  const isLast = index === crumbs.length - 1;
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />
                      {isLast || !crumb.to ? (
                        <span aria-current="page" className="font-medium text-primary">
                          {crumb.label}
                        </span>
                      ) : (
                        <Link to={crumb.to} className="transition-colors hover:text-primary">
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}
