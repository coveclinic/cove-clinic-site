/**
 * Structured data (schema.org JSON-LD) for every page. One graph: the clinic as a
 * MedicalBusiness, Gina as a Person, each treatment as a MedicalProcedure offered by the
 * clinic, breadcrumbs, and the questions on each page as an FAQPage. Rendered by
 * components/JsonLd.tsx.
 */
import { about, findUs, footer, practitioner, questions, site } from "@/lib/content";
import { treatmentPages, treatmentSlugs, treatmentsIndex, type TreatmentPage } from "@/lib/treatments";

const CLINIC_ID = `${site.url}/#clinic`;
const PERSON_ID = `${site.url}/#gina`;

/** The clinic's position, as used for the drawn map (Google's placement of the listing). */
const GEO = { latitude: 54.66433, longitude: -2.75286 };

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const clinicSchema = {
  "@type": "MedicalBusiness",
  "@id": CLINIC_ID,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}${site.businessImage}`,
  logo: `${site.url}/icon-512.png`,
  description: site.description,
  priceRange: "££",
  currenciesAccepted: "GBP",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.town,
    addressRegion: site.address.county,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", ...GEO },
  hasMap: findUs.mapUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAYS,
      opens: "08:00",
      closes: "19:00",
    },
  ],
  areaServed: ["Penrith", "Cumbria", "The Lake District"],
  sameAs: [footer.instagram.href],
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  makesOffer: treatmentSlugs.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@id": `${site.url}/treatments/${s}#procedure` },
  })),
};

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: practitioner.heading.replace("Meet ", ""),
  jobTitle: site.practitioner.role,
  description: about.description,
  image: `${site.url}${about.masthead.photo.src}`,
  url: `${site.url}/about-us`,
  worksFor: { "@id": CLINIC_ID },
};

/** The first price in a facts row such as "£75, every facial" or "From £125, or £300 for a course of 3". */
function priceOf(t: TreatmentPage): number | null {
  const row = t.facts.find((f) => f.label === "Price");
  const m = row?.value.match(/£(\d+)/);
  return m ? Number(m[1]) : null;
}

export function procedureSchema(t: TreatmentPage) {
  const url = `${site.url}/treatments/${t.slug}`;
  const price = priceOf(t);
  return {
    "@type": "MedicalProcedure",
    "@id": `${url}#procedure`,
    name: t.name,
    alternateName: t.title,
    description: t.description,
    url,
    image: `${site.url}${t.photo.src}`,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: { "@id": CLINIC_ID },
    performer: { "@id": PERSON_ID },
    areaServed: ["Penrith", "Cumbria"],
    ...(price !== null
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: "GBP",
            url,
            availability: "https://schema.org/InStock",
            offeredBy: { "@id": CLINIC_ID },
          },
        }
      : {}),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `${site.url}${b.path}`,
    })),
  };
}

/** Every page's graph starts with the clinic and Gina. */
export const baseGraph = [clinicSchema, personSchema];

export const homeGraph = [...baseGraph, faqSchema(questions.items)];

export const aboutGraph = [
  ...baseGraph,
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: about.title, path: "/about-us" },
  ]),
];

export const treatmentsIndexGraph = [
  ...baseGraph,
  {
    "@type": "ItemList",
    name: treatmentsIndex.title,
    itemListElement: treatmentSlugs.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: treatmentPages[s].name,
      url: `${site.url}/treatments/${s}`,
    })),
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
  ]),
];

export function treatmentGraph(t: TreatmentPage) {
  return [
    ...baseGraph,
    procedureSchema(t),
    faqSchema(t.questions),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Treatments", path: "/treatments" },
      { name: t.name, path: `/treatments/${t.slug}` },
    ]),
  ];
}
