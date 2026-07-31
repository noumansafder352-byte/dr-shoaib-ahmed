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

export type NavItem = {
  label: string;
  to: "/" | "/about" | "/services" | "/contact";
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];
