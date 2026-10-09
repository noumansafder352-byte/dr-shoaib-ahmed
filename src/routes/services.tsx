import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { CoreServices } from "@/components/services/CoreServices";
import { DiagnosticServices } from "@/components/services/DiagnosticServices";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { SurgicalProcedures } from "@/components/services/SurgicalProcedures";
import { PremiumCta } from "@/components/shared/PremiumCta";
import { contact } from "@/config/site";
import { faqs } from "@/components/services/ServicesFaq";
import { breadcrumbs, faqSchema, seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "ENT Services in Rawalpindi | Dr. Shoaib Ahmed",
      description:
        "Ear, nose and throat treatment, cochlear implant and middle ear surgery, endoscopy and hearing evaluation by Prof. Maj. Gen. (R) Dr. Shoaib Ahmed in Rawalpindi.",
      path: "/services",
      jsonLd: [
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Comprehensive Ear, Nose & Throat Care"
        description="We provide expert diagnosis, personalized treatment, and advanced surgical care for a wide range of ear, nose, and throat conditions using modern techniques and patient-centered healthcare."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesIntro />
      <CoreServices />
      <SurgicalProcedures />
      <DiagnosticServices />
      <ServiceProcess />

      <ServicesFaq />
      <PremiumCta
        id="services-cta-heading"
        label="Get Started"
        title="Take the first step toward better ENT health"
        description="Whether you're experiencing hearing problems, sinus issues, throat disorders, or need specialized ENT surgery, our clinic is here to provide expert care with compassion and professionalism."
        primary={{ label: "Book Appointment", href: contact.phoneHref }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
