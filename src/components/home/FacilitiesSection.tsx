import facilityConsultation from "@/assets/facility-consultation.jpg";
import facilityEquipment from "@/assets/facility-equipment.jpg";
import facilityReception from "@/assets/facility-reception.jpg";
import facilityWaiting from "@/assets/facility-waiting.jpg";
import { CenteredSection } from "@/components/layout/sections";
import { Reveal } from "@/components/ui/reveal";

const facilities = [
  { src: facilityReception, title: "Reception", alt: "Clinic reception desk with light wood panelling" },
  {
    src: facilityConsultation,
    title: "Consultation Room",
    alt: "ENT consultation room with desk, patient chairs and anatomical ear model",
  },
  {
    src: facilityEquipment,
    title: "ENT Equipment",
    alt: "Sterile tray of ENT instruments with an examination microscope behind",
  },
  {
    src: facilityWaiting,
    title: "Patient Waiting Area",
    alt: "Comfortable clinic waiting area with upholstered chairs beside tall windows",
  },
];

/** Clinic showcase — four large image cards with overlay titles. */
export function FacilitiesSection() {
  return (
    <CenteredSection
      id="our-facilities"
      label="Our Clinic"
      title="A Modern & Comfortable Healthcare Environment"
      description="Our clinic is designed to provide a welcoming, hygienic, and patient-friendly environment equipped with modern facilities to ensure a comfortable healthcare experience."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {facilities.map((facility, index) => (
          <Reveal key={facility.title} delay={index * 100} className="h-full">
            <li className="group relative h-full overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-500 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-lift">
              <img
                src={facility.src}
                alt={facility.alt}
                loading="lazy"
                width={960}
                height={720}
                className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/80 to-transparent"
              />
              <h3 className="absolute inset-x-0 bottom-0 p-6 font-heading text-lg font-semibold text-primary-foreground sm:text-xl">
                {facility.title}
              </h3>
            </li>
          </Reveal>
        ))}
      </ul>
    </CenteredSection>
  );
}
