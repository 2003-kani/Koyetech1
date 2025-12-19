import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export function Card({
  className,
  children,
  gradient,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "border border-gray-100 hover:border-gray-200/50",
        gradient && "bg-gradient-to-br from-white to-gray-50/50",
        className,
      )}
      {...props}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className={cn("text-xl font-bold tracking-tight text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("mt-3 text-base leading-relaxed text-gray-600", className)}>
      {children}
    </p>
  );
}
