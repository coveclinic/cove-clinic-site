import { band } from "@/lib/content";
import { DrawingMark } from "@/components/DrawingMark";

/**
 * A clay card carrying one promise. The statement runs wide on the left; the
 * CC monogram sits in a walnut disc that bleeds off the right edge,
 * the same device as the approach cards.
 */
export function TrustBand() {
  return (
    <section id={band.id} aria-labelledby={`${band.id}-heading`} className="px-3 md:px-6">
      <div className="relative mx-auto max-w-[1392px] overflow-hidden rounded-card bg-clay px-7 pb-16 pt-28 text-ink md:px-16 md:pb-24 md:pt-36 lg:px-[88px] lg:py-28">
        <DrawingMark
          tone="walnut"
          markClassName="-translate-x-[28%] translate-y-[28%] lg:translate-y-0"
          className="absolute -right-10 -top-10 size-40 md:-right-16 md:-top-16 md:size-64 lg:-right-12 lg:top-1/2 lg:size-[420px] lg:-translate-y-1/2"
        />
        <div className="relative lg:max-w-[62%]">
          <p className="text-[15px] text-ink/72">{band.eyebrow}</p>
          <h2
            id={`${band.id}-heading`}
            className="mt-5 max-w-[20ch] font-display text-[34px] font-light leading-[1.05] tracking-[-0.01em] text-balance md:text-[56px]"
          >
            {band.statement}
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.6] text-ink/72 md:mt-8 md:text-[19px]">
            {band.body}
          </p>
        </div>
      </div>
    </section>
  );
}
