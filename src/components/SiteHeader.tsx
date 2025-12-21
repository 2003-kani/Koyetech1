"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap",
        "hover:bg-slate-50 hover:text-slate-900",
        active
          ? "text-brand-primary bg-brand-primary/10"
          : "text-slate-700"
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items = [],
  isMobile = false,
  isExpanded = false,
  onToggle,
}: {
  label: string;
  items?: Array<{ label: string; href: string; description?: string }>;
  isMobile?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}) {
  if (isMobile) {
    return (
      <div className="w-full">
        <button 
          onClick={onToggle}
          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
        >
          {label}
          <span className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isExpanded && (
          <div className="mt-1 ml-4 space-y-1">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="block px-4 py-2 text-sm text-slate-700 rounded-lg hover:bg-slate-50"
                onClick={() => onToggle?.()}
              >
                {it.label}
                {it.description && (
                  <div className="text-xs text-slate-500 mt-0.5">{it.description}</div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="group relative">
      <button 
        className="inline-flex items-center gap-1 px-3 py-2 text-sm md:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
        aria-expanded={isExpanded}
      >
        {label}
        <span className="text-slate-400 text-[10px] transition-transform group-hover:rotate-180">▼</span>
      </button>
      <div className="invisible absolute right-0 top-full z-50 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
        <div className="space-y-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block rounded-lg px-3 py-2.5 text-sm hover:bg-slate-50 transition-colors"
            >
              <div className="font-medium text-slate-900">{it.label}</div>
              {it.description && (
                <div className="mt-0.5 text-xs text-slate-500">
                  {it.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const business = nav.mega.businessSolutions.items;
  const talent = nav.mega.talentSolution.items;

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedDropdown(null);
  };

  const mobileGroups = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Company", href: "/company" },
      { 
        label: "Business Solutions", 
        items: business,
        isDropdown: true
      },
      { label: "Accelerators", href: "/accelerators" },
      { 
        label: "Talent Solution", 
        items: talent,
        isDropdown: true
      },
      { label: "Career", href: "/career" },
      { label: "Contact", href: "/contact" },
    ],
    [business, talent],
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center transition-opacity hover:opacity-80"
              onClick={closeMenu}
            >
              <Logo priority className="h-8 md:h-10 w-auto text-brand-primary" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/company">Company</MenuLink>
            <Dropdown label="Business Solutions" items={business} />
            <MenuLink href="/accelerators">Accelerators</MenuLink>
            <Dropdown label="Talent Solution" items={talent} />
            <MenuLink href="/career">Career</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6 bg-white border-t border-slate-100">
          {mobileGroups.map((item) => {
            if ('items' in item) {
              const isExpanded = expandedDropdown === item.label;
              return (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  items={item.items}
                  isMobile={true}
                  isExpanded={isExpanded}
                  onToggle={() => toggleDropdown(item.label)}
                />
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
