import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Treatments } from "@/components/Treatments";
import { TrustBand } from "@/components/TrustBand";
import { MeetGina } from "@/components/MeetGina";
import { Reviews } from "@/components/Reviews";
import { Questions } from "@/components/Questions";
import { QuestionBar } from "@/components/QuestionBar";
import { FindUs } from "@/components/FindUs";
import { Footer } from "@/components/Footer";
import { findUs, practitioner, questions, site, treatmentsList } from "@/lib/content";

/** A full-width hairline between open sections, in the manner of Marsea. */
function Rule() {
  return <hr className="mx-3 border-0 border-t border-ink/15 md:mx-6" />;
}

/** Structured data for search engines: the clinic as a local medical business, plus the FAQ. */
function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#clinic`,
    name: site.legalName,
    url: site.url,
    telephone: site.phone,
    hasMap: findUs.mapUrl,
    email: site.email,
    image: `${site.url}${site.businessImage}`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.town,
      addressRegion: site.address.county,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    areaServed: ["Penrith", "Cumbria", "The Lake District"],
    founder: {
      "@type": "Person",
      name: practitioner.heading.replace("Meet ", ""),
      jobTitle: site.practitioner.role,
    },
    makesOffer: treatmentsList.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: t.label },
      url: `${site.url}${t.href}`,
    })),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Approach />
        <Rule />
        <Treatments />
        <TrustBand />
        <MeetGina />
        <Rule />
        <Reviews />
        <Rule />
        <Questions />
        <QuestionBar />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
