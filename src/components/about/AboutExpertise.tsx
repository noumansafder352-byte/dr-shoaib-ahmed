import { Ear, Scan, Scissors, Stethoscope, Waves, Wind } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { ServiceCard } from "@/components/shared/cards";

const expertise = [
  {
    icon: Ear,
    title: "Ear Care",
    description:
      "Hearing loss, ear infections, tinnitus, vertigo and chronic ear disease assessed with microscopy and audiometry.",
  },
  {
    icon: Wind,
    title: "Nose Care",
    description:
      "Sinusitis, allergic rhinitis, nasal blockage, deviated septum and long-standing breathing difficulty.",
  },
  {
    icon: Stethoscope,
    title: "Throat Care",
    description:
      "Sore throat, tonsillitis, voice disorders, swallowing problems and sleep-related breathing complaints.",
  },
  {
    icon: Waves,
    title: "Cochlear Implant Surgery",
    description:
      "Candidacy assessment, implantation and structured rehabilitation for severe to profound hearing loss.",
  },
  {
    icon: Scissors,
    title: "Head & Neck Surgery",
    description:
      "Surgical management of selected neck swellings, salivary gland and thyroid-related ENT conditions.",
  },
  {
    icon: Scan,
    title: "Diagnostic Endoscopy",
    description:
      "Video endoscopic evaluation of the nose, sinuses and larynx for a precise, documented diagnosis.",
  },
];

/** Areas of expertise — six premium cards. */
export function AboutExpertise() {
  return (
    <CenteredSection
      id="areas-of-expertise"
      surface
      label="Expertise"
      title="Comprehensive ENT care"
      description="A single specialist opinion covering the full range of ear, nose, throat, head and neck conditions for children and adults."
    >
      <StaggeredGrid
        columns={3}
        items={expertise.map((item) => (
          <ServiceCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      />
    </CenteredSection>
  );
}
