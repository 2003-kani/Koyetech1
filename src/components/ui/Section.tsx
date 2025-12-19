import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("py-12 sm:py-16", className)}>{children}</section>;
}
