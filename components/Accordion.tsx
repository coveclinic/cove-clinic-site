"use client";

import { useId, useState } from "react";

type Item = { title: string; body: string };

type Props = {
  items: Item[];
  /** Index open on load, or null for all closed. */
  defaultOpen?: number | null;
  titleClassName?: string;
};

/** Hairline rows that open one at a time. The plus turns into a minus. */
export function Accordion({ items, defaultOpen = 0, titleClassName = "" }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();

  return (
    <ul className="border-t border-current/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;
        return (
          <li key={item.title} className="border-b border-current/15">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-8 py-6 text-left md:py-7 ${titleClassName}`}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className="relative block size-5 shrink-0"
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="max-w-[62ch] pb-7 pr-10 text-[16px] leading-[1.6] text-ink/72 md:text-[17px]"
            >
              {item.body}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
