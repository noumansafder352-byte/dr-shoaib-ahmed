import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/layout/Section";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Prof. Dr. Maj. Gen. (R) Shoaib Ahmed — ENT Specialist, Rawalpindi",
      description:
        "Senior ENT (Ear, Nose & Throat) specialist in Rawalpindi with decades of surgical and clinical experience in ear, nose, throat, head and neck care.",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <Section ariaLabelledBy="home-heading">
      <h1
        id="home-heading"
        className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        Prof. Dr. Maj. Gen. (R) Shoaib Ahmed
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Ear, Nose &amp; Throat Specialist — Rawalpindi, Pakistan.
      </p>
    </Section>
  );
}
