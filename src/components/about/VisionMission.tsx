import { Compass, Telescope } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Telescope,
    title: "Vision",
    body:
      "To be recognized as a trusted center for advanced Ear, Nose, and Throat care by delivering exceptional healthcare through innovation, expertise, and compassion.",
  },
  {
    icon: Compass,
    title: "Mission",
    body:
      "To improve the health and well-being of every patient through accurate diagnosis, personalized treatment, advanced medical care, and continuous support.",
  },
];

/** Vision & mission — editorial split layout on a subtly patterned premium band. */
export function VisionMission() {
  return (
    <Section
      id="vision-mission"
      ariaLabelledBy="vision-mission-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(160deg,var(--color-surface)_0%,var(--color-background)_55%,var(--color-surface)_100%)] py-24 sm:py-28 lg:py-36"
    >
      {/* Abstract medical-inspired background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-[-8rem] size-[30rem] rounded-full border border-primary/[0.06]" />
        <div className="absolute -left-12 top-8 size-[20rem] rounded-full border border-primary/[0.05]" />
        <div className="absolute -right-24 bottom-[-9rem] size-[34rem] rounded-full border border-primary/[0.05]" />
        <div className="absolute right-[8%] top-[12%] hidden size-28 opacity-[0.12] [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:14px_14px] sm:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/70" />
      </div>

      <div className="grid gap-14 lg:grid-cols-[40fr_60fr] lg:gap-20">
        <Reveal className="min-w-0">
          <span className="eyebrow">Our Purpose</span>
          <h2
            id="vision-mission-heading"
            className="mt-4 font-heading text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.6rem] lg:text-[3rem]"
          >
            Vision &amp; mission
          </h2>
          <p className="mt-7 max-w-[46ch] text-base leading-[1.9] text-muted-foreground sm:text-[1.0625rem]">
            The two commitments that guide how every consultation, diagnosis and procedure at the
            clinic is carried out.
          </p>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-border">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 120}
              className={index === 0 ? "min-w-0 sm:pr-10" : "min-w-0 sm:pl-10"}
            >
              <div className="group h-full transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5">
                <span
                  aria-hidden="true"
                  className="grid size-[3.5rem] place-items-center rounded-full border border-primary/20 bg-primary/[0.07] text-primary shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--color-primary)_12%,transparent)] transition-colors duration-300 ease-[var(--ease-brand)] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <pillar.icon size={24} strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {pillar.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-14 bg-primary/40 transition-all duration-300 ease-[var(--ease-brand)] group-hover:w-20 group-hover:bg-primary"
                />
                <p className="mt-6 max-w-[42ch] text-base leading-[1.95] text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
