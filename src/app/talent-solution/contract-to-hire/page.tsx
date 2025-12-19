import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Contract to Hire",
};

export default function ContractToHirePage() {
  return (
    <StandardPage
      title="Contract to Hire"
      subtitle="De-risk hiring by evaluating performance in a real project environment before converting to a full-time role."
      sections={[
        {
          title: "How it works",
          body: "Start with a contract engagement with clear expectations. If it’s a strong match, transition the candidate to full-time based on your timeline.",
          bullets: [
            "Defined trial period",
            "Clear success criteria",
            "Structured feedback cadence",
            "Conversion support",
          ],
        },
        {
          title: "When to use it",
          body: "Contract-to-hire is ideal when roles are critical, the market is tight, or you want to reduce hiring risk.",
          bullets: [
            "Hard-to-fill technical roles",
            "Leadership roles",
            "High-impact projects",
            "Urgent scaling needs",
          ],
        },
        {
          title: "Outcomes",
          body: "Better hiring decisions with less risk and stronger long-term team stability.",
          bullets: [
            "Reduced hiring risk",
            "Faster onboarding",
            "Better retention",
            "Improved confidence",
          ],
        },
      ]}
    />
  );
}
