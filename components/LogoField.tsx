/**
 * The wordmark set large at the foot of the page, filled with a slow-moving
 * field of the site's own colours, in the manner of the lockup on
 * wearekestrel.com. Two layers of soft colour drift and breathe behind a
 * mask cut from the wordmark; the letters are the only place the field shows.
 * CSS only, so it needs no WebGL and stops under reduced motion.
 */
export function LogoField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: "2145 / 222",
        maskImage: "url(/brand/wordmark-clinic.svg)",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "left center",
        WebkitMaskImage: "url(/brand/wordmark-clinic.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "left center",
      }}
    >
      {/* Base: the paper the letters would be anyway, so the mark reads even before the field moves. */}
      <div className="absolute inset-0 bg-paper" />
      {/* Field one: clay and umber, drifting left to right. */}
      <div
        className="absolute -inset-[40%] animate-[field-drift_22s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(closest-side at 30% 50%, var(--color-clay) 0%, transparent 70%), radial-gradient(closest-side at 70% 40%, var(--color-umber) 0%, transparent 65%)",
        }}
      />
      {/* Field two: a softer paper bloom moving the other way, so the two never lock step. */}
      <div
        className="absolute -inset-[40%] animate-[field-drift-back_31s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(closest-side at 55% 60%, var(--color-clay) 0%, transparent 60%), radial-gradient(closest-side at 20% 30%, var(--color-paper) 0%, transparent 55%)",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
