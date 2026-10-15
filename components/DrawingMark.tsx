/** `fit` sizes and places the drawing inside the disc; the default suits the four close-cropped ones. */
const drawings = {
  halfface: { src: "/brand/faces/halfface.svg", ratio: 251.7 / 413.2 },
  "head-tilted": { src: "/brand/faces/head-tilted.svg", ratio: 283.3 / 438.7 },
  earrings: { src: "/brand/faces/earrings.svg", ratio: 356.8 / 376.5 },
  "eyes-closed": { src: "/brand/faces/eyes-closed.svg", ratio: 277.2 / 381.2 },
  // The artwork sits in the middle of a roomy viewBox, so it is scaled up and
  // lifted: the face fills the disc and the neck line runs off the bottom.
  "line-face": {
    src: "/brand/faces/line-face.svg",
    ratio: 1036 / 1168,
    fit: "h-[126%] -translate-x-[6%] translate-y-[14%]",
  },
};

const DEFAULT_FIT = "h-[80%] translate-x-[6%] translate-y-[8%]";

export type MarkName = keyof typeof drawings;

/**
 * A disc holding one of the line drawings. Clay with an ink line by default;
 * walnut with a paper line echoes the hero. Size it with className.
 */
export function DrawingMark({
  name,
  tone = "clay",
  className = "size-14",
}: {
  name: MarkName;
  tone?: "clay" | "walnut";
  className?: string;
}) {
  const d = drawings[name];
  const disc = tone === "walnut" ? "bg-walnut" : "bg-clay";
  const line = tone === "walnut" ? "bg-paper" : "bg-ink";
  const fit = "fit" in d ? d.fit : DEFAULT_FIT;
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full ${disc} ${className}`}
    >
      <span
        className={`block ${fit} ${line}`}
        style={{
          aspectRatio: String(d.ratio),
          maskImage: `url(${d.src})`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          WebkitMaskImage: `url(${d.src})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
        }}
      />
    </span>
  );
}
