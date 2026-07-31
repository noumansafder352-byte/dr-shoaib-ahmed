import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { TestimonialCard, type Testimonial } from "./cards";
import { cn } from "@/lib/utils";

/**
 * Testimonial slider: 3 cards on desktop, 2 on tablet, 1 on mobile.
 * Uses native scroll-snap so it stays accessible and touch friendly.
 */
export function TestimonialSlider({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollBy = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth / 1.05), behavior: "smooth" });
  };

  const arrow =
    "grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all duration-300 ease-[var(--ease-brand)] hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-foreground";

  return (
    <div className={cn("relative", className)}>
      <ul
        ref={trackRef}
        className="-mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 lg:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.name}
            className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]"
          >
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          className={cn(arrow, "cursor-pointer")}
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={cn(arrow, "cursor-pointer")}
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Next testimonials"
        >
          <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
