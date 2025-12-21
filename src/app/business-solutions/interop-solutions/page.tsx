import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Interop Solutions",
};

export default function InteropSolutionsPage() {
  return (
    <StandardPage
      title="Seamless Connections, Stronger Performance"
      subtitle="KOYETECH’s Interop Solutions break down these barriers by connecting your platforms so they can share accurate, up-to-date information securely."
      sections={[
        {
          title: "Unified View",
          body: "All the information you need, in one place.",
        },
        {
          title: "Operational Efficiency",
          body: "Less manual data entry and fewer errors.",
        },
        {
          title: "Improved Collaboration",
          body: "Teams and departments work from the same playbook.",
        },
        {
          title: "Scalable Architecture",
          body: "Easy to integrate future tools and technologies.",
        },
        {
          title: "Our Method",
          body: "Connecting platforms for secure information sharing.",
          bullets: [
            "System Audit: Understand the technology landscape and workflows.",
            "Integration Design: Map how systems will connect and exchange data.",
            "Deployment: Implement connections with minimal downtime.",
            "Monitoring: Ensure ongoing performance, security, and compatibility."
          ],
        }
      ]}
    />
  );
}
