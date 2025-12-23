"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const navigation = {
  solutions: [
    { name: "Staff Augmentation", href: "/talent-solution/contract-staff-augmentation" },
    { name: "Digital Solutions", href: "/business-solutions/product-development" },
    { name: "Business Consulting", href: "/business-solutions/product-management" },
    { name: "Product Development", href: "/business-solutions/product-development" },
  ],
  company: [
    { name: "About Us", href: "/company" },
    { name: "Our Team", href: "/company/team" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Whitepapers", href: "/resources/whitepapers" },
    { name: "Webinars", href: "/resources/webinars" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: site.social.linkedin,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 mb-16">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block bg-white p-3 rounded-xl shadow-lg shadow-black/5 hover:bg-white/90 transition-colors">
              <Logo className="h-10 w-auto" />
            </Link>
            <h3 className="text-white font-bold mt-6 mb-4">About KoyeTech</h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Empowering businesses through innovation and exceptional talent. We are a rapidly growing IT consulting and solutions company.
            </p>
            <div className="flex items-center space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-primary transition-all duration-300"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Business Solutions */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary">Business Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: 'Product Management', href: '/business-solutions/product-management' },
                { label: 'AI & ML Solutions', href: '/business-solutions/artificial-intelligence-machine-learning' },
                { label: 'Accelerators', href: '/accelerators' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-brand-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Talent Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary">Talent Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: 'Contract Staff Augmentation', href: '/talent-solution/contract-staff-augmentation' },
                { label: 'Firm Hire Services', href: '/talent-solution/firm-hire-services' },
                { label: 'Contract to Hire', href: '/talent-solution/contract-to-hire' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-brand-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Company', href: '/company' },
                { label: 'Career', href: '/career' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-brand-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} KoyeTech. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
