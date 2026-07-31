import { Award, HeartHandshake, Syringe, Users } from "lucide-react";

import { CenteredSection } from "@/components/layout/sections";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";

const stats = [
  { icon: Award, value: 30, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: Syringe, text: "Advanced", label: "ENT Procedures" },
  { icon: HeartHandshake, text: "Patient", label: "Focused Care" },
] as const;

/** Professional highlights — four animated statistic cards. */
export function AboutHighlights() {
  return (
    <CenteredSection
      id="professional-highlights"
      label="Experience"
      title="Clinical excellence built over three decades"
      description="Three decades of ENT practice across teaching hospitals, military medicine and private consultation — measured in outcomes, not claims."
    >
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 90} className="h-full">
            <SurfaceCard
              interactive
              className="flex h-full flex-col items-center gap-3 p-7 text-center"
            >
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-full bg-surface text-primary"
              >
                <stat.icon size={22} strokeWidth={1.6} />
              </span>
              <dd className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                {"value" in stat ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.text
                )}
              </dd>
              <dt className="text-sm font-medium leading-relaxed text-muted-foreground">
                {stat.label}
              </dt>
            </SurfaceCard>
          </Reveal>
        ))}
      </dl>
    </CenteredSection>
  );
}
