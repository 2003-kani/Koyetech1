import { StandardPage } from "@/components/StandardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <StandardPage
      title="About KoyeTech"
      subtitle="Empowering businesses through innovation and exceptional talent."
      sections={[
        {
          title: "Who We Are",
          body: "KoyeTech is a rapidly growing IT consulting and solutions company headquartered in Connecticut, USA, with an office in India. We combine experienced practitioners with modern ways of working.",
          bullets: [
            "Headquarted in Connecticut, USA",
            "Offshore presence in India",
            "Rapidly growing IT consulting",
            "Innovation-driven approach",
          ],
        },
        {
          title: "Mission & Vision",
          body: "Our mission is to empower our partners to achieve sustainable growth and scale efficiently. We envision a future where technology drives success through agile development and strategic innovation.",
          bullets: [
            "Empower partners",
            "Sustainable growth",
            "Agile development",
            "Strategic innovation",
          ],
        },
        {
          title: "Core Values",
          body: "Our culture is defined by our commitment to these values:",
          bullets: [
            "Innovation: We constantly push boundaries.",
            "Partnership: We build lasting relationships.",
            "Excellence: We deliver diversity of thought.",
            "Growth: We help you scale.",
            "Integrity: Validated learning and trust.",
            "Global Reach: Delivering worldwide impact."
          ],
        },
      ]}
    />
  );
}
