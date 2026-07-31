import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: ReactNode };

/**
 * Accessible FAQ accordion: only one item open at a time, smooth height
 * animation, keyboard operable via native buttons.
 */
export function FaqAccordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  /** Index open on mount, or null for all closed. */
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-xl border bg-card shadow-soft transition-colors duration-300 ease-[var(--ease-brand)]",
              isOpen ? "border-primary/30" : "border-border",
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold transition-colors duration-300 hover:text-primary sm:px-7 sm:text-lg"
              >
                <span className="min-w-0">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ease-[var(--ease-brand)]",
                    isOpen
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface text-primary",
                  )}
                >
                  {isOpen ? <Minus size={16} strokeWidth={2.2} /> : <Plus size={16} strokeWidth={2.2} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-brand)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-6 pb-6 text-base leading-relaxed text-muted-foreground sm:px-7">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
