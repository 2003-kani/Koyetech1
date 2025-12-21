import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Implementation / Operations",
};

export default function ProductImplementationOperationsPage() {
  return (
    <StandardPage
      title="Seamless Deployment. Scalable Operations. Sustainable Success."
      subtitle="KoyeTech ensures seamless product implementation and support for maximum value and user adoption."
      sections={[
        {
          title: "Product Onboarding & Deployment",
          body: "From setup to launch, we handle end to end implementation tailored to your tech stack and workflows.",
        },
        {
          title: "System Integration",
          body: "Connect your product with third party tools, CRMs, ERPs, and internal systems to maximize performance.",
        },
        {
          title: "SOP Development & Knowledge Transfer",
          body: "We build clear documentation, process guides, and training plans for seamless internal adoption.",
        },
        {
          title: "Post Launch Support & Issue Resolution",
          body: "Ensure continuity with structured support, issue tracking, and SLA based resolution.",
        },
        {
          title: "Operations Optimization",
          body: "We monitor, analyze, and refine daily operations to improve product performance and user experience.",
        },
        {
          title: "Reporting & KPI Tracking",
          body: "Real time dashboards and analytics help you measure success and drive data informed decisions.",
        },
        {
          title: "Our Implementation Process",
          body: "A proven lifecycle for rollout success.",
          bullets: [
            "Requirement Analysis: We evaluate business objectives, technical needs, and user expectations.",
            "Solution Design & Planning: Crafting a roadmap tailored to your tech stack, timelines, and resource availability.",
            "Configuration & Customization: We align product features and workflows with your business use cases.",
            "Integration & Testing: Connect with internal systems, perform QA/UAT, and ensure data integrity.",
            "Go Live & Team Training: Smooth launch with full team enablement and seamless knowledge transfer."
          ],
        },
      ]}
    />
  );
}
