import { StandardPage } from "@/components/StandardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accelerators",
};

export default function AcceleratorsPage() {
  return (
    <StandardPage
      title="Accelerators"
      subtitle="Pre-built solutions and frameworks to accelerate your time-to-market."
      sections={[
        {
          title: "Domain-Specific Tools",
          body: "Leverage our specialized tools designed for your industry vertical to solve specific challenges.",
          bullets: [
            "Tailored Industry Solutions",
            "Rapid Integration",
            "Proven Methodologies"
          ],
        },
        {
          title: "Analytics & Insight",
          body: "Turn data into actionable intelligence with our advanced analytics frameworks.",
          bullets: [
            "Data Visualization",
            "Predictive Modeling",
            "Real-time Insights"
          ],
        },
      ]}
    />
  );
}
