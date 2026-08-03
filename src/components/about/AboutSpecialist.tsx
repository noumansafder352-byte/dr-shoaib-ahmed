import { Award, Building2, Ear, GraduationCap, ShieldCheck, Users } from "lucide-react";

import doctorProfile from "@/assets/doctor-profile.jpg";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  { icon: Award, label: "30+ Years Experience" },
  { icon: Users, label: "Thousands of Patients Treated" },
  { icon: GraduationCap, label: "Army Medical College" },
  { icon: Building2, label: "CMH" },
  { icon: ShieldCheck, label: "PNS Shifa Hospital" },
  { icon: Ear, label: "Advanced ENT Surgery" },
];

/** Meet the specialist — content left, framed portrait right (Home page design language). */
export function AboutSpecialist() {
  return (
    <Section id="meet-the-specialist" surface ariaLabelledBy="meet-the-specialist-heading">
      <div className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-stretch lg:gap-14">
        {/* Portrait — premium frame matching the hero treatment */}
        <Reveal variant="scale" className="min-w-0 lg:order-2">
          <div className="relative h-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 hidden rounded-[1.75rem] border border-primary/15 lg:block"
            />
            <div className="relative flex h-full rounded-[1.5rem] border border-border bg-card p-2.5 shadow-lift">
              <div className="w-full overflow-hidden rounded-[1.1rem] bg-surface">
                <img
                  src={doctorProfile}
                  alt="Portrait of Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist"
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
        <Reveal delay={80} className="flex min-w-0 flex-col justify-center lg:order-1">
          <span className="eyebrow">Meet the Specialist</span>

          <h2
            id="meet-the-specialist-heading"
            className="mt-4 font-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.6rem]"
          >
            Prof. Dr. Maj. Gen. (R) Shoaib Ahmed
          </h2>

          <div className="mt-5 max-w-[62ch] space-y-4 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem]">
            <p>
              Prof. Dr. Maj. Gen. (R) Shoaib Ahmed is one of Pakistan&rsquo;s experienced ENT
              specialists with more than 30 years of clinical practice, medical education, and
              advanced ENT surgery.
            </p>
            <p>
              Throughout his career, he has served at renowned institutions including Army Medical
              College, Combined Military Hospital (CMH), and PNS Shifa Hospital, where he gained
              extensive expertise in diagnosing and treating both routine and complex ENT
              conditions.
            </p>
            <p>
              His areas of expertise include cochlear implant surgery, advanced ear surgery, head
              &amp; neck surgery, and comprehensive ENT care for adults and children.
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
        </Reveal>
      </div>
    </Section>
  );
}
