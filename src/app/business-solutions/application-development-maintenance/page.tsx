import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Application Development / Maintenance",
};

export default function ApplicationDevelopmentMaintenancePage() {
  return (
    <StandardPage
      title="Application Development / Maintenance"
      subtitle="Modernize legacy systems, deliver new features safely, and keep applications healthy over time."
      sections={[
        {
          title: "Modernization",
          body: "We reduce technical debt by refactoring strategically, upgrading frameworks, and improving architecture with minimal disruption.",
          bullets: [
            "Legacy modernization",
            "Framework upgrades",
            "Performance improvements",
            "Security hardening",
          ],
        },
        {
          title: "Sustainable maintenance",
          body: "Keep systems stable with structured triage, clear SLAs, and proactive improvements.",
          bullets: [
            "Bug fixes and enhancements",
            "Operational support",
            "Automated regression coverage",
            "Documentation and runbooks",
          ],
        },
        {
          title: "Outcomes",
          body: "Healthier applications that remain secure, reliable, and easier to change.",
          bullets: [
            "Reduced tech debt",
            "Improved performance",
            "Lower risk of outages",
            "Faster feature delivery",
          ],
        },
      ]}
    />
  );
}
