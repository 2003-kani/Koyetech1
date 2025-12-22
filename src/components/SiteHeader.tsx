"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";
import { Animate } from "./ui/Animate";

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  
  return (
    <Animate type="fade" className="relative">
      <Link
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
          "hover:bg-slate-50 hover:text-slate-900 active:scale-95",
          active
            ? "text-brand-primary bg-brand-primary/10"
            : "text-slate-700"
        )}
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform, background-color, color',
        }}
      >
        {children}
        {active && (
          <span 
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
            style={{
              transform: 'scaleX(1)',
              transformOrigin: 'left',
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        )}
      </Link>
    </Animate>
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown and touch events
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);
  
  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [usePathname()]);

  const toggleDropdown = () => {
    if (isMobile && onToggle) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button 
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-all duration-200 active:scale-95"
          aria-expanded={isExpanded}
          aria-haspopup="true"
        >
          {label}
          <span 
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            style={{
              transition: 'transform 200ms ease-out',
              display: 'inline-block',
            }}
            aria-hidden="true"
          >
            ▼
          </span>
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
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Animate type="fade">
        <button 
          onClick={toggleDropdown}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onTouchStart={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
          className="inline-flex items-center gap-1 px-3 py-2 text-sm md:text-base font-medium text-slate-600 hover:text-slate-900 transition-all duration-200 rounded-lg hover:bg-slate-100 active:scale-95"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {label}
          <span 
            className="text-slate-400 text-[10px] transition-transform duration-200"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              display: 'inline-block',
            }}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>
      </Animate>
      
      <Animate 
        type="slideUp"
        show={isOpen}
        className={cn(
          "absolute right-0 top-full z-50 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="space-y-1">
          {items.map((it, index) => (
            <div
              key={it.href}
              style={{
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-5px)',
                transition: 'all 200ms ease-out'
              }}
            >
              <Link
                href={it.href}
                className="block rounded-lg px-3 py-2.5 text-sm hover:bg-slate-50 transition-all duration-200 transform hover:translate-x-1 active:scale-95"
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 100);
                }}
              >
                <div className="font-medium text-slate-900">{it.label}</div>
                {it.description && (
                  <div className="mt-0.5 text-xs text-slate-500">
                    {it.description}
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </Animate>
    </div>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const business = nav.mega.businessSolutions.items;
  const talent = nav.mega.talentSolution.items;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setExpandedDropdown(expandedDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/company">Company</MenuLink>
            <Dropdown label="Business Solutions" items={business} />
            <MenuLink href="/accelerators">Accelerators</MenuLink>
            <Dropdown label="Talent Solution" items={talent} />
            <MenuLink href="/career">Career</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Animate
        type="fade"
        className="md:hidden"
        show={isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/company">Company</MenuLink>
          <Dropdown
            label="Business Solutions"
            items={business}
            isMobile
            isExpanded={expandedDropdown === 'business'}
            onToggle={() => toggleDropdown('business')}
          />
          <MenuLink href="/accelerators">Accelerators</MenuLink>
          <Dropdown
            label="Talent Solution"
            items={talent}
            isMobile
            isExpanded={expandedDropdown === 'talent'}
            onToggle={() => toggleDropdown('talent')}
          />
          <MenuLink href="/career">Career</MenuLink>
          <MenuLink href="/contact">Contact</MenuLink>
        </div>
      </Animate>
    </header>
  );
}