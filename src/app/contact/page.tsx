import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative pt-32 pb-32 overflow-hidden bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            We're Here to Help You <span className="text-brand-primary">Grow.</span> Let's Connect!
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Reach out to discuss your project, explore partnership opportunities, or learn more about our services.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <Section className="bg-gradient-to-br from-white via-emerald-200/50 to-white pb-24 border-t border-emerald-200/50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Form Section - Left */}
            <div className="lg:w-2/3">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Section - Right */}
            <div className="lg:w-1/3 space-y-8">
              {/* Email */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">📧</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <p className="text-sm text-slate-500">General Inquiries</p>
                  </div>
                </div>
                <a href="mailto:hr@koyetech.com" className="text-brand-primary font-medium hover:underline">hr@koyetech.com</a>
              </div>

              {/* Phone */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">📞</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                    <p className="text-sm text-slate-500">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="flex justify-between text-sm">
                    <span className="text-slate-500">US:</span>
                    <a href="tel:+18604146902" className="text-slate-900 font-medium hover:text-brand-primary">+1 860-414-6902</a>
                  </p>
                  <p className="flex justify-between text-sm">
                    <span className="text-slate-500">India:</span>
                    <a href="tel:+917207210071" className="text-slate-900 font-medium hover:text-brand-primary">+91 7207210071</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">⏰</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Business Hours</h3>
                    <p className="text-sm text-slate-500">Working Hours</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>US:</strong> Mon-Fri, 9 AM - 6 PM EST</p>
                  <p><strong>India:</strong> Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>

          </div>

          {/* Offices Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Offices</h2>
            <div className="grid md:grid-cols-2 gap-8">

              {/* US Office */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🇺🇸</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">United States</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      28 Main St,<br />
                      Farmington, CT 06032-2242,<br />
                      United States
                    </p>
                    <div className="flex flex-col gap-2 text-sm">
                      <a href="tel:+18604146902" className="text-brand-primary font-medium hover:underline">📞 +1 860-414-6902</a>
                      <a href="mailto:hr@koyetech.com" className="text-brand-primary font-medium hover:underline">📧 hr@koyetech.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* India Office */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🇮🇳</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">India</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      4th Floor, Kapil Towers, ISB Rd,<br />
                      Financial District, Nanakramguda,<br />
                      Hyderabad, Telangana 500032, India
                    </p>
                    <div className="flex flex-col gap-2 text-sm">
                      <a href="tel:+917207210071" className="text-brand-primary font-medium hover:underline">📞 +91 7207210071</a>
                      <a href="mailto:hr@koyetech.com" className="text-brand-primary font-medium hover:underline">📧 hr@koyetech.com</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </Container>
      </Section>
    </div>
  );
}
