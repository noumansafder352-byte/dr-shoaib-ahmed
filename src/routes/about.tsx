import { createFileRoute } from "@tanstack/react-router";

import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutSpecialist } from "@/components/about/AboutSpecialist";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutWhyChoose } from "@/components/about/AboutWhyChoose";
import { DoctorMessage } from "@/components/about/DoctorMessage";
import { VisionMission } from "@/components/about/VisionMission";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Prof. Dr. Shoaib Ahmed | ENT Specialist Rawalpindi",
      description:
        "30+ years of ENT practice at Army Medical College, CMH and PNS Shifa. Learn about Prof. Dr. Maj. Gen. (R) Shoaib Ahmed's expertise in cochlear implant and advanced ear surgery.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About Prof. Dr. Maj. Gen. (R) Shoaib Ahmed"
        description="Learn more about our commitment to providing exceptional Ear, Nose, and Throat care through decades of experience, clinical excellence, and compassionate patient care."
        crumbs={[{ label: "About Us" }]}
      />
      <AboutStory />
      <AboutSpecialist />
      <AboutHighlights />
      <AboutExpertise />
      <AboutWhyChoose />
      <VisionMission />
      <DoctorMessage />
      <CtaBanner
        tone="primary"
        label="Book a Consultation"
        title="Experience expert ENT care"
        description="Whether you need treatment for a common ENT condition or specialized surgical care, we are committed to providing expert medical care with compassion and professionalism."
        primary={{ label: "Book Appointment", href: "tel:+923350330019" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
