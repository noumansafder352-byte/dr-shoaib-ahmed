import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import clinicWelcome from "@/assets/clinic-welcome.jpg";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type Highlight = {
  icon: typeof HeartHandshake;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
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

/** Welcome introduction — layered premium image frame with highlight rows. */
export function WelcomeSection() {
  return (
    <Section id="welcome" surface ariaLabelledBy="welcome-heading" className="relative overflow-hidden">
      {/* Subtle decorative detailing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_-5%_10%,color-mix(in_oklab,var(--color-primary)_5%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px)] [background-size:140px_100%]" />
        <div className="absolute left-0 top-0 h-px w-full bg-border/70" />
      </div>

      <div className="relative grid items-center gap-14 lg:grid-cols-[47fr_53fr] lg:gap-16 xl:gap-20">
        {/* Image — premium layered frame */}
        <Reveal variant="scale" className="min-w-0">
          <div className="relative mx-auto max-w-[27rem] lg:max-w-none">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-6 -top-6 hidden size-24 opacity-40 [background-image:radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:12px_12px] sm:block" />
              <div className="absolute -bottom-8 -right-6 hidden size-24 opacity-25 [background-image:radial-gradient(var(--color-muted-foreground)_1px,transparent_1px)] [background-size:12px_12px] lg:block" />
              <div className="absolute -bottom-6 right-6 hidden h-[70%] w-[80%] rounded-br-[6rem] rounded-tl-[3rem] bg-card lg:block" />
            </div>

            <div className="relative rounded-tl-[4.5rem] rounded-br-[4.5rem] rounded-bl-[1.5rem] rounded-tr-[1.5rem] bg-card p-3 shadow-lift sm:p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-tl-[5.5rem] rounded-br-[5.5rem] rounded-bl-[2rem] rounded-tr-[2rem] border-l border-t border-primary/30 sm:-inset-3"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 hidden rounded-tl-[6.5rem] rounded-br-[6.5rem] rounded-bl-[2.5rem] rounded-tr-[2.5rem] border-b border-r border-primary/15 lg:block"
              />
              <div className="overflow-hidden rounded-tl-[3.75rem] rounded-br-[3.75rem] rounded-bl-[1rem] rounded-tr-[1rem] bg-surface">
                <img
                  src={clinicWelcome}
                  alt="Consultation room at the ENT clinic with examination chair and endoscopy equipment"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={80} className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles size={15} strokeWidth={1.8} aria-hidden="true" />
            Welcome
          </span>

          <h2
            id="welcome-heading"
            className="mt-7 max-w-[22ch] font-heading text-[1.9rem] font-semibold leading-[1.18] tracking-tight text-foreground sm:text-[2.35rem] lg:text-[2.6rem]"
          >
            Welcome to Dr. Shoaib Ahmed{" "}
            <span className="text-primary">ENT Clinic</span>
          </h2>

          <div className="mt-7 max-w-[52ch] space-y-5 text-base leading-[1.9] text-muted-foreground sm:text-[1.0625rem]">
            <p>
              At our clinic, we provide comprehensive ENT care for patients of all ages. From routine
              consultations to advanced surgical procedures, our focus is on accurate diagnosis,
              effective treatment, and compassionate care in a comfortable and professional
              environment.
            </p>
            <p>
              Whether you&rsquo;re experiencing hearing loss, sinus problems, throat discomfort, or
              require specialized ENT treatment, our team is here to help you every step of the way.
            </p>
          </div>

          <ul className="mt-10 max-w-[36rem] divide-y divide-border/80 border-y border-border/80">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="py-5">
                  <Reveal delay={140 + index * 90}>
                    <div className="group flex items-start gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary transition-colors duration-300 group-hover:bg-primary/[0.12]">
                        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <span className="block font-heading text-[0.975rem] font-semibold text-foreground">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </li>

              );
            })}
          </ul>

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
    </Section>
  );
}
