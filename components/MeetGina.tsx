import Image from "next/image";
import { practitioner } from "@/lib/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export function MeetGina() {
  return (
    <Section id={practitioner.id}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-clay md:max-w-[480px] lg:col-span-5 lg:max-w-none">
          <Image
            src={practitioner.photo.src}
            alt={practitioner.photo.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="scale-[1.4] object-cover origin-[30%_22%]"
            style={{ objectPosition: practitioner.photo.position }}
          />
        </div>

        <div className="text-ink lg:col-span-6 lg:col-start-7 lg:self-center">
          <h2
            id={`${practitioner.id}-heading`}
            className="font-display text-cocoa text-[48px] font-light leading-[0.98] tracking-[-0.01em] md:text-[72px]"
          >
            {practitioner.heading}
          </h2>
          <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">
            {practitioner.intro}
          </p>
          <ul className="mt-8 border-t border-ink/15">
            {practitioner.credentials.map((c) => (
              <li
                key={c}
                className="border-b border-ink/15 py-3.5 text-[15px] leading-[1.5]"
              >
                {c}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 max-w-[34ch] font-display text-[26px] font-light italic leading-[1.25] text-walnut">
            “{practitioner.quote}”
          </blockquote>
          <div className="mt-8">
            <Button href={practitioner.cta.href} label={practitioner.cta.label} />
          </div>
        </div>
      </div>
    </Section>
  );
}
