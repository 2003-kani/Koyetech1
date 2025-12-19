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
    <div>
      <PageHero title={title} subtitle={subtitle} />
      <Section className="min-h-screen bg-transparent pb-24">
        <Container>
          <div className="grid gap-8">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                  {s.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {s.body}
                </p>
                {s.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 text-base text-slate-600 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-primary/60 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
