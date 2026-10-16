import { hero } from "@/lib/content";
import { Button } from "@/components/Button";
import { HeroVideo } from "@/components/HeroVideo";

/** Card colour. Clay is the original; umber and walnut answer the client's ask for a darker brown. */
export type HeroTone = "clay" | "umber" | "walnut";

const tones: Record<HeroTone, { card: string; sub: string }> = {
  clay: { card: "bg-clay text-ink", sub: "text-ink/72" },
  umber: { card: "bg-umber text-ink", sub: "text-ink/72" },
  walnut: { card: "bg-walnut text-paper", sub: "text-paper/72" },
};

type HeroProps = { tone?: HeroTone };

export function Hero({ tone = "walnut" }: HeroProps) {
  const t = tones[tone];
  return (
    <section className="px-3 pb-3 md:px-6 md:pb-6">
      <div
        className={`relative grid min-h-[620px] overflow-hidden rounded-card lg:h-[calc(100svh-112px)] lg:max-h-[860px] lg:grid-cols-[1.15fr_1fr] ${t.card}`}
      >
        {tone === "walnut" && (
          <>
            <HeroVideo />
            <HeroMonogram />
          </>
        )}
        <div className="relative z-10 flex flex-col justify-center px-7 pb-10 pt-12 md:px-10 md:pt-16 lg:pl-[88px] lg:pr-10 lg:py-0">
          <h1 className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] md:text-[72px]">
            <LevelHyphens text={hero.headline.lead} />{" "}
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

        {/* Keeps the right-hand half open so the video shows; on phones it leaves room below the text. */}
        <div className="relative h-[380px] md:h-[520px] lg:h-full" />
      </div>
    </section>
  );
}

/**
 * The CC monogram set very large and faint over the video, running off the
 * card's top and bottom on a laptop and off the bottom corner on a phone.
 */
function HeroMonogram() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[14%] -right-[34%] h-[62%] bg-paper/16 md:-right-[12%] lg:-top-[21%] lg:bottom-auto lg:left-[56%] lg:right-auto lg:h-[124%]"
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
  );
}

/** Cormorant's hyphen rises about 10 degrees; turn each one level so it reads as a flat dash. */
function LevelHyphens({ text }: { text: string }) {
  return text.split("-").map((part, i) => (
    <span key={i}>
      {i > 0 && <span className="inline-block rotate-[10deg]">-</span>}
      {part}
    </span>
  ));
}
