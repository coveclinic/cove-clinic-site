import { about } from "@/lib/content";
import { Section } from "@/components/Section";

/**
 * How a visit works. A real sequence, so the numbers are earned: small raised
 * walnut numerals beside each step, as on the treatments list.
 */
export function Steps() {
  const s = about.steps;
  return (
    <Section id={s.id} className="md:pt-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start xl:col-span-4">
          <h2
            id={`${s.id}-heading`}
            className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-walnut md:text-[72px]"
          >
            {s.heading}
          </h2>
          <p className="mt-6 max-w-[30ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">
            {s.intro}
          </p>
        </div>
        <ol className="border-t border-ink/15 text-ink lg:col-span-7 xl:col-span-8">
          {s.items.map((step, i) => (
            <li key={step.title} className="flex gap-5 border-b border-ink/15 py-7 md:gap-8 md:py-9">
              <span
                aria-hidden="true"
                className="w-5 shrink-0 pt-2 font-sans text-[14px] tabular-nums text-walnut md:pt-3"
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-walnut text-[28px] font-normal leading-[1.1] md:text-[34px]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
