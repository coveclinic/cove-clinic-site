"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { TreatmentPage } from "@/lib/treatments";
import { treatmentsIndex } from "@/lib/treatments";
import { Section } from "@/components/Section";

type Props = { items: TreatmentPage[] };

/**
 * The treatments index: the heading pinned left, the ten treatments as
 * hairline rows right. Each row is a disc of the page's own photo and the
 * name; from lg, pointing at a row (or tabbing to it) unfolds its snapshot
 * beneath: the page's lead, three facts and a link. The open row stays open
 * until another is pointed at, so nothing collapses under the pointer.
 * Below lg there is no hover, so each row shows its one-line summary instead.
 */
export function TreatmentsIndex({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="treatments" className="lg:pt-12 lg:pb-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start xl:col-span-4">
          <h1
            id="treatments-heading"
            className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] text-walnut md:text-[64px]"
          >
            {treatmentsIndex.heading}
          </h1>
          <p className="mt-6 max-w-[30ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">
            {treatmentsIndex.lead}
          </p>
        </div>

        <ul className="border-t border-ink/15 lg:col-span-7 xl:col-span-8">
          {items.map((t, i) => {
            const isOpen = open === i;
            const href = `/treatments/${t.slug}`;
            const panelId = `treatment-${t.slug}-snapshot`;
            return (
              <li
                key={t.slug}
                className="border-b border-ink/15"
                onMouseEnter={() => setOpen(i)}
                onFocusCapture={() => setOpen(i)}
              >
                <Link
                  href={href}
                  aria-describedby={panelId}
                  className="group flex items-center gap-5 py-5 md:py-6"
                >
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-clay md:size-16">
                    <Image
                      src={t.photo.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: t.photo.position }}
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-[26px] font-normal leading-[1.1] transition-colors duration-200 group-hover:text-walnut md:text-[30px] ${isOpen ? "text-walnut" : "text-ink"}`}
                    >
                      {t.name}
                    </span>
                    <span className="mt-1 block text-[15px] leading-[1.5] text-ink/72 lg:hidden">{t.summary}</span>
                  </span>
                </Link>

                {/* The snapshot, from lg: unfolds beneath the row */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`hidden grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out lg:grid ${isOpen ? "grid-rows-[1fr]" : ""}`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-[84px] pr-4">
                      <p className="max-w-[58ch] text-[17px] leading-[1.6] text-ink/72">{t.lead}</p>
                      <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[15px]">
                        {t.facts.slice(0, 3).map((f) => (
                          <div key={f.label} className="flex gap-x-2">
                            <dt className="text-stone">{f.label}</dt>
                            <dd className="text-ink">{f.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <Link
                        href={href}
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-5 inline-block text-[15px] text-walnut underline decoration-walnut/40 underline-offset-4 transition-colors duration-200 hover:decoration-walnut"
                      >
                        {treatmentsIndex.readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
