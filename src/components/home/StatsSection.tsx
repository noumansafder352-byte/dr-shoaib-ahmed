import { HeartPulse, Medal, Stethoscope, UserCheck } from "lucide-react";

import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { icon: Medal, value: 30, suffix: "+", label: "Years Experience" },
  { icon: UserCheck, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: HeartPulse, value: 100, suffix: "%", label: "Patient Focused" },
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
      className="relative z-20 -mt-16 sm:-mt-[4.5rem] lg:-mt-20"
    >
      <h2 id="stats-heading" className="sr-only">
        Clinic in numbers
      </h2>
      <div className="container-page">
        <Reveal variant="scale">
          <dl className="grid grid-cols-1 gap-y-6 rounded-[24px] border border-border/60 bg-card/95 px-6 py-7 backdrop-blur-xl shadow-[0_1px_2px_color-mix(in_oklab,var(--color-foreground)_5%,transparent),0_30px_60px_-24px_color-mix(in_oklab,var(--color-foreground)_28%,transparent)] sm:grid-cols-2 sm:gap-y-7 sm:px-9 sm:py-8 lg:grid-cols-4 lg:gap-y-0 lg:px-8 lg:py-9">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group flex min-w-0 items-center justify-center gap-4 border-border/60 px-4 transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 sm:px-6 lg:px-7 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "lg:border-l" : "lg:border-l-0"}`}
              >
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-[14px] border border-primary/15 bg-primary/[0.07] text-primary shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--color-primary)_12%,transparent)] transition-colors duration-300 ease-[var(--ease-brand)] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <stat.icon size={20} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <dd className="font-heading text-[1.8rem] font-bold leading-none tracking-tight text-foreground transition-colors duration-300 ease-[var(--ease-brand)] group-hover:text-primary sm:text-[1.95rem]">
                    {"value" in stat ? (
                      <Counter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </dd>
                  <dt className="mt-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
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
