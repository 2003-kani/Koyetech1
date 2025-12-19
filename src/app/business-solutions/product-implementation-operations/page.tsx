import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Implementation / Operations",
};

export default function ProductImplementationOperationsPage() {
  return (
    <StandardPage
      title="Product Implementation / Operations"
      subtitle="Launch smoothly, operate reliably, and continuously improve—without slowing down delivery."
      sections={[
        {
          title: "Implementation and rollout",
          body: "We support launches with clear cutover planning, stakeholder alignment, and training materials.",
          bullets: [
            "Release planning and cutover",
            "User onboarding and training",
            "Playbooks and runbooks",
            "Post-launch stabilization",
          ],
        },
        {
          title: "Operational excellence",
          body: "Reduce downtime and incident impact through monitoring, clear ownership, and practical SRE-style practices.",
          bullets: [
            "Monitoring and alerting",
            "Incident response workflows",
            "SLA/SLO definition",
            "Continuous improvement loops",
          ],
        },
        {
          title: "Outcomes",
          body: "More reliable operations, fewer surprises, and a calmer, more predictable delivery environment.",
          bullets: [
            "Reduced incidents",
            "Faster recovery",
            "Higher customer satisfaction",
            "Better operational visibility",
          ],
        },
      ]}
    />
  );
}
