import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Contract to Hire",
};

export default function ContractToHirePage() {
  return (
    <StandardPage
      title="Build Agile, Scalable Teams with Expert Talent On Demand"
      subtitle="KoyeTech’s Contract Staff Augmentation provides skilled tech professionals to help you scale fast and meet goals."
      sections={[
        {
          title: "Flexible Trial Engagements",
          body: "Start with short term contracts (3–6 months) to evaluate performance and fit.",
        },
        {
          title: "Smooth Transition to Full Time",
          body: "Easily convert top performers to full-time roles with minimal effort.",
        },
        {
          title: "End to End Recruitment",
          body: "We handle sourcing, screening, onboarding, and contract management.",
        },
        {
          title: "Role-Based Staffing",
          body: "From entry-level to senior professionals across tech, non-tech, and creative roles.",
        },
        {
          title: "Compliance & Payroll Support",
          body: "We manage contracts, payroll, and HR compliance throughout the engagement.",
        },
        {
          title: "How it goes",
          body: "A flexible path to full-time hiring.",
          bullets: [
            "Understand the Role: We align with your team to define the role, skills needed, and ideal candidate profile.",
            "Source & Screen Talent: Our recruiters identify and vet candidates using advanced tools and a pre-qualified talent pool.",
            "Shortlist & Interview: You review top candidates and conduct interviews to assess technical and cultural fit.",
            "Contract Onboarding: The selected candidate begins working on a contract basis within your team.",
            "Full-Time Conversion: If satisfied, easily convert the candidate to a full time hire simple and commitment free."
          ],
        }
      ]}
    />
  );
}
