"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, treatmentsList } from "@/lib/content";
import { treatmentSlugs } from "@/lib/treatments";
import { Button } from "@/components/Button";
import { Wordmark } from "@/components/Wordmark";

/**
 * Sticky bar on paper: wordmark left, nav centred, the button right. The
 * current page's link is marked in walnut with a short rule beneath it, and a
 * hairline appears under the bar once the page has scrolled. "Treatments"
 * opens a panel listing the treatment pages, on hover or on click, and the
 * phone menu lists them beneath the Treatments link.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The treatments panel closes on Escape and on a click anywhere else.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  // Only the treatment pages that exist are linked; the rest are coming.
  const liveTreatments = treatmentsList.filter((t) => treatmentSlugs.includes(t.href.split("/").pop() ?? ""));
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // A link to the homepage while already on it is a hash change to Next, which keeps the scroll
  // position; send the reader to the top instead.
  const toTop = (href: string) =>
    href === "/" && pathname === "/" ? () => window.scrollTo({ top: 0, behavior: "instant" }) : undefined;

  const linkClass = (current: boolean) =>
    `relative py-2 transition-colors duration-200 hover:text-sage ${current ? "text-walnut" : ""}`;
  const underline = (
    <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-walnut" />
  );

  return (
    <header
      className={`sticky top-0 z-20 bg-paper transition-[box-shadow] duration-300 ${scrolled ? "shadow-[0_1px_0_0_rgba(22,21,20,0.12)]" : ""}`}
    >
      <div className="relative mx-auto flex h-[72px] max-w-[1392px] items-center justify-between px-6 md:h-[88px] md:px-10">
        <Link href="/" onClick={toTop("/")} className="flex items-center text-ink" aria-label={site.name}>
          <Wordmark />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block" aria-label="Primary">
          <ul className="flex items-center gap-9 text-[15px] text-ink">
            {nav.links.map((l) => {
              const current = isCurrent(l.href);
              if (l.href !== "/treatments") {
                return (
                  <li key={l.href}>
                    <Link href={l.href} onClick={toTop(l.href)} aria-current={current ? "page" : undefined} className={linkClass(current)}>
                      {l.label}
                      {current ? underline : null}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={l.href}
                  ref={menuRef}
                  className="relative"
                  onMouseEnter={() => setMenu(true)}
                  onMouseLeave={() => setMenu(false)}
                >
                  <button
                    type="button"
                    aria-expanded={menu}
                    aria-controls="treatments-menu"
                    aria-current={current ? "page" : undefined}
                    onClick={() => setMenu((v) => !v)}
                    className={`${linkClass(current)} inline-flex items-center gap-1.5`}
                  >
                    {l.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${menu ? "rotate-180" : ""}`}
                    >
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                    {current ? underline : null}
                  </button>
                  {/* The panel: a white card hanging from the bar, bridged by padding so the pointer can cross to it. */}
                  <div
                    id="treatments-menu"
                    hidden={!menu}
                    className="absolute left-1/2 top-full z-30 -translate-x-1/2 pt-4"
                  >
                    <div className="w-[560px] rounded-card border border-walnut/20 bg-white p-6 text-ink">
                      <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                        {liveTreatments.map((t) => (
                          <li key={t.href}>
                            <Link
                              href={t.href}
                              onClick={() => setMenu(false)}
                              aria-current={pathname === t.href ? "page" : undefined}
                              className={`block rounded-full px-3 py-2 text-[15px] transition-colors duration-200 hover:bg-clay ${pathname === t.href ? "text-walnut" : ""}`}
                            >
                              {t.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 border-t border-ink/10 pt-4">
                        <Link
                          href="/treatments"
                          onClick={() => setMenu(false)}
                          className="px-3 text-[14px] text-ink/72 transition-colors duration-200 hover:text-walnut"
                        >
                          {nav.allTreatments}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={nav.cta.href} label={nav.cta.label} />
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? nav.menuClose : nav.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 9h18M3 15h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-[18px]">
            {nav.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => { setOpen(false); toTop(l.href)?.(); }}
                  aria-current={isCurrent(l.href) ? "page" : undefined}
                  className={isCurrent(l.href) ? "text-walnut" : ""}
                >
                  {l.label}
                </Link>
                {l.href === "/treatments" ? (
                  <ul className="mt-3 flex flex-col gap-2.5 border-l border-ink/15 pl-4 text-[16px] text-ink/72">
                    {liveTreatments.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          onClick={() => setOpen(false)}
                          className={pathname === t.href ? "text-walnut" : ""}
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={nav.cta.href} label={nav.cta.label} />
          </div>
        </div>
      )}
    </header>
  );
}
