import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "ENT Services — Prof. Dr. Maj. Gen. (R) Shoaib Ahmed",
      description:
        "Ear, nose, throat, head and neck consultations, diagnostics and surgical care provided in Rawalpindi.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Section ariaLabelledBy="services-heading">
      <h1
        id="services-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Services
      </h1>
    </Section>
  );
}
