import { AudioLines, ClipboardCheck, Microscope, Scan, Stethoscope, UserRound } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { FeatureCard } from "@/components/shared/cards";

const diagnostics = [
  {
    icon: ClipboardCheck,
    title: "ENT Examination",
    description: "Complete ear, nose and throat assessment with a documented clinical record.",
  },
  {
    icon: Microscope,
    title: "Ear Microscopy",
    description: "Magnified view of the canal and eardrum for precise diagnosis and cleaning.",
  },
  {
    icon: Scan,
    title: "Nasal Endoscopy",
    description: "Video evaluation of the nasal passages, sinuses and adenoid region.",
  },
  {
    icon: Stethoscope,
    title: "Throat Endoscopy",
    description: "Laryngeal assessment for hoarseness, swallowing and voice complaints.",
  },
  {
    icon: AudioLines,
    title: "Hearing Evaluation",
    description: "Audiometric testing to measure the type and degree of hearing loss.",
  },
  {
    icon: UserRound,
    title: "Specialist Consultation",
    description: "Findings explained in plain language with a clear treatment plan.",
  },
];

/** Diagnostic services — six icon cards. */
export function DiagnosticServices() {
  return (
    <CenteredSection
      id="diagnostic-services"
      label="Diagnosis"
      title="Advanced diagnostic services"
      description="Accurate diagnosis is the foundation of successful treatment. Our clinic uses modern diagnostic methods to evaluate ENT conditions and develop personalized treatment plans."
    >
      <StaggeredGrid
        columns={3}
        items={diagnostics.map((item) => (
          <FeatureCard
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
