import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Contract Staff Augmentation",
};

export default function ContractStaffAugmentationPage() {
  return (
    <StandardPage
      title="Contract Staff Augmentation"
      subtitle="Scale your team quickly with skilled IT professionals on a flexible contract basis."
      sections={[
        {
          title: "Flexible Talent When You Need It",
          body: "We provide the right talent to help you meet your project deadlines and business goals.",
          bullets: [
            "Rapid Scaling",
            "Cost-Effective",
            "Specialized Skills",
            "Flexibility",
            "Reduced Time-to-Market",
            "Risk Mitigation"
          ],
        },
      ]}
    />
  );
}
