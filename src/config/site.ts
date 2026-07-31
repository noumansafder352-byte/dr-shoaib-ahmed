/**
 * Central site configuration. Content-neutral foundation values only —
 * page copy arrives later and should live in src/content/*.
 */

export const site = {
  doctorName: "Prof. Dr. Maj. Gen. (R) Shoaib Ahmed",
  shortName: "Dr. Shoaib Ahmed",
  specialty: "ENT Specialist",
  city: "Rawalpindi, Pakistan",
  url: "https://example.com",
} as const;

/** Placeholder contact details — replaced with finalized content later. */
export const contact = {
  phone: "+92 51 000 0000",
  phoneHref: "tel:+92510000000",
  hours: "Mon – Sat, 5:00 PM – 9:00 PM",
  location: "Rawalpindi, Pakistan",
} as const;

export type NavItem = {
  label: string;
  to: "/" | "/about" | "/services" | "/contact";
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];
