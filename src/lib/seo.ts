import { site } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  /** Route path, used for canonical + og:url (relative — resolved by the crawler). */
  path?: string;
  /** Open Graph type; "website" for landing pages, "profile"/"article" elsewhere. */
  type?: string;
  /** Optional JSON-LD objects rendered as ld+json scripts. */
  jsonLd?: Record<string, unknown>[];
};

/** Builds a consistent head() payload (meta, canonical link, structured data). */
export function seo({ title, description, path = "/", type = "website", jsonLd = [] }: SeoInput) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: site.doctorName },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: path }],
    ...(jsonLd.length
      ? {
          scripts: jsonLd.map((data) => ({
            type: "application/ld+json",
            children: JSON.stringify(data),
          })),
        }
      : {}),
  };
}

/** BreadcrumbList structured data for inner pages. */
export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

/** FAQPage structured data. */
export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
