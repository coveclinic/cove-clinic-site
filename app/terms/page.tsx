import type { Metadata } from "next";
import { legal } from "@/lib/content";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: legal.terms.title,
  description: legal.terms.intro,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return <LegalPage doc={legal.terms} id="terms" />;
}
