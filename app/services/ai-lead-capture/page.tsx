import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/services";

const s = SERVICES["ai-lead-capture"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: "/services/ai-lead-capture" },
};

export default function Page() {
  return <ServicePage slug="ai-lead-capture" />;
}
