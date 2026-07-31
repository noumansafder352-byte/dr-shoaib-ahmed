import { Check } from "lucide-react";

import { SplitSection } from "@/components/layout/sections";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/site";
import consultationImage from "@/assets/facility-consultation.jpg";

const checklist = [
  "Previous medical records (if available)",
  "Relevant laboratory or imaging reports",
  "Current medications",
  "Hearing aids or medical devices (if applicable)",
];

/** Appointment guidance — content left, clinic image right. */
export function AppointmentInfo() {
  return (
    <SplitSection
      surface
      reverse
      label="Appointments"
      title="Book Your Consultation"
      description="Scheduling an appointment is simple. Contact us by phone or complete the inquiry form, and our team will assist you in selecting a convenient consultation time."
      imageSrc={consultationImage}
      imageAlt="Consultation room at Dr. Shoaib Ahmed's ENT clinic in Rawalpindi"
    >
      <div>
        <h3 className="font-heading text-lg font-semibold">Before Your Visit</h3>
        <ul className="mt-5 flex flex-col gap-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/8 text-primary"
              >
                <Check size={14} strokeWidth={2.4} />
              </span>
              <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="w-full sm:w-auto">
            <a href={contact.phoneHref}>Book Appointment</a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href={contact.phoneHref}>Call Now</a>
          </Button>
        </div>
      </div>
    </SplitSection>
  );
}
