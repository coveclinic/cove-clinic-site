import { questions } from "@/lib/content";
import { Section } from "@/components/Section";
import { Accordion } from "@/components/Accordion";

/**
 * Heading and one line on the left, the questions on the right as roomy
 * hairline rows set in the display face, each opening to its answer.
 */
export function Questions() {
  return (
    <Section id={questions.id} className="md:pt-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start xl:col-span-4">
          <h2
            id={`${questions.id}-heading`}
            className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-cocoa md:text-[72px]"
          >
            {questions.heading}
          </h2>
          <p className="mt-6 max-w-[30ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">
            {questions.intro}
          </p>
        </div>
        <div className="text-ink lg:col-span-7 xl:col-span-8">
          <Accordion
            items={questions.items.map((q) => ({ title: q.q, body: q.a }))}
            defaultOpen={null}
            titleClassName="font-display text-cocoa text-[24px] font-normal leading-[1.15] md:text-[28px]"
          />
        </div>
      </div>
    </Section>
  );
}
