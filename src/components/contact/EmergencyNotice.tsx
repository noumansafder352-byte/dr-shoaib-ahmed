import { AlertCircle } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

/** Highlighted emergency notice on a soft red surface. */
export function EmergencyNotice() {
  return (
    <Section surface ariaLabelledBy="emergency-title">
      <Reveal>
        <div className="flex flex-col gap-5 rounded-xl border border-primary/25 bg-primary/6 p-8 sm:flex-row sm:gap-6 sm:p-10">
          <span
            aria-hidden="true"
            className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"
          >
            <AlertCircle size={24} strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <h2 id="emergency-title" className="text-xl font-semibold sm:text-2xl">
              Medical Emergency?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If you are experiencing severe bleeding, breathing difficulties, or any
              life-threatening emergency, please visit your nearest emergency department
              immediately.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              For routine ENT consultations and non-emergency concerns, we are happy to assist you
              during our regular clinic hours.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
