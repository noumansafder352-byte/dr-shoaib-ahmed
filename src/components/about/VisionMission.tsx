import { Eye, Target } from "lucide-react";

import { CenteredSection } from "@/components/layout/sections";
import { Reveal } from "@/components/ui/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    body:
      "To be recognized as a trusted center for advanced Ear, Nose, and Throat care by delivering exceptional healthcare through innovation, expertise, and compassion.",
  },
  {
    icon: Target,
    title: "Mission",
    body:
      "To improve the health and well-being of every patient through accurate diagnosis, personalized treatment, advanced medical care, and continuous support.",
  },
];

/** Vision & mission — two balanced cards. */
export function VisionMission() {
  return (
    <CenteredSection
      id="vision-mission"
      surface
      label="Our Purpose"
      title="Vision & mission"
      description="The two commitments that guide how every consultation, diagnosis and procedure at the clinic is carried out."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 120} className="h-full">
            <SurfaceCard interactive className="flex h-full flex-col gap-5">
              <span
                aria-hidden="true"
                className="grid size-13 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"
              >
                <pillar.icon size={24} strokeWidth={1.6} />
              </span>
              <h3 className="text-2xl font-semibold">{pillar.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{pillar.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </CenteredSection>
  );
}
