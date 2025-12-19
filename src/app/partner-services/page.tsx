import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Partner Services",
};

export default function PartnerServicesPage() {
  return (
    <StandardPage
      title="Partner Services"
      subtitle="Extend your capabilities with a delivery partner that integrates with your team, tools, and standards."
      sections={[
        {
          title: "How we partner",
          body: "We operate as a true extension of your organization—aligning to your engineering practices, security expectations, and delivery cadence.",
          bullets: [
            "Co-delivery with your teams",
            "Shared roadmaps and release planning",
            "Documentation and knowledge transfer",
            "Quality gates and automated checks",
          ],
        },
        {
          title: "Engagement models",
          body: "Choose the approach that fits your stage and risk profile. We can provide individual specialists, a cross‑functional squad, or a full delivery team.",
          bullets: [
            "Staff augmentation",
            "Managed delivery teams",
            "Consulting / advisory",
            "Hybrid model",
          ],
        },
        {
          title: "Where we add the most value",
          body: "When you’re modernizing legacy systems, scaling delivery capacity, or need specialized experience to unblock critical workstreams.",
          bullets: [
            "Modernization and cloud adoption",
            "Data platforms and analytics",
            "Product build and evolution",
            "Integrations and interoperability",
          ],
        },
      ]}
    />
  );
}
