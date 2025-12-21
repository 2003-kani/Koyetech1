import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Firm Hire Services",
};

export default function FirmHireServicesPage() {
  return (
    <StandardPage
      title="Hire Full Time Talent That Drives Long Term Success"
      subtitle="KoyeTech’s Firm Hire Services quickly connect you with top permanent talent aligned to your culture and goals."
      sections={[
        {
          title: "Permanent Staffing",
          body: "Find long term, high performing professionals for key roles across domains.",
        },
        {
          title: "Executive Search",
          body: "Hire senior level leaders and specialized talent through targeted headhunting.",
        },
        {
          title: "Bulk Hiring Solutions",
          body: "We manage end to end high volume hiring for rapid team expansion.",
        },
        {
          title: "Industry Specific Hiring",
          body: "Talent matched to your sector tech, finance, healthcare, retail, and more.",
        },
        {
          title: "End to End Recruitment Support",
          body: "From job description creation to final offer negotiations we handle it all.",
        },
        {
          title: "How Our Process Works",
          body: "Connecting you with top permanent talent.",
          bullets: [
            "Discovery & Job Profiling: We work with your hiring team to understand the role, expectations, and ideal candidate.",
            "Sourcing & Shortlisting: Our recruiters tap vast networks and use smart tools to identify top candidates.",
            "Client Evaluation Stage: You connect with shortlisted candidates directly to assess their suitability and fit.",
            "Offer Management: We assist with negotiations and ensure candidate alignment for a smooth acceptance.",
            "Onboarding Support: We stay engaged through the onboarding phase to ensure successful integration."
          ],
        }
      ]}
    />
  );
}
