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
import { JsonLd } from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";

/** A full-width hairline between open sections, in the manner of Marsea. */
function Rule() {
  return <hr className="mx-3 border-0 border-t border-ink/15 md:mx-6" />;
}

export default function Home() {
  return (
    <>
      <JsonLd graph={homeGraph} />
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
