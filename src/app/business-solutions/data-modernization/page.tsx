import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Data Modernization",
};

export default function DataModernizationPage() {
  return (
    <StandardPage
      title="Modern Data Infrastructure for a Changing World"
      subtitle="Technology evolves quickly — but many organizations are still relying on systems built for a different era. KOYETECH’s Data Modernization services replace the limitations of the past with secure, scalable, and future-ready solutions."
      sections={[
        {
          title: "Real-Time Access to Data",
          body: "Eliminate delays that impact operations and decision-making.",
        },
        {
          title: "Regulatory Confidence",
          body: "Meet industry standards, from HIPAA to financial and data protection laws.",
        },
        {
          title: "Cost Efficiency",
          body: "Reduce maintenance costs tied to legacy infrastructure.",
        },
        {
          title: "Prepared for Tomorrow",
          body: "Enable advanced analytics, automation, and emerging technologies.",
        },
        {
          title: "Our Process",
          body: "A clear path for migration with minimal disruption.",
          bullets: [
            "System Evaluation: We identify bottlenecks, risks, and modernization opportunities.",
            "Strategic Roadmap: A clear plan for migration with minimal disruption.",
            "Secure Data Migration: Move information safely and without data loss.",
            "Performance Optimization: Fine-tuning for speed, scalability, and stability."
          ],
        }
      ]}
    />
  );
}
