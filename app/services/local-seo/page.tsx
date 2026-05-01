import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/services";

const s = SERVICES["local-seo"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: "/services/local-seo" },
};

export default function Page() {
  return <ServicePage slug="local-seo" />;
}
