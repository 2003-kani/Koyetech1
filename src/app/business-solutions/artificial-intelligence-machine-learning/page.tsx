import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Artificial Intelligence / Machine Learning",
};

export default function AIMLPage() {
  return (
    <StandardPage
      title="Artificial Intelligence & Machine Learning Solutions"
      subtitle="Harness the power of AI to automate processes, gain insights, and drive innovation."
      sections={[
        {
          title: "Transform Your Business with AI",
          body: "Leverage our expertise to build intelligent systems that solve complex problems.",
          bullets: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
          ],
        },
      ]}
    />
  );
}
