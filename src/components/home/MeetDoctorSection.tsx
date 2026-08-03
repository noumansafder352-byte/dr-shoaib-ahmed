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
      <div className="grid gap-10 lg:grid-cols-[38fr_62fr] lg:items-stretch lg:gap-12">
        {/* Portrait — premium frame matching the hero treatment */}
        <Reveal variant="scale" className="min-w-0">
          <div className="relative h-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 hidden rounded-[1.75rem] border border-primary/15 lg:block"
            />
            <div className="relative flex h-full rounded-[1.5rem] border border-border bg-card p-2.5 shadow-lift">
              <div className="w-full overflow-hidden rounded-[1.1rem] bg-surface">
                <img
                  src={doctorProfile}
                  alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed reviewing an ear endoscopy image in his clinic"
                  loading="lazy"
                  width={1024}
                  height={1152}
                  className="aspect-4/5 h-full w-full object-cover lg:aspect-auto"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={80} className="flex min-w-0 flex-col justify-center">
          <span className="eyebrow">Meet the Specialist</span>

          <h2
            id="meet-the-doctor-heading"
            className="mt-4 font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.6rem]"
          >
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed
          </h2>

          <div className="mt-5 max-w-[62ch] space-y-4 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
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

          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Qualifications &amp; Expertise
          </p>

          <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="border-b border-border/70">
                <div className="group relative flex items-center gap-5 py-4 transition-transform duration-300 ease-[var(--ease-brand)] hover:translate-x-1.5">
                  <span
                    aria-hidden="true"
                    className="grid size-[3.25rem] shrink-0 place-items-center rounded-full border border-primary/20 bg-primary/[0.07] text-primary transition-colors duration-300 ease-[var(--ease-brand)] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
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

          <div className="mt-8">
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
