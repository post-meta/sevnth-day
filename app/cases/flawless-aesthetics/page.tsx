import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";
import { CASES } from "@/lib/cases";

const c = CASES["flawless-aesthetics"];

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: "/cases/flawless-aesthetics" },
};

export default function Page() {
  return <CasePage slug="flawless-aesthetics" />;
}
