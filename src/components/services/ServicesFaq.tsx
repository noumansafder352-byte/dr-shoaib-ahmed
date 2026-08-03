import { CenteredSection } from "@/components/layout/sections";
import { FaqAccordion, type FaqItem } from "@/components/shared/FaqAccordion";
import { contact } from "@/config/site";

export const faqs: FaqItem[] = [
  {
    question: "Do all ENT conditions require surgery?",
    answer:
      "No. The majority are managed with medication, allergy treatment or a short in-clinic procedure. Surgery is discussed only when it clearly gives the better long-term result, and the alternatives are always explained first.",
  },
  {
    question: "How do I know if I need an ENT specialist?",
    answer:
      "Book a consultation for hearing loss, ringing in the ears, dizziness, a blocked nose lasting more than ten days, repeated sinus infections, snoring with breathing pauses, hoarseness beyond two weeks, difficulty swallowing, or a neck lump.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Recurrent ear infections, glue ear, enlarged tonsils and adenoids, hearing concerns and related speech delay are assessed with age-appropriate examination and treatment.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "Plan for 20 to 30 minutes. First visits usually include examination and, where required, endoscopy, microscopy or a hearing test in the same appointment.",
  },
  {
    question: "Can I get a second opinion?",
    answer:
      "Certainly. Bring your reports, scans, audiograms and prescriptions and you will receive an independent assessment with a clear comparison of your options.",
  },
  {
    question: "How do I book an appointment?",
    answer: `Call ${contact.phone} during clinic hours (${contact.hours}) or use the contact form. The clinic is at ${contact.address}.`,
  },
];

/** Services page FAQ accordion — one item open at a time. */
export function ServicesFaq() {
  return (
    <CenteredSection
      id="services-faqs"
      surface
      label="FAQs"
      title="Frequently asked questions"
      description="Practical answers about consultations, treatment and surgery at the clinic."
    >
      <FaqAccordion items={faqs} defaultOpen={0} className="mx-auto max-w-3xl" />
    </CenteredSection>
  );
}
