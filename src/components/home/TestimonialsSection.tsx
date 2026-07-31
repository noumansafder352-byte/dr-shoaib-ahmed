import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import { CenteredSection } from "@/components/layout/sections";
import type { Testimonial } from "@/components/shared/cards";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

const testimonials: Testimonial[] = [
  {
    name: "Imran Qureshi",
    detail: "Ear treatment",
    image: patient1,
    rating: 5,
    review:
      "Dr. Shoaib Ahmed explained my condition clearly and provided excellent treatment. Highly recommended.",
  },
  {
    name: "Ayesha Malik",
    detail: "Throat consultation",
    image: patient2,
    rating: 5,
    review: "Professional staff, excellent care, and outstanding results.",
  },
  {
    name: "Tariq Mahmood",
    detail: "Sinus treatment",
    image: patient3,
    rating: 5,
    review: "I finally found relief from my sinus problems after years of discomfort.",
  },
];

/** Patient testimonials in a swipeable slider. */
export function TestimonialsSection() {
  return (
    <CenteredSection
      id="testimonials"
      label="Testimonials"
      title="What Our Patients Say"
      description="Experiences shared by patients treated for ear, nose and throat conditions at our Rawalpindi clinic."
    >
      <TestimonialSlider testimonials={testimonials} />
    </CenteredSection>
  );
}
