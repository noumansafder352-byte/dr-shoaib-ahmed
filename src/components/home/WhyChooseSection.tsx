import { Activity, Microscope, MonitorSmartphone, Stethoscope, UserRound, Layers } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    icon: Stethoscope,
    title: "Experienced ENT Specialist",
    description:
      "More than thirty years of clinical and surgical practice across leading military and teaching hospitals.",
  },
  {
    icon: Microscope,
    title: "Accurate Diagnosis",
    description:
      "Detailed history, careful examination and targeted investigations to identify the real cause of your symptoms.",
  },
  {
    icon: Activity,
    title: "Advanced Treatment",
    description:
      "From medical management to endoscopic sinus, ear and cochlear implant surgery when it is genuinely required.",
  },
  {
    icon: UserRound,
    title: "Patient-Centered Care",
    description:
      "Clear explanations, unhurried consultations and treatment plans built around your age, lifestyle and priorities.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    description:
      "Video endoscopy, microscopy and audiological assessment support precise evaluation and follow-up.",
  },
  {
    icon: Layers,
    title: "Comprehensive ENT Services",
    description:
      "Complete ear, nose, throat, head and neck care for children and adults under one specialist opinion.",
  },
];

/** Why choose us — light premium background with subtle red branding accents. */
export function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="section-y relative isolate overflow-hidden bg-background"
    >
      {/* Light, medical-inspired background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-surface)_0%,var(--color-background)_45%,var(--color-surface)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_95%_at_10%_-10%,color-mix(in_oklab,var(--color-primary)_9%,transparent),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_100%_110%,color-mix(in_oklab,var(--color-primary)_7%,transparent),transparent_65%)]" />
        {/* thin grid lines */}
        <div className="absolute inset-y-0 left-[22%] hidden w-px bg-[color-mix(in_oklab,var(--color-foreground)_7%,transparent)] lg:block" />
        <div className="absolute inset-y-0 right-[22%] hidden w-px bg-[color-mix(in_oklab,var(--color-foreground)_7%,transparent)] lg:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-[color-mix(in_oklab,var(--color-primary)_18%,transparent)]" />
        {/* soft circular outlines */}
        <div className="absolute -left-32 top-[-8rem] size-[30rem] rounded-full border border-[color-mix(in_oklab,var(--color-primary)_12%,transparent)]" />
        <div className="absolute -right-40 bottom-[-10rem] size-[34rem] rounded-full border border-[color-mix(in_oklab,var(--color-primary)_10%,transparent)]" />
        {/* fine dotted accents */}
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(color-mix(in_oklab,var(--color-foreground)_12%,transparent)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]" />
        {/* abstract wave */}
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full text-primary/10"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 96C240 40 480 152 720 96C960 40 1200 152 1440 96" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 128C240 72 480 184 720 128C960 72 1200 184 1440 128" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Why Choose Us
            </span>
            <h2
              id="why-choose-us-heading"
              className="mt-7 font-heading text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.6rem] lg:text-[2.95rem]"
            >
              Care built on experience, accuracy and{" "}
              <span className="text-primary">trust</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[58ch] text-[1rem] leading-[1.95] text-muted-foreground sm:text-[1.0625rem]">
              Every consultation follows the same standard: listen carefully, diagnose accurately and
              treat only what needs treating.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 90} className="h-full">
                <article className="group flex h-full flex-col gap-5 rounded-[24px] border border-border bg-card p-7 shadow-[0_1px_2px_color-mix(in_oklab,var(--color-foreground)_5%,transparent),0_18px_40px_-26px_color-mix(in_oklab,var(--color-foreground)_22%,transparent)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_28px_60px_-28px_color-mix(in_oklab,var(--color-primary)_32%,transparent)] sm:p-8">
                  <span
                    aria-hidden="true"
                    className="grid size-14 shrink-0 place-items-center rounded-full border border-primary/15 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--color-primary)_12%,transparent),color-mix(in_oklab,var(--color-primary)_4%,transparent))] text-primary shadow-[inset_0_1px_0_color-mix(in_oklab,white_70%,transparent)] transition-all duration-300 ease-[var(--ease-brand)] group-hover:scale-105 group-hover:border-transparent group-hover:bg-[linear-gradient(140deg,var(--color-primary),var(--color-primary-hover))] group-hover:text-primary-foreground group-hover:shadow-[0_12px_26px_-10px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]"
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 ease-[var(--ease-brand)] group-hover:-rotate-6"
                    />
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {reason.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.8] text-muted-foreground">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
