import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/button";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

/** Sticky white header: logo left, nav center, CTA right. Shrinks on scroll. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ease-[var(--ease-brand)]",
        scrolled
          ? "bg-background/92 shadow-header"
          : "border-b border-border/70 bg-background/85",
      )}
    >
      <TopBar />

      <div
        className={cn(
          "container-page flex items-center justify-between gap-4 transition-[padding] duration-300 ease-[var(--ease-brand)]",
          scrolled ? "py-2.5" : "py-4 lg:py-5",
        )}
      >
        <Logo compact={scrolled} />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary after:scale-x-100" }}
                  inactiveProps={{ className: "text-foreground" }}
                  className="relative py-1.5 text-sm font-medium transition-colors duration-300 hover:text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-[var(--ease-brand)] hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Book Appointment</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu — slides down smoothly */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-border bg-background transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-brand)] lg:hidden",
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation" className="min-h-0">
          <ul className="container-page flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-border last:border-b-0">
                <Link
                  to={item.to}
                  tabIndex={open ? 0 : -1}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  inactiveProps={{ className: "text-foreground" }}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4 sm:hidden">
              <Button asChild className="w-full">
                <Link to="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
