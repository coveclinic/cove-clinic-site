import Image from "next/image";
import { findUs, site } from "@/lib/content";
import { Button } from "@/components/Button";
import { PenrithMap } from "@/components/PenrithMap";

/**
 * Find us: a clay card above the footer, in two rows on the same 5/7 grid.
 * Top: the heading and one line on the left, the practical facts as a ruled
 * list with the directions pill on the right. Below: the shopfront on the
 * left (its fascia is the site's walnut, and it is the door you look for) and
 * the drawn map of central Penrith on the right, at near-equal heights. The
 * map stands in for an embedded Google map, which cannot be recoloured and
 * sets cookies; the pill opens directions in Google Maps.
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
      <div className="mx-auto grid max-w-[1392px] gap-x-16 gap-y-10 rounded-card bg-clay px-7 py-12 text-ink md:px-14 md:py-16 lg:grid-cols-12 lg:gap-y-12">
        <div className="lg:col-span-5">
          <h2
            id={`${findUs.id}-heading`}
            className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] md:text-[56px]"
          >
            {findUs.heading}
          </h2>
          <p className="mt-6 max-w-[36ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">{findUs.body}</p>
        </div>
        <div className="lg:col-span-7 lg:self-end">
          <dl className="border-t border-ink/15 text-[16px] md:text-[17px]">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[88px_1fr] gap-x-4 border-b border-ink/15 py-3.5">
                <dt className="text-ink/60">{r.label}</dt>
                <dd className="text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7">
            <Button href={findUs.cta.href} label={findUs.cta.label} />
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-walnut lg:col-span-5 lg:aspect-auto lg:self-stretch">
          <Image
            src={findUs.photo.src}
            alt={findUs.photo.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: findUs.photo.position }}
          />
        </div>
        <div className="overflow-hidden rounded-[20px] bg-paper lg:col-span-7">
          <PenrithMap />
        </div>
        <p className="-mt-7 text-right text-[13px] text-ink/60 lg:col-span-12 lg:-mt-9">
          <a href={findUs.attribution.href} className="hover:text-walnut" rel="noopener">
            {findUs.attribution.label}
          </a>
        </p>
      </div>
    </section>
  );
}
