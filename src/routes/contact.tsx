import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { AppointmentInfo } from "@/components/contact/AppointmentInfo";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactFormMap } from "@/components/contact/ContactFormMap";

import { items as contactFaqs } from "@/components/contact/ContactFaq";
import { breadcrumbs, faqSchema, seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact ENT Clinic in Rawalpindi | Dr. Shoaib Ahmed",
      description:
        "Contact Prof. Maj. Gen. (R) Dr. Shoaib Ahmed — clinic address at IDC Saddar Rawalpindi, phone 0335-0330019, consultation hours 4:00–6:30 PM and an online enquiry form.",
      path: "/contact",
      jsonLd: [
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        faqSchema(contactFaqs),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="We're Here to Help You"
        description="Whether you have questions, need medical advice, or would like to schedule an appointment, our team is here to assist you. We are committed to providing compassionate care and a smooth healthcare experience from your first contact to your follow-up visit."
        crumbs={[{ label: "Contact" }]}
      />
      <AppointmentInfo />
      <ContactFormMap />
      <ContactFaq />
    </>
  );
}
