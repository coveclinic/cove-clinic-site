import Image from "next/image";
import { about } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

/**
 * The clinic itself, open, between the letter and the training: the interior
 * photo left (4:5), a short heading and two sentences right, and a pill to the
 * Find us card on the homepage. The place, after the person.
 */
export function Space() {
  const s = about.space;
  return (
    <Section id={s.id}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-clay md:max-w-[480px] lg:col-span-5 lg:max-w-none">
          <Image
            src={s.photo.src}
            alt={s.photo.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: s.photo.position }}
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2
            id={`${s.id}-heading`}
            className="font-display text-[40px] font-light leading-[1.02] tracking-[-0.01em] text-cocoa md:text-[56px]"
          >
            {s.heading}
          </h2>
          <p className="mt-6 max-w-[38ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">{s.body}</p>
          <div className="mt-8">
            <Button href={s.cta.href} label={s.cta.label} />
          </div>
        </div>
      </div>
    </Section>
  );
}
