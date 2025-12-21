// app/page.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { site } from '@/lib/site';
import { nav } from '@/lib/nav';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/10">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden bg-gradient-to-br from-white via-blue-300 to-white">
          <Container className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight animate-fade-in">
                Accelerating <span className="text-brand-primary">Innovation</span> with Intelligent Tech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
                Get comprehensive talent, technology, and product solutions designed for rapid growth and efficiency. Partner with us to achieve scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button as="a" href="#Services" className="rounded-full bg-brand-primary px-10 py-5 text-lg font-semibold text-white hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/25">
                  Explore Services
                </Button>
                <Button as="a" href="mailto:hr@koyetech.com" variant="outline" className="rounded-full px-10 py-5 text-lg font-semibold bg-white text-slate-900 border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Container>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-24 bg-white animate-fade-in-up" id="Services">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Innovative tech solutions driving growth and efficiency.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Solutions",
                  desc: "Strategy led services to design, develop, and manage high performing digital products.",
                  icon: "💡",
                  link: "/business-solutions/product-management"
                },
                {
                  title: "Accelerators",
                  desc: "Fast track innovation and go to market with frameworks, tools, and execution pods.",
                  icon: "🚀",
                  link: "/accelerators"
                },
                {
                  title: "Talent Solution",
                  desc: "Build high impact teams with flexible hiring models designed for today’s tech landscape.",
                  icon: "👥",
                  link: "/talent-solution/contract-staff-augmentation"
                }
              ].map((category, i) => (
                <Link key={i} href={category.link} className="group bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:bg-white hover:shadow-2xl hover:border-brand-primary hover:scale-[1.03] transition-all duration-500 shadow-sm">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{category.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">{category.desc}</p>
                  <div className="text-brand-primary font-semibold flex items-center gap-2">
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Business Solutions Detail */}
        <section className="py-24 bg-white border-t border-slate-50 animate-fade-in-up">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Business Solutions</h3>
                <p className="text-slate-600 mb-10 text-lg">Strategy led services to design, develop, and manage high performing digital products.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Product Management",
                    "Product Development",
                    "Product Implementation & Operations",
                    "Application Development & Maintenance",
                    "Project Management",
                    "AI & ML Solutions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all">
                      <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full aspect-square p-2 group">
                  <img
                    src="/images/business-solutions.png"
                    alt="Business Solutions"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Accelerators Detail */}
        <section className="py-24 bg-white border-t border-slate-50 animate-fade-in-up">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full aspect-square p-2 group">
                  <img
                    src="/images/accelerators.png"
                    alt="Accelerators"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Accelerators</h3>
                <p className="text-slate-600 mb-10 text-lg">Fast track innovation and go to market with frameworks, tools, and execution pods.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-slate-50 p-8 rounded-2xl border border-slate-200 border-l-4 border-l-brand-primary group hover:shadow-xl hover:border-brand-primary/50 transition-all">
                    <span className="text-3xl">⚡</span>
                    <span className="text-xl font-bold text-slate-900">Domain Specific Solutions and Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Talent Solution Detail */}
        <section className="py-24 bg-white border-t border-slate-50 animate-fade-in-up">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Talent Solution</h3>
                <p className="text-slate-600 mb-10 text-lg">Build high impact teams with flexible hiring models designed for today’s tech landscape.</p>
                <div className="space-y-4">
                  {[
                    "Contract Staff Augmentation",
                    "Firm Hire Services",
                    "Contract to Hire"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50 p-8 rounded-2xl border border-slate-200 group hover:border-brand-primary hover:shadow-xl hover:scale-[1.02] transition-all shadow-sm">
                      <span className="text-xl font-bold text-slate-900">{item}</span>
                      <span className="text-brand-primary group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full aspect-square p-2 group">
                  <img
                    src="/images/talent-solutions.png"
                    alt="Talent Solutions"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Work Process Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our work process</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
              {[
                { title: "Discover & Align", desc: "Understanding your challenges and objectives to create a strategic roadmap.", icon: "🎯" },
                { title: "Build & Validate", desc: "Developing robust solutions and refining them through iterative testing.", icon: "🛠️" },
                { title: "Deliver & Scale", desc: "Launching products and scaling them to meet market demand effectively.", icon: "📈" }
              ].map((step, i) => (
                <div key={i} className="bg-slate-50 text-center group p-10 rounded-3xl border border-slate-200 hover:bg-white hover:border-brand-primary hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 shadow-sm">
                  <div className="w-20 h-20 bg-brand-primary text-white rounded-2xl flex items-center justify-center text-3xl mb-8 mx-auto group-hover:rotate-12 transition-transform shadow-lg shadow-brand-primary/20">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Choose Section (Unique) */}
        <section className="py-24 bg-white border-t border-slate-100">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">What Makes Us Unique</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Ease of Engagement", desc: "Simple and flexible partnership models.", icon: "🤝" },
                { title: "Ability to Invest", desc: "We invest in your success with long-term goals.", icon: "💰" },
                { title: "Longevity", desc: "Over 80% of our current customers have been engaged with us for more than two years.", icon: "🛡️" },
                { title: "Diversified Talent pool", desc: "Access to a global network of skilled professionals.", icon: "🌍" },
                { title: "Commitment and Accountability", desc: "Hands on execution of client focused strategies, detailed scorecards, and insightful quarterly reviews.", icon: "📉" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:shadow-2xl hover:border-brand-primary hover:scale-[1.05] transition-all duration-500 shadow-sm">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Get in Touch Section */}
        <section className="py-24 bg-gradient-to-br from-white via-emerald-200/50 to-white border-t border-emerald-200/50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600">Ready to start your project? Contact us today.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* US Office */}
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-4xl mb-6">🇺🇸</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">US Office</h3>
                <div className="space-y-4 text-slate-600">
                  <p className="flex items-start gap-3">
                    <span className="text-brand-primary">📍</span>
                    28 Main St Farmington, CT 06032-2242
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-brand-primary">📞</span>
                    <a href="tel:+18604146902" className="hover:text-brand-primary">+1 860-414-6902</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-brand-primary">✉️</span>
                    <a href="mailto:hr@koyetech.com" className="hover:text-brand-primary">hr@koyetech.com</a>
                  </p>
                </div>
              </div>
              {/* India Office */}
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-4xl mb-6">🇮🇳</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Indian Office</h3>
                <div className="space-y-4 text-slate-600">
                  <p className="flex items-start gap-3">
                    <span className="text-brand-primary">📍</span>
                    4th Floor, Kapil Towers, ISB Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-brand-primary">📞</span>
                    <a href="tel:+17207210071" className="hover:text-brand-primary">+1 7207210071</a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}