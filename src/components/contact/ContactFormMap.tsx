import { useState } from "react";
import { Clock, Lock, Mail, MapPin, Phone, ShieldCheck, Stethoscope, Timer } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/config/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a short subject").max(120),
  message: z.string().trim().min(10, "Please describe your enquiry").max(1000),
});

type Field = keyof z.infer<typeof contactSchema>;

const empty: Record<Field, string> = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const details = [
  { icon: MapPin, label: "Clinic Address", value: "2nd Floor IDC, Saddar, Rawalpindi, Pakistan" },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday | 4:00 PM – 6:30 PM" },
];

const mapSrc =
  "https://www.google.com/maps?q=Islamabad%20Diagnostic%20Centre%20Saddar%20Rawalpindi&output=embed";

/** Contact form + map, side by side. */
export function ContactFormMap() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const update = (field: Field) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields and try again.");
      return;
    }

    setValues(empty);
    setErrors({});
    toast.success("Thank you — your message has been noted.", {
      description: `For an immediate response, please call ${contact.phone} during clinic hours.`,
    });
  };

  return (
    <Section ariaLabelledBy="contact-form-title">
      <Reveal>
        <SectionHeading
          id="contact-form-title"
          label="Send an Enquiry"
          title="Write to Us or Visit the Clinic"
          description="Share a few details about your concern and we will get back to you. You can also find the clinic on the map below."
        />
      </Reveal>

      <div className="mt-12 grid items-stretch gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="min-w-0 lg:col-span-7">
          <form
            noValidate
            onSubmit={onSubmit}
            className="flex h-full flex-col rounded-[22px] border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-9"
          >

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label="Full Name"
                placeholder="Your full name"
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                error={errors.name}
              />
              <FormField
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="03XX-XXXXXXX"
                autoComplete="tel"
                value={values.phone}
                onChange={update("phone")}
                error={errors.phone}
              />
              <FormField
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
              />
              <FormField
                id="subject"
                label="Subject"
                placeholder="Reason for contacting us"
                value={values.subject}
                onChange={update("subject")}
                error={errors.subject}
              />
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Describe your symptoms or question briefly"
                  value={values.message}
                  onChange={(event) => update("message")(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 rounded-lg"
                />
                {errors.message ? (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-primary">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex items-start gap-3 rounded-[16px] border border-primary/15 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--primary)_7%,transparent),color-mix(in_oklab,var(--primary)_2%,transparent))] p-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/20 bg-card text-primary"
                >
                  <ShieldCheck size={17} strokeWidth={1.8} />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Your details stay strictly confidential and are used only to respond to your
                  enquiry. We typically reply within 24 hours on working days.
                </p>
              </div>

              <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                {badges.map((badge) => (
                  <li
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.78rem] font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <badge.icon size={14} strokeWidth={1.9} className="text-primary" />
                    {badge.label}
                  </li>
                ))}
              </ul>

              <Button type="submit" className="mt-7 w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120} className="min-w-0 lg:col-span-5">
          <div className="flex h-full flex-col gap-8">
            <div className="overflow-hidden rounded-[22px] border border-border bg-card p-2 shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <iframe
                src={mapSrc}
                title="Map showing the clinic location at IDC, Saddar, Rawalpindi"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-60 w-full rounded-[16px] border-0 sm:h-64"
              />
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-6 rounded-[22px] border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-lift">
              {details.map((detail) => (
                <li key={detail.label} className="group flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/20 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--primary)_12%,transparent),color-mix(in_oklab,var(--primary)_4%,transparent))] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 group-hover:scale-105 group-hover:border-transparent group-hover:bg-[linear-gradient(140deg,var(--primary),var(--secondary))] group-hover:text-primary-foreground"
                  >
                    <detail.icon size={18} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1.5 block text-base font-medium leading-relaxed text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-base font-medium leading-relaxed text-foreground">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-12 rounded-lg"
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
