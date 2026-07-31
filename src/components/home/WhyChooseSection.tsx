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

/** Why choose us — white cards on a layered brand-red background. */
export function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="section-y relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Layered red gradient + very subtle medical-inspired detailing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,var(--color-primary)_0%,var(--color-primary-hover)_60%,var(--color-primary)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(75%_110%_at_12%_-10%,color-mix(in_oklab,white_16%,transparent),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_100%_at_100%_110%,color-mix(in_oklab,var(--color-footer)_40%,transparent),transparent_65%)]" />
        {/* soft circular outlines */}
        <div className="absolute -left-32 top-[-8rem] size-[30rem] rounded-full border border-white/[0.08]" />
        <div className="absolute -left-16 top-6 size-[20rem] rounded-full border border-white/[0.07]" />
        <div className="absolute -right-40 bottom-[-10rem] size-[34rem] rounded-full border border-white/[0.07]" />
        {/* fine dotted pattern */}
        <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* geometric medical lines */}
        <div className="absolute inset-y-0 left-[22%] hidden w-px bg-white/[0.08] lg:block" />
        <div className="absolute inset-y-0 right-[22%] hidden w-px bg-white/[0.08] lg:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        {/* minimal medical cross marks */}
        <div className="absolute left-[8%] bottom-[14%] hidden size-6 opacity-20 [background-image:linear-gradient(white,white),linear-gradient(white,white)] [background-position:center,center] [background-repeat:no-repeat,no-repeat] [background-size:100%_1px,1px_100%] sm:block" />
        <div className="absolute right-[10%] top-[16%] hidden size-5 opacity-20 [background-image:linear-gradient(white,white),linear-gradient(white,white)] [background-position:center,center] [background-repeat:no-repeat,no-repeat] [background-size:100%_1px,1px_100%] sm:block" />
      </div>

      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
              Why Choose Us
            </span>
            <h2
              id="why-choose-us-heading"
              className="mt-6 font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-primary-foreground sm:text-[2.4rem] lg:text-[2.65rem]"
            >
              Care built on experience, accuracy and trust
            </h2>
            <p className="mx-auto mt-6 max-w-[62ch] text-[0.975rem] leading-[1.9] text-primary-foreground/85 sm:text-[1.0625rem]">
              Every consultation follows the same standard: listen carefully, diagnose accurately and
              treat only what needs treating.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 90} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-[20px] border border-white/40 bg-card p-6 shadow-[0_2px_6px_color-mix(in_oklab,var(--color-foreground)_8%,transparent),0_22px_46px_-22px_color-mix(in_oklab,var(--color-foreground)_28%,transparent)] transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 sm:p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/[0.08] text-primary transition-colors duration-300 ease-[var(--ease-brand)] group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
