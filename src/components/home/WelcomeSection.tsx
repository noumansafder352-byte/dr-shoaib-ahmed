import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  MonitorSmartphone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import clinicWelcome from "@/assets/clinic-welcome.jpg";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type Item = {
  icon: typeof HeartHandshake;
  title: string;
  description: string;
};

const features: Item[] = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description: "Personalized treatment for every patient.",
  },
  {
    icon: Stethoscope,
    title: "Advanced ENT Treatments",
    description: "Modern diagnostic and treatment techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Clinical Experience",
    description: "Over 30 years of professional expertise.",
  },
];

const quickHighlights = [
  { icon: Building2, label: "Modern Clinic" },
  { icon: MonitorSmartphone, label: "Advanced Equipment" },
  { icon: Sofa, label: "Comfortable Environment" },
];

/** Welcome introduction — editorial asymmetric layout with framed image and feature cards. */
export function WelcomeSection() {
  return (
    <Section id="welcome" surface ariaLabelledBy="welcome-heading" className="relative overflow-hidden">
      {/* Subtle decorative detailing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px)] [background-size:140px_100%]" />
        <div className="absolute left-0 top-0 h-px w-full bg-border/70" />
      </div>

      <div className="relative grid gap-20 lg:grid-cols-[40fr_60fr] lg:items-start lg:gap-16 xl:gap-24">
        {/* ---------- Left: framed image + overlapping highlight card ---------- */}
        <Reveal variant="scale" className="min-w-0">
          <div className="relative mx-auto w-full max-w-[24rem] pb-24 sm:pb-20 lg:max-w-[26rem]">
            {/* medical-inspired decorative accents */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-7 -top-7 size-24 opacity-40 [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="absolute -right-6 top-24 hidden h-40 w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
              <div className="absolute -left-10 bottom-28 hidden size-20 rounded-full border border-primary/15 lg:block" />
            </div>

            <div className="relative rounded-[2rem] bg-card p-3 shadow-lift">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-[2.5rem] border border-primary/25"
              />
              <div className="overflow-hidden rounded-[1.5rem] bg-surface">
                <img
                  src={clinicWelcome}
                  alt="Consultation room at the ENT clinic with examination chair and endoscopy equipment"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[4/4.4] w-full object-cover"
                />
              </div>
            </div>

            {/* floating highlight card overlapping the image */}
            <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-[1.25rem] border border-border/70 bg-card p-5 shadow-lift sm:w-[88%] sm:p-6">
              <ul className="space-y-3.5">
                {quickHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
                        <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 font-heading text-[0.9rem] font-semibold text-foreground">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ---------- Right: editorial content ---------- */}
        <div className="min-w-0">
          <Reveal delay={80}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />
              Welcome
            </span>

            <h2
              id="welcome-heading"
              className="mt-7 max-w-[28ch] font-heading text-[1.9rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.4rem] lg:text-[2.75rem]"
            >
              Welcome to Dr. Shoaib Ahmed{" "}
              <span className="text-primary">ENT Clinic</span>
            </h2>

            <div className="mt-6 grid gap-6 border-l-2 border-primary/20 pl-6 sm:grid-cols-2 sm:gap-8">
              <p className="text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
                At our clinic, we provide comprehensive ENT care for patients of all ages. From
                routine consultations to advanced surgical procedures, our focus is on accurate
                diagnosis, effective treatment, and compassionate care in a comfortable and
                professional environment.
              </p>
              <p className="text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
                Whether you&rsquo;re experiencing hearing loss, sinus problems, throat discomfort, or
                require specialized ENT treatment, our team is here to help you every step of the
                way.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="min-w-0">
                  <Reveal delay={140 + index * 90} className="h-full">
                    <div className="group flex h-full flex-col rounded-[18px] border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 font-heading text-[1rem] font-semibold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={420}>
            <div className="mt-10">
              <Button asChild className="group px-7 shadow-lift">
                <Link to="/about">
                  Explore More
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
