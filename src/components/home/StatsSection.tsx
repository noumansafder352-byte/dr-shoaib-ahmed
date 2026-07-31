import { Award, HeartHandshake, Syringe, Users } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { icon: Award, value: 30, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: HeartHandshake, value: 100, suffix: "%", label: "Patient Focused" },
  { icon: Syringe, text: "Advanced", label: "ENT Procedures" },
] as const;

/** Horizontal statistics band with animated counters. */
export function StatsSection() {
  return (
    <Section id="clinic-statistics" className="bg-muted" ariaLabelledBy="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Clinic in numbers
      </h2>
      <dl className="grid divide-y divide-border rounded-xl border border-border bg-card shadow-soft sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 90}
            className={
              "border-border p-8 text-center sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(n+2)]:border-l lg:[&:nth-child(n+3)]:border-t-0"
            }
          >
            <span
              aria-hidden="true"
              className="mx-auto grid size-12 place-items-center rounded-full bg-surface text-primary"
            >
              <stat.icon size={22} strokeWidth={1.6} />
            </span>
            <dd className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {"value" in stat ? (
                <Counter value={stat.value} suffix={stat.suffix} />
              ) : (
                stat.text
              )}
            </dd>
            <dt className="mt-2 text-sm font-medium tracking-wide text-muted-foreground">
              {stat.label}
            </dt>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
