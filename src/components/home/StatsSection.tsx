import { Award, HeartHandshake, Stethoscope, Users } from "lucide-react";

import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { icon: Award, value: 30, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: HeartHandshake, value: 100, suffix: "%", label: "Patient Focused" },
  { icon: Stethoscope, text: "Advanced", label: "ENT Procedures" },
] as const;

/**
 * Compact floating statistics bar. Pulled upward so roughly half the bar
 * overlaps the hero above it and half sits over the welcome band below.
 */
export function StatsSection() {
  return (
    <section
      id="clinic-statistics"
      aria-labelledby="stats-heading"
      className="relative z-20 -mt-14 sm:-mt-16 lg:-mt-[4.5rem]"
    >
      <h2 id="stats-heading" className="sr-only">
        Clinic in numbers
      </h2>
      <div className="container-page">
        <Reveal variant="scale">
          <dl className="grid grid-cols-1 gap-y-5 rounded-[24px] border border-border/70 bg-card/95 px-5 py-6 backdrop-blur-xl shadow-[0_1px_3px_color-mix(in_oklab,var(--color-foreground)_5%,transparent),0_24px_50px_-22px_color-mix(in_oklab,var(--color-foreground)_24%,transparent)] sm:grid-cols-2 sm:gap-y-6 sm:px-8 sm:py-7 lg:grid-cols-4 lg:gap-y-0 lg:px-6 lg:py-7">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group flex min-w-0 items-center justify-center gap-3.5 border-border/60 px-4 transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 sm:px-6 lg:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "lg:border-l" : "lg:border-l-0"}`}
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/[0.07] text-primary transition-colors duration-300 ease-[var(--ease-brand)] group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <stat.icon size={18} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <dd className="font-heading text-[1.6rem] font-bold leading-none tracking-tight text-foreground transition-colors duration-300 ease-[var(--ease-brand)] group-hover:text-primary sm:text-[1.75rem]">
                    {"value" in stat ? (
                      <Counter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </dd>
                  <dt className="mt-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
