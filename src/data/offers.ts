// Source of truth for LogicDriveX offers
// This file is intentionally factual and non-marketing.
// No fake claims. No testimonials. No metrics.

export type OfferID = "basic" | "standard" | "premium";

export interface Offer {
  id: OfferID;
  slug: string;
  name: string;

  // Programming languages & technologies actually used
  technologies: string[];

  // What the client will receive (real deliverables)
  deliverables: string[];

  // Scope boundaries (important for professional clarity)
  includes: string[];
  excludes: string[];
}

export const offers: Offer[] = [
  {
    id: "basic",
    slug: "basic",
    name: "Basic — Starter Landing",

    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "HTML (static pages)",
      "Web3Forms (contact form)"
    ],

    deliverables: [
      "Main landing page with 3 offer cards",
      "One dedicated landing page for the Basic offer",
      "Working request-quote form (Web3Forms)",
      "Clean static build ready for deployment"
    ],

    includes: [
      "Static pages only (no backend)",
      "One language (AR or EN)",
      "Clear scope and structure",
      "Basic SEO meta tags"
    ],

    excludes: [
      "Multilingual support",
      "Analytics or tracking",
      "Payment integration",
      "Content writing or copy generation"
    ]
  },

  {
    id: "standard",
    slug: "standard",
    name: "Standard — Conversion Landing",

    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Structured SEO (meta + OG)",
      "Web3Forms (enhanced UX)"
    ],

    deliverables: [
      "Main landing page with 3 offer cards",
      "Dedicated landing page for the Standard offer",
      "Improved conversion-oriented page structure",
      "Request-quote page with preselected offer",
      "Thank-you page after form submission"
    ],

    includes: [
      "One language (AR or EN)",
      "Clear conversion flow",
      "SEO-ready head configuration",
      "Reusable layout structure"
    ],

    excludes: [
      "Testimonials or fake social proof",
      "Analytics dashboards",
      "Multilingual system",
      "Backend services"
    ]
  },

  {
    id: "premium",
    slug: "premium",
    name: "Premium — Enterprise Landing System",

    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Reusable section system",
      "Optional AR/EN structure",
      "Web3Forms (enterprise-ready forms)"
    ],

    deliverables: [
      "Main landing page with 3 offer cards",
      "Dedicated landing page for the Premium offer",
      "Enterprise-grade page structure",
      "Request-quote system with detailed fields",
      "Deployment notes and environment setup"
    ],

    includes: [
      "Optional bilingual structure (AR/EN)",
      "Strict scope definition",
      "Reusable Astro sections",
      "Production-ready structure"
    ],

    excludes: [
      "Marketing guarantees",
      "Traffic or conversion promises",
      "Paid integrations unless specified",
      "Third-party analytics by default"
    ]
  }
];

export function getOfferById(id: OfferID): Offer | undefined {
  return offers.find(o => o.id === id);
}
