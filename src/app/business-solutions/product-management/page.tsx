import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Management",
};

export default function ProductManagementPage() {
  return (
    <StandardPage
      title="Product Management"
      subtitle="Turn business goals into a clear product strategy, roadmap, and delivery plan that teams can execute."
      sections={[
        {
          title: "Strategy and discovery",
          body: "We help you define customer problems, validate assumptions, and prioritize the highest‑value work—before you invest heavily in build.",
          bullets: [
            "Discovery workshops",
            "User journeys and requirements",
            "Backlog and prioritization",
            "Roadmap planning",
          ],
        },
        {
          title: "Delivery leadership",
          body: "Keep cross‑functional teams aligned with clear goals, acceptance criteria, and release planning.",
          bullets: [
            "Sprint planning and refinement",
            "Stakeholder communication",
            "Release and dependency management",
            "Metrics and KPI definition",
          ],
        },
        {
          title: "Outcomes",
          body: "A stronger product foundation with better alignment, faster execution, and less rework.",
          bullets: [
            "Clear roadmap",
            "Improved stakeholder alignment",
            "Faster time-to-value",
            "Reduced scope churn",
          ],
        },
      ]}
    />
  );
}
