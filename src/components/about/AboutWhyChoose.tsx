import { Activity, HeartHandshake, Microscope, Scale, Syringe, UserCheck } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { FeatureCard } from "@/components/shared/cards";

const reasons = [
  {
    icon: Activity,
    title: "Over 30 Years of Experience",
    description:
      "Three decades of continuous ENT practice, teaching and surgery across leading institutions.",
  },
  {
    icon: UserCheck,
    title: "Personalized Treatment",
    description:
      "Plans shaped around your age, symptoms, lifestyle and priorities — never a fixed protocol.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description:
      "Endoscopy, microscopy and audiological testing to confirm the cause before any treatment begins.",
  },
  {
    icon: Syringe,
    title: "Modern Surgical Expertise",
    description:
      "Cochlear implant, advanced ear, endoscopic sinus and head & neck procedures performed to current standards.",
  },
  {
    icon: Scale,
    title: "Ethical Medical Practice",
    description:
      "Honest advice, no unnecessary investigations, and surgery recommended only when it is truly needed.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Unhurried consultations, clear explanations and follow-up support through every stage of recovery.",
  },
];

/** Why choose Dr. Shoaib Ahmed — six feature cards, centred layout. */
export function AboutWhyChoose() {
  return (
    <CenteredSection
      id="why-choose-dr-shoaib"
      label="Why Choose Us"
      title="Trusted healthcare with a patient-first approach"
      description="What patients consistently return for: accurate answers, ethical recommendations and care delivered with genuine attention."
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
