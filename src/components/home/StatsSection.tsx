import { Award, HeartHandshake, Syringe, Users } from "lucide-react";

import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { icon: Award, value: 30, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: HeartHandshake, value: 100, suffix: "%", label: "Patient Focused" },
  { icon: Syringe, text: "Advanced", label: "ENT Procedures" },
] as const;

/**
 * Floating statistics band. Rendered between the hero and the welcome section so
 * roughly half of the card overlaps each one.
 */
export function StatsSection() {
  return (
    <section
      id="clinic-statistics"
      aria-labelledby="stats-heading"
      className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24"
    >
      <h2 id="stats-heading" className="sr-only">
        Clinic in numbers
      </h2>
      <div className="container-page">
        <Reveal variant="scale">
          <dl className="grid grid-cols-1 gap-y-8 rounded-[22px] border border-border bg-card px-6 py-9 shadow-lift sm:grid-cols-2 sm:gap-y-10 sm:px-8 lg:grid-cols-4 lg:gap-y-0 lg:px-4 lg:py-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-w-0 flex-col items-center border-border/70 px-4 text-center ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "lg:border-l" : "lg:border-l-0"}`}

              >
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full bg-primary/[0.07] text-primary"
                >
                  <stat.icon size={20} strokeWidth={1.7} />
                </span>
                <dd className="mt-4 font-heading text-[1.75rem] font-semibold leading-none tracking-tight text-foreground sm:text-[2rem]">
                  {"value" in stat ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </dd>
                <dt className="mt-2.5 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
