import type { Metadata } from "next";
import { JobPage } from "@/components/job-page";
import { JOBS } from "@/lib/jobs";

const job = JOBS.catchup;

export const metadata: Metadata = {
  title: job.title,
  description: job.description,
  alternates: { canonical: "/catchup" },
};

export default function Page() {
  return <JobPage slug="catchup" />;
}
