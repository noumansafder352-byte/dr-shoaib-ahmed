import {
  Award,
  BookOpenCheck,
  Crown,
  GraduationCap,
  Landmark,
  Microscope,
  Scissors,
  Users,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

const milestones = [
  {
    year: "2013",
    icon: BookOpenCheck,
    label: "Research Publication",
    description:
      "His new chondro-perichondrial clip myringoplasty technique for eardrum repair was featured as a main article in the UK's Journal of Laryngology & Otology.",
  },
  {
    year: "2016",
    icon: Microscope,
    label: "Expert Educator",
    description:
      "Master Trainer of Temporal Bone Dissection Workshops and Ear Surgery since 2016.",
  },
  {
    year: "2018",
    icon: Users,
    label: "Program Pioneer",
    description: "Among the pioneers of the Cochlear Implant Program in the Army since 2018.",
  },
  {
    year: "2020",
    icon: GraduationCap,
    label: "Program Developer",
    description:
      "Massively contributed to the development of the Fellowship in Otology under NUMS at CMH Rawalpindi.",
  },
  {
    year: "2023",
    icon: Landmark,
    label: "Faculty Secretary",
    description:
      "Secretary of the Faculty of ENT at the College of Physicians & Surgeons Pakistan.",
  },
  {
    year: "2023",
    icon: Award,
    label: "Program Leader",
    description:
      "Heading the entire Cochlear Implant Program in the Army since early 2023 and has independently performed 112 Cochlear Implant surgeries to date.",
  },
  {
    year: "2023",
    icon: Crown,
    label: "Course Patron",
    description:
      "Patron-in-Chief of OTOCON and ICE (Islamabad Cadaver Courses in ENT) since 2023.",
  },
  {
    year: "Ongoing",
    icon: Scissors,
    label: "Surgery Expert",
    description:
      "Performed 1,200+ complex mastoid surgeries and continues to expand this experience.",
  },
];

/** Professional milestones — premium infographic timeline with a central connecting spine. */
export function AboutAchievements() {
  return (
    <Section
      id="professional-milestones"

      ariaLabelledBy="professional-milestones-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Decorative background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--primary) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 72%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Career Highlights</span>
        <h2
          id="professional-milestones-heading"
          className="mt-4 font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem]"
        >
          Professional Milestones
        </h2>
        <p className="mt-5 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
          These milestones reflect Prof. Dr. Maj. Gen. (R) Shoaib Ahmed&rsquo;s contributions to ENT
          surgery, medical education, research, and clinical leadership across three decades of
          practice.
        </p>
      </div>

      {/* Timeline */}
      <ol className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
        {/* Central spine */}
        <span
          aria-hidden="true"
          className="absolute left-[1.375rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent lg:left-1/2 lg:-translate-x-px"
        />

        {milestones.map(({ year, icon: Icon, label, description }, index) => {
          const isRight = index % 2 === 1;
          return (
            <li key={`${label}-${year}`} className="relative">
              <Reveal
                delay={index * 60}
                className={[
                  "relative flex gap-6 py-6 lg:w-[calc(50%-2.75rem)] lg:gap-0 lg:py-7",
                  isRight ? "lg:ml-auto lg:pl-0" : "lg:mr-auto",
                ].join(" ")}
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className={[
                    "group/node peer relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-primary/25 bg-card text-primary shadow-soft transition-all duration-300 ease-[var(--ease-brand)]",
                    "lg:absolute lg:top-7",
                    isRight ? "lg:-left-[3.875rem]" : "lg:-right-[3.875rem]",
                  ].join(" ")}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <div
                  className={[
                    "group min-w-0 flex-1 transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-0.5",
                    isRight ? "lg:pl-0 lg:text-left" : "lg:pr-0 lg:text-right",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    {year}
                  </span>
                  <h3 className="mt-3 font-heading text-[1.15rem] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {label}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-[1.8] text-muted-foreground lg:max-w-none">
                    {description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
