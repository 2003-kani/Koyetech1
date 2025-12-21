import { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Artificial Intelligence / Machine Learning",
};

export default function AIMLPage() {
  return (
    <StandardPage
      title="AI & ML Solutions That Drive Intelligent Growth"
      subtitle="We help businesses use AI/ML to automate, personalize, and make smarter decisions."
      sections={[
        {
          title: "AI Strategy & Consulting",
          body: "Define a clear roadmap tailored to your business objectives.",
        },
        {
          title: "Custom ML Model Development",
          body: "Build, train, and deploy models using advanced algorithms.",
        },
        {
          title: "Natural Language Processing (NLP)",
          body: "Extract insights from text, automate support, and enable conversational interfaces.",
        },
        {
          title: "Computer Vision",
          body: "Enable real time visual recognition, object detection, and image classification.",
        },
        {
          title: "Predictive & Prescriptive Analytics",
          body: "Anticipate trends and recommend optimal actions using historical and real-time data.",
        },
        {
          title: "Model Optimization & Monitoring",
          body: "Continuously improve accuracy and reliability of deployed models.",
        },
        {
          title: "Our Project Delivery Framework",
          body: "Turning data into a competitive advantage.",
          bullets: [
            "Identify Needs: We analyze your business needs and define AI/ML use cases.",
            "Prepare the Data: We collect, clean, and structure data for model development.",
            "Build the Model: We design and train custom AI/ML models to solve your problems.",
            "Deploy the Solution: We integrate models into your systems for real-time use.",
            "Monitor & Improve: We track performance and continuously refine the models."
          ],
        }
      ]}
    />
  );
}
