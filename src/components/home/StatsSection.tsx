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
 * Floating statistics band. Sits inside the welcome band and is pulled upward so
 * roughly half the card overlaps the hero above it.
 */
export function StatsSection() {
  return (
    <section
      id="clinic-statistics"
      aria-labelledby="stats-heading"
      className="relative z-20 -mt-[5.5rem] sm:-mt-24 lg:-mt-28"
    >
      <h2 id="stats-heading" className="sr-only">
        Clinic in numbers
      </h2>
      <div className="container-page">
        <Reveal variant="scale">
          <dl className="grid grid-cols-1 gap-y-8 rounded-[24px] border border-border bg-card px-6 py-10 shadow-[0_2px_6px_color-mix(in_oklab,var(--color-foreground)_6%,transparent),0_28px_60px_-20px_color-mix(in_oklab,var(--color-foreground)_22%,transparent)] sm:grid-cols-2 sm:gap-y-10 sm:px-10 sm:py-12 lg:grid-cols-4 lg:gap-y-0 lg:px-6 lg:py-14">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group flex min-w-0 flex-col items-center border-border/70 px-5 text-center transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "lg:border-l" : "lg:border-l-0"}`}
              >
                <span
                  aria-hidden="true"
                  className="grid size-12 place-items-center rounded-full bg-primary/[0.07] text-primary transition-colors duration-300 ease-[var(--ease-brand)] group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <stat.icon size={21} strokeWidth={1.7} />
                </span>
                <dd className="mt-5 font-heading text-[2rem] font-semibold leading-none tracking-tight text-foreground sm:text-[2.35rem]">
                  {"value" in stat ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </dd>
                <dt className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
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
