import { Clock, MapPin, Phone } from "lucide-react";

import { contact } from "@/config/site";

/**
 * Slim top information bar: location (left), hours (center), phone (right).
 * On mobile it collapses to a compact two-item row so it stays readable.
 */
export function TopBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-page grid grid-cols-1 items-center gap-1.5 py-2 text-[0.8125rem] sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:py-2.5 lg:text-sm">
        <p className="flex min-w-0 items-center justify-center gap-2 text-muted-foreground sm:justify-start">
          <MapPin
            size={15}
            strokeWidth={1.8}
            className="shrink-0 text-primary"
            aria-hidden="true"
          />
          <a href={contact.mapHref} target="_blank" rel="noreferrer" className="truncate hover:text-primary transition-colors">
            {contact.address}
          </a>
        </p>

        <p className="hidden min-w-0 items-center justify-center gap-2 text-muted-foreground lg:flex">
          <Clock size={15} strokeWidth={1.8} className="shrink-0 text-primary" aria-hidden="true" />
          <span className="truncate">{contact.hours}</span>
        </p>

        <p className="flex min-w-0 items-center justify-center gap-2 text-muted-foreground sm:justify-end">
          <Clock
            size={15}
            strokeWidth={1.8}
            className="shrink-0 text-primary lg:hidden"
            aria-hidden="true"
          />
          <span className="truncate lg:hidden">{contact.hoursShort}</span>
          <Phone
            size={15}
            strokeWidth={1.8}
            className="ml-3 hidden shrink-0 text-primary sm:inline lg:ml-0"
            aria-hidden="true"
          />
          <a
            href={contact.phoneHref}
            className="hidden font-medium transition-colors hover:text-primary sm:inline"
          >
            {contact.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
