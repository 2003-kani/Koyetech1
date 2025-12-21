import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Project Management",
};

export default function ProjectManagementPage() {
  return (
    <StandardPage
      title="Delivering Projects with Precision, Speed, and Strategic Impact"
      subtitle="KoyeTech’s Project Management ensures on time, on budget delivery aligned with your business goals."
      sections={[
        {
          title: "Project Planning & Roadmapping",
          body: "Set clear goals, timelines, and deliverables with detailed, actionable plans.",
        },
        {
          title: "Team & Resource Coordination",
          body: "Ensure the right people, tools, and processes are in place to move your project forward efficiently.",
        },
        {
          title: "Budget & Timeline Control",
          body: "Track progress and spending in real time to prevent delays and cost overruns.",
        },
        {
          title: "Risk & Issue Management",
          body: "Identify potential roadblocks early and take proactive steps to eliminate them.",
        },
        {
          title: "Agile, Waterfall & Hybrid Execution",
          body: "Tailored methodologies to suit your project type whether it’s a product launch, system rollout, or internal transformation.",
        },
        {
          title: "Reporting & Performance Tracking",
          body: "Stay informed with regular reports, KPIs, and stakeholder updates to maintain full project visibility.",
        },
        {
          title: "Our Project Delivery Framework",
          body: "A structured approach to project success.",
          bullets: [
            "Initiation & Planning: Define scope, objectives, deliverables, and governance models.",
            "Team & Resource Allocation: Identify internal and external team members, tools, and responsibilities.",
            "Execution & Monitoring: Daily stand ups, milestone tracking, risk management, and progress reviews.",
            "Reporting & Communication: Structured stakeholder updates, performance dashboards, and decision support.",
            "Closure & Evaluation: Project handover, documentation, post mortem analysis, and lessons learned."
          ],
        }
      ]}
    />
  );
}
