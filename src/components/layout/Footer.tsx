import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import { contact, navItems, site } from "@/config/site";

/**
 * Dark professional footer: four columns + copyright bar.
 * Service links are intentionally generic until final content is supplied.
 */
export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="min-w-0">
          <h2 className="font-heading text-lg font-semibold text-footer-foreground">
            {site.shortName}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-footer-muted">
            {site.specialty} — {site.city}
          </p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2
            id="footer-links"
            className="font-heading text-sm font-semibold uppercase tracking-wider text-footer-foreground"
          >
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-footer-muted transition-colors hover:text-footer-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2
            id="footer-services"
            className="font-heading text-sm font-semibold uppercase tracking-wider text-footer-foreground"
          >
            Services
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                to="/services"
                className="text-sm text-footer-muted transition-colors hover:text-footer-foreground"
              >
                All ENT Services
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-footer-foreground">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-footer-muted">
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex items-start gap-2.5 transition-colors hover:text-footer-foreground"
              >
                <Phone size={16} strokeWidth={1.7} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} strokeWidth={1.7} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} strokeWidth={1.7} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-footer-muted">
          © {new Date().getFullYear()} {site.doctorName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
