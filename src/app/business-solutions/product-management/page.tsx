import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Management",
};

export default function ProductManagementPage() {
  return (
    <StandardPage
      title="Agile Project Management That Drives Results"
      subtitle="From planning to execution, we manage timelines, resources, and risks so you can focus on growth."
      sections={[
        {
          title: "Experience Seamless Project Execution",
          body: "Our methodology ensures transparency, efficiency, and high-quality results for every engagement.",
          bullets: [
            "Expert Agile & Waterfall Methodology",
            "Risk Mitigation & Resource Optimization",
            "Budget & Timeline Management",
            "End-to-End Delivery Tracking",
          ],
        },
        {
          title: "How Our Process Works",
          body: "A proven lifecycle for project success.",
          bullets: [
            "Discovery: Defining requirements and setting clear objectives.",
            "Planning: Building a detailed roadmap and allocating resources.",
            "Execution: Daily progress tracking and iterative development.",
            "Quality Assurance: Regular reviews to ensure alignment with goals.",
            "Project Closing: Final delivery and performance assessment.",
          ],
        },
      ]}
    />
  );
}
