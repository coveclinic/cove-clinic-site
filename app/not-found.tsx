import type { Metadata } from "next";
import { notFound } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = { title: notFound.title, robots: { index: false } };

/** The 404: the same masthead shape as a treatment page, two ways out, the footer. */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Section id="not-found" className="lg:pt-12">
          <div className="max-w-[40ch]">
            <h1
              id="not-found-heading"
              className="font-display text-[44px] font-light leading-[1] tracking-[-0.01em] text-walnut md:text-[64px]"
            >
              {notFound.heading}
            </h1>
            <p className="mt-6 text-[18px] leading-[1.55] text-ink/72 md:text-[20px]">{notFound.body}</p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              {notFound.links.map((l) => (
                <Button key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
