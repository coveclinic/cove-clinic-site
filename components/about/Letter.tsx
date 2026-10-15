import { about } from "@/lib/content";

/**
 * Gina's own words on a clay card, set like a letter: the heading, then the
 * paragraphs running the full width of the card, then the sign-off.
 */
export function Letter() {
  const l = about.letter;
  return (
    <section id={l.id} aria-labelledby={`${l.id}-heading`} className="px-3 md:px-6">
      <div className="mx-auto max-w-[1392px] rounded-card bg-clay px-7 py-14 text-ink md:px-16 md:py-16 lg:px-[88px] lg:py-20">
        <h2
          id={`${l.id}-heading`}
          className="font-display text-[34px] font-light leading-[1.05] tracking-[-0.01em] md:text-[48px]"
        >
          {l.heading}
        </h2>
        <div className="mt-8 flex flex-col gap-6 font-display text-[22px] font-light leading-[1.35] md:mt-10 md:text-[28px]">
          {l.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 md:mt-10">
          <p className="font-display text-[22px] font-light md:text-[28px]">{l.signoff}</p>
          <p className="font-display text-[34px] font-light italic text-walnut md:text-[42px]">
            {l.signature}
          </p>
        </div>
      </div>
    </section>
  );
}
