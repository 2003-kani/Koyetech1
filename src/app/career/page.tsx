import { StandardPage } from "@/components/StandardPage";
import { site } from "@/lib/site";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        title="Build the Future. Grow with Us."
        subtitle="Join our team of innovative professionals shaping the future of technology."
      />

      <Section className="bg-white py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Join Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Innovation First", desc: "We constantly push boundaries." },
              { title: "Career Growth", desc: "Clear paths for advancement." },
              { title: "Global Impact", desc: "Work on world-class projects." },
              { title: "Work-Life Balance", desc: "Flexible working environments." },
              { title: "Competitive Benefits", desc: "We take care of our people." },
              { title: "Collaborative Culture", desc: "Stronger together." },
            ].map((val, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Current Openings</h2>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Data Engineer",
                location: "Remote / Hybrid",
                type: "Full-time",
                date: "Posted 2 days ago",
                desc: "We are looking for an experienced Data Engineer to build scalable pipelines..."
              },
              {
                title: "BI Developer",
                location: "Remote / Hybrid",
                type: "Full-time",
                date: "Posted 5 days ago",
                desc: "Join us to transform data into actionable insights..."
              }
            ].map((job, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span className="flex items-center gap-1">💼 {job.type}</span>
                    <span className="flex items-center gap-1">🕒 {job.date}</span>
                  </div>
                  <p className="text-slate-600">{job.desc}</p>
                </div>
                <Button as="a" href="/contact" className="bg-brand-primary text-white hover:bg-brand-dark rounded-xl px-8 py-3 font-semibold shrink-0">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

        </Container>
      </Section>
    </div>
  );
}
