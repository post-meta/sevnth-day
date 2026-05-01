import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";
import { CASES } from "@/lib/cases";

const c = CASES["nw-garage-doors"];

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: "/cases/nw-garage-doors" },
};

export default function Page() {
  return <CasePage slug="nw-garage-doors" />;
}
