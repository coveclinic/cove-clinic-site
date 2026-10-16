import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ConcernList } from "@/components/ConcernList";

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-clay text-ink transition-colors duration-200 group-hover:bg-sage group-hover:text-white"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 7h9M7.5 3l4 4-4 4" />
      </svg>
    </span>
  );
}

/** Heading at hero size with the statement beneath, matching Our approach. */
function Intro() {
  return (
    <div>
      <h2
        id={`${treatments.id}-heading`}
        className="font-display text-[48px] font-light leading-[0.98] tracking-[-0.01em] text-cocoa md:text-[72px]"
      >
        {treatments.heading}
      </h2>
      <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.55] text-ink/72 md:mt-8 md:text-[20px]">
        {treatments.intro}
      </p>
    </div>
  );
}

/** Photo tiles with a caption block: the phone and tablet layout. */
function Tiles() {
  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2">
      {treatments.items.map((t, i) => (
        <li key={t.name}>
          <Link
            href={t.href}
            className="group block overflow-hidden rounded-card bg-white text-ink"
          >
            <div className="relative aspect-[4/5] bg-clay">
              <Image
                src={t.image.src}
                alt={t.image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: t.image.position }}
              />
              <Arrow />
            </div>
            <div className="p-6">
              <h3 className="flex items-start gap-2 font-display text-cocoa text-[28px] font-normal leading-tight">
                <span aria-hidden="true" className="mt-1 font-sans text-[13px] text-walnut">
                  {i + 1}
                </span>
                {t.name}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-ink/72">
                {t.line}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Treatments() {
  return (
    <Section id={treatments.id}>
      <div className="lg:hidden">
        <Intro />
        <Tiles />
        <div className="mt-10">
          <Button href={treatments.cta.href} label={treatments.cta.label} />
        </div>
      </div>
      <div className="hidden lg:block">
        <ConcernList
          items={treatments.items}
          intro={<Intro />}
          after={<Button href={treatments.cta.href} label={treatments.cta.label} />}
        />
      </div>
    </Section>
  );
}
