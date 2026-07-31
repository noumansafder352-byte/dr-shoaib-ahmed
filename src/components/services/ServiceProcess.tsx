import { ClipboardList, HeartPulse, Search, Stethoscope, Syringe } from "lucide-react";

import { CenteredSection } from "@/components/layout/sections";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "Your symptoms, history and previous reports reviewed without rushing.",
  },
  {
    icon: Stethoscope,
    title: "Examination",
    description: "Focused ENT examination with microscopy or endoscopy as needed.",
  },
  {
    icon: Search,
    title: "Diagnosis",
    description: "Findings and test results explained in plain, honest language.",
  },
  {
    icon: Syringe,
    title: "Treatment",
    description: "Medication, in-clinic procedure or surgery — your choice, fully informed.",
  },
  {
    icon: HeartPulse,
    title: "Recovery",
    description: "Planned follow-up visits until symptoms settle and results hold.",
  },
];

/** Patient journey — five-step timeline: horizontal on desktop, vertical on mobile. */
export function ServiceProcess() {
  return (
    <CenteredSection
      id="patient-journey"
      surface
      label="Patient Journey"
      title="Simple, clear & personalized care"
      description="Five steps that keep every patient informed from the first visit through to full recovery."
    >
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        <li
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[10%] top-8 hidden h-px origin-left animate-grow-x bg-gradient-to-r from-border via-primary/40 to-border lg:block"
        />

        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 100} className="relative h-full">
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
