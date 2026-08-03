import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Ear, HeartPulse, Hospital, Microscope, ShieldCheck } from "lucide-react";

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
    image: procedureTheatre,
    alt: "Operating theatre prepared for ear surgery",
    span: "lg:col-span-2",
    imageHeight: "h-64 sm:h-72",
  },
  {
    icon: Ear,
    title: "Middle Ear Surgery",
    description:
      "Tympanoplasty and ossicular reconstruction to repair perforated eardrums, stop recurring discharge and restore hearing.",
    image: procedureMicroscopy,
    alt: "ENT examination microscope and audiometry headphones",
    span: "lg:col-span-2",
    imageHeight: "h-56 sm:h-64",
  },
  {
    icon: Microscope,
    title: "Mastoid Surgery",
    description:
      "Mastoidectomy for chronic ear infection and cholesteatoma, clearing disease safely while protecting hearing and the facial nerve.",
    image: facilityEquipment,
    alt: "ENT surgical instruments and equipment",
    span: "lg:col-span-2",
    imageHeight: "h-72 sm:h-80",
  },
  {
    icon: ShieldCheck,
    title: "Parotid Gland Surgery",
    description:
      "Careful removal of parotid tumours and swellings with meticulous facial nerve preservation and structured follow-up review.",
    image: facilityConsultation,
    alt: "Consultation room at the ENT clinic",
    span: "lg:col-span-3",
    imageHeight: "h-64 sm:h-72",
  },
  {
    icon: Hospital,
    title: "Head & Neck Surgery",
    description:
      "Surgical management of selected neck swellings, salivary gland and thyroid-related ENT conditions with clear pre-operative counselling.",
    image: clinicStory,
    alt: "Consultation area at the ENT clinic",
    span: "lg:col-span-3",
    imageHeight: "h-56 sm:h-64",
  },
];

/** Specialized surgical procedures — image-led premium service cards. */
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

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
        {procedures.map((procedure, index) => (
          <li key={procedure.title} className={cn("h-full", procedure.span)}>
            <Reveal delay={index * 80} className="h-full">
              <Link
                to="/contact"
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className={cn("relative overflow-hidden", procedure.imageHeight)}>
                  <img
                    src={procedure.image}
                    alt={procedure.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent transition-opacity duration-300 group-hover:from-foreground/70"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-7 left-7 grid size-16 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg ring-4 ring-card transition-transform duration-300 group-hover:scale-110"
                  >
                    <procedure.icon size={26} strokeWidth={1.7} />
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-3 px-7 pb-8 pt-12">
                  <h3 className="text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary sm:text-[1.375rem]">
                    {procedure.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {procedure.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary">
                    Explore
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
