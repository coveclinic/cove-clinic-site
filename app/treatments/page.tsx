import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuestionBar } from "@/components/QuestionBar";
import { TreatmentsIndex } from "@/components/treatments/TreatmentsIndex";
import { treatmentPages, treatmentSlugs, treatmentsIndex } from "@/lib/treatments";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: treatmentsIndex.title,
  description: treatmentsIndex.description,
  alternates: { canonical: "/treatments" },
  openGraph: {
    title: `${treatmentsIndex.title} | ${site.name}`,
    description: treatmentsIndex.description,
    url: `${site.url}/treatments`,
  },
};

export default function Treatments() {
  const items = treatmentSlugs.map((s) => treatmentPages[s]);
  return (
    <>
      <Header />
      <main>
        <TreatmentsIndex items={items} />
        <QuestionBar />
      </main>
      <Footer />
    </>
  );
}
