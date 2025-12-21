import { StandardPage } from "@/components/StandardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accelerators",
};

export default function AcceleratorsPage() {
  return (
    <StandardPage
      title="Accelerate Innovation with Tailored Tools Built for Your Industry"
      subtitle="KoyeTech delivers domain-specific tools that speed up development, cut costs, and boost productivity for your digital initiatives."
      sections={[
        {
          title: "FHIRxConnect",
          body: "FHIRxConnect is a cutting-edge Middleware FHIR API Service Hub designed to revolutionize healthcare data interoperability. Our core objective is to seamlessly integrate diverse Electronic Medical Record (EMR) systems, significantly enhancing data exchange and operational efficiency across the healthcare ecosystem.",
          bullets: [
            "Enhanced Communication: We promote true interoperability, ensuring efficient and reliable data flow between all connected systems.",
            "Simplified Integration: We promote true interoperability, ensuring efficient and reliable data flow between all connected systems.",
            "Enhanced Accessibility: Empower providers with instant access to patient data, enabling faster, informed decisions and improved patient care.",
            "Cost Reduction & Efficiency: Our hub ultimately lowers operational costs and significantly boosts efficiency in healthcare data management and delivery."
          ],
        },
        {
          title: "How it goes (Our Process)",
          body: "A structured approach to ensure the right fit and seamless integration for your business.",
          bullets: [
            "Assessment & Fitment: We evaluate your current systems and identify where accelerators can plug in.",
            "Configuration & Customization: We tailor each solution to your workflows, branding, and compliance needs.",
            "Integration & Launch: Seamless integration with existing platforms (ERP, CRM, APIs, Cloud, etc.)",
            "Training & Enablement: User onboarding, technical documentation, and training to ensure adoption.",
            "Full Support & Scale: We provide ongoing support, enhancements, and version upgrades as you grow."
          ],
        },
        {
          title: "Frequently Asked Questions",
          body: "Common questions about our domain-specific tools and integration services.",
          bullets: [
            "What are domain-specific solutions? These are custom-built tools tailored to the unique needs of specific industries or business domains.",
            "Which industries do you support? We serve industries like healthcare, finance, retail, manufacturing, education, and logistics.",
            "Can you customize tools to match our workflows? Yes, we design solutions that align with your existing processes and business goals.",
            "Do you offer integration with existing systems? Absolutely. We ensure seamless integration with CRMs, ERPs, databases, and internal platforms.",
            "How do you ensure scalability and security? We build secure, scalable architectures using best practices in cloud, data protection, and compliance."
          ],
        },
      ]}
    />
  );
}
