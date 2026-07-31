import { Activity, Microscope, MonitorSmartphone, Stethoscope, UserRound, Layers } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { FeatureCard } from "@/components/shared/cards";

const reasons = [
  {
    icon: Stethoscope,
    title: "Experienced ENT Specialist",
    description:
      "More than thirty years of clinical and surgical practice across leading military and teaching hospitals.",
  },
  {
    icon: Microscope,
    title: "Accurate Diagnosis",
    description:
      "Detailed history, careful examination and targeted investigations to identify the real cause of your symptoms.",
  },
  {
    icon: Activity,
    title: "Advanced Treatment",
    description:
      "From medical management to endoscopic sinus, ear and cochlear implant surgery when it is genuinely required.",
  },
  {
    icon: UserRound,
    title: "Patient-Centered Care",
    description:
      "Clear explanations, unhurried consultations and treatment plans built around your age, lifestyle and priorities.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    description:
      "Video endoscopy, microscopy and audiological assessment support precise evaluation and follow-up.",
  },
  {
    icon: Layers,
    title: "Comprehensive ENT Services",
    description:
      "Complete ear, nose, throat, head and neck care for children and adults under one specialist opinion.",
  },
];

/** Why choose us — six feature cards in a centred, staggered grid. */
export function WhyChooseSection() {
  return (
    <CenteredSection
      id="why-choose-us"
      surface
      label="Why Choose Us"
      title="Care built on experience, accuracy and trust"
      description="Every consultation follows the same standard: listen carefully, diagnose accurately and treat only what needs treating."
    >
      <StaggeredGrid
        columns={3}
        items={reasons.map((reason) => (
          <FeatureCard
            key={reason.title}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      />
    </CenteredSection>
  );
}
