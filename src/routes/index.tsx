import { createFileRoute } from "@tanstack/react-router";

import { HomeHero } from "@/components/home/HomeHero";
import { MeetDoctorSection } from "@/components/home/MeetDoctorSection";
import { StatsSection } from "@/components/home/StatsSection";
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
    </>
  );
}
