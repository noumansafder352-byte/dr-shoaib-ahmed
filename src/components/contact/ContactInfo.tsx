import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { StaggeredGrid } from "@/components/layout/sections";
import { ContactCard } from "@/components/shared/cards";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/config/site";

/** Four premium contact information cards. */
export function ContactInfo() {
  const cards = [
    {
      icon: MapPin,
      label: "Location",
      value: "2nd Floor IDC, Saddar, Rawalpindi, Pakistan",
      href: contact.mapHref,
    },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
    {
      icon: Clock,
      label: "Clinic Hours",
      value: (
        <>
          Monday – Friday
          <br />
          4:00 PM – 6:30 PM
        </>
      ),
    },
  ];

  return (
    <Section ariaLabelledBy="contact-info-title">
      <Reveal>
        <SectionHeading
          id="contact-info-title"
          label="Get in Touch"
          title="Contact Dr. Shoaib Ahmed ENT Clinic"
          description="Reach us by phone, email or visit the clinic during consultation hours — our team responds to every enquiry personally."
        />
      </Reveal>
      <div className="mt-12 lg:mt-14">
        <StaggeredGrid
          columns={4}
          items={cards.map((card) => (
            <ContactCard
              key={card.label}
              icon={card.icon}
              label={card.label}
              value={card.value}
              {...(card.href ? { href: card.href } : {})}
            />
          ))}
        />
      </div>
    </Section>
  );
}
