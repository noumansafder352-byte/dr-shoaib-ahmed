import { site } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

/** Builds a consistent meta array for a route's head(). */
export function seo({ title, description }: SeoInput) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:site_name", content: site.doctorName },
    ],
  };
}
