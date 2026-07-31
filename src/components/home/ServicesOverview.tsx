import { Link } from "@tanstack/react-router";
import { Activity, Ear, Scan, Scissors, Stethoscope, Wind } from "lucide-react";

import { CenteredSection, StaggeredGrid } from "@/components/layout/sections";
import { ServiceCard } from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: Ear,
    title: "Ear Care",
    description:
      "Diagnosis and treatment for hearing loss, ear infections, tinnitus, vertigo, and chronic ear conditions.",
  },
  {
    icon: Wind,
    title: "Nose Care",
    description:
      "Treatment for sinusitis, allergies, nasal blockage, deviated septum, and breathing difficulties.",
  },
  {
    icon: Stethoscope,
    title: "Throat Care",
    description:
      "Care for sore throat, tonsillitis, voice disorders, swallowing problems, and sleep apnea.",
  },
  {
    icon: Activity,
    title: "Cochlear Implant",
    description: "Advanced hearing restoration for patients with severe hearing loss.",
  },
  {
    icon: Scissors,
    title: "Head & Neck Surgery",
    description: "Specialized surgical care for selected head and neck conditions.",
  },
  {
    icon: Scan,
    title: "Diagnostic Endoscopy",
    description: "Modern endoscopic evaluation for accurate ENT diagnosis.",
  },
];

/** Services overview — six service cards plus a centred link to the full list. */
export function ServicesOverview() {
  return (
    <CenteredSection
      id="services-overview"
      label="Our Services"
      title="Comprehensive ENT Care for Every Patient"
      description="We provide complete diagnosis, treatment, and surgical care for a wide range of ear, nose, and throat conditions using modern medical techniques and personalized treatment plans."
    >
      <StaggeredGrid
        columns={3}
        items={services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkLabel="Learn More"
          />
        ))}
      />

      <Reveal delay={120} className="mt-12 flex justify-center">
        <Button asChild variant="outline">
          <Link to="/services">View All Services</Link>
        </Button>
      </Reveal>
    </CenteredSection>
  );
}
