import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Data Analytics",
};

export default function DataAnalyticsPage() {
  return (
    <StandardPage
      title="Data Analytics"
      subtitle="Turn data into decision-ready insights through KPI frameworks, dashboards, and reliable reporting."
      sections={[
        {
          title: "KPI and metrics design",
          body: "We define the metrics that matter and build a reporting model that stays consistent over time.",
          bullets: [
            "KPI workshops",
            "Metric definitions and governance",
            "Data model design",
            "Data validation practices",
          ],
        },
        {
          title: "Dashboards and reporting",
          body: "Deliver dashboards that are clear, performant, and adopted by stakeholders.",
          bullets: [
            "Executive dashboards",
            "Operational reporting",
            "Self-service enablement",
            "Performance optimization",
          ],
        },
        {
          title: "Outcomes",
          body: "Less time debating numbers and more time making decisions.",
          bullets: [
            "Trusted reporting",
            "Improved visibility",
            "Better planning",
            "Higher adoption",
          ],
        },
      ]}
    />
  );
}
