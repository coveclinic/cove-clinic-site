import { site } from "@/lib/content";

/**
 * The client's "Cove Clinic" wordmark as a mask so it takes currentColor.
 * Size with className; the file's viewBox is 2145 by 222, so width is about
 * 9.7 times height.
 */
export function Wordmark({ className = "h-[20px] w-[194px]" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label={site.wordmarkAlt}
      className={`block bg-current [mask:url(/brand/wordmark-clinic.svg)_no-repeat_left_center/contain] ${className}`}
    />
  );
}
