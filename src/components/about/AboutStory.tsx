import { Link } from "@tanstack/react-router";

import { SplitSection } from "@/components/layout/sections";
import { Button } from "@/components/ui/button";

/** Our story — clinic image left, narrative right. */
export function AboutStory() {
  return (
    <SplitSection
      id="our-story"
      label="Our Story"
      title="Committed to better ENT healthcare"
      imageSrc="/image/clinic-waiting-area.webp"
      imageAlt="Patient waiting area at Dr. Shoaib Ahmed ENT Clinic, IDC Saddar, Rawalpindi"
    >
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Dr. Shoaib Ahmed ENT Clinic was established with a simple mission — to provide reliable,
          patient-centered ENT care in a professional and welcoming environment. Every patient
          receives personalized attention,professionally honest medical advice, and evidence-based
          treatment tailored to their individual needs.
        </p>
        <p>
          From routine consultations to advanced surgical procedures, our focus is on delivering
          safe, effective, and compassionate healthcare that improves quality of life.
        </p>
      </div>
      <Button asChild className="mt-8">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </SplitSection>
  );
}
