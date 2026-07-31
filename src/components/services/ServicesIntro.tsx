import { Link } from "@tanstack/react-router";

import facilityConsultation from "@/assets/facility-consultation.jpg";
import { SplitSection } from "@/components/layout/sections";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/site";

/** Services introduction — image left, short content right. */
export function ServicesIntro() {
  return (
    <SplitSection
      id="services-introduction"
      label="Our Services"
      title="Expert ENT care for every stage of life"
      imageSrc={facilityConsultation}
      imageAlt="Consultation room at Dr. Shoaib Ahmed ENT Clinic"
    >
      <p className="text-base leading-relaxed text-muted-foreground">
        Our clinic offers complete Ear, Nose, and Throat services for both adults and
        children. Whether you&rsquo;re experiencing a common ENT problem or require advanced
        surgical treatment, we focus on accurate diagnosis, personalized treatment plans, and
        long-term patient care.
      </p>
      <ul className="mt-6 grid gap-3 text-sm font-medium sm:grid-cols-2">
        {[
          "Adults & children",
          "Medical & surgical care",
          "Same-visit diagnostics",
          "Structured follow-up",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href={contact.phoneHref}>Book Appointment</a>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Visit the Clinic</Link>
        </Button>
      </div>
    </SplitSection>
  );
}
