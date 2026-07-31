import { createFileRoute } from "@tanstack/react-router";

import { AppointmentCta } from "@/components/home/AppointmentCta";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeHero } from "@/components/home/HomeHero";
import { MeetDoctorSection } from "@/components/home/MeetDoctorSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TreatmentProcess } from "@/components/home/TreatmentProcess";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "ENT Specialist Rawalpindi | Prof. Dr. Shoaib Ahmed",
      description:
        "Prof. Dr. Maj. Gen. (R) Shoaib Ahmed — senior ENT specialist in Rawalpindi with 30+ years of experience in ear, nose, throat and cochlear implant surgery. Book an appointment.",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <MeetDoctorSection />
      <WhyChooseSection />
      <StatsSection />
      <ServicesOverview />
      <TreatmentProcess />
      <TestimonialsSection />
      <FaqSection />
      <AppointmentCta />
    </>
  );
}
