import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation style. */
  variant?: "fade" | "up" | "scale";
  /** Stagger delay in ms. */
  delay?: number;
};

const variantClass = {
  fade: "animate-fade-in",
  up: "animate-slide-up",
  scale: "animate-scale-in",
} as const;

/** Reveals children with a subtle animation the first time they scroll into view. */
export function Reveal({ children, className, variant = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(shown ? variantClass[variant] : "opacity-0", className)}
    >
      {children}
    </div>
  );
}
