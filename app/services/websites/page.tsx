import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/services";

const s = SERVICES.websites;

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: "/services/websites" },
};

export default function Page() {
  return <ServicePage slug="websites" />;
}
