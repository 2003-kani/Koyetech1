import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative border-b border-slate-200/60 bg-slate-50 pt-32 pb-24 overflow-hidden mesh-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light/20 rounded-full blur-[100px] animate-float opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-scale-in" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
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
