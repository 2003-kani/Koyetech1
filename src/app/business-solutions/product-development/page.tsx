import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Product Development",
};

export default function ProductDevelopmentPage() {
  return (
    <StandardPage
      title="Turning Ideas into Market Ready Products"
      subtitle="From strategy to execution, we bring your vision to life with end to end project development services."
      sections={[
        {
          title: "Our Process",
          body: "We follow a comprehensive lifecycle to transform your vision into a robust digital product.",
          bullets: [
            "Discovery & Planning: Define goals, success metrics, and product roadmap.",
            "Design & Prototyping: Create UI/UX mockups and interactive prototypes.",
            "Agile Development: Build features incrementally using sprints and iterative feedback.",
            "Testing & Debugging: Ensure functionality, security & scalability of product.",
            "Launch & Growth: Deploy with confidence and scale with ongoing support.",
          ],
        },
      ]}
    />
  );
}
