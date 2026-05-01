import type { Metadata } from "next";
import { JobPage } from "@/components/job-page";
import { JOBS } from "@/lib/jobs";

const job = JOBS.handover;

export const metadata: Metadata = {
  title: job.title,
  description: job.description,
  alternates: { canonical: "/handover" },
};

export default function Page() {
  return <JobPage slug="handover" />;
}
