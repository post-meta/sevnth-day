import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";
import { CASES } from "@/lib/cases";

const c = CASES["copper-fox-gutters"];

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: "/cases/copper-fox-gutters" },
};

export default function Page() {
  return <CasePage slug="copper-fox-gutters" />;
}
