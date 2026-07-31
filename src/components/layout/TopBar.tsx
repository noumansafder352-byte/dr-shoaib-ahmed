import { Clock, MapPin, Phone } from "lucide-react";

import { contact } from "@/config/site";

/** Slim top information bar: phone, hours, location. Hidden on small screens. */
export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface lg:block">
      <div className="container-page flex items-center justify-between gap-6 py-2.5 text-sm">
        <ul className="flex items-center gap-7 text-muted-foreground">
          <li>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone size={15} strokeWidth={1.7} className="text-primary" aria-hidden="true" />
              <span>{contact.phone}</span>
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <Clock size={15} strokeWidth={1.7} className="text-primary" aria-hidden="true" />
            <span>{contact.hours}</span>
          </li>
        </ul>
        <p className="inline-flex items-center gap-2 text-muted-foreground">
          <MapPin size={15} strokeWidth={1.7} className="text-primary" aria-hidden="true" />
          <span>{contact.location}</span>
        </p>
      </div>
    </div>
  );
}
