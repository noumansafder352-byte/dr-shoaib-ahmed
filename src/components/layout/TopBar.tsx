import { Facebook, Linkedin, MapPin, Phone, Youtube } from "lucide-react";

import { contact } from "@/config/site";

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

/**
 * Slim top information bar: phone + location on the left, socials on the right.
 * Fully transparent so it reads as one unit with the main navigation.
 */
export function TopBar() {
  return (
    <div className="border-b border-border/40">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 py-2 text-[0.8125rem] lg:py-2.5 lg:text-sm">
        <div className="flex min-w-0 flex-1 items-center gap-x-6 gap-y-1">
          <a
            href={contact.phoneHref}
            className="flex min-w-0 items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone
              size={15}
              strokeWidth={1.8}
              className="shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="truncate">{contact.phone}</span>
          </a>

          <a
            href={contact.mapHref}
            target="_blank"
            rel="noreferrer"
            className="hidden min-w-0 items-center gap-2 text-muted-foreground transition-colors hover:text-primary sm:flex"
          >
            <MapPin
              size={15}
              strokeWidth={1.8}
              className="shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="truncate">{contact.address}</span>
          </a>
        </div>

        <ul className="flex shrink-0 items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-8 place-items-center rounded-full border border-primary/40 bg-white text-primary shadow-soft transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft"
              >
                <Icon size={14} strokeWidth={1.9} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
