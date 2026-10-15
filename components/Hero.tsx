import { hero } from "@/lib/content";
import { Button } from "@/components/Button";
import { FaceArt } from "@/components/FaceArt";

/** Card colour. Clay is the original; umber and walnut answer the client's ask for a darker brown. */
export type HeroTone = "clay" | "umber" | "walnut";

const tones: Record<HeroTone, { card: string; sub: string; art: string }> = {
  clay: { card: "bg-clay text-ink", sub: "text-ink/72", art: "text-ink" },
  umber: { card: "bg-umber text-ink", sub: "text-ink/72", art: "text-ink" },
  walnut: { card: "bg-walnut text-paper", sub: "text-paper/72", art: "text-paper" },
};

type HeroProps = { tone?: HeroTone };

export function Hero({ tone = "walnut" }: HeroProps) {
  const t = tones[tone];
  return (
    <section className="px-3 pb-3 md:px-6 md:pb-6">
      <div
        className={`relative grid min-h-[620px] overflow-hidden rounded-card lg:h-[calc(100svh-112px)] lg:max-h-[860px] lg:grid-cols-[1.15fr_1fr] ${t.card}`}
      >
        <div className="relative z-10 flex flex-col justify-center px-7 pb-10 pt-12 md:px-10 md:pt-16 lg:pl-[88px] lg:pr-10 lg:py-0">
          <h1 className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] md:text-[72px]">
            {hero.headline.lead}{" "}
            <br className="hidden md:inline" />
            <em className="italic">{hero.headline.emphasis}</em>{" "}
            {hero.headline.tail}
          </h1>
          <p className={`mt-6 max-w-[44ch] text-[16px] leading-[1.6] md:mt-8 md:text-[17px] ${t.sub}`}>
            {hero.sub}
          </p>
          <div className="mt-8 md:mt-10">
            <Button
              href={hero.cta.href}
              label={hero.cta.label}
              labelShort={hero.cta.labelShort}
              tone={tone === "walnut" ? "paper" : "ink"}
            />
          </div>
        </div>

        <div className={`relative h-[380px] md:h-[520px] lg:h-full ${t.art}`}>
          <FaceArt
            src={hero.drawing.src}
            ratio={hero.drawing.ratio}
            alt={hero.drawing.alt}
            className="-bottom-[6%] left-1/2 h-[112%] -translate-x-1/2 md:h-[120%] lg:-bottom-[4%] lg:left-auto lg:right-[12%] lg:h-[108%] lg:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
