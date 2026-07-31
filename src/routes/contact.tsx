import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact & Appointments — Prof. Dr. Maj. Gen. (R) Shoaib Ahmed",
      description:
        "Clinic location, timings and appointment details for ENT consultations with Prof. Dr. Maj. Gen. (R) Shoaib Ahmed in Rawalpindi.",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section ariaLabelledBy="contact-heading">
      <h1
        id="contact-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Contact Us
      </h1>
    </Section>
  );
}
