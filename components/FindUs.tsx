import { findUs, site } from "@/lib/content";
import { Button } from "@/components/Button";
import { PenrithMap } from "@/components/PenrithMap";

/**
 * Find us: a clay card above the footer. Left, the heading, one line on where
 * the clinic is, then the practical facts as a ruled list (the at-a-glance
 * device from the treatment pages) and the directions pill. Right, a map of
 * central Penrith drawn in the site's own colours with the clinic pinned, in
 * place of an embedded Google map, which cannot be recoloured and sets
 * cookies. The pill opens directions in Google Maps.
 */
export function FindUs() {
  const rows = [
    {
      label: findUs.labels.address,
      value: (
        <>
          {site.address.street}, {site.address.town} {site.address.postcode}
        </>
      ),
    },
    {
      label: findUs.labels.open,
      value: site.hours.map((h) => `${h.days}, ${h.time}`).join("; "),
    },
    {
      label: findUs.labels.phone,
      value: (
        <a href={site.phoneHref} className="hover:text-walnut">
          {site.phone}
        </a>
      ),
    },
    { label: findUs.labels.parking, value: findUs.parking },
  ];

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
          <p className="mt-6 max-w-[36ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">{findUs.body}</p>
          <dl className="mt-8 border-t border-ink/15 text-[16px] md:text-[17px]">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[88px_1fr] gap-x-4 border-b border-ink/15 py-3.5">
                <dt className="text-ink/60">{r.label}</dt>
                <dd className="text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>
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
