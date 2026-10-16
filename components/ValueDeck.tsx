"use client";

import { useEffect, useRef, useState } from "react";
import { DrawingMark } from "@/components/DrawingMark";

type Value = { title: string; body: string };

/** Where each card parks: just under the sticky header (88px) plus a little air. */
const PARK = "top-[112px]";

/**
 * A deck of cards that builds as you scroll. Every card is sticky at the same
 * line, so the first holds there and the next slides up over it. The body text
 * of each card rises in once the card is well into view, so there is a moment
 * of title before the detail. The text is always in the document; only its
 * appearance is delayed.
 */
export function ValueDeck({ items }: { items: Value[] }) {
  const refs = useRef<Array<HTMLLIElement | null>>([]);
  const [seen, setSeen] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.index);
          setSeen((s) => (s[i] ? s : s.map((v, j) => (j === i ? true : v))));
        }
      },
      { threshold: 0.6 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ul className="grid auto-rows-fr gap-4 pb-12 md:pb-24">
      {items.map((v, i) => (
        <li
          key={v.title}
          data-index={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`sticky ${PARK} relative flex min-h-[260px] items-end overflow-hidden rounded-card border border-walnut/30 bg-white px-7 pb-7 pt-28 text-ink md:min-h-[300px] md:items-center md:py-10 md:pl-[232px] md:pr-10 lg:pl-[168px] xl:pl-[232px]`}
        >
          {/* The disc bleeds off the card's edge:
              the top-left corner on a phone, the left edge from md. */}
          <DrawingMark
            tone="walnut"
            markClassName="translate-x-[16%] translate-y-[8%] md:translate-y-0"
            className="absolute -left-8 -top-8 size-28 md:-left-14 md:top-1/2 md:size-52 md:-translate-y-1/2 lg:-left-10 lg:size-40 xl:-left-14 xl:size-52"
          />
          <div className="min-w-0">
            <h3 className="font-display text-cocoa text-[30px] font-normal leading-[1.05] text-balance md:text-[38px] lg:text-[32px] xl:text-[38px]">
              {v.title}
            </h3>
            <p
              className={`mt-3 max-w-[40ch] text-[16px] leading-[1.6] text-ink/72 transition-[opacity,transform] duration-700 ease-out md:mt-4 md:text-[17px] ${seen[i] ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              {v.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
