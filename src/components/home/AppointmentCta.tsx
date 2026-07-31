import { CtaBanner } from "@/components/shared/CtaBanner";

/** Final conversion banner on the home page. */
export function AppointmentCta() {
  return (
    <CtaBanner
      tone="primary"
      title="Your Health Deserves Expert ENT Care"
      description="Don't let ear, nose, or throat problems affect your quality of life. Book your consultation today and receive personalized care from one of Pakistan's experienced ENT specialists."
      primary={{ label: "Book Appointment", to: "/contact" }}
      secondary={{ label: "Contact Us", to: "/contact" }}
    />
  );
}
