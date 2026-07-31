import { Ear, Sparkles, Stethoscope, SunSnow, Waves, Wind } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { ServiceCard } from "@/components/shared/cards";

const services = [
  {
    icon: Ear,
    title: "Ear Care",
    description:
      "Diagnosis and treatment for hearing loss, ear infections, tinnitus, vertigo, and chronic ear diseases.",
  },
  {
    icon: Wind,
    title: "Nose Care",
    description:
      "Treatment for sinusitis, allergies, nasal blockage, deviated septum, nasal polyps, and breathing difficulties.",
  },
  {
    icon: Stethoscope,
    title: "Throat Care",
    description:
      "Care for sore throat, tonsillitis, voice disorders, swallowing disorders, and sleep apnea.",
  },
  {
    icon: Waves,
    title: "General ENT Consultation",
    description:
      "Comprehensive evaluation and treatment for routine ENT conditions affecting adults and children.",
  },
  {
    icon: SunSnow,
    title: "Allergy Management",
    description:
      "Diagnosis and personalized treatment for seasonal and chronic allergies affecting the nose and throat.",
  },
  {
    icon: Sparkles,
    title: "Ear Cleaning",
    description:
      "Professional microscopic ear cleaning for impacted earwax and improved hearing comfort.",
  },
];

/** Core ENT services — six premium cards, three per row. */
export function CoreServices() {
  return (
    <CenteredSection
      id="core-ent-services"
      label="What We Treat"
      title="Comprehensive ENT services"
      description="Consultation, medical treatment and in-clinic procedures for the conditions patients present with most often."
    >
      <StaggeredGrid
        columns={3}
        items={services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            to="/contact"
            linkLabel="Learn more"
          />
        ))}
      />
    </CenteredSection>
  );
}
