import { Compass, Telescope } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Compass,
    title: "Mission",
    accent: "M",
    rest: "ission",
    lede: "How we get there",
    body:
      "To improve the health and well-being of every patient through accurate diagnosis, personalized treatment, advanced medical care, and continuous support.",
  },
  {
    icon: Telescope,
    title: "Vision",
    accent: "V",
    rest: "ision",
    lede: "Where we are heading",
    body:
      "To be recognized as a trusted center for advanced Ear, Nose, and Throat care by delivering exceptional healthcare through innovation, expertise, and compassion.",
  },
];

/** Vision & mission — symmetrical showcase with a decorative ring crown and mirrored panels. */
export function VisionMission() {
  return (
    <Section
      id="vision-mission"
      ariaLabelledBy="vision-mission-heading"
      className="relative isolate overflow-hidden bg-[radial-gradient(120%_70%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_5%,var(--color-background))_0%,var(--color-background)_55%,var(--color-surface)_100%)] py-24 sm:py-28 lg:py-32"
    >
      {/* Premium medical-inspired background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute inset-x-0 top-1/3 h-56 w-full text-primary/[0.05]"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 140C240 60 420 200 720 130 1020 60 1200 190 1440 110" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 180C240 100 420 240 720 170 1020 100 1200 230 1440 150" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute inset-x-0 bottom-0 h-48 w-full text-primary/[0.04]"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 60C260 150 460 10 760 80 1060 150 1220 20 1440 90" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="absolute left-[5%] top-[26%] hidden size-24 opacity-[0.1] [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:13px_13px] sm:block" />
        <div className="absolute right-[5%] bottom-[14%] hidden size-24 opacity-[0.1] [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:13px_13px] sm:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/70" />
      </div>

      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Our Purpose</span>
        <h2
          id="vision-mission-heading"
          className="mt-6 font-heading text-[1.95rem] font-bold min-[400px]:text-[2.35rem] leading-[1.08] tracking-tight text-foreground sm:text-[2.9rem] lg:text-[3.35rem]"
        >
          <span className="text-primary">V</span>ision &amp; <span className="text-primary">m</span>ission
        </h2>
        <p className="mx-auto mt-8 max-w-[62ch] text-[1.0625rem] leading-[2] text-muted-foreground">
          The two commitments that guide how every consultation, diagnosis and procedure at the
          clinic is carried out — with clarity of direction and consistency of care.
        </p>
      </Reveal>

      <div className="relative mt-20 grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Center divider */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent)] md:block"
        />
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 140} className="min-w-0">
            <article className="group relative flex h-full flex-col items-center rounded-[36px] border border-border/70 bg-card px-8 pb-11 pt-16 text-center shadow-[0_1px_2px_rgba(66,66,67,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_28px_60px_-28px_rgba(66,66,67,0.3)] sm:px-12 sm:pb-14">
              {/* Floating gradient icon */}
              <span
                aria-hidden="true"
                className="absolute -top-9 left-1/2 grid size-[4.5rem] -translate-x-1/2 place-items-center rounded-full bg-[linear-gradient(140deg,var(--color-primary),var(--color-secondary))] text-primary-foreground shadow-[0_16px_34px_-14px_color-mix(in_oklab,var(--color-primary)_65%,transparent)] transition-all duration-300 ease-[var(--ease-brand)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-[6deg] group-hover:shadow-[0_22px_44px_-14px_color-mix(in_oklab,var(--color-primary)_75%,transparent)]"
              >
                <pillar.icon size={30} strokeWidth={1.5} />
              </span>

              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {pillar.lede}
              </p>
              <h3 className="mt-3 font-heading text-[1.75rem] font-semibold tracking-tight text-foreground">
                <span className="text-primary">{pillar.accent}</span>
                {pillar.rest}
              </h3>
              <span
                aria-hidden="true"
                className="mt-5 block h-px w-14 bg-primary/40 transition-all duration-300 ease-[var(--ease-brand)] group-hover:w-24 group-hover:bg-primary"
              />
              <p className="mt-7 max-w-[46ch] text-base leading-[2] text-muted-foreground">
                {pillar.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
