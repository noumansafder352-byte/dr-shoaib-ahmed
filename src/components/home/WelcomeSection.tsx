import { Link } from "@tanstack/react-router";

import clinicWelcome from "@/assets/clinic-welcome.jpg";
import { SplitSection } from "@/components/layout/sections";
import { Button } from "@/components/ui/button";

/** Welcome introduction — clinic image left, content right. */
export function WelcomeSection() {
  return (
    <SplitSection
      id="welcome"
      surface
      label="Welcome"
      title="Welcome to Dr. Shoaib Ahmed ENT Clinic"
      media={
        <img
          src={clinicWelcome}
          alt="Consultation room at the ENT clinic with examination chair and endoscopy equipment"
          loading="lazy"
          width={1280}
          height={960}
          className="aspect-4/3 w-full object-cover"
        />
      }
    >
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </SplitSection>
  );
}
