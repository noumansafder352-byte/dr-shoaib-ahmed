import { Ear, HeartPulse, Hospital, Microscope, ShieldCheck } from "lucide-react";

import clinicStory from "@/assets/clinic-story.jpg";
import facilityConsultation from "@/assets/facility-consultation.jpg";
import facilityEquipment from "@/assets/facility-equipment.jpg";
import procedureMicroscopy from "@/assets/procedure-microscopy.jpg";
import procedureTheatre from "@/assets/procedure-theatre.jpg";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const procedures = [
  {
    icon: HeartPulse,
    title: "Cochlear Implant Surgery",
    description:
      "Candidacy assessment, implantation and structured rehabilitation for severe to profound hearing loss in children and adults.",
    image: "/image/cochlear-implant-surgery.jpg",
    alt: "Operating theatre prepared for ear surgery",
    tags: ["Children & adults", "Rehabilitation support", "Long-term follow-up"],
  },
  {
    icon: Ear,
    title: "Middle Ear Surgery",
    description:
      "Tympanoplasty and ossicular reconstruction to repair perforated eardrums, stop recurring discharge and restore hearing.",
    image: "/image/middle-ear-surgery.jpg",
    alt: "ENT examination microscope and audiometry headphones",
    tags: ["Tympanoplasty", "Ossicular reconstruction", "Hearing restoration"],
  },
  {
    icon: Microscope,
    title: "Mastoid Surgery",
    description:
      "Mastoidectomy for chronic ear infection and cholesteatoma, clearing disease safely while protecting hearing and the facial nerve.",
    image: "/image/mastoid.jpg",
    alt: "ENT surgical instruments and equipment",
    tags: ["Chronic ear disease", "Cholesteatoma", "Nerve protection"],
  },
  {
    icon: ShieldCheck,
    title: "Parotid Gland Surgery",
    description:
      "Careful removal of parotid tumours and swellings with meticulous facial nerve preservation and structured follow-up review.",
    image: "/image/parotid-gland.jpg",
    alt: "Consultation room at the ENT clinic",
    tags: ["Tumour removal", "Facial nerve care", "Post-op review"],
  },
  {
    icon: Hospital,
    title: "Head & Neck Surgery",
    description:
      "Surgical management of selected neck swellings, salivary gland and thyroid-related ENT conditions with clear pre-operative counselling.",
    image: "/image/head-neck-surgery.jpg",
    alt: "Consultation area at the ENT clinic",
    tags: ["Neck swellings", "Salivary gland", "Pre-op counselling"],
  },
];

/** Specialized surgical procedures — alternating full-width premium cards. */
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

      <ul className="mt-16 flex flex-col gap-10">
        {procedures.map((procedure, index) => {
          const reversed = index % 2 === 1;

          return (
            <li key={procedure.title}>
              <Reveal delay={index * 60}>
                <article className="group relative overflow-hidden rounded-[30px] border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-5">
                  {/* Decorative branded backdrop */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -top-24 size-72 rounded-full bg-primary/5 blur-3xl transition-opacity duration-500 group-hover:bg-primary/10",
                      reversed ? "-left-16" : "-right-16",
                    )}
                  />

                  <div
                    className={cn(
                      "relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                      reversed && "lg:[&>*:first-child]:order-2",
                    )}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[22px] ring-1 ring-border">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-10 rounded-[22px] ring-2 ring-inset ring-card/70"
                      />
                      <img
                        src={procedure.image}
                        alt={procedure.alt}
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-80 lg:h-[22rem]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex min-w-0 flex-col gap-6 px-2 py-2 lg:px-6">
                      <span
                        aria-hidden="true"
                        className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lift ring-1 ring-primary/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                      >
                        <procedure.icon size={28} strokeWidth={1.6} />
                      </span>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-secondary transition-all duration-300 group-hover:h-10"
                          />
                          <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
                            {procedure.title}
                          </h3>
                        </div>
                        <p className="max-w-prose text-base leading-[1.85] text-muted-foreground">
                          {procedure.description}
                        </p>
                      </div>

                      <ul className="flex flex-wrap gap-2.5">
                        {procedure.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-surface px-4 py-2 text-[0.8125rem] font-medium text-foreground/80 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
