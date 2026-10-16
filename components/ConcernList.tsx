"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { treatments } from "@/lib/content";

type Item = (typeof treatments.items)[number];

/**
 * One large picture on the left that changes as you hover or focus a concern;
 * the heading, intro and the concerns themselves on the right, set as open
 * lines of type with a small raised number, in the manner of Marsea's list.
 * Desktop only; the tiles are the mobile layout.
 */
export function ConcernList({
  items,
  intro,
  after,
}: {
  items: Item[];
  /** Heading and statement, rendered above the list. */
  intro: ReactNode;
  /** Anything after the list, such as the pill. */
  after?: ReactNode;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-x-12">
      <div className="relative col-span-6 aspect-[4/5] self-start overflow-hidden rounded-card bg-clay lg:sticky lg:top-[112px]">
        {items.map((t, i) => (
          <div
            key={t.name}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={t.image.src}
              alt={t.image.alt}
              fill
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: t.image.position }}
            />
          </div>
        ))}
      </div>

      <div className="col-span-6 col-start-7 self-center lg:pl-[10%]">
        {intro}
        <ul className="mt-12 text-ink">
          {items.map((t, i) => {
            const isActive = i === active;
            return (
              <li key={t.name}>
                <Link
                  href={t.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="block py-3"
                >
                  <span className="flex items-start gap-1.5">
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 shrink-0 font-sans text-[13px] tabular-nums transition-colors duration-200 ${isActive ? "text-walnut" : "text-ink/40"}`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`font-display text-[40px] font-light leading-[1.05] transition-colors duration-200 md:text-[46px] ${isActive ? "text-cocoa" : "text-cocoa/35"}`}
                    >
                      {t.name}
                    </span>
                  </span>
                  <span
                    className={`block max-w-[38ch] overflow-hidden pl-4 text-[15px] leading-[1.55] text-ink/72 transition-all duration-300 ${isActive ? "mt-2 max-h-16 opacity-100" : "mt-0 max-h-0 opacity-0"}`}
                  >
                    {t.line}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {after ? <div className="mt-10">{after}</div> : null}
      </div>
    </div>
  );
}
