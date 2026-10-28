import Link from "next/link";
import { footer, nav, site, visit } from "@/lib/content";
import { Button } from "@/components/Button";

const label = "text-[14px] text-paper/60";
const link = "transition-colors duration-200 hover:text-clay";

/**
 * A classic footer in one walnut block: a short invitation to visit, three link
 * and detail columns, then a single line of small print beneath one rule.
 */
export function Footer() {
  const { address } = site;
  return (
    <footer id={visit.id} aria-labelledby={`${visit.id}-heading`} className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1392px] overflow-hidden rounded-card bg-walnut px-7 text-paper md:px-10 lg:px-14">
        <div className="flex flex-col gap-6 border-b border-paper/20 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div>
            <h2
              id={`${visit.id}-heading`}
              className="font-display text-[30px] font-light leading-[1.1] tracking-[-0.01em] md:text-[36px]"
            >
              {visit.heading}
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-paper/72">{visit.body}</p>
          </div>
          <div className="shrink-0">
            <Button href={visit.cta.href} label={visit.cta.label} tone="paper" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:py-14 lg:grid-cols-3">
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
