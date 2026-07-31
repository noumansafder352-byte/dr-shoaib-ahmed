import { Activity, Ear, Scissors, Stethoscope, Waves } from "lucide-react";

import clinicStory from "@/assets/clinic-story.jpg";
import facilityEquipment from "@/assets/facility-equipment.jpg";
import procedureMicroscopy from "@/assets/procedure-microscopy.jpg";
import procedureTheatre from "@/assets/procedure-theatre.jpg";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const procedures = [
  {
    icon: Waves,
    title: "Cochlear Implant Surgery",
    description:
      "Candidacy assessment, implantation and structured rehabilitation for severe to profound hearing loss in children and adults.",
    image: procedureTheatre,
    alt: "Operating theatre prepared for ear surgery",
    points: ["Pre-surgical audiological workup", "Post-operative mapping & therapy"],
  },
  {
    icon: Ear,
    title: "Middle Ear Surgery",
    description:
      "Tympanoplasty and ossicular reconstruction to repair perforated eardrums, stop recurring discharge and restore hearing.",
    image: procedureMicroscopy,
    alt: "ENT examination microscope and audiometry headphones",
    points: ["Microscopic technique", "Day-case where suitable"],
  },
  {
    icon: Activity,
    title: "Mastoid Surgery",
    description:
      "Mastoidectomy for chronic ear infection and cholesteatoma, clearing disease safely while protecting hearing and facial nerve.",
    image: facilityEquipment,
    alt: "ENT surgical instruments and equipment",
    points: ["Disease clearance", "Long-term ear health"],
  },
  {
    icon: Scissors,
    title: "Parotid Gland Surgery",
    description:
      "Careful removal of parotid tumours and swellings with meticulous facial nerve preservation and follow-up review.",
    image: procedureTheatre,
    alt: "Sterile surgical field in a modern operating theatre",
    points: ["Facial nerve monitoring", "Histopathology guidance"],
  },
  {
    icon: Stethoscope,
    title: "Head & Neck Surgery",
    description:
      "Surgical management of selected neck swellings, salivary gland and thyroid-related ENT conditions with clear pre-op counselling.",
    image: clinicStory,
    alt: "Consultation area at the ENT clinic",
    points: ["Multidisciplinary input", "Staged recovery plan"],
  },
];

/** Specialized surgical procedures — five horizontal cards, alternating image side. */
export function SurgicalProcedures() {
  return (
    <Section id="surgical-procedures" surface ariaLabelledBy="surgical-heading">
      <Reveal>
        <SectionHeading
          align="center"
          label="Advanced Care"
          title="Specialized surgical procedures"
          description="Procedures performed to current standards, recommended only when they clearly offer the best outcome."
          id="surgical-heading"
        />
      </Reveal>

      <ul className="mt-14 flex flex-col gap-6 lg:gap-8">
        {procedures.map((procedure, index) => {
          const reverse = index % 2 === 1;
          return (
            <Reveal key={procedure.title} delay={index * 70}>
              <li className="card-lift overflow-hidden rounded-xl border border-border bg-card shadow-soft">
                <div className="grid lg:grid-cols-12">
                  <div
                    className={cn(
                      "lg:col-span-5",
                      reverse ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <img
                      src={procedure.image}
                      alt={procedure.alt}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="aspect-16/10 h-full w-full object-cover lg:aspect-auto"
                    />
                  </div>
                  <div
                    className={cn(
                      "flex min-w-0 flex-col gap-4 p-7 sm:p-9 lg:col-span-7 lg:justify-center",
                      reverse ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"
                    >
                      <procedure.icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3 className="text-xl font-semibold sm:text-2xl">{procedure.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {procedure.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {procedure.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
