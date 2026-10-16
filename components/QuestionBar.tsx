import { questionBar } from "@/lib/content";
import { Button } from "@/components/Button";

/** One white bar, text left and button right, in the manner of Harmoni's "Still have questions?" */
export function QuestionBar() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 pb-6 md:px-16 md:pb-10 lg:px-[112px]">
      <div className="flex flex-col items-start gap-5 rounded-[28px] bg-white p-6 pl-7 text-ink md:flex-row md:items-center md:justify-between md:rounded-full md:py-5 md:pl-10 md:pr-5">
        <p className="font-display text-walnut text-[24px] font-light leading-tight md:text-[28px]">
          {questionBar.text}
        </p>
        <Button href={questionBar.cta.href} label={questionBar.cta.label} />
      </div>
    </div>
  );
}
