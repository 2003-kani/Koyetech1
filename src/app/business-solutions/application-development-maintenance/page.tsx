import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Application Development / Maintenance",
};

export default function ApplicationDevelopmentMaintenancePage() {
  return (
    <StandardPage
      title="Custom Built Applications. Long Term Reliability. Continuous Innovation."
      subtitle="KoyeTech builds scalable, goal aligned digital applications with agility and long term performance."
      sections={[
        {
          title: "Custom Application Development",
          body: "Build web, mobile, or cloud native applications from scratch aligned with your business and user needs.",
        },
        {
          title: "Application Modernization",
          body: "Upgrade legacy systems with modern technologies to improve performance, security, and UX.",
        },
        {
          title: "QA & Testing",
          body: "Ensure your app is reliable and bug free with automated and manual testing protocols.",
        },
        {
          title: "Security & Compliance",
          body: "We implement best in class security practices and ensure adherence to industry specific compliance standards.",
        },
        {
          title: "Ongoing Maintenance & Support",
          body: "Stay up and running 24/7 with proactive monitoring, updates, performance tuning, and issue resolution.",
        },
        {
          title: "Performance Optimization",
          body: "Fine tune application speed, responsiveness, and efficiency for optimal user satisfaction.",
        },
        {
          title: "How We Work",
          body: "Our collaborative development process.",
          bullets: [
            "Requirement: We work with stakeholders to define goals, user journeys, and core features.",
            "Agile Development: Our teams deliver working modules in iterations with continuous client feedback.",
            "QA & Deployment: End-to-end testing (manual & automated) with smooth cloud or on-premise deployment.",
            "Ongoing Maintenance: We manage uptime, fix bugs, and roll out enhancements as your business evolves."
          ],
        }
      ]}
    />
  );
}
