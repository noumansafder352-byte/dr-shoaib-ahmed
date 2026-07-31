import { Link } from "@tanstack/react-router";
import { Menu, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";

import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-shadow duration-300 ease-[var(--ease-brand)]",
        scrolled ? "shadow-header" : "border-b border-border",
      )}
    >
      <TopBar />

      <div
        className={cn(
          "container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-[padding] duration-300 ease-[var(--ease-brand)]",
          scrolled ? "py-3" : "py-4 lg:py-5",
        )}
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${site.shortName} — home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <Stethoscope size={20} strokeWidth={1.7} />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-heading text-base font-semibold sm:text-lg">
              {site.shortName}
            </span>
            <span className="truncate text-xs text-muted-foreground">{site.specialty}</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 lg:gap-8">
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary" }}
                    inactiveProps={{ className: "text-foreground" }}
                    className="link-underline py-1 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Book Appointment</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="animate-fade-in border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-border last:border-b-0">
                <Link
                  to={item.to}
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
            <li className="pt-4 sm:hidden">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
