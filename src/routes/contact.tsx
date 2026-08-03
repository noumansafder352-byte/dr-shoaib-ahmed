import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/PageHero";
import { AppointmentInfo } from "@/components/contact/AppointmentInfo";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactFormMap } from "@/components/contact/ContactFormMap";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { EmergencyNotice } from "@/components/contact/EmergencyNotice";
import { seo } from "@/lib/seo";


export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact ENT Clinic in Rawalpindi | Dr. Shoaib Ahmed",
      description:
        "Contact Prof. Dr. Maj. Gen. (R) Shoaib Ahmed — clinic address at IDC Saddar Rawalpindi, phone 0335-0330019, consultation hours 4:00–6:30 PM and an online enquiry form.",
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
      <ContactInfo />
      <AppointmentInfo />
      <ContactFormMap />
      <ContactFaq />
      <EmergencyNotice />

    </>
  );
}
