import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Data Analytics",
};

export default function DataAnalyticsPage() {
  return (
    <StandardPage
      title="From Data Overload to Data Clarity"
      subtitle="KOYETECH’s Data Analytics solutions uncover the insights hidden in your information, so you can act quickly and confidently."
      sections={[
        {
          title: "Clear, Actionable Insights",
          body: "Dashboards and reports that focus on what matters.",
        },
        {
          title: "Predictive Power",
          body: "Anticipate needs before they become urgent.",
        },
        {
          title: "Efficiency Gains",
          body: "Identify process improvements that save time and resources.",
        },
        {
          title: "Compliance Support",
          body: "Transparent data tracking for audit readiness.",
        },
        {
          title: "How We Deliver",
          body: "Unify data from multiple sources into a single, accessible environment.",
          bullets: [
            "Integration: Unify data from multiple sources into a single, accessible environment.",
            "Cleansing: Remove duplicates, errors, and inconsistencies.",
            "Analysis: Apply statistical models, predictive tools, and visualizations.",
            "Implementation: Turn insights into strategies and measurable outcomes."
          ],
        }
      ]}
    />
  );
}
