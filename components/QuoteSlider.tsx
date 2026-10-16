"use client";

import { useState } from "react";
import type { reviews } from "@/lib/content";

type Review = (typeof reviews.items)[number];

function ArrowButton({
  direction,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-12 place-items-center rounded-full border border-ink/40 text-ink transition-colors duration-200 hover:border-walnut hover:bg-walnut hover:text-paper"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <path d="M2 9h14M11 4l5 5-5 5" />
      </svg>
    </button>
  );
}

/**
 * One review at a time, set large, in the manner of an editorial pull quote.
 * Beneath it, one row: who said it on the left, the arrows on the right.
 * Nothing moves on its own.
 */
export function QuoteSlider({
  items,
  source,
  labels,
}: {
  items: Review[];
  source: string;
  labels: { previous: string; next: string; of: string };
}) {
  const [index, setIndex] = useState(0);
  const current = items[index];
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <div>
      <figure key={index} className="relative animate-[quote-in_500ms_ease-out]" aria-live="polite">
        {/* On a phone the opening mark sits above the quote; from tablet up it hangs in the gutter beside the first line, as in print. */}
        <span
          aria-hidden="true"
          className="pointer-events-none block h-[40px] font-display text-[72px] font-light leading-none text-walnut md:absolute md:-left-16 md:top-[-0.14em] md:h-auto md:text-[150px]"
        >
          “
        </span>
        <blockquote className="relative max-w-[50ch] font-display text-[26px] font-light leading-[1.25] tracking-[-0.01em] text-ink md:text-[44px]">
          {current.quote}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4 text-[15px] leading-[1.4]">
          <span
            aria-hidden="true"
            className="grid size-12 shrink-0 place-items-center rounded-full bg-walnut font-display text-[22px] text-paper"
          >
            {current.who.charAt(0)}
          </span>
          <span className="flex flex-col">
            <span className="text-ink">
              {current.who}, {current.treatment}
            </span>
            <span className="text-stone">{source}</span>
          </span>
        </figcaption>
      </figure>

      <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-6 md:mt-10">
        <p className="font-sans text-[14px] tabular-nums text-ink/72">
          {index + 1} {labels.of} {items.length}
        </p>
        <div className="flex items-center gap-3">
          <ArrowButton direction="prev" label={labels.previous} onClick={() => go(-1)} />
          <ArrowButton direction="next" label={labels.next} onClick={() => go(1)} />
        </div>
      </div>
    </div>
  );
}
