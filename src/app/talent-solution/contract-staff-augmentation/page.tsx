import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Contract Staff Augmentation",
};

export default function ContractStaffAugmentationPage() {
  return (
    <StandardPage
      title="Build Agile, Scalable Teams with Expert Talent On Demand"
      subtitle="KoyeTech provides skilled tech talent on contract to help you scale quickly and meet project goals."
      sections={[
        {
          title: "Short Term Contract Staffing",
          body: "Hire experts for urgent, time bound projects with no long term commitments.",
        },
        {
          title: "Long Term Contract Placement",
          body: "Access dedicated professionals for ongoing roles and extended assignments.",
        },
        {
          title: "Remote Staffing Solutions",
          body: "Get remote ready talent equipped to collaborate across time zones and platforms.",
        },
        {
          title: "On Site Staff Augmentation",
          body: "Deploy contract professionals directly to your location for seamless in house collaboration.",
        },
        {
          title: "Technical & Non Technical Roles",
          body: "We cover a wide range of domains from software engineering to marketing and admin support.",
        },
        {
          title: "How Our Process Works",
          body: "A reliable approach to talent sourcing.",
          bullets: [
            "Requirement Discovery: We start by understanding your team dynamics, technical needs, and timelines.",
            "Skilled Talent Sourcing: Our recruitment team identifies top candidates from our extensive pre vetted talent pool.",
            "Interviews & Selection: You assess shortlisted candidates through interviews to ensure a perfect match.",
            "Seamless Onboarding: Once selected, our team ensures smooth onboarding and integration into your workflows.",
            "Performance Monitoring: We offer ongoing support and regular check ins to ensure success throughout the engagement."
          ],
        }
      ]}
    />
  );
}
