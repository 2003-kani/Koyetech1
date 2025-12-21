import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";

export type StandardSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export function StandardPage({
  title,
  subtitle,
  sections,
}: {
  title: string;
  subtitle: string;
  sections: StandardSection[];
}) {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary/10">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>
        </div>
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <Container>
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-slate-50 p-10 md:p-14 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-primary hover:scale-[1.01] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  {section.title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {section.body}
                </p>
                {section.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-4 group">
                        <div className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-primary group-hover:scale-125 transition-transform"></div>
                        <span className="text-slate-700 font-medium text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
