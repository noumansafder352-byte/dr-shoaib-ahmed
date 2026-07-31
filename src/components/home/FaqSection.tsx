import { CenteredSection } from "@/components/layout/sections";
import { FaqAccordion, type FaqItem } from "@/components/shared/FaqAccordion";
import { contact } from "@/config/site";

const faqs: FaqItem[] = [
  {
    question: "When should I visit an ENT specialist?",
    answer:
      "See a specialist if you have hearing loss, ringing in the ears, dizziness, blocked or runny nose lasting more than ten days, repeated sinus infections, snoring or breathing pauses in sleep, hoarseness for more than two weeks, difficulty swallowing, or a lump in the neck.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Paediatric ENT problems such as recurrent ear infections, glue ear, enlarged tonsils and adenoids, hearing concerns and speech delay related to hearing are assessed and treated with age-appropriate care.",
  },
  {
    question: "Is surgery always necessary?",
    answer:
      "No. Most ENT conditions respond to medication, allergy management or in-clinic procedures. Surgery is recommended only when it is clearly the best option, and the reasons, alternatives and expected recovery are discussed with you first.",
  },
  {
    question: "How can I book an appointment?",
    answer: `Call ${contact.phone} during clinic hours (${contact.hours}) or use the contact form on this website. Walk-in patients are also seen, subject to availability at the clinic in ${contact.address}.`,
  },
  {
    question: "Can I get a second opinion?",
    answer:
      "Absolutely. Bring your previous reports, scans, audiograms and prescriptions, and you will receive an independent assessment along with a clear explanation of your options.",
  },
];

/** Home page FAQ accordion — one item open at a time. */
export function FaqSection() {
  return (
    <CenteredSection
      id="faqs"
      label="FAQs"
      title="Frequently Asked Questions"
      description="Answers to the questions patients ask most often before their first ENT consultation."
    >
      <FaqAccordion items={faqs} defaultOpen={0} className="mx-auto max-w-3xl" />
    </CenteredSection>
  );
}
