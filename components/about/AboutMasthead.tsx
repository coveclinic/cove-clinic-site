import Image from "next/image";
import { about } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

/** The page opens as the hero's mirror: words left, Gina right, on paper. */
export function AboutMasthead() {
  const m = about.masthead;
  return (
    <Section id={m.id} className="lg:pt-12">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="lg:col-span-6">
          <h1
            id={`${m.id}-heading`}
            className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-cocoa md:text-[72px]"
          >
            {m.heading}
          </h1>
          <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.55] text-ink/72 md:mt-8 md:text-[20px]">
            {m.sub}
          </p>
          <div className="mt-8 md:mt-10">
            <Button href={m.cta.href} label={m.cta.label} />
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-clay md:max-w-[480px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <Image
            src={m.photo.src}
            alt={m.photo.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: m.photo.position }}
          />
        </div>
      </div>
    </Section>
  );
}
