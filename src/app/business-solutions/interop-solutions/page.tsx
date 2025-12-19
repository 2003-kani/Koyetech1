import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Interop Solutions",
};

export default function InteropSolutionsPage() {
  return (
    <StandardPage
      title="Interop Solutions"
      subtitle="Connect systems reliably with well-designed integrations, APIs, and interoperability patterns."
      sections={[
        {
          title: "Integration strategy",
          body: "We help you choose the right integration approach—APIs, event-driven patterns, or managed middleware—based on your constraints and scale.",
          bullets: [
            "System integration assessment",
            "API strategy and standards",
            "Event-driven architectures",
            "Security and access patterns",
          ],
        },
        {
          title: "Implementation",
          body: "Build integrations that are observable, testable, and resilient—so they don’t become a maintenance burden.",
          bullets: [
            "Integration development",
            "Contract testing",
            "Monitoring and alerting",
            "Operational runbooks",
          ],
        },
        {
          title: "Outcomes",
          body: "Systems that work together smoothly—reducing manual work and improving data consistency.",
          bullets: [
            "Reduced manual effort",
            "Improved reliability",
            "Cleaner data flow",
            "Faster change delivery",
          ],
        },
      ]}
    />
  );
}
