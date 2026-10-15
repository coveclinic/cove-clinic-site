import { findUs, site } from "@/lib/content";
import { Button } from "@/components/Button";
import { PenrithMap } from "@/components/PenrithMap";

/**
 * Find us: a clay card above the footer. The address and how to get there on
 * the left, and on the right a map of central Penrith drawn in the site's own
 * colours with the clinic pinned, in place of an embedded Google map (which
 * cannot be recoloured and sets cookies). The pill opens directions in Google
 * Maps, which is what anyone navigating would do on their phone.
 */
export function FindUs() {
  return (
    <section aria-labelledby={`${findUs.id}-heading`} className="px-3 pb-6 md:px-6 md:pb-10">
      <div className="mx-auto grid max-w-[1392px] gap-10 rounded-card bg-clay px-7 py-12 text-ink md:px-14 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="lg:col-span-5">
          <h2
            id={`${findUs.id}-heading`}
            className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] md:text-[56px]"
          >
            {findUs.heading}
          </h2>
          <address className="mt-8 text-[18px] not-italic leading-[1.5] md:text-[20px]">
            {site.address.street}
            <br />
            {site.address.town}, {site.address.county}
            <br />
            {site.address.postcode}
          </address>
          <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">{findUs.body}</p>
          <p className="mt-3 max-w-[38ch] text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">{findUs.parking}</p>
          <div className="mt-8">
            <Button href={findUs.cta.href} label={findUs.cta.label} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[20px] bg-paper">
            <PenrithMap />
          </div>
          <p className="mt-3 text-right text-[13px] text-ink/60">
            <a href={findUs.attribution.href} className="hover:text-walnut" rel="noopener">
              {findUs.attribution.label}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
