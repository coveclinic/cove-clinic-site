import { approach } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ValueDeck } from "@/components/ValueDeck";

/**
 * Heading pinned on the left, a deck of value cards on the right that builds
 * as you scroll. From lg the left column is sticky at the same line the cards
 * park at, and lets go when the deck does.
 */
export function Approach() {
  return (
    <Section id={approach.id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start">
          <h2
            id={`${approach.id}-heading`}
            className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-ink md:text-[72px]"
          >
            {approach.heading}
          </h2>
          <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.55] text-ink/72 md:mt-8 md:text-[20px]">
            {approach.statement}
          </p>
          <div className="mt-8 md:mt-10">
            <Button href={approach.cta.href} label={approach.cta.label} />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ValueDeck items={approach.values} />
        </div>
      </div>
    </Section>
  );
}
