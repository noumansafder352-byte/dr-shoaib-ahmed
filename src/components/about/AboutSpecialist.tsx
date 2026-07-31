import { Award, Building2, Ear, GraduationCap, ShieldCheck, Users } from "lucide-react";

import doctorProfile from "@/assets/doctor-profile.jpg";
import { SplitSection } from "@/components/layout/sections";

const highlights = [
  { icon: Award, label: "30+ Years Experience" },
  { icon: Users, label: "Thousands of Patients Treated" },
  { icon: GraduationCap, label: "Army Medical College" },
  { icon: Building2, label: "CMH" },
  { icon: ShieldCheck, label: "PNS Shifa Hospital" },
  { icon: Ear, label: "Advanced ENT Surgery" },
];

/** Meet the specialist — content left, portrait right, credential cards below. */
export function AboutSpecialist() {
  return (
    <SplitSection
      id="meet-the-specialist"
      surface
      reverse
      label="Meet the Specialist"
      title="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed"
      imageSrc={doctorProfile}
      imageAlt="Portrait of Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT specialist"
    >
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Prof. Dr. Maj. Gen. (R) Shoaib Ahmed is one of Pakistan&rsquo;s experienced ENT
          specialists with more than 30 years of clinical practice, medical education, and
          advanced ENT surgery.
        </p>
        <p>
          Throughout his career, he has served at renowned institutions including Army
          Medical College, Combined Military Hospital (CMH), and PNS Shifa Hospital, where
          he gained extensive expertise in diagnosing and treating both routine and complex
          ENT conditions.
        </p>
        <p>
          His areas of expertise include cochlear implant surgery, advanced ear surgery,
          head &amp; neck surgery, and comprehensive ENT care for adults and children.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <li
            key={item.label}
            className="card-lift flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"
            >
              <item.icon size={19} strokeWidth={1.7} />
            </span>
            <span className="min-w-0 font-heading text-sm font-semibold leading-snug">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
