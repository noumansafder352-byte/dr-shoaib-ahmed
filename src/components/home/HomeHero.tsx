import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  Clock,
  Phone,
  Stethoscope,
} from "lucide-react";

import doctorHero from "@/assets/dr-shoaib.jpeg.asset.json";
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

      <div className="container-page relative grid items-center gap-12 pb-24 pt-10 sm:pt-14 lg:grid-cols-[53fr_47fr] lg:items-start lg:gap-10 lg:pb-[120px] lg:pt-20 xl:gap-14">
        {/* Left ~48% */}
        <Reveal className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
            <Stethoscope size={15} strokeWidth={1.8} aria-hidden="true" />
            Trusted ENT Specialist
          </span>

          <h1
            id="hero-heading"
            className="mt-8 max-w-[19ch] font-heading text-[2.2rem] font-semibold leading-[1.13] tracking-tight text-foreground sm:text-[2.9rem] lg:text-[3.35rem]"
          >
            Expert ENT Care with{" "}
            <span className="text-primary">Experience, Precision &amp; Compassion</span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-base leading-[1.9] text-muted-foreground sm:text-[1.0625rem]">
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed provides comprehensive diagnosis and treatment for
            ear, nose, and throat conditions — combining three decades of clinical excellence with
            personalised, patient-first care.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">

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


        {/* Right ~52% — signature architectural frame */}
        <Reveal variant="scale" delay={80} className="min-w-0 lg:pt-4">
          <div className="relative mx-auto max-w-[21.75rem] sm:max-w-[26rem] lg:mr-0 lg:ml-auto lg:max-w-[28.5rem]">

            {/* Subtle medical-inspired background detailing */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-8 bottom-24 hidden size-24 opacity-40 [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:12px_12px] sm:block" />
              <div className="absolute -right-6 top-10 hidden size-20 opacity-25 [background-image:radial-gradient(var(--color-muted-foreground)_1px,transparent_1px)] [background-size:12px_12px] lg:block" />
              <div className="absolute -left-10 top-6 hidden h-[70%] w-24 rounded-l-[9rem] border-b border-l border-t border-primary/15 lg:block" />
              <div className="absolute right-8 top-4 hidden h-[86%] w-[86%] rounded-tl-[8rem] rounded-br-[8rem] bg-surface lg:block" />
            </div>

            {/* White architectural frame */}
            <div className="relative rounded-tl-[7rem] rounded-tr-[2rem] rounded-br-[7rem] rounded-bl-[2rem] bg-card p-3 shadow-lift sm:rounded-tl-[9rem] sm:rounded-br-[9rem] sm:p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-tl-[8rem] rounded-tr-[2.5rem] rounded-br-[8rem] rounded-bl-[2.5rem] border-l border-t border-primary/30 sm:-inset-3 sm:rounded-tl-[10rem] sm:rounded-br-[10rem]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 hidden rounded-tl-[10rem] rounded-tr-[3rem] rounded-br-[10rem] rounded-bl-[3rem] border-b border-r border-primary/15 lg:block"
              />
              <div className="overflow-hidden rounded-tl-[6rem] rounded-tr-[1.25rem] rounded-br-[6rem] rounded-bl-[1.25rem] bg-surface sm:rounded-tl-[8rem] sm:rounded-br-[8rem]">
                <img
                  src={doctorHero.url}
                  alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist in Rawalpindi"
                  width={1183}
                  height={1345}
                  className="aspect-[4/5] w-full animate-scale-in object-cover object-top sm:aspect-[4/4.6]"
                />
              </div>
            </div>


            {/* Premium appointment information card */}
            <Reveal delay={220} className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-20">
              <div className="card-lift rounded-[20px] border border-border bg-card p-6 shadow-lift sm:-mx-6 sm:p-7 lg:-mx-10">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
                  {appointmentDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.label}
                        className={`flex min-w-0 flex-col gap-2 ${
                          index > 0 ? "sm:border-l sm:border-border/80 sm:pl-5" : ""
                        } ${index < appointmentDetails.length - 1 ? "sm:pr-5" : ""}`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                            <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="whitespace-nowrap text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.08em] text-muted-foreground">
                            {item.label}
                          </span>
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block whitespace-nowrap font-heading text-[0.9rem] font-semibold text-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="block whitespace-nowrap font-heading text-[0.9rem] font-semibold text-foreground">
                            {item.value}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 border-t border-border pt-6">
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
