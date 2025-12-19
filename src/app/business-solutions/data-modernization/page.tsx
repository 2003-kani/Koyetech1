import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Data Modernization",
};

export default function DataModernizationPage() {
  return (
    <StandardPage
      title="Data Modernization"
      subtitle="Build a modern data foundation for analytics, AI, and operational reporting—securely and sustainably."
      sections={[
        {
          title: "Modern data foundations",
          body: "We help you consolidate, clean, and govern data so teams can trust it and use it confidently.",
          bullets: [
            "Data platform assessment",
            "Lake / warehouse patterns",
            "Data governance basics",
            "Security and access control",
          ],
        },
        {
          title: "Migration and enablement",
          body: "Move from legacy systems to modern platforms with minimal disruption and clear operational ownership.",
          bullets: [
            "Migration planning",
            "ETL/ELT modernization",
            "Performance tuning",
            "Operational monitoring",
          ],
        },
        {
          title: "Outcomes",
          body: "A data environment that is easier to scale, easier to secure, and ready for analytics and AI.",
          bullets: [
            "Faster data access",
            "Improved data quality",
            "Better governance",
            "Lower operational burden",
          ],
        },
      ]}
    />
  );
}
