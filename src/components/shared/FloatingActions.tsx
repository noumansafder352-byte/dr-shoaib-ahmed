import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=923350330019";

/** Fixed bottom-right stack: scroll-to-top (conditional) above a WhatsApp button. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        aria-label="Scroll back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`pointer-events-auto grid size-12 place-items-center rounded-full border border-white/20 bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--color-primary)_60%,transparent)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:scale-105 hover:bg-secondary hover:shadow-[0_18px_40px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:size-[52px] ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ChevronUp size={22} strokeWidth={2.2} aria-hidden="true" />
      </button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto grid size-12 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_42px_-10px_rgba(37,211,102,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:size-[52px]"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          aria-hidden="true"
          className="absolute -z-10 size-12 rounded-full opacity-60 motion-safe:animate-[pulse_3.5s_cubic-bezier(0.4,0,0.6,1)_infinite] sm:size-[52px]"
          style={{ boxShadow: "0 0 0 6px rgba(37,211,102,0.25)" }}
        />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 sm:size-7"
          aria-hidden="true"
        >
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.15-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.32 5.07 4.53 2.98 1.2 3.31 1.05 3.91 1 .6-.06 1.94-.79 2.21-1.56.27-.77.27-1.43.2-1.56-.08-.13-.28-.2-.58-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.02c0-5.19 4.23-9.41 9.42-9.41 2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.19-4.23 9.42-9.42 9.42zM20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.34-1.66a11.85 11.85 0 0 0 5.71 1.45h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44z" />
        </svg>
      </a>
    </div>
  );
}
