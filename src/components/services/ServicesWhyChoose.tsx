import { Award, CalendarCheck, MonitorSmartphone, Scale, Syringe, UserCheck } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { FeatureCard } from "@/components/shared/cards";

const reasons = [
  {
    icon: Award,
    title: "30+ Years Experience",
    description: "Three decades of ENT practice across teaching, military and private care.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    description: "Video endoscopy, microscopy and audiometry supporting every diagnosis.",
  },
  {
    icon: Syringe,
    title: "Advanced Surgery",
    description: "Cochlear implant, ear, sinus and head & neck procedures under one specialist.",
  },
  {
    icon: UserCheck,
    title: "Personalized Care",
    description: "Plans matched to your age, symptoms, work and recovery expectations.",
  },
  {
    icon: Scale,
    title: "Ethical Medical Practice",
    description: "No unnecessary tests, and surgery advised only when it is truly needed.",
  },
  {
    icon: CalendarCheck,
    title: "Continuous Follow-up",
    description: "Scheduled reviews after treatment so nothing is left half-managed.",
  },
];

/** Why choose our services — six feature cards, centred. */
export function ServicesWhyChoose() {
  return (
    <CenteredSection
      id="why-choose-our-services"
      label="Why Choose Us"
      title="Expert care you can trust"
      description="The standards that stay the same whether you come for earwax removal or cochlear implant surgery."
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
