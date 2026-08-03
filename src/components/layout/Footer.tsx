import { Link } from "@tanstack/react-router";
import { Facebook, Clock, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "./Logo";
import { contact, footerServices, navItems, site } from "@/config/site";

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const linkClass =
  "group relative inline-flex items-center gap-2.5 text-sm text-footer-muted transition-colors duration-300 ease-[var(--ease-brand)] hover:text-primary";

/** Small brand-red dot that scales and glows on hover. */
function LinkMarker() {
  return (
    <span
      aria-hidden="true"
      className="size-1.5 shrink-0 rounded-full bg-primary transition-all duration-300 ease-[var(--ease-brand)] group-hover:scale-150 group-hover:shadow-[0_0_8px_2px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]"
    />
  );
}

/** Premium dark footer: logo + description, quick links, services, contact, legal bar. */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-footer text-footer-foreground">
      {/* Subtle medical-inspired texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_8%_-10%,color-mix(in_oklab,white_7%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_100%_at_100%_0%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -left-24 top-[-8rem] size-[26rem] rounded-full border border-white/[0.06]" />
        <div className="absolute -right-32 bottom-[-10rem] size-[30rem] rounded-full border border-white/[0.06]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="container-page grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.9fr_1.5fr] lg:gap-12 lg:py-24">
        {/* Clinic */}
        <div className="min-w-0">
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <Logo />
          </div>

          <p className="mt-6 max-w-sm text-sm leading-[1.85] text-footer-muted">
            Specialist care for ear, nose, throat, head and neck conditions in Rawalpindi —
            combining decades of surgical experience with attentive, patient-focused treatment.
          </p>
          <ul className="mt-7 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-footer-muted transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-labelledby="footer-links" className="min-w-0">
          <h2
            id="footer-links"
            className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground"
          >
            Quick Links
          </h2>
          <span aria-hidden="true" className="mt-4 block h-px w-10 bg-primary" />
          <ul className="mt-5 space-y-3.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  <LinkMarker />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-labelledby="footer-services" className="min-w-0">
          <h2
            id="footer-services"
            className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground"
          >
            Our Services
          </h2>
          <span aria-hidden="true" className="mt-4 block h-px w-10 bg-primary" />
          <ul className="mt-5 space-y-3.5">
            {footerServices.map((service) => (
              <li key={service}>
                <Link to="/services" className={linkClass}>
                  <LinkMarker />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="min-w-0">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground">
            Contact Information
          </h2>
          <span aria-hidden="true" className="mt-4 block h-px w-10 bg-primary" />
          <ul className="mt-6 space-y-5 text-sm text-footer-muted">
            {[
              {
                icon: MapPin,
                label: contact.address,
                href: contact.mapHref,
                external: true,
              },
              { icon: Phone, label: contact.phone, href: contact.phoneHref },
              { icon: Mail, label: contact.email, href: contact.emailHref },
              { icon: Clock, label: contact.hours },
            ].map(({ icon: Icon, label, href, external }) => {
              const content = (
                <span className="block break-words leading-relaxed transition-colors duration-300 group-hover:text-primary">
                  {label}
                </span>
              );
              return (
                <li key={label} className="group flex min-w-0 items-center gap-3 sm:gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary shadow-soft transition-all duration-300 ease-[var(--ease-brand)] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="min-w-0"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-7 text-xs text-footer-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.doctorName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>
              {site.designedByPrefix}{" "}
              <span className="group cursor-default font-semibold text-primary transition-all duration-300 hover:text-primary/80 hover:underline hover:decoration-primary/60 hover:underline-offset-4">
                {site.designedByBrand}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
