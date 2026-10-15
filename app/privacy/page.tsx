import type { Metadata } from "next";
import { legal } from "@/lib/content";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: legal.privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return <LegalPage doc={legal.privacy} id="privacy" />;
}
