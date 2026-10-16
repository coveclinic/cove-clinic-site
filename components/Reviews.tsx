import { reviews } from "@/lib/content";
import { Section } from "@/components/Section";
import { QuoteSlider } from "@/components/QuoteSlider";

export function Reviews() {
  return (
    <Section id={reviews.id} className="md:pt-8">
      <h2
        id={`${reviews.id}-heading`}
        className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-walnut md:text-[72px]"
      >
        {reviews.heading}
      </h2>
      <div className="mt-10 md:mt-16">
        <QuoteSlider items={reviews.items} source={reviews.source} labels={reviews.labels} />
      </div>
    </Section>
  );
}
