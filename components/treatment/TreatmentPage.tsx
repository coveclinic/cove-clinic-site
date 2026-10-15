import Image from "next/image";
import Link from "next/link";
import type { TreatmentPage as TreatmentPageContent } from "@/lib/treatments";
import { bookingActions, treatmentLabels } from "@/lib/treatments";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { treatmentGraph } from "@/lib/schema";

/** A full-width hairline between open sections. */
function Rule() {
  return <hr className="mx-3 border-0 border-t border-ink/15 md:mx-6" />;
}

/**
 * The two ways to book. Online first where the clinic's booking system lists
 * the treatment, with the phone beside it; otherwise phone and email.
 */
function BookingButtons({ t }: { t: TreatmentPageContent }) {
  return (
    <>
      {t.bookingUrl ? (
        <Button href={t.bookingUrl} label={bookingActions.online.label} />
      ) : null}
      <Button href={bookingActions.call.href} label={bookingActions.call.label} />
      {t.bookingUrl ? null : (
        <Button href={bookingActions.email.href} label={bookingActions.email.label} />
      )}
    </>
  );
}

/**
 * The shared shape of every treatment page. A reference page, kept plain:
 * the words do the work, the only devices are hairlines and one clay card.
 */
export function TreatmentPage({ t }: { t: TreatmentPageContent }) {
  return (
    <>
      <JsonLd graph={treatmentGraph(t)} />
      <Header />
      <main>
        {/* Masthead: the heading and lead left, the photo right, the two ways to book */}
        <Section id={t.slug} className="lg:pt-12 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <div className="lg:col-span-6">
              <p className="text-[14px] text-stone">
                <Link href="/treatments" className="text-walnut hover:text-sage">
                  {treatmentLabels.root}
                </Link>
                <span aria-hidden="true"> / </span>
                {t.name}
              </p>
              <h1
                id={`${t.slug}-heading`}
                className="mt-5 font-display text-[44px] font-light leading-[1] tracking-[-0.01em] text-ink md:text-[64px]"
              >
                {t.heading}
              </h1>
              <p className="mt-6 max-w-[38ch] text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">
                {t.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
                <BookingButtons t={t} />
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-clay md:max-w-[480px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
              <Image
                src={t.photo.src}
                alt={t.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: t.photo.position }}
              />
            </div>
          </div>
        </Section>

        <Rule />

        {/* The options within a treatment (the six facials): a ruled grid, two columns from md */}
        {t.menu ? (
          <>
            <Section id={`${t.slug}-menu`} className="lg:pt-20 lg:pb-20">
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-16">
                <div className="lg:col-span-5 xl:col-span-4">
                  <h2
                    id={`${t.slug}-menu-heading`}
                    className="font-display text-[36px] font-light leading-[1.02] tracking-[-0.01em] text-ink md:text-[44px]"
                  >
                    {t.menu.heading}
                  </h2>
                </div>
                <p className="max-w-[40ch] text-[17px] leading-[1.55] text-ink/72 md:text-[18px] lg:col-span-6 lg:col-start-7 lg:self-end">
                  {t.menu.intro}
                </p>
              </div>
              <ul className="mt-10 grid border-t border-ink/15 md:grid-cols-2 lg:mt-12">
                {t.menu.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-ink/15 py-7 md:py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10 md:[&:last-child:nth-child(odd)]:border-r-0 lg:odd:pr-14 lg:even:pl-14"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-[24px] font-normal leading-[1.15] text-ink md:text-[26px]">
                        {item.name}
                      </h3>
                      <p className="text-[15px] text-stone">{item.meta}</p>
                    </div>
                    <p className="mt-3 text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Section>
            <Rule />
          </>
        ) : null}

        {/* The facts as a ruled list, pinned beside the body; the body as plain prose */}
        <Section id={`${t.slug}-about`} className="lg:pt-20 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
            <aside
              className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start xl:col-span-4"
              aria-label={treatmentLabels.atAGlance}
            >
              <h2 className="font-display text-[26px] font-normal leading-[1.1] text-ink">
                {treatmentLabels.atAGlance}
              </h2>
              <dl className="mt-5 border-t border-ink/15 text-[16px] md:text-[17px]">
                {t.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[88px_1fr] gap-x-4 border-b border-ink/15 py-3.5">
                    <dt className="text-stone">{f.label}</dt>
                    <dd className="text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              {t.sections.map((s, i) => (
                <section
                  key={s.title}
                  aria-labelledby={`${t.slug}-s${i}`}
                  className={i > 0 ? "mt-10 md:mt-12" : ""}
                >
                  <h2
                    id={`${t.slug}-s${i}`}
                    className="font-display text-[26px] font-normal leading-[1.1] text-ink md:text-[30px]"
                  >
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-[62ch] text-[17px] leading-[1.65] text-ink/72 md:text-[18px]">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </Section>

        <Rule />

        {/* Questions, on the same grid */}
        <Section id={`${t.slug}-questions`} className="lg:pt-20 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:sticky lg:top-[112px] lg:col-span-5 lg:self-start xl:col-span-4">
              <h2
                id={`${t.slug}-questions-heading`}
                className="font-display text-[36px] font-light leading-[1.02] tracking-[-0.01em] text-ink md:text-[44px]"
              >
                {treatmentLabels.questions}
              </h2>
              <p className="mt-4 max-w-[32ch] text-[17px] leading-[1.55] text-ink/72 md:text-[18px]">
                {treatmentLabels.questionsIntro}
              </p>
              <p className="mt-5 text-[16px] text-ink/72">
                {treatmentLabels.questionsAsk}{" "}
                <a
                  href={bookingActions.call.href}
                  className="whitespace-nowrap text-walnut underline decoration-walnut/40 underline-offset-4 transition-colors duration-200 hover:decoration-walnut"
                >
                  {treatmentLabels.questionsPhone}
                </a>
              </p>
            </div>
            <div className="text-ink lg:col-span-7 lg:col-start-6">
              <Accordion
                items={t.questions.map((q) => ({ title: q.q, body: q.a }))}
                defaultOpen={null}
                titleClassName="font-display text-[22px] font-normal leading-[1.2] md:text-[24px]"
              />
            </div>
          </div>
        </Section>

        {/* Closing: one clay card with the two ways to book */}
        <section aria-labelledby={`${t.slug}-closing-heading`} className="px-3 pb-6 md:px-6 md:pb-10">
          <div className="mx-auto grid max-w-[1392px] gap-8 rounded-card bg-clay px-7 py-12 text-ink md:grid-cols-12 md:items-center md:px-14 md:py-16">
            <div className="md:col-span-7">
              <h2
                id={`${t.slug}-closing-heading`}
                className="font-display text-[34px] font-light leading-[1.05] tracking-[-0.01em] md:text-[44px]"
              >
                {t.closing.heading}
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.6] text-ink/72 md:text-[17px]">
                {t.closing.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <BookingButtons t={t} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
