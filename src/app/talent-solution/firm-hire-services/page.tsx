import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Firm Hire Services",
};

export default function FirmHireServicesPage() {
  return (
    <StandardPage
      title="Firm Hire Services"
      subtitle="End-to-end recruiting support to help you hire the right people—faster and with less noise."
      sections={[
        {
          title: "Recruiting support",
          body: "We partner with your team to define roles, source candidates, and manage the recruiting funnel.",
          bullets: [
            "Role intake and alignment",
            "Sourcing and screening",
            "Interview scheduling",
            "Offer support",
          ],
        },
        {
          title: "Candidate quality",
          body: "We focus on practical skill validation and strong communication—so candidates succeed in real delivery environments.",
          bullets: [
            "Skill-based shortlists",
            "Communication-first screening",
            "Reference checks (as needed)",
            "Reduced hiring churn",
          ],
        },
        {
          title: "Outcomes",
          body: "Higher-quality hires with a smoother process for candidates and hiring managers.",
          bullets: [
            "Faster time-to-hire",
            "Better candidate fit",
            "Improved experience",
            "Lower recruiting overhead",
          ],
        },
      ]}
    />
  );
}
