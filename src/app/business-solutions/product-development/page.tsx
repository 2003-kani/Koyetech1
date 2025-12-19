import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Management",
};

export default function ProductManagementPage() {
  return (
    <StandardPage
      title="Product Management"
      subtitle="Strategic product planning and roadmap development to drive business success."
      sections={[
        {
          title: "Transform Ideas into Successful Products",
          body: "We help you define vision, strategy, and execution plans that align with your business goals.",
          bullets: [
            "Product Strategy",
            "Roadmap Planning",
            "Stakeholder Management",
            "Market Research",
            "Metrics & Analytics",
            "Product Launch"
          ],
        },
      ]}
    />
  );
}
