import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Project Management",
};

export default function ProjectManagementPage() {
  return (
    <StandardPage
      title="Project Management"
      subtitle="Keep delivery predictable with clear planning, governance, and transparent communication."
      sections={[
        {
          title: "Planning and governance",
          body: "We define milestones, dependencies, and success metrics—then keep stakeholders aligned through a consistent reporting rhythm.",
          bullets: [
            "Project plans and timelines",
            "Risk and issue management",
            "Dependency tracking",
            "Executive reporting",
          ],
        },
        {
          title: "Delivery execution",
          body: "We support teams with practical delivery operations: backlog health, sprint rhythms, and cross‑team coordination.",
          bullets: [
            "Agile delivery management",
            "Stakeholder coordination",
            "Vendor and partner alignment",
            "Change management",
          ],
        },
        {
          title: "Outcomes",
          body: "More predictability, fewer delivery surprises, and stronger alignment between business and engineering.",
          bullets: [
            "Improved predictability",
            "Reduced delivery risk",
            "Clearer decision-making",
            "Stronger accountability",
          ],
        },
      ]}
    />
  );
}
