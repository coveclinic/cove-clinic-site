/**
 * A disc holding the CC monogram. Clay with an ink mark by default;
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
  const line = tone === "walnut" ? "bg-paper" : "bg-ink";
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full ${disc} ${className}`}
    >
      <span
        className={`block h-[50%] ${line} ${markClassName}`}
        style={{
          aspectRatio: "273.25 / 326.1",
          maskImage: "url(/brand/monogram-tall.svg)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          WebkitMaskImage: "url(/brand/monogram-tall.svg)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
        }}
      />
    </span>
  );
}
