import { Section } from "@/components/layout/Section";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/config/site";

const items = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      `An appointment is recommended so you are seen without a long wait. Call ${contact.phone} during clinic hours and our team will confirm a suitable time.`,
  },
  {
    question: "What should I bring to my consultation?",
    answer:
      "Bring previous medical records, any laboratory or imaging reports, a list of current medications, and hearing aids or medical devices if you use them.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "A first consultation usually takes 20 to 30 minutes, including examination. Follow-up visits are generally shorter.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Children are treated for ear infections, tonsil and adenoid problems, hearing concerns and speech-related referrals, with parents present throughout.",
  },
  {
    question: "Can I request a second opinion?",
    answer:
      "Absolutely. Bring your existing diagnosis and reports, and you will receive an independent clinical assessment and clear treatment options.",
  },
];

/** Contact page FAQ — one item open at a time. */
export function ContactFaq() {
  return (
    <Section ariaLabelledBy="contact-faq-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <SectionHeading
            id="contact-faq-title"
            label="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to the questions patients ask most often before their first visit."
          />
        </Reveal>
        <Reveal delay={100} className="min-w-0 lg:col-span-7">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}
