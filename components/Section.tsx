import type { ReactNode } from "react";

type Props = {
  id: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Open section on paper. Text starts on the same left edge as the hero headline:
 * 24px card inset plus 88px padding at desktop.
 */
export function Section({ id, labelledBy, children, className = "" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-heading`}
      className={`mx-auto w-full max-w-[1440px] px-7 py-16 md:px-16 md:py-24 lg:px-[112px] lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
