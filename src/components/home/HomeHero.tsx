import { Link } from "@tanstack/react-router";
import { CalendarCheck, Stethoscope } from "lucide-react";

import doctorHero from "@/assets/doctor-hero.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const heroStats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Patients Treated" },
  { text: "Advanced", label: "ENT Care" },
] as const;

/** Home page hero: headline, primary actions and three floating stat cards. */
export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-background">
      {/* Subtle geometric medical background elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-surface lg:block" />
        <div className="absolute -right-24 top-24 hidden size-72 rotate-12 rounded-[3rem] border border-border lg:block" />
        <div className="absolute right-1/3 top-10 hidden h-40 w-px bg-border lg:block" />
        <div className="absolute bottom-16 right-10 hidden h-px w-64 bg-border lg:block" />
        <div className="absolute left-1/2 top-0 h-24 w-px bg-border/70" />
      </div>

      <div className="container-page relative grid items-center gap-14 pb-[70px] pt-14 sm:pb-[90px] lg:grid-cols-12 lg:gap-12 lg:pb-[120px] lg:pt-20">
        <Reveal className="min-w-0 lg:col-span-6">
          <span className="eyebrow inline-flex items-center gap-2">
            <Stethoscope size={16} strokeWidth={1.8} aria-hidden="true" />
            Trusted ENT Specialist
          </span>

          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            Expert ENT Care with{" "}
            <span className="text-primary">Experience, Precision &amp; Compassion</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed provides comprehensive diagnosis and treatment for
            ear, nose, and throat conditions. With over 30 years of clinical excellence, we are
            committed to helping patients of all ages through personalized care and advanced
            medical expertise.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link to="/contact">
                <CalendarCheck aria-hidden="true" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={120 + index * 90}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-5 shadow-soft">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span
                      className={
                        "value" in stat
                          ? "block font-heading text-2xl font-bold text-primary sm:text-3xl"
                          : "block font-heading text-xl font-bold text-primary sm:text-2xl"
                      }
                    >
                      {"value" in stat ? (
                        <Counter value={stat.value} suffix={stat.suffix} />
                      ) : (
                        stat.text
                      )}
                    </span>

                    <span className="mt-1 block text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <Reveal variant="scale" delay={80} className="min-w-0 lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-tl-[2rem] border-l-2 border-t-2 border-primary/25 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-br-[2rem] border-b-2 border-r-2 border-primary/25 sm:block"
            />
            <img
              src={doctorHero}
              alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist in Rawalpindi"
              width={1024}
              height={1280}
              className="relative w-full rounded-xl border border-border bg-surface object-cover object-top shadow-lift"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
