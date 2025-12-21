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
        "relative px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg",
        active
          ? "text-brand-primary bg-brand-primary/10"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: string; description?: string }>;
}) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100">
        {label}
        <span className="text-slate-400 text-[10px]">▼</span>
      </button>
      <div className="invisible absolute right-0 top-full z-50 mt-1 w-[280px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 md:block">
        <div className="grid gap-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors block"
            >
              <div className="text-sm font-medium text-slate-900">{it.label}</div>
              {it.description ? (
                <div className="mt-0.5 text-xs text-slate-500">
                  {it.description}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const business = nav.mega.businessSolutions.items;
  const talent = nav.mega.talentSolution.items;

  const mobileGroups = useMemo(
    () => [
      { label: "Company", items: [{ label: "Company", href: "/company" }] },
      { label: "Business Solutions", items: business },
      { label: "Accelerators", items: [{ label: "Accelerators", href: "/accelerators" }] },
      { label: "Talent Solution", items: talent },
      { label: "Career", items: [{ label: "Career", href: "/career" }] },
      { label: "Contact", items: [{ label: "Contact", href: "/contact" }] },
    ],
    [business, talent],
  );

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/40 shadow-sm transition-all duration-300">
      <div className="w-full px-6 md:px-12">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
              <Logo priority className="h-10 w-auto text-brand-primary" />
            </Link>
          </div>

          <nav className="hidden items-center space-x-4 md:flex">
            <div className="hidden items-center space-x-2 md:flex">
              <MenuLink href="/">Home</MenuLink>
              <MenuLink href="/company">Company</MenuLink>
              <Dropdown label="Business Solutions" items={business} />
              <MenuLink href="/accelerators">Accelerators</MenuLink>
              <Dropdown label="Talent Solution" items={talent} />
              <MenuLink href="/career">Career</MenuLink>
              <MenuLink href="/contact">Contact</MenuLink>
            </div>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out" aria-hidden="true" style={open ? { transform: 'rotate(45deg) translate(1px, 1px)' } : {}}></span>
            <span className="mt-1 block h-0.5 w-4 bg-current transition-transform duration-300 ease-in-out" aria-hidden="true" style={open ? { transform: 'rotate(-45deg) translate(1px, -1px)' } : {}}></span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <Container className="py-4">
            <div className="grid gap-4">
              {mobileGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {g.label}
                  </div>
                  <div className="mt-2 grid gap-2">
                    {g.items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
