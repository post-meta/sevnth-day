import type { Metadata } from "next";
import { JobPage } from "@/components/job-page";
import { JOBS } from "@/lib/jobs";

const job = JOBS.rebuild;

export const metadata: Metadata = {
  title: job.title,
  description: job.description,
  alternates: { canonical: "/rebuild" },
};

export default function Page() {
  return <JobPage slug="rebuild" />;
}
