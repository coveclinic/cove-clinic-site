import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  /** Shown below the md breakpoint instead of label, when set. */
  labelShort?: string;
  /** Ink on light surfaces; paper on walnut. */
  tone?: "ink" | "paper";
};

/**
 * The site's only button: an outlined pill with small letterspaced capitals
 * that fills on hover, in the manner of centremarsea.com.
 */
export function Button({ href, label, labelShort, tone = "ink" }: ButtonProps) {
  const colours =
    tone === "paper"
      ? "border-paper/80 text-paper hover:border-paper hover:bg-paper hover:text-walnut"
      : "border-walnut/70 text-ink hover:border-walnut hover:bg-walnut hover:text-paper";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-[1.5px] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${colours}`}
    >
      {labelShort ? (
        <>
          <span className="md:hidden">{labelShort}</span>
          <span className="hidden md:inline">{label}</span>
        </>
      ) : (
        label
      )}
    </Link>
  );
}
