import { about } from "@/lib/content";
import { Section } from "@/components/Section";
import { ValueDeck } from "@/components/ValueDeck";

/** The three qualifications as the stacking deck from the homepage, heading pinned on the left. */
export function Training() {
  const t = about.training;
  return (
    <Section id={t.id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start">
          <h2
            id={`${t.id}-heading`}
            className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-cocoa md:text-[72px]"
          >
            {t.heading}
          </h2>
          <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.55] text-ink/72 md:mt-8 md:text-[20px]">
            {t.intro}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ValueDeck items={t.items} />
        </div>
      </div>
    </Section>
  );
}
