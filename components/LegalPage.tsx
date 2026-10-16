import type { legal } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

type Doc = (typeof legal)[keyof typeof legal];

/** Privacy and terms: one plain column of prose under question-free headings. */
export function LegalPage({ doc, id }: { doc: Doc; id: string }) {
  return (
    <>
      <Header />
      <main>
        <Section id={id} className="lg:pt-12">
          <div className="max-w-[66ch]">
            <h1
              id={`${id}-heading`}
              className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] text-walnut md:text-[64px]"
            >
              {doc.heading}
            </h1>
            <p className="mt-4 text-[14px] text-stone">{doc.updated}</p>
            <p className="mt-6 text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">{doc.intro}</p>
            {doc.sections.map((s) => (
              <section key={s.heading} aria-label={s.heading} className="mt-10 md:mt-12">
                <h2 className="font-display text-[26px] font-normal leading-[1.1] text-walnut md:text-[30px]">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[17px] leading-[1.65] text-ink/72 md:text-[18px]">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
