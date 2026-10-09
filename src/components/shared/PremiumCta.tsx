import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type CtaAction = {
  label: string;
  /** Internal route. */
  to?: "/" | "/about" | "/services" | "/contact";
  /** External / tel: link. */
  href?: string;
};

/**
 * Site-wide premium conversion banner (Home page CTA design).
 * Reused above the footer on every page so the design language stays identical.
 */
export function PremiumCta({
  label,
  title,
  description,
  primary,
  secondary,
  id = "premium-cta-heading",
}: {
  label: string;
  title: ReactNode;
  description: ReactNode;
  primary: CtaAction;
  secondary?: CtaAction;
  id?: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-primary text-primary-foreground sm:rounded-t-[3.5rem]"
    >
      {/* Layered background depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,var(--color-primary-hover)_0%,var(--color-primary)_52%,var(--color-primary-hover)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_18%_-10%,color-mix(in_oklab,white_22%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_110%_at_100%_110%,color-mix(in_oklab,var(--color-footer)_45%,transparent),transparent_65%)]" />
        {/* Abstract medical-inspired geometry */}
        <div className="absolute -left-24 top-[-6rem] size-[26rem] rounded-full border border-white/10" />
        <div className="absolute -left-10 top-4 size-[18rem] rounded-full border border-white/10" />
        <div className="absolute -right-28 bottom-[-8rem] size-[30rem] rounded-full border border-white/[0.09]" />
        <div className="absolute inset-y-0 right-[18%] hidden w-px bg-white/10 lg:block" />
        <div className="absolute bottom-10 left-[12%] hidden size-24 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px] sm:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
      </div>

      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
              <CalendarCheck size={15} strokeWidth={1.8} aria-hidden="true" />
              {label}
            </span>
            <h2
              id={id}
              className="mt-8 max-w-[22ch] font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-primary-foreground sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              {title}
            </h2>
            <p className="mt-8 max-w-[58ch] text-[0.975rem] leading-[1.9] text-primary-foreground/85 sm:text-[1.0625rem]">
              {description}
            </p>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="flex flex-col gap-5 sm:flex-row lg:flex-col lg:items-stretch">
              <Button
                asChild
                className="h-[52px] bg-background px-8 text-primary shadow-lift transition-transform duration-300 hover:-translate-y-0.5 hover:bg-background hover:text-primary-hover"
              >
                {primary.to ? (
                  <Link to={primary.to}>
                    <CalendarCheck aria-hidden="true" />
                    {primary.label}
                  </Link>
                ) : (
                  <a href={primary.href}>
                    <CalendarCheck aria-hidden="true" />
                    {primary.label}
                  </a>
                )}
              </Button>
              {secondary ? (
                <Button
                  asChild
                  variant="outline"
                  className="group h-[52px] border-white/45 bg-transparent px-8 text-primary-foreground transition-colors duration-300 hover:border-background hover:bg-white/10 hover:text-primary-foreground"
                >
                  {secondary.to ? (
                    <Link to={secondary.to}>
                      {secondary.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <a href={secondary.href}>
                      {secondary.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  )}
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
