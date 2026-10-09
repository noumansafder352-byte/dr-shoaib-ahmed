import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, HeartHandshake, Stethoscope } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  { icon: Award, title: "30+ Years Experience" },
  { icon: Stethoscope, title: "Advanced ENT Care" },
  { icon: HeartHandshake, title: "Patient-Focused Treatment" },
];

/** Welcome introduction — minimal editorial two-column layout. */
export function WelcomeSection() {
  return (
    <Section
      id="welcome"
      ariaLabelledBy="welcome-heading"
      className="relative pt-16 sm:pt-20 lg:pt-24"
    >


      <div className="grid gap-14 lg:grid-cols-[45fr_55fr] lg:items-stretch lg:gap-16 xl:gap-20">
        {/* Image */}
        <Reveal variant="scale" className="min-w-0 lg:flex">
          {/* On desktop the image is absolutely positioned so the text column sets the height */}
          <div className="relative w-full overflow-hidden rounded-[1.75rem] bg-surface shadow-lift">
            <img
              src="/image/clinic-reception-waiting.jpg"
              alt="Reception and patient waiting area at Dr. Shoaib Ahmed's ENT clinic, IDC Saddar, Rawalpindi"
              loading="lazy"
              width={1024}
              height={1536}
              className="aspect-[5/4.4] h-full w-full object-cover object-[center_45%] lg:absolute lg:inset-0 lg:aspect-auto"
            />
          </div>
        </Reveal>


        {/* Content */}
        <Reveal delay={80} className="min-w-0">
          <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            Welcome
          </span>

          <h2
            id="welcome-heading"
            className="mt-5 max-w-[26ch] font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.85rem]"
          >
            Welcome to Dr. Shoaib Ahmed{" "}
            <span className="text-primary">ENT Clinic</span>
          </h2>

          <div className="mt-7 max-w-[54ch] space-y-4 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
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

          <ul className="mt-10 grid overflow-hidden rounded-[18px] border border-border/70 bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift sm:grid-cols-3 sm:divide-x sm:divide-border/70">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="min-w-0 border-b border-border/70 last:border-b-0 sm:border-b-0">
                  <div className="group flex items-center gap-3.5 px-6 py-6 transition-transform duration-300 hover:-translate-y-0.5 sm:flex-col sm:gap-3 sm:px-8 sm:py-8 sm:text-center">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[0.9rem] font-semibold leading-snug text-foreground">
                      {item.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>


          <div className="mt-10">
            <Button asChild className="group px-7">
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
