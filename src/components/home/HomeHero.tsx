import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  Clock,
  Phone,
  Stethoscope,
} from "lucide-react";

import doctorHero from "@/assets/doctor-hero.jpg";
import { contact } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type AppointmentDetail = {
  icon: typeof CalendarDays;
  label: string;
  value: string;
  href?: string;
};

const appointmentDetails: AppointmentDetail[] = [
  { icon: CalendarDays, label: "Consultation Days", value: "Monday – Friday" },
  { icon: Clock, label: "Clinic Hours", value: "4:00 PM – 6:30 PM" },
  { icon: Phone, label: "Call Now", value: contact.phone, href: contact.phoneHref },
];

/** Home page hero: premium split layout with stats and a floating appointment card. */
export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-background">
      {/* Very subtle premium background detailing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_88%_-5%,color-mix(in_oklab,var(--color-primary)_6%,transparent),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-surface),transparent_45%)] opacity-70" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px)] [background-size:120px_100%]" />
        <div className="absolute right-0 top-0 hidden h-56 w-px bg-gradient-to-b from-primary/30 to-transparent lg:block" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
      </div>

      <div className="container-page relative grid items-center gap-14 pb-24 pt-12 sm:pt-16 lg:grid-cols-[48fr_52fr] lg:gap-16 lg:pb-[120px] lg:pt-24">
        {/* Left ~48% */}
        <Reveal className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
            <Stethoscope size={15} strokeWidth={1.8} aria-hidden="true" />
            Trusted ENT Specialist
          </span>

          <h1
            id="hero-heading"
            className="mt-7 max-w-[19ch] font-heading text-[2.1rem] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.15rem]"
          >
            Expert ENT Care with{" "}
            <span className="text-primary">Experience, Precision &amp; Compassion</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-base leading-[1.85] text-muted-foreground">
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed provides comprehensive diagnosis and treatment for
            ear, nose, and throat conditions — combining three decades of clinical excellence with
            personalised, patient-first care.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild className="group px-7 shadow-lift">
              <Link to="/contact">
                <CalendarCheck aria-hidden="true" />
                Book Appointment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group border-border px-7 text-foreground hover:border-primary"
            >
              <Link to="/services">
                Explore Services
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </Reveal>


        {/* Right ~52% */}
        <Reveal variant="scale" delay={80} className="min-w-0">
          <div className="relative mx-auto max-w-md pb-48 sm:pb-36 lg:max-w-none lg:pb-28">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 hidden h-40 w-40 rounded-tl-[2rem] border-l border-t border-primary/20 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute right-6 top-8 -z-10 hidden h-[85%] w-[85%] rounded-[26px] bg-surface lg:block"
            />

            <div className="relative overflow-hidden rounded-[24px] border border-border bg-surface p-2 shadow-lift">
              <img
                src={doctorHero}
                alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist in Rawalpindi"
                width={1024}
                height={1280}
                className="w-full rounded-[18px] object-cover object-top animate-scale-in"
              />
            </div>

            {/* Floating premium appointment information card */}
            <Reveal
              delay={220}
              className="absolute inset-x-2 bottom-0 sm:inset-x-4 lg:left-0 lg:right-[-2rem]"
            >
              <div className="card-lift rounded-[20px] border border-border bg-card p-5 shadow-lift sm:p-6">
                <ul className="grid gap-5 sm:grid-cols-3">
                  {appointmentDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex min-w-0 items-start gap-3">
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                          <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.1em] text-muted-foreground">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block font-heading text-sm font-semibold text-foreground transition-colors hover:text-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="mt-1 block font-heading text-sm font-semibold text-foreground">
                              {item.value}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 border-t border-border pt-5">
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      <CalendarCheck aria-hidden="true" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
