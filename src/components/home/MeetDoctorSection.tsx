import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Ear,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import doctorProfile from "@/assets/doctor-profile.jpg";
import { SplitSection } from "@/components/layout/sections";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Award, label: "30+ Years Experience" },
  { icon: GraduationCap, label: "Army Medical College" },
  { icon: Building2, label: "CMH" },
  { icon: ShieldCheck, label: "PNS Shifa" },
  { icon: Ear, label: "Cochlear Implant Surgery" },
  { icon: HeartPulse, label: "Advanced ENT Care" },
];

/** Doctor introduction — portrait left, biography and credential chips right. */
export function MeetDoctorSection() {
  return (
    <SplitSection
      id="meet-the-doctor"
      label="Meet the Specialist"
      title="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed"
      media={
        <img
          src={doctorProfile}
          alt="Prof. Dr. Maj. Gen. (R) Shoaib Ahmed reviewing an ear endoscopy image in his clinic"
          loading="lazy"
          width={1024}
          height={1152}
          className="aspect-4/5 w-full object-cover"
        />
      }
    >
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          With over three decades of experience, Prof. Dr. Maj. Gen. (R) Shoaib Ahmed is a trusted
          ENT specialist known for his expertise in diagnosing and treating complex ear, nose, and
          throat conditions.
        </p>
        <p>
          He has served at renowned institutions including Army Medical College, CMH, and PNS Shifa
          Hospital, with special expertise in cochlear implant surgery, advanced ear surgery, and
          comprehensive ENT care.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, label }) => (
          <li key={label}>
            <div className="group flex items-center gap-4 transition-transform duration-300 ease-out hover:translate-x-1.5">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <span className="min-w-0 font-heading text-[0.95rem] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Button asChild>
          <Link to="/about">Read Full Profile</Link>
        </Button>
      </div>

    </SplitSection>
  );
}
