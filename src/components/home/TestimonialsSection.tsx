import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import { CenteredSection } from "@/components/layout/sections";
import type { Testimonial } from "@/components/shared/cards";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/** Opens the Google Business "write a review" dialog. */
const reviewHref =
  "https://www.google.com/search?hl=en-PK&gl=pk&q=Pro.+Maj+Gen+(r)+Dr.+Shoaib+Ahmed&ludocid=5723396045592689891&lsig=AB86z5Xy0v7g6NlJB2a_g87n3ySL&source=g.page.m.kd._&laa=lu-desktop-review-solicitation#lrd=0x6f21c55ab50ef2b7:0x4f6d96612e6d7ce3,3";

const testimonials: Testimonial[] = [
  {
    name: "Imran Qureshi",
    detail: "Ear treatment",
    image: patient1,
    rating: 5,
    review:
      "Dr. Shoaib Ahmed explained my condition clearly and provided excellent treatment. He was patient, attentive, and answered all my questions with great care. I felt comfortable and confident throughout the consultation. Highly recommended.",
  },
  {
    name: "Ayesha Malik",
    detail: "Throat consultation",
    image: patient2,
    rating: 5,
    review:
      "Professional staff, excellent care, and outstanding results. The doctor was attentive, explained everything clearly, and made me feel comfortable throughout the consultation. Highly recommended for anyone seeking quality medical care.",
  },
  {
    name: "Tariq Mahmood",
    detail: "Sinus treatment",
    image: patient3,
    rating: 5,
    review:
      "I finally found relief from my sinus problems after years of discomfort. The doctor was very professional, listened carefully to my concerns, and provided effective treatment. I can finally breathe comfortably and enjoy a much better quality of life. Highly recommended!",
  },
  {
    name: "Ibrahim Malik",
    detail: "Ear treatment",
    rating: 5,
    review:
      "I visited Dr. Shoaib Ahmed for an ear problem and I’m really satisfied with the treatment. He listened carefully, explained everything clearly, and within a few days I felt a big improvement. Highly recommended for ear-related problems.",
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

      <Reveal delay={120} className="mt-12 flex justify-center">
        <Button asChild className="px-7">
          <a href={reviewHref} target="_blank" rel="noreferrer">
            Write a Review
          </a>
        </Button>
      </Reveal>
    </CenteredSection>
  );
}
