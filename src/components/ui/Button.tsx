// components/ui/Button.tsx
import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

const base = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-via/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants = {
  primary: "bg-brand-primary text-white hover:bg-brand-dark shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold",
  secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 px-4 py-2 rounded-xl text-sm font-medium",
  outline: "text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium",
  link: "text-brand-primary hover:text-brand-dark hover:underline underline-offset-2 p-0 h-auto font-semibold",
  shine: "relative overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-800 shadow-lg after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-[1.2s] after:ease-in-out"
} as const;

type Variant = keyof typeof variants;

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  as?: 'button';
};

type LinkProps = BaseProps & Omit<React.ComponentProps<typeof Link>, keyof BaseProps | 'href'> & {
  as: 'link';
  href: string;
};

type AnchorProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
  as: 'a';
  href: string;
};

type Props = ButtonProps | LinkProps | AnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(({
  variant = 'primary',
  className,
  ...props
}, ref) => {
  const cls = cn(base, variants[variant], className);

  if (props.as === 'link') {
    const { as, ...rest } = props;
    return <Link ref={ref as any} className={cls} {...rest} />;
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return <a ref={ref as any} className={cls} {...rest} />;
  }

  const { type = 'button', ...rest } = props;
  return <button type={type} ref={ref as any} className={cls} {...rest} />;
});

Button.displayName = 'Button';