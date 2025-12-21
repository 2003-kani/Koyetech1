import { StandardPage } from "@/components/StandardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <StandardPage
      title="About Koyetech"
      subtitle="KoyeTech is a rapidly growing IT consulting and solutions company headquartered in Connecticut, USA, with an additional office in Hyderabad, India. We specialize in IT consulting, project and product management, software development, and managed services delivery, serving a wide range of industries including healthcare. Our team delivers highly skilled, trained, and certified professionals to help clients achieve strategic goals and maintain a competitive edge."
      sections={[
        {
          title: "Mission",
          body: "Empowering partners to achieve sustainable growth and operational excellence through our innovation and exceptional talent.",
        },
        {
          title: "Vision",
          body: "Driving partner success through integrated talent, agile development, and purposeful innovation, solving real business challenges and creating lasting impact.",
        },
        {
          title: "Our Core Values",
          body: "Our foundation is built on values that ensure mutual success for our partners and team members.",
          bullets: [
            "Innovation: Driving forward-thinking solutions.",
            "Integrity: Upholding the highest standards of honesty.",
            "Excellence: Commitment to quality in everything we do.",
            "Collaboration: Succeeding together with our partners.",
          ],
        },
      ]}
    />
  );
}
