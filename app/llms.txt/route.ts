import { about, findUs, site } from "@/lib/content";
import { treatmentPages, treatmentSlugs, treatmentsIndex } from "@/lib/treatments";

export const dynamic = "force-static";

/**
 * /llms.txt: a plain-text guide to the site for AI assistants, in the llms.txt convention
 * (a title, a one-line summary, then sections of links with one line each). Built from the
 * same content as the pages, so it never drifts from them.
 */
export function GET() {
  const hours = site.hours.map((h) => `${h.days}, ${h.time}`).join("; ");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName} is a nurse-led aesthetic clinic at ${site.address.street}, ${site.address.town}, ${site.address.county} ${site.address.postcode}, run by ${site.practitioner.name}, a ${site.practitioner.role.toLowerCase()}. Open ${hours}; treatments are by appointment. Phone ${site.phone}, email ${site.email}. Online booking: ${site.bookingUrl}`,
    "",
    "## Pages",
    "",
    `- [Home](${site.url}/): ${site.description}`,
    `- [About Gina](${site.url}/about-us): ${about.description}`,
    `- [Treatments](${site.url}/treatments): ${treatmentsIndex.description}`,
    "",
    "## Treatments",
    "",
    ...treatmentSlugs.map((s) => {
      const t = treatmentPages[s];
      const facts = t.facts.map((f) => `${f.label}: ${f.value}`).join("; ");
      return `- [${t.name}](${site.url}/treatments/${s}): ${t.summary} ${facts}.`;
    }),
    "",
    "## Visiting",
    "",
    `- ${findUs.body} ${findUs.parking}`,
    `- [Directions](${findUs.cta.href})`,
    "",
    "## Optional",
    "",
    `- [Privacy](${site.url}/privacy)`,
    `- [Terms](${site.url}/terms)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
