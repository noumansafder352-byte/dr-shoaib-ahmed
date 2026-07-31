import { Link } from "@tanstack/react-router";
import { Facebook, Clock, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "./Logo";
import { contact, footerServices, navItems, site } from "@/config/site";

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

/** Dark premium footer: four columns + bottom legal bar. */
export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
        <div className="min-w-0">
          <div className="[&_span]:text-footer-foreground [&_.text-muted-foreground]:text-footer-muted">
            <Logo />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-footer-muted">
            Specialist care for ear, nose, throat, head and neck conditions in Rawalpindi —
            combining decades of surgical experience with attentive, patient-focused treatment.
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-white/15 text-footer-muted transition-colors duration-300 ease-[var(--ease-brand)] hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-links">
          <h2
            id="footer-links"
            className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground"
          >
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-footer-muted transition-colors duration-300 hover:text-primary"
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
            className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground"
          >
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {footerServices.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="text-sm text-footer-muted transition-colors duration-300 hover:text-primary"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-footer-foreground">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-footer-muted">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <a href={contact.mapHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                {contact.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <a href={contact.phoneHref} className="transition-colors hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <a href={contact.emailHref} className="break-all transition-colors hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-footer-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.doctorName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <span>{site.designedBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
