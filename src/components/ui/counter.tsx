import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Numeric target; omit for non-numeric values like "Advanced". */
  value?: number;
  /** Text rendered when the value is not a number. */
  text?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Respects reduced-motion and falls back to static text when `text` is given.
 */
export function Counter({
  value,
  text,
  suffix = "",
  durationMs = 1600,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(typeof value === "number" ? 0 : 0);
  const started = useRef(false);

  useEffect(() => {
    if (typeof value !== "number") return;
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduced) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {typeof value === "number" ? `${display}${suffix}` : text}
    </span>
  );
}
