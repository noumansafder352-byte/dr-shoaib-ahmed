import { TestimonialCard, type Testimonial } from "./cards";
import { cn } from "@/lib/utils";

/** Seconds each card takes to scroll past — lower is faster. */
const SECONDS_PER_CARD = 8;

/**
 * Testimonial marquee: 4 cards on wide screens, 3 on desktop, 2 on tablet, 1 on mobile.
 * Scrolls continuously to the left in a seamless loop — the set is rendered
 * twice so the first card follows straight after the last. Pauses on hover
 * or focus, and becomes a manually scrollable row for reduced-motion users.
 */
export function TestimonialSlider({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) {
  // Each item carries its trailing gap as padding so the two sets are exactly
  // half the track, keeping the loop seamless.
  const item =
    "shrink-0 pr-6 w-[calc(100cqw+1.5rem)] sm:w-[calc((100cqw+1.5rem)/2)] lg:w-[calc((100cqw+1.5rem)/3)] xl:w-[calc((100cqw+1.5rem)/4)]";

  return (
    <div
      className={cn(
        "relative [container-type:inline-size] overflow-hidden motion-reduce:overflow-x-auto",
        className,
      )}
    >
      <ul
        className="flex w-max animate-[marquee_linear_infinite] pb-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${testimonials.length * SECONDS_PER_CARD}s` }}
      >
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className={item}>
            <TestimonialCard {...testimonial} />
          </li>
        ))}
        {testimonials.map((testimonial) => (
          <li key={`${testimonial.name}-copy`} className={item} aria-hidden="true">
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
}
