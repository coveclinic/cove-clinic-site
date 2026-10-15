import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentPage } from "@/components/treatment/TreatmentPage";
import { treatmentPages, treatmentSlugs } from "@/lib/treatments";
import { site } from "@/lib/content";

type Params = { treatment: string };

/** Only the treatment pages that have been written exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return treatmentSlugs.map((treatment) => ({ treatment }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { treatment } = await params;
  const t = treatmentPages[treatment];
  if (!t) return {};
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/treatments/${t.slug}` },
    openGraph: {
      title: `${t.title} | ${site.name}`,
      description: t.description,
      url: `${site.url}/treatments/${t.slug}`,
    },
  };
}

export default async function Treatment({ params }: { params: Promise<Params> }) {
  const { treatment } = await params;
  const t = treatmentPages[treatment];
  if (!t) notFound();
  return <TreatmentPage t={t} />;
}
