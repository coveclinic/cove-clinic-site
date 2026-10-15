import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { AboutMasthead } from "@/components/about/AboutMasthead";
import { Letter } from "@/components/about/Letter";
import { Training } from "@/components/about/Training";
import { Steps } from "@/components/about/Steps";
import { QuestionBar } from "@/components/QuestionBar";
import { Footer } from "@/components/Footer";
import { about, site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { aboutGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: `${about.title} | ${site.name}`,
    description: about.description,
    url: `${site.url}/about-us`,
  },
};

/** A full-width hairline between open sections, as on the homepage. */
function Rule() {
  return <hr className="mx-3 border-0 border-t border-ink/15 md:mx-6" />;
}

export default function AboutUs() {
  return (
    <>
      <JsonLd graph={aboutGraph} />
      <Header />
      <main>
        <AboutMasthead />
        <Letter />
        <Training />
        <Rule />
        <Steps />
        <QuestionBar />
      </main>
      <Footer />
    </>
  );
}
