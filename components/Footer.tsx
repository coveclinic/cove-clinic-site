import Link from "next/link";
import { footer, nav, site, treatmentsList, visit } from "@/lib/content";
import { treatmentSlugs } from "@/lib/treatments";
import { Button } from "@/components/Button";
import { LogoField } from "@/components/LogoField";

const cell = "border-paper/20";

/**
 * The page ends in one walnut block, a ruled grid in the manner of Marsea's
 * footer, in text alone. Row one: the invitation on the left, the practical
 * details on the right. Row two: three link columns. Row three: the wordmark
 * set large and filled with a moving colour field. Then a small-print bar.
 */
export function Footer() {
  const { address } = site;
  return (
    <footer
      id={visit.id}
      aria-labelledby={`${visit.id}-heading`}
      className="px-3 pb-3 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-[1392px] overflow-hidden rounded-card border border-paper/20 bg-walnut text-paper">
        {/* Row one: visit */}
        <div className="grid lg:grid-cols-12">
          <div className={`border-b px-7 py-12 md:px-10 md:py-16 lg:col-span-6 lg:border-b-0 lg:border-r lg:px-14 lg:py-20 ${cell}`}>
            <h2
              id={`${visit.id}-heading`}
              className="font-display text-[44px] font-light leading-[0.98] tracking-[-0.01em] md:text-[64px]"
            >
              {visit.heading}
            </h2>
            <p className="mt-6 max-w-[38ch] text-[17px] leading-[1.6] text-paper/72 md:text-[19px]">
              {visit.body}
            </p>
            <div className="mt-10">
              <Button href={visit.cta.href} label={visit.cta.label} tone="paper" />
            </div>
          </div>
          <div className="grid gap-10 px-7 py-12 sm:grid-cols-2 md:px-10 md:py-16 lg:col-span-6 lg:px-14 lg:py-20">
            <div>
              <p className="text-[14px] text-paper/60">{footer.addressHeading}</p>
              <address className="mt-4 not-italic text-[16px] leading-[1.7]">
                <p>{address.street}</p>
                <p>
                  {address.town}, {address.county}
                </p>
                <p>{address.postcode}</p>
              </address>
              <p className="mt-6 text-[16px] leading-[1.7]">
                <a href={site.phoneHref} className="hover:text-clay">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="hover:text-clay">
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="text-[14px] text-paper/60">{visit.hoursHeading}</p>
              <ul className="mt-4 border-t border-paper/20">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-6 border-b border-paper/20 py-3 text-[16px]"
                  >
                    <span>{h.days}</span>
                    <span className="text-paper/72">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[14px] text-paper/60">{site.hoursNote}</p>
            </div>
          </div>
        </div>

        {/* Row two: links */}
        <div className={`grid border-t sm:grid-cols-3 ${cell}`}>
          <nav aria-label={footer.explore} className={`px-7 py-10 sm:border-r md:px-10 md:py-12 lg:px-14 ${cell}`}>
            <p className="text-[14px] text-paper/60">{footer.explore}</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[16px]">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-clay">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={footer.treatments} className={`border-t px-7 py-10 sm:border-t-0 sm:border-r md:px-10 md:py-12 lg:px-14 ${cell}`}>
            <p className="text-[14px] text-paper/60">{footer.treatments}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[16px] md:grid-cols-1">
              {treatmentsList.filter((t) => treatmentSlugs.includes(t.href.split("/").pop() ?? "")).map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="hover:text-clay">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`border-t px-7 py-10 sm:border-t-0 md:px-10 md:py-12 lg:px-14 ${cell}`}>
            <p className="text-[14px] text-paper/60">{footer.contact}</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[16px]">
              <li>
                <a href={site.phoneHref} className="hover:text-clay">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-clay">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={footer.instagram.href} className="hover:text-clay" rel="noopener" target="_blank">
                  {footer.instagram.label}
                </a>
              </li>
            </ul>
            <p className="mt-8 max-w-[26ch] text-[14px] leading-[1.6] text-paper/60">
              {footer.registration}
            </p>
          </div>
        </div>

        {/* Row three: the wordmark set large, filled with the moving field */}
        <div className={`border-t px-7 pb-8 pt-10 md:px-10 md:pb-12 md:pt-16 lg:px-14 ${cell}`}>
          <LogoField className="w-full" />
        </div>

        {/* Small print */}
        <div className={`grid border-t text-[13px] text-paper/60 sm:grid-cols-3 ${cell}`}>
          <p className={`px-7 py-4 sm:border-r md:px-10 lg:px-14 ${cell}`}>{footer.copyright}</p>
          {footer.legal.map((l, i) =>
            i < footer.legal.length - 1 ? (
              <Link
                key={l.href}
                href={l.href}
                className={`px-7 py-4 hover:text-paper md:px-10 lg:px-14 sm:border-r ${cell}`}
              >
                {l.label}
              </Link>
            ) : (
              // The last cell carries the site credit on its right, so the three columns still line up.
              <div key={l.href} className="flex items-center justify-between gap-6 px-7 py-4 md:px-10 lg:px-14">
                <Link href={l.href} className="hover:text-paper">
                  {l.label}
                </Link>
                <a href={footer.credit.href} className="text-paper/72 transition-colors duration-200 hover:text-paper">
                  {footer.credit.label}
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
