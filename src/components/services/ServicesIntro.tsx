import { Link } from "@tanstack/react-router";
import { Baby, ClipboardList, ScanSearch, Syringe } from "lucide-react";

import facilityConsultation from "@/assets/facility-consultation.jpg";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/config/site";

const highlights = [
  {
    icon: Baby,
    title: "Adults & Children",
    description: "Age-appropriate ENT care from infancy onwards.",
  },
  {
    icon: Syringe,
    title: "Medical & Surgical Care",
    description: "Medication first, surgery only when it helps most.",
  },
  {
    icon: ScanSearch,
    title: "Same-Visit Diagnostics",
    description: "Endoscopy, microscopy and hearing tests in clinic.",
  },
  {
    icon: ClipboardList,
    title: "Structured Follow-up",
    description: "Clear review points until recovery is complete.",
  },
];

/** Services introduction — image left, premium highlight grid right. */
export function ServicesIntro() {
  return (
    <Section id="services-introduction" ariaLabelledBy="services-intro-heading">
      <div className="grid items-stretch gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
        <Reveal variant="scale" className="min-w-0">
          <div className="h-full overflow-hidden rounded-[26px] border border-border bg-card shadow-soft">
            <img
              src={facilityConsultation}
              alt="Consultation room at Dr. Shoaib Ahmed ENT Clinic"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full min-h-[22rem] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="flex min-w-0 flex-col justify-center">
          <SectionHeading
            id="services-intro-heading"
            label="Our Services"
            title="Expert ENT care for every stage of life"
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Our clinic offers complete Ear, Nose, and Throat services for both adults and
            children. Whether you&rsquo;re experiencing a common ENT problem or require advanced
            surgical treatment, we focus on accurate diagnosis, personalized treatment plans, and
            long-term patient care.
          </p>

          <ul className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-border hover:bg-card hover:shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-primary/8 text-primary transition-all duration-300 ease-[var(--ease-brand)] group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <item.icon size={22} strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={contact.phoneHref}>Book Appointment</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Visit the Clinic</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
