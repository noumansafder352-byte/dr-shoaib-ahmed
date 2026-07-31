import { ClipboardList, HeartPulse, Search, Syringe } from "lucide-react";

import { CenteredSection } from "@/components/layout/sections";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description:
      "We listen to your symptoms and history in detail to understand the full picture before anything else.",
  },
  {
    icon: Search,
    title: "Diagnosis",
    description:
      "Clinical examination with endoscopy, microscopy or audiometry confirms the exact cause.",
  },
  {
    icon: Syringe,
    title: "Treatment",
    description:
      "A tailored plan — medical management or surgery — explained clearly before you decide.",
  },
  {
    icon: HeartPulse,
    title: "Recovery",
    description:
      "Structured follow-up and aftercare so healing stays on track and results last.",
  },
];

/** Treatment journey — horizontal timeline on desktop, 2×2 on tablet, vertical on mobile. */
export function TreatmentProcess() {
  return (
    <CenteredSection
      id="treatment-process"
      surface
      label="How We Care"
      title="Your Journey to Better ENT Health"
      description="Four clear steps from your first consultation to full recovery — no uncertainty and no unnecessary procedures."
    >
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Animated connecting line (desktop) */}
        <li
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[12.5%] top-8 hidden h-px origin-left animate-grow-x bg-gradient-to-r from-border via-primary/40 to-border lg:block"
        />

        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 110} className="relative h-full">
            {/* Vertical connector (mobile) */}
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-8 top-16 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-primary/40 to-border sm:hidden"
              />
            ) : null}

            <div className="relative flex h-full flex-col items-start gap-4 sm:items-center sm:text-center">
              <span
                aria-hidden="true"
                className="relative grid size-16 shrink-0 place-items-center rounded-full border border-border bg-card text-primary shadow-soft transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-0.5 hover:border-primary/40"
              >
                <step.icon size={24} strokeWidth={1.6} />
                <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-primary font-heading text-[11px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </span>
              <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </CenteredSection>
  );
}
