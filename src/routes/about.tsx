import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About — Prof. Dr. Maj. Gen. (R) Shoaib Ahmed, ENT Specialist",
      description:
        "The professional background, military medical service, academic career and clinical philosophy of Prof. Dr. Maj. Gen. (R) Shoaib Ahmed.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section ariaLabelledBy="about-heading">
      <h1
        id="about-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        About Us
      </h1>
    </Section>
  );
}
