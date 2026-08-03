import { Compass, Telescope } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Telescope,
    title: "Vision",
    lede: "Where we are heading",
    body:
      "To be recognized as a trusted center for advanced Ear, Nose, and Throat care by delivering exceptional healthcare through innovation, expertise, and compassion.",
  },
  {
    icon: Compass,
    title: "Mission",
    lede: "How we get there",
    body:
      "To improve the health and well-being of every patient through accurate diagnosis, personalized treatment, advanced medical care, and continuous support.",
  },
];

/** Vision & mission — centred premium presentation with two equal content panels. */
export function VisionMission() {
  return (
    <Section
      id="vision-mission"
      ariaLabelledBy="vision-mission-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(155deg,var(--color-surface)_0%,var(--color-background)_45%,var(--color-surface)_100%)] py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle medical-inspired background: fine waves, dots, abstract lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute inset-x-0 top-0 h-44 w-full text-primary/[0.04]"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 60C260 150 460 10 760 80 1060 150 1220 20 1440 90" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 100C260 190 460 50 760 120 1060 190 1220 60 1440 130" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute inset-x-0 bottom-0 h-52 w-full text-primary/[0.045]"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 140C240 60 420 200 720 130 1020 60 1200 190 1440 110" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 180C240 100 420 240 720 170 1020 100 1200 230 1440 150" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute left-[5%] top-[18%] hidden size-24 opacity-[0.1] [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:13px_13px] sm:block" />
        <div className="absolute right-[5%] bottom-[16%] hidden size-24 opacity-[0.1] [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:13px_13px] sm:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/70" />
      </div>

      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Our Purpose</span>
        <h2
          id="vision-mission-heading"
          className="mt-6 font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[2.9rem] lg:text-[3.35rem]"
        >
          Vision &amp; mission
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-8 block h-px w-16 bg-primary/50"
        />
        <p className="mx-auto mt-8 max-w-[62ch] text-[1.0625rem] leading-[2] text-muted-foreground">
          The two commitments that guide how every consultation, diagnosis and procedure at the
          clinic is carried out — with clarity of direction and consistency of care.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-2 lg:gap-10">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 140} className="min-w-0">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border/70 bg-card p-9 shadow-[0_1px_2px_rgba(66,66,67,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(66,66,67,0.28)] sm:p-11">
              <span
                aria-hidden="true"
                className="grid size-[4rem] place-items-center rounded-full border border-primary/20 bg-primary/[0.07] text-primary shadow-[inset_0_1px_3px_color-mix(in_oklab,var(--color-primary)_14%,transparent)] transition-all duration-300 ease-[var(--ease-brand)] group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <pillar.icon size={28} strokeWidth={1.5} />
              </span>
              <p className="mt-7 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {pillar.lede}
              </p>
              <h3 className="mt-2 font-heading text-[1.6rem] font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {pillar.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-14 bg-primary/40 transition-all duration-300 ease-[var(--ease-brand)] group-hover:w-24 group-hover:bg-primary"
              />
              <p className="mt-6 text-base leading-[2] text-muted-foreground">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
