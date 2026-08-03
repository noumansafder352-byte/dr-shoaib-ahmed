import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Ear,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import doctorProfile from "@/assets/doctor-profile.jpg";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  { icon: Award, label: "30+ Years Experience" },
  { icon: GraduationCap, label: "Army Medical College" },
  { icon: Building2, label: "CMH" },
  { icon: ShieldCheck, label: "PNS Shifa Hospital" },
  { icon: Ear, label: "Cochlear Implant Surgery" },
  { icon: HeartPulse, label: "Advanced ENT Care" },
];

/** Doctor introduction — framed portrait left, executive profile and qualifications right. */
export function MeetDoctorSection() {
  return (
    <Section id="meet-the-doctor" ariaLabelledBy="meet-the-doctor-heading">
      <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-14 xl:gap-16">
        {/* Portrait — premium frame matching the hero treatment */}
        <Reveal variant="scale" className="min-w-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 hidden rounded-[1.75rem] border border-primary/15 lg:block"
            />
            <div className="relative rounded-[1.5rem] border border-border bg-card p-2.5 shadow-lift">
              <div className="overflow-hidden rounded-[1.1rem] bg-surface">
                <img
                  src={doctorProfile}
                  alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed reviewing an ear endoscopy image in his clinic"
                  loading="lazy"
                  width={1024}
                  height={1152}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={80} className="min-w-0">
          <span className="eyebrow">Meet the Specialist</span>

          <h2
            id="meet-the-doctor-heading"
            className="mt-5 font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed
          </h2>

          <div className="mt-6 max-w-[58ch] space-y-4 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
            <p>
              With over three decades of experience, Prof. Dr. Maj. Gen. (R) Shoaib Ahmed is a
              trusted ENT specialist known for his expertise in diagnosing and treating complex ear,
              nose, and throat conditions.
            </p>
            <p>
              He has served at renowned institutions including Army Medical College, CMH, and PNS
              Shifa Hospital, with special expertise in cochlear implant surgery, advanced ear
              surgery, and comprehensive ENT care.
            </p>
          </div>

          <p className="mt-9 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Qualifications &amp; Expertise
          </p>

          <ul className="mt-5 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label}>
                <div className="group relative flex min-h-[4.25rem] items-center gap-5 py-2 transition-transform duration-300 ease-[var(--ease-brand)] hover:translate-x-1.5">
                  {/* Left accent line on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 top-1/2 h-0 w-px -translate-y-1/2 bg-primary transition-all duration-300 ease-[var(--ease-brand)] group-hover:h-8"
                  />
                  <span
                    aria-hidden="true"
                    className="grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/[0.07] text-primary transition-colors duration-300 ease-[var(--ease-brand)] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 font-heading text-[0.95rem] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {label}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-11">
            <Button
              asChild
              className="group px-7 shadow-soft transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Link to="/about">
                Read Full Profile
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
