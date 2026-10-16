/**
 * A disc holding the CC monogram, set large and faint so it runs off the
 * disc's edges, as it does over the hero. Clay with an ink mark by default;
 * walnut with a paper mark echoes the hero. Size it with className.
 */
export function DrawingMark({
  tone = "clay",
  className = "size-14",
}: {
  tone?: "clay" | "walnut";
  className?: string;
}) {
  const disc = tone === "walnut" ? "bg-walnut" : "bg-clay";
  const line = tone === "walnut" ? "bg-paper/16" : "bg-ink/10";
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full ${disc} ${className}`}
    >
      <span
        className={`block h-[130%] ${line}`}
        style={{
          aspectRatio: "273.25 / 326.1",
          maskImage: "url(/brand/monogram-tall.svg)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: "url(/brand/monogram-tall.svg)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
    </span>
  );
}
