type Props = {
  /** Path under /public, e.g. /brand/faces/halfface.svg */
  src: string;
  /** viewBox width / height of the SVG, so the mask keeps its shape */
  ratio: number;
  alt: string;
  /** Position and height classes; width follows from height and ratio. */
  className?: string;
};

/**
 * Client-supplied line art, applied as a CSS mask so it takes currentColor.
 */
export function FaceArt({ src, ratio, alt, className }: Props) {
  return (
    <span
      role="img"
      aria-label={alt}
      className={`absolute block bg-current ${className ?? ""}`}
      style={{
        aspectRatio: String(ratio),
        maskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
