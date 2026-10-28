import Link from "next/link";
import { footer, nav, site, treatmentsList, visit } from "@/lib/content";
import { treatmentSlugs } from "@/lib/treatments";

const label = "text-[14px] text-paper/60";
const link = "transition-colors duration-200 hover:text-clay";

/**
 * A classic footer in one walnut block: four link and detail columns, then a
 * single line of small print beneath one rule.
 */
export function Footer() {
  const { address } = site;
  return (
    <footer id={visit.id} aria-label={visit.heading} className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1392px] overflow-hidden rounded-card bg-walnut px-7 text-paper md:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:py-14 lg:grid-cols-4">
          <nav aria-label={footer.explore}>
            <p className={label}>{footer.explore}</p>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={footer.treatments}>
            <p className={label}>{footer.treatments}</p>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              {treatmentsList.filter((t) => treatmentSlugs.includes(t.href.split("/").pop() ?? "")).map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className={link}>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={label}>{footer.contact}</p>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              <li>
                <a href={site.phoneHref} className={link}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={`${link} break-all`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={footer.instagram.href} className={link} rel="noopener" target="_blank">
                  {footer.instagram.label}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={label}>{footer.addressHeading}</p>
            <address className="mt-4 not-italic text-[15px] leading-[1.6]">
              {address.street}
              <br />
              {address.town}, {address.county}
              <br />
              {address.postcode}
            </address>
            <p className="mt-4 text-[15px] leading-[1.6]">
              {site.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}, {h.time}
                </span>
              ))}
              <span className="block text-paper/60">{site.hoursNote}</span>
            </p>
          </div>
        </div>

        {/* Small print */}
        <div className="flex flex-col gap-3 border-t border-paper/20 py-5 text-[13px] text-paper/60 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <p>
            {footer.copyright}. {footer.registration}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors duration-200 hover:text-paper">
                {l.label}
              </Link>
            ))}
            <a href={footer.credit.href} className="text-paper/30 transition-colors duration-200 hover:text-paper">
              {footer.credit.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
