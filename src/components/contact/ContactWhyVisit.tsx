import { Award, HeartHandshake, Microscope, ShieldCheck, Sofa, Stethoscope } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { StaggeredGrid } from "@/components/layout/sections";
import { FeatureCard } from "@/components/shared/cards";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: Award,
    title: "30+ Years Experience",
    description:
      "Decades of ENT practice across leading military and specialist hospitals in Pakistan.",
  },
  {
    icon: Stethoscope,
    title: "Modern ENT Care",
    description: "Current clinical protocols for ear, nose, throat, head and neck conditions.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnosis",
    description: "Microscopic and endoscopic examination for an accurate, timely diagnosis.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Treatment",
    description: "A care plan built around your symptoms, history and daily routine.",
  },
  {
    icon: Sofa,
    title: "Comfortable Environment",
    description: "A calm, clean consultation setting with organised patient flow.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description: "Clear explanations, unhurried consultations and respectful follow-up.",
  },
];

/** Centered reasons-to-visit grid. */
export function ContactWhyVisit() {
  return (
    <Section surface ariaLabelledBy="why-visit-title">
      <Reveal>
        <SectionHeading
          align="center"
          id="why-visit-title"
          label="Why Choose Us"
          title="Trusted ENT Care with a Patient-First Approach"
          description="Every visit follows the same standard of clinical precision, comfort and honest guidance."
        />
      </Reveal>
      <div className="mt-12 lg:mt-14">
        <StaggeredGrid
          columns={3}
          items={features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        />
      </div>
    </Section>
  );
}
