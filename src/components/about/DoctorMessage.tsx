import { Quote } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

/** Doctor's message — centred quote on a very light gray band. */
export function DoctorMessage() {
  return (
    <Section id="doctors-message" className="bg-muted" ariaLabelledBy="doctors-message-heading">
      <Reveal>
        <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="grid size-14 place-items-center rounded-full bg-card text-primary shadow-soft"
          >
            <Quote size={24} strokeWidth={1.6} />
          </span>
          <h2
            id="doctors-message-heading"
            className="mt-7 text-2xl font-semibold sm:text-3xl lg:text-4xl"
          >
            A message from Dr. Shoaib Ahmed
          </h2>
          <blockquote className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            &ldquo;Every patient deserves compassionate care, an accurate diagnosis, and a treatment
            plan they can trust. My goal is to help each individual achieve better health with
            confidence and peace of mind.&rdquo;
          </blockquote>
          <figcaption className="mt-8 border-t border-border pt-6">
            <span className="block font-heading text-xl font-semibold text-primary">
              Prof. Maj. Gen. (R) Dr. Shoaib Ahmed
            </span>
            <span className="mt-1 block text-sm tracking-[0.12em] text-muted-foreground uppercase">
              ENT Specialist &middot; Rawalpindi
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
