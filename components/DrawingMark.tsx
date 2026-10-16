import { monogramC } from "@/components/monogramPath";

/**
 * A disc holding the CC monogram, set large and faint so it runs off the
 * disc's edges, as it does over the hero. Clay with an ink mark by default;
 * walnut with a paper mark echoes the hero. Size it with className.
 */
export function DrawingMark({
  tone = "clay",
  className = "size-14",
  markClassName = "",
}: {
  tone?: "clay" | "walnut";
  className?: string;
  /** Nudges the monogram towards the part of the disc left showing when the disc bleeds off an edge. */
  markClassName?: string;
}) {
  const disc = tone === "walnut" ? "bg-walnut" : "bg-clay";
  const mark = tone === "walnut" ? "fill-paper stroke-walnut" : "fill-ink stroke-clay";
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full ${disc} ${className}`}
    >
      {/* Drawn inline rather than as a CSS mask: Safari repaints masks late inside the
          sticky cards, which made the monogram drift while a card slid up. The group's
          opacity fades both letters together, and the second C's disc-coloured stroke
          cuts the small gap where it crosses the first. */}
      <svg
        viewBox="0 0 273.25 326.1"
        className={`block h-[106%] w-auto ${markClassName}`}
        style={{ aspectRatio: "273.25 / 326.1" }}
      >
        <g className={`opacity-16 ${mark}`}>
          <path transform="translate(-16 209)" d={monogramC} strokeWidth={0} />
          <path
            transform="translate(64.25 322.1)"
            d={monogramC}
            strokeWidth={6}
            strokeLinejoin="round"
            paintOrder="stroke"
          />
        </g>
      </svg>
    </span>
  );
}
