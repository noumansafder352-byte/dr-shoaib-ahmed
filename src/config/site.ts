/**
 * Central site configuration. Shared across layout, SEO and global components.
 */

export const site = {
  doctorName: "Prof. Dr. Maj. Gen. (R) Shoaib Ahmed",
  shortName: "Dr. Shoaib Ahmed",
  specialty: "ENT Specialist",
  city: "Rawalpindi, Pakistan",
  url: "https://example.com",
  designedByPrefix: "Designed & Developed by",
  designedByBrand: "Nexen Strategy",
} as const;

export const contact = {
  phone: "0335-0330019",
  phoneHref: "tel:+923350330019",
  email: "official.drshoaibahmed@gmail.com",
  emailHref: "mailto:official.drshoaibahmed@gmail.com",

  hours: "Monday – Friday | 4:00 PM – 6:30 PM",
  hoursShort: "Mon – Fri | 4:00 – 6:30 PM",
  address: "2nd Floor IDC, Saddar, Rawalpindi",
  mapHref: "https://maps.google.com/?q=IDC+Saddar+Rawalpindi",
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

/** ENT care areas used in the footer services column. */
export const footerServices = [
  "Ear Care",
  "Nose Care",
  "Throat Care",
  "Cochlear Implant",
  "Head & Neck Surgery",
] as const;

