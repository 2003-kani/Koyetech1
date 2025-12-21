import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative border-b border-slate-200/60 bg-gradient-to-br from-white via-blue-300 to-white pt-32 pb-24 overflow-hidden mesh-bg">
      {/* Animated Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10 py-12 sm:py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3 animate-fade-in-up">
          Koyetech
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl animate-fade-in-up delay-100 drop-shadow-sm">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600 animate-fade-in-up delay-200 font-light">
          {subtitle}
        </p>
      </Container>
    </div>
  );
}
