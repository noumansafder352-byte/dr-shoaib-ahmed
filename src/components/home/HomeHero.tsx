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

/** Home page hero: balanced split layout with a refined portrait and appointment widget. */
export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-background">
      {/* Very subtle premium background detailing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(100%_65%_at_88%_-5%,color-mix(in_oklab,var(--color-primary)_5%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-surface),transparent_45%)] opacity-70" />
        <div className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px)] [background-size:120px_100%]" />
        <div className="absolute right-0 top-0 hidden h-56 w-px bg-gradient-to-b from-primary/25 to-transparent lg:block" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
      </div>

      <div className="container-page relative grid items-center gap-16 pb-20 pt-12 sm:pt-16 lg:grid-cols-[54fr_46fr] lg:gap-20 lg:pb-[104px] lg:pt-24">
        {/* Left — primary focus */}
        <Reveal className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
            <Stethoscope size={15} strokeWidth={1.8} aria-hidden="true" />
            Trusted ENT Specialist
          </span>

          <h1
            id="hero-heading"
            className="mt-7 max-w-[20ch] font-heading text-[2.1rem] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Expert ENT Care with{" "}
            <span className="text-primary">Experience, Precision &amp; Compassion</span>
          </h1>

          <p className="mt-7 max-w-[48ch] text-base leading-[1.85] text-muted-foreground">
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

        {/* Right — portrait + appointment widget as one composition */}
        <Reveal variant="scale" delay={80} className="min-w-0">
          <div className="relative mx-auto w-full max-w-[24rem] lg:max-w-[26rem]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-tl-[1.75rem] border-l border-t border-primary/20 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-28 w-28 rounded-br-[1.75rem] border-b border-r border-border sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute right-4 top-6 -z-10 hidden h-[80%] w-[88%] rounded-[26px] bg-surface lg:block"
            />

            <div className="relative overflow-hidden rounded-[22px] border border-border bg-surface p-1.5 shadow-lift">
              <img
                src={doctorHero}
                alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist in Rawalpindi"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[17px] object-cover object-top animate-scale-in"
              />
            </div>

            {/* Premium appointment widget, overlapping the portrait */}
            <Reveal delay={200} className="relative z-10 -mt-10 px-2 sm:px-4">
              <div className="card-lift rounded-[20px] border border-border bg-card p-5 shadow-lift sm:p-6">
                <p className="font-heading text-[0.95rem] font-semibold text-foreground">
                  Clinic Information
                </p>
                <ul className="mt-4 space-y-4">
                  {appointmentDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                          <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.1em] text-muted-foreground">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-0.5 block font-heading text-[0.95rem] font-semibold text-foreground transition-colors hover:text-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="mt-0.5 block font-heading text-[0.95rem] font-semibold text-foreground">
                              {item.value}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 border-t border-border pt-5">
                  <Button asChild className="w-full shadow-soft">
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
