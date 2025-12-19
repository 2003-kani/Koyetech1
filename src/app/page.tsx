// app/page.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { site } from '@/lib/site';
import { nav } from '@/lib/nav';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-primary/20 overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-white via-blue-100 to-blue-200/50">
          {/* Animated Background - Shine Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/40 rounded-full blur-[120px] animate-pulse opacity-70 mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-light/40 rounded-full blur-[100px] animate-float" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-white rounded-full blur-[80px] opacity-90 animate-pulse mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
            {/* Shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-40"></div>
          </div>

          <Container className="relative z-10 flex flex-col items-center text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight animate-fade-in-up drop-shadow-sm">
                Accelerate Growth with <span className="text-brand-primary relative inline-block">End-to-End <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-primary/10 -z-10 rounded-full"></span></span> Business Solutions
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100 font-light">
                Get comprehensive talent, technology, and product solutions designed for rapid growth and efficiency. Partner with KoyeTech to achieve scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                <Button as="a" href="/business-solutions/product-management" className="rounded-full bg-brand-primary px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-brand-dark transition-all hover:-translate-y-1 hover:shadow-brand-primary/40">
                  Explore Services
                </Button>
                <Button as="a" href="/contact" variant="outline" className="rounded-full px-8 py-4 text-lg font-bold bg-white text-slate-900 border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Core Services Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Our Core Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Solutions",
                  desc: "Strategic consulting to drive your business forward with innovative solutions.",
                  icon: "📊"
                },
                {
                  title: "Accelerators",
                  desc: "Fast-track your growth with our proven acceleration programs.",
                  icon: "🚀"
                },
                {
                  title: "Talent Solutions",
                  desc: "Access to a diversified pool of top-tier professionals.",
                  icon: "👥"
                }
              ].map((service, i) => (
                <div key={i} className="group bg-white border border-slate-200 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm">
                  <div className="text-4xl mb-6 bg-brand-primary/5 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Business Solutions Section */}
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Business Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Strategic consulting and technology implementation.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Product Management",
                  desc: "Strategic product planning and roadmap development to drive business success.",
                  link: "/business-solutions/product-management"
                },
                {
                  title: "AI & ML Solutions",
                  desc: "Harness the power of AI to automate processes, gain insights, and drive innovation.",
                  link: "/business-solutions/artificial-intelligence-machine-learning"
                }
              ].map((sol, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand-primary/30 group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{sol.title}</h3>
                  <p className="text-slate-600 mb-6">{sol.desc}</p>
                  <Link href={sol.link} className="text-brand-primary font-semibold hover:underline">Learn more &rarr;</Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Accelerators Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Accelerators
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Pre-built solutions and frameworks to accelerate your time-to-market.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Domain-Specific Tools",
                  desc: "Leverage our specialized tools designed for your industry vertical.",
                  icon: "🛠️"
                },
                {
                  title: "Analytics & Insight",
                  desc: "Turn data into actionable intelligence with our advanced analytics frameworks.",
                  icon: "📈"
                }
              ].map((service, i) => (
                <div key={i} className="group bg-white border border-slate-200 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm">
                  <div className="text-4xl mb-6 bg-brand-primary/5 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Talent Solution Section */}
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Talent Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Scale your team with top-tier professionals.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Contract Staff Augmentation",
                  desc: "Scale your team quickly with skilled IT professionals on a flexible contract basis.",
                  link: "/talent-solution/contract-staff-augmentation"
                },
                {
                  title: "Career",
                  desc: "Join our team of innovative professionals shaping the future of technology.",
                  link: "/career"
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 mb-6">{benefit.desc}</p>
                  <Link href={benefit.link} className="text-brand-primary font-semibold hover:underline">Explore &rarr;</Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Choose KoyeTech Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Why Choose KoyeTech
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Ease of Engagement", desc: "Seamless onboarding and flexible models.", icon: "🤝" },
                { title: "Ability to Invest", desc: "We invest in your success and growth.", icon: "💼" },
                { title: "Longevity", desc: "Skin in the game - long term partnership.", icon: "🛡️" },
                { title: "Diversified Talent Pool", desc: "Access to top skill from across the globe.", icon: "🌍" }
              ].map((benefit, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="text-4xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Our Process Section */}
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-brand-primary after:rounded-full">
                Our Process
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Discovery", desc: "We understand your goals and challenges deeply.", step: "01" },
                { title: "Strategy", desc: "We craft a bespoke roadmap for execution.", step: "02" },
                { title: "Execution", desc: "We deliver with precision and agility.", step: "03" }
              ].map((process, i) => (
                <div key={i} className="relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-primary">{process.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{process.title}</h3>
                  <p className="text-slate-600 relative z-10">{process.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>



        {/* CTA/Contact Section - Replaced by Footer mostly, but keeping 'Get In Touch' style from reference */}
        <section className="py-24 bg-gradient-to-br from-white via-green-100 to-green-200/50 border-t border-green-200">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600">Ready to start your project? Contact us today.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">🇺🇸</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">US Office</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  28 Main St,<br />
                  Farmington, CT 06032-2242,<br />
                  United States
                </p>
                <p className="text-brand-primary mt-4 font-semibold hover:underline">
                  <a href="tel:+18604146902">+1 860-414-6902</a>
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">🇮🇳</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">India Office</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  4th Floor, Kapil Towers, ISB Rd,<br />
                  Financial District, Nanakramguda,<br />
                  Hyderabad, Telangana 500032, India
                </p>
                <p className="text-brand-primary mt-4 font-semibold hover:underline">
                  <a href="tel:+917207210071">+91 7207210071</a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}